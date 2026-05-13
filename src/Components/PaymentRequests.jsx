
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import { Search, Menu } from "lucide-react";

const BASE_URL       = "https://apis.famocare.com/api/referralsystem/payments";
const ITEMS_PER_PAGE = 15;

const normalizeActive = (item) => ({
  rowId:      String(item.id),
  id:         item.id,
  uid:        item.uid,
  name:       item.redeemUser?.name     || "Unknown",
  email:      item.redeemUser?.email    || "",
  imageUrl:   item.redeemUser?.imageUrl || "",
  points:     item.points,
  status:     item.status,
  date:       item.date,
  time:       item.time,
  redeemUser: item.redeemUser,
});

const normalizeNested = (item) => ({
  rowId:      String(item.redeemHistory?.id),
  id:         item.redeemHistory?.id,
  uid:        item.redeemHistory?.uid,
  name:       item.redeemUser?.name     || "Unknown",
  email:      item.redeemUser?.email    || "",
  imageUrl:   item.redeemUser?.imageUrl || "",
  points:     item.redeemHistory?.points,
  status:     item.redeemHistory?.status,
  date:       item.date,
  time:       item.time,
  redeemUser: item.redeemUser,
});

export default function PaymentRequests() {
  const navigate = useNavigate();

  const [activeTab,     setActiveTab]     = useState(() => localStorage.getItem("pr_active_tab") || "active");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm,    setSearchTerm]    = useState("");
  const [currentPage,   setCurrentPage]   = useState(1);

  // ── Paged data (current page only) ───────────────────────────────────────
  const [activeData,   setActiveData]   = useState([]);
  const [pendingData,  setPendingData]  = useState([]);
  const [redeemedData, setRedeemedData] = useState([]);

  // ── All data (for search across all pages) ────────────────────────────────
  const [allActiveData,   setAllActiveData]   = useState([]);
  const [allPendingData,  setAllPendingData]  = useState([]);
  const [allRedeemedData, setAllRedeemedData] = useState([]);

  const [activeTotalRecords,   setActiveTotalRecords]   = useState(0);
  const [pendingTotalRecords,  setPendingTotalRecords]  = useState(0);
  const [redeemedTotalRecords, setRedeemedTotalRecords] = useState(0);

  const [activeTotalPages,   setActiveTotalPages]   = useState(1);
  const [pendingTotalPages,  setPendingTotalPages]  = useState(1);
  const [redeemedTotalPages, setRedeemedTotalPages] = useState(1);

  const [rawPendingTotal, setRawPendingTotal] = useState(0);

  const [loadingActive,   setLoadingActive]   = useState(false);
  const [loadingPending,  setLoadingPending]  = useState(false);
  const [loadingRedeemed, setLoadingRedeemed] = useState(false);

  const [acceptingKey,  setAcceptingKey]  = useState(null);
  const [cancellingKey, setCancellingKey] = useState(null);

  // ── Helper: get auth token ────────────────────────────────────────────────
  const getToken = () =>
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken") ||
    "";

  // ── Fetch paged active ────────────────────────────────────────────────────
  const fetchActiveData = async (page = 1) => {
    setLoadingActive(true);
    try {
      const res  = await fetch(`${BASE_URL}/active-payment-requests?page=${page}&limit=${ITEMS_PER_PAGE}`);
      const json = await res.json();
      if (json.success) {
        setActiveData((json.data || []).map(normalizeActive));
        setActiveTotalRecords(json.totalRecords || 0);
        setActiveTotalPages(Math.max(1, json.totalPages || 1));
      }
    } catch (err) {
      console.error("fetchActiveData error:", err);
    } finally {
      setLoadingActive(false);
    }
  };

  // ── Fetch paged pending ───────────────────────────────────────────────────
  const fetchPendingData = async (page = 1) => {
    setLoadingPending(true);
    try {
      const res  = await fetch(`${BASE_URL}/pending-payment-requests?page=${page}&limit=${ITEMS_PER_PAGE}`);
      const json = await res.json();
      if (json.success) {
        setPendingData((json.data || []).map(normalizeNested));
        setPendingTotalRecords(json.totalRecords || 0);
        setPendingTotalPages(Math.max(1, json.totalPages || 1));
        setRawPendingTotal(json.totalRecords || 0);
      }
    } catch (err) {
      console.error("fetchPendingData error:", err);
    } finally {
      setLoadingPending(false);
    }
  };

  // ── Fetch paged redeemed ──────────────────────────────────────────────────
  const fetchRedeemedData = async (page = 1) => {
    setLoadingRedeemed(true);
    try {
      const res  = await fetch(`${BASE_URL}/redeemed-payment-requests?page=${page}&limit=${ITEMS_PER_PAGE}`);
      const json = await res.json();
      if (json.success) {
        setRedeemedData((json.data || []).map(normalizeNested));
        setRedeemedTotalRecords(json.totalRecords || 0);
        setRedeemedTotalPages(Math.max(1, json.totalPages || 1));
      }
    } catch (err) {
      console.error("fetchRedeemedData error:", err);
    } finally {
      setLoadingRedeemed(false);
    }
  };

  // ── Fetch ALL records for a tab (used by search) ──────────────────────────
  const fetchAllData = async (tab) => {
    try {
      let url = "";
      if (tab === "active")   url = `${BASE_URL}/active-payment-requests?page=1&limit=99999`;
      if (tab === "pending")  url = `${BASE_URL}/pending-payment-requests?page=1&limit=99999`;
      if (tab === "redeemed") url = `${BASE_URL}/redeemed-payment-requests?page=1&limit=99999`;

      const res  = await fetch(url);
      const json = await res.json();
      if (json.success) {
        const mapped = (json.data || []).map(
          tab === "active" ? normalizeActive : normalizeNested
        );
        if (tab === "active")   setAllActiveData(mapped);
        if (tab === "pending")  setAllPendingData(mapped);
        if (tab === "redeemed") setAllRedeemedData(mapped);
      }
    } catch (err) {
      console.error("fetchAllData error:", err);
    }
  };

  // ── Load all three tabs on mount ──────────────────────────────────────────
  useEffect(() => {
    fetchActiveData(1);
    fetchPendingData(1);
    fetchRedeemedData(1);
    fetchAllData("active");
    fetchAllData("pending");
    fetchAllData("redeemed");
  }, []);

  // ── Reload paged data when page changes ───────────────────────────────────
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    if (searchTerm) return; // search uses client-side pagination, no refetch needed
    if (activeTab === "active")   fetchActiveData(currentPage);
    if (activeTab === "pending")  fetchPendingData(currentPage);
    if (activeTab === "redeemed") fetchRedeemedData(currentPage);
  }, [currentPage]);

  // ── Tab change ────────────────────────────────────────────────────────────
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("pr_active_tab", tab);
    setCurrentPage(1);
    setSearchTerm("");
    if (tab === "active")   { fetchActiveData(1);   fetchAllData("active");   }
    if (tab === "pending")  { fetchPendingData(1);  fetchAllData("pending");  }
    if (tab === "redeemed") { fetchRedeemedData(1); fetchAllData("redeemed"); }
  };

  // ── Search ────────────────────────────────────────────────────────────────
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // ── Derived display values ────────────────────────────────────────────────
  const rawData =
    activeTab === "active"   ? activeData   :
    activeTab === "pending"  ? pendingData  : redeemedData;

  const allData =
    activeTab === "active"   ? allActiveData   :
    activeTab === "pending"  ? allPendingData  : allRedeemedData;

  // Search filters ALL records; no search shows only current server page
  const filteredData = searchTerm
    ? allData.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : rawData;

  const totalRecords =
    searchTerm               ? filteredData.length      :
    activeTab === "active"   ? activeTotalRecords        :
    activeTab === "pending"  ? pendingTotalRecords       : redeemedTotalRecords;

  const totalPages =
    searchTerm               ? Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1 :
    activeTab === "active"   ? activeTotalPages          :
    activeTab === "pending"  ? pendingTotalPages         : redeemedTotalPages;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex   = startIndex + ITEMS_PER_PAGE;

  // Search → client-side pagination; no search → server already returned correct page
  const pagedData = searchTerm
    ? filteredData.slice(startIndex, endIndex)
    : filteredData;

  const loading =
    (activeTab === "active"   && loadingActive)   ||
    (activeTab === "pending"  && loadingPending)  ||
    (activeTab === "redeemed" && loadingRedeemed);

  // ── Pagination ────────────────────────────────────────────────────────────
  const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage((p) => p - 1); };
  const handleNextPage  = () => { if (currentPage < totalPages)  setCurrentPage((p) => p + 1); };
  const handlePageClick = (p) => setCurrentPage(p);

  const maxVisible = 5;
  const half = Math.floor(maxVisible / 2);
  let startPage = Math.max(1, currentPage - half);
  let endPage   = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  // ── Accept ────────────────────────────────────────────────────────────────
  const handleAcceptClick = async (item) => {
    const key   = item.rowId;
    const dbId  = item.id;
    const token = getToken();
    setAcceptingKey(key);
    try {
      const res  = await fetch(`${BASE_URL}/redeem/update-status`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body:    JSON.stringify({ id: dbId, action: "accept" }),
      });
      const json = await res.json();
      if (json.success) {
        setPendingData((p)         => p.filter((r) => r.rowId !== key));
        setAllPendingData((p)      => p.filter((r) => r.rowId !== key));
        setPendingTotalRecords((p) => Math.max(0, p - 1));
        setRawPendingTotal((p)     => Math.max(0, p - 1));
        setCurrentPage(1);
        await Promise.all([fetchActiveData(1), fetchPendingData(1), fetchAllData("active"), fetchAllData("pending")]);
      } else {
        alert(`Accept failed: ${json.message}`);
      }
    } catch (err) {
      alert("Network error during accept.");
    } finally {
      setAcceptingKey(null);
    }
  };

  // ── Cancel ────────────────────────────────────────────────────────────────
  const handleCancelClick = async (item) => {
    const key   = item.rowId;
    const dbId  = item.id;
    const token = getToken();
    setCancellingKey(key);
    try {
      const res  = await fetch(`${BASE_URL}/redeem/update-status`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body:    JSON.stringify({ id: dbId, action: "cancel" }),
      });
      const json = await res.json();
      if (json.success) {
        setPendingData((p)         => p.filter((r) => r.rowId !== key));
        setAllPendingData((p)      => p.filter((r) => r.rowId !== key));
        setPendingTotalRecords((p) => Math.max(0, p - 1));
        setRawPendingTotal((p)     => Math.max(0, p - 1));
        setCurrentPage(1);
        await Promise.all([fetchPendingData(1), fetchAllData("pending")]);
      } else {
        alert(`Cancel failed: ${json.message}`);
      }
    } catch (err) {
      alert("Network error during cancel.");
    } finally {
      setCancellingKey(null);
    }
  };

  // ── Chat ──────────────────────────────────────────────────────────────────
  const handleChatClick = (item) => {
    navigate("/payment-request-chat", {
      state: {
        redeemId:  item.id,
        userId:    item.redeemUser?.id || item.uid,
        userName:  item.name,
        userImage: item.imageUrl,
        createdAt: `${item.date} ${item.time}`,
        points:    item.points,
        status:    item.status || "inProgress",
      },
    });
  };

  // ── Details ───────────────────────────────────────────────────────────────
  const handleDetailsClick = (item) => {
    const realUserId = item.redeemUser?.id || item.uid || null;
    localStorage.setItem("currentSidebarPage", "/payment-requests");
    localStorage.setItem("selectedUserName",   item.name);
    if (realUserId) localStorage.setItem("selectedUserId", String(realUserId));
    navigate("/user-detail-points-history", {
      state: {
        selectedUserId:      realUserId,
        selectedUserName:    item.name,
        selectedUserImage:   item.imageUrl,
        selectedUserPoint:   item.points,
        selectedUserDate:    item.date,
        selectedUserTime:    item.time,
        fromPaymentRequests: true,
        returnTab:           activeTab,
      },
    });
  };

  // ── Table rows ────────────────────────────────────────────────────────────
  const renderTableRows = (data, tabType) => {
    if (loading) {
      return (
        <tr>
          <td colSpan="7" className="px-4 py-8 text-center text-gray-500">Loading...</td>
        </tr>
      );
    }
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan="7" className="px-4 py-8 text-center text-gray-500">No users found</td>
        </tr>
      );
    }

    return data.map((item, index) => {
      const key          = item.rowId;
      const isAccepting  = acceptingKey  === key;
      const isCancelling = cancellingKey === key;
      const isBusy       = isAccepting || isCancelling;

      return (
        <tr key={`${key}-${index}`} className="border border-gray-200 hover:bg-gray-50">

          <td className="px-4 py-4 text-sm text-center text-gray-700">
            {startIndex + index + 1}
          </td>

          <td className="px-4 py-4">
            <div className="flex items-center gap-2">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || "U")}&background=055860&color=fff`;
                }}
              />
              <p className="text-sm font-medium text-gray-800 whitespace-nowrap">{item.name}</p>
            </div>
          </td>

          <td className="px-4 py-4 text-sm text-center text-gray-700">{item.date}</td>
          <td className="px-4 py-4 text-sm text-center text-gray-700">{item.time}</td>
          <td className="px-4 py-4 text-sm text-center text-gray-700">{item.points}</td>

          <td className="px-4 py-4 text-center">
            {tabType === "pending" ? (
              <button
                onClick={() => handleAcceptClick(item)}
                disabled={isBusy}
                className="bg-[#219653] hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAccepting ? "..." : "Accept"}
              </button>
            ) : (
              <button
                onClick={() => handleChatClick(item)}
                className="bg-[#219653] text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
              >
                Chat
              </button>
            )}
          </td>

          <td className="px-4 py-4 text-center">
            {tabType === "pending" ? (
              <button
                onClick={() => handleCancelClick(item)}
                disabled={isBusy}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCancelling ? "..." : "Cancel"}
              </button>
            ) : (
              <button
                onClick={() => handleDetailsClick(item)}
                className="bg-[#055860] hover:bg-[#044850] text-white px-4 py-1.5 rounded text-sm font-medium"
              >
                Details
              </button>
            )}
          </td>

        </tr>
      );
    });
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex bg-[#F5F6FA]">

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 2xl:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="hidden min-[768px]:block">
        <Sidebar
  isDrawer={false}
  paymentRequestsCount={pendingTotalRecords}
  isCurrentPagePaymentRequests={true}
/>
      </div>

      <div className={`fixed min-[768px]:hidden inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar
  isDrawer={true}
  handleDrawer={() => setIsSidebarOpen(false)}
  paymentRequestsCount={pendingTotalRecords}
  isCurrentPagePaymentRequests={true}
/>
      </div>

      <div className="flex-1 p-3 overflow-auto bg-gray-50">
        <div className="min-h-screen h-[1290px] bg-white rounded-lg shadow-sm">

          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b">
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                className="min-[768px]:hidden p-2 hover:bg-gray-100 rounded flex-shrink-0"
                onClick={() => setIsSidebarOpen(true)}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#055860] bg-[#f1f7f8]">
                  <Menu size={18} className="text-[#055860]" />
                </div>
              </button>
              <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-[#055860] whitespace-nowrap">
                Payment Requests
              </h1>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] lg:ml-[160px]"
                  strokeWidth={2}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-[200px] sm:w-[160px] lg:w-[220px] pl-10 ml-1 lg:pl-10 lg:ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          {/* Tabs */}
<div className="flex gap-4 sm:gap-6 px-3 sm:px-4 pt-2 overflow-x-auto scrollbar-hide">
  {[
    {
      key: "active",
      label: "Active",
      count: activeTotalRecords,
    },
    {
      key: "pending",
      label: "Pending",
      count: pendingTotalRecords,
    },
    {
      key: "redeemed",
      label: "Redeemed",
      count: redeemedTotalRecords,
    },
  ].map((tab) => (
    <button
      key={tab.key}
      onClick={() => handleTabChange(tab.key)}
      className={`px-2 py-2 font-medium text-xs sm:text-sm border-b-2 whitespace-nowrap capitalize flex items-center ${
        activeTab === tab.key
          ? "text-[#055860] border-[#055860]"
          : "text-gray-500 border-transparent"
      }`}
    >
      {tab.label}

      <span
        className={`w-[22px] h-[22px] ml-1.5 text-white text-[10px] shrink-0 leading-none font-bold p-0 rounded-full inline-flex items-center justify-center ${
          activeTab === tab.key ? "bg-[#691188]" : "bg-gray-400"
        }`}
      >
        {tab.count || 0}
      </span>
    </button>
  ))}
</div>
          <div className="border-b mt-3" />

          {/* Table */}
           <div className="overflow-x-auto">
            <table className="w-full h-full">
              <thead className="bg-[#055860] text-white sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-center text-sm font-semibold">#</th>
                  <th className="px-4 py-3 text-left   text-sm font-semibold w-[170px]">User</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Date</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Time</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Point</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    {activeTab === "pending" ? "Accept" : "Chat"}
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    {activeTab === "pending" ? "Cancel" : "Details"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {renderTableRows(pagedData, activeTab)}
              </tbody>
            </table>
          </div> 



          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <p className="text-sm text-gray-600 ml-[-10px]">
              Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
            </p>
            <div className="flex items-center gap-2 mr-[-10px]">

              {/* Prev */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
                }`}
              >
                <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
              </button>

              {/* Leading ellipsis + first page */}
              {startPage > 1 && (
                <>
                  <span
                    onClick={() => handlePageClick(1)}
                    className="cursor-pointer text-gray-500 hover:text-[#691188]"
                  >
                    1
                  </span>
                  {startPage > 2 && (
                    <span className="text-gray-400 text-[18px] leading-none">···</span>
                  )}
                </>
              )}

              {/* Page numbers */}
              {pageNumbers.map((n) => (
                <span
                  key={n}
                  onClick={() => handlePageClick(n)}
                  className={`cursor-pointer px-1 ${
                    currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500 hover:text-[#691188]"
                  }`}
                >
                  {n}
                </span>
              ))}

              {/* Trailing ellipsis + last page */}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && (
                    <span className="text-gray-400 text-[18px] leading-none">···</span>
                  )}
                  <span
                    onClick={() => handlePageClick(totalPages)}
                    className="cursor-pointer text-gray-500 hover:text-[#691188]"
                  >
                    {totalPages}
                  </span>
                </>
              )}

              {/* Next */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
                }`}
              >
                <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
              </button>

            </div>
          </div>

        </div>
      </div>
{/* 
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style> */}

      <style jsx>{`
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  thead th {
    background-color: #055860 !important;
  }
`}</style>

    </div>
  );
}