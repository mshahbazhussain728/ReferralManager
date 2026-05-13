

// // import React, { useState, useEffect, useCallback } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import UserBackArrow from "../assets/UserBackArrow.png";
// // import Coupon from "../assets/Coupon.png";
// // import { Search } from "lucide-react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const BASE_URL = "https://referralapis.appistan.co/api";

// // const resolveImageUrl = (imageUrl) => {
// //   if (!imageUrl) return null;
// //   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
// //   return `https://referralapis.appistan.co/uploads/${imageUrl}`;
// // };

// // export default function PointsHistory() {
// //   const [isOpen, setIsOpen]               = useState(false);
// //   const [activeTab, setActiveTab]         = useState("points");
// //   const [leftSearchTerm, setLeftSearchTerm]   = useState("");
// //   const [tableSearchTerm, setTableSearchTerm] = useState("");

// //   // ── API state ─────────────────────────────────────────────────────────────
// //   const [apiUser, setApiUser]                   = useState(null);
// //   const [loading, setLoading]                   = useState(false);

// //   // ── Points API state ──────────────────────────────────────────────────────
// //   const [pointsData, setPointsData]             = useState([]);
// //   const [pointsPage, setPointsPage]             = useState(1);
// //   const [pointsTotalPages, setPointsTotalPages] = useState(1);
// //   const [pointsTotalUsers, setPointsTotalUsers] = useState(0);
// //   const [pointsLoading, setPointsLoading]       = useState(false);
// //   const pointsLimit = 10;

// //   // ── Coupons API state ─────────────────────────────────────────────────────
// //   const [couponsData, setCouponsData]             = useState([]);
// //   const [couponsPage, setCouponsPage]             = useState(1);
// //   const [couponsTotalPages, setCouponsTotalPages] = useState(1);
// //   const [couponsTotalCount, setCouponsTotalCount] = useState(0);
// //   const [couponsLoading, setCouponsLoading]       = useState(false);
// //   const couponsLimit = 10;

// //   // ── Redeems API state ─────────────────────────────────────────────────────
// //   const [redeemsData, setRedeemsData]             = useState([]);
// //   const [redeemsPage, setRedeemsPage]             = useState(1);
// //   const [redeemsTotalPages, setRedeemsTotalPages] = useState(1);
// //   const [redeemsTotalCount, setRedeemsTotalCount] = useState(0);
// //   const [redeemsLoading, setRedeemsLoading]       = useState(false);
// //   const redeemsLimit = 10;

// //   // ── Total Redeem static value (fetched once on load) ─────────────────────
// //   const [totalRedeemStatic, setTotalRedeemStatic] = useState(0);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const fromPaymentRequests = location.state?.fromPaymentRequests || false;

// //   const selectedUserId =
// //     location.state?.selectedUserId ||
// //     parseInt(localStorage.getItem("selectedUserId")) ||
// //     null;

// //   // ── Fetch GET /api/referral-users/:id ─────────────────────────────────────
// //   const fetchUserDetail = useCallback(async (userId) => {
// //     if (!userId) return;
// //     setLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}`);
// //       const json = await res.json();
// //       if (json.success && json.data) {
// //         setApiUser(json.data);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch user detail:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) fetchUserDetail(selectedUserId);
// //   }, [selectedUserId]);

// //   // ── Fetch GET /api/referral-users/:id/points ──────────────────────────────
// //   const fetchPoints = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setPointsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/points?page=${page}&limit=${pointsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setPointsData(json.data || []);
// //         setPointsTotalPages(json.totalPages || 1);
// //         setPointsTotalUsers(json.totalUsers || 0);
// //         setPointsPage(json.currentPage || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch points:", err);
// //     } finally {
// //       setPointsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "points") {
// //       fetchPoints(selectedUserId, pointsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   // ── Fetch GET /api/referral-users/:id/coupons ─────────────────────────────
// //   const fetchCoupons = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setCouponsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/coupons?page=${page}&limit=${couponsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setCouponsData(json.data || []);
// //         const total = json.totalCoupons || 0;
// //         setCouponsTotalCount(total);
// //         setCouponsTotalPages(Math.ceil(total / couponsLimit) || 1);
// //         setCouponsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch coupons:", err);
// //     } finally {
// //       setCouponsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "coupon") {
// //       fetchCoupons(selectedUserId, couponsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   // ── Fetch GET /api/referral-users/:id/redeems ─────────────────────────────
// //   const fetchRedeems = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setRedeemsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${page}&limit=${redeemsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setRedeemsData(json.data || []);
// //         const total = json.totalRecords || 0;
// //         setRedeemsTotalCount(total);
// //         setRedeemsTotalPages(Math.ceil(total / redeemsLimit) || 1);
// //         setRedeemsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch redeems:", err);
// //     } finally {
// //       setRedeemsLoading(false);
// //     }
// //   }, []);

// //   // ── Fetch all redeems pages to compute accurate Total Redeem on load ───────
// //   const fetchTotalRedeemOnLoad = useCallback(async (userId) => {
// //     if (!userId) return;
// //     try {
// //       const res1  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=1&limit=${redeemsLimit}`);
// //       const json1 = await res1.json();
// //       if (!json1.success) return;

// //       const totalRecords = json1.totalRecords || 0;
// //       const totalPages   = Math.ceil(totalRecords / redeemsLimit) || 1;

// //       let allData = [...(json1.data || [])];

// //       if (totalPages > 1) {
// //         const pageRequests = [];
// //         for (let p = 2; p <= totalPages; p++) {
// //           pageRequests.push(
// //             fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${p}&limit=${redeemsLimit}`)
// //               .then((r) => r.json())
// //               .then((j) => (j.success ? j.data || [] : []))
// //           );
// //         }
// //         const rest = await Promise.all(pageRequests);
// //         rest.forEach((pageData) => { allData = allData.concat(pageData); });
// //       }

// //       const total = allData.reduce((sum, item) => sum + (item.points ?? 0), 0);
// //       setTotalRedeemStatic(total);
// //     } catch (err) {
// //       console.error("Failed to fetch total redeem on load:", err);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchTotalRedeemOnLoad(selectedUserId);
// //     }
// //   }, [selectedUserId]);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "redeem") {
// //       fetchRedeems(selectedUserId, redeemsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   // ── Derived stats ─────────────────────────────────────────────────────────
// //   const totalUsersCount = pointsTotalUsers;
// //   const totalIncomeFromPoints = pointsData.reduce((sum, item) => sum + (item.referralPoints ?? item.points ?? 0), 0);

// //   const resolvedApiAvatar = apiUser?.imageUrl ? resolveImageUrl(apiUser.imageUrl) : null;
// //   const navAvatar         = location.state?.selectedUserAvatar || null;
// //   const fallbackName      = apiUser?.name || location.state?.selectedUserName || "U";
// //   const avatarSrc         = resolvedApiAvatar || navAvatar ||
// //     `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=055860&color=fff`;

// //   const currentUser = {
// //     name:    apiUser?.name          || location.state?.selectedUserName    || "User",
// //     image:   avatarSrc,
// //     country: location.state?.selectedUserCountry || "USA",
// //     users:   totalUsersCount,
// //     balance:
// //       apiUser != null
// //         ? `$${Number(apiUser.balance).toLocaleString()}`
// //         : location.state?.selectedUserBalance
// //           ? `$${Number(location.state.selectedUserBalance).toLocaleString()}`
// //           : "$0",
// //     totalBalance:
// //       apiUser != null
// //         ? `$${Number(apiUser.balance).toLocaleString()}`
// //         : location.state?.selectedUserBalance
// //           ? `$${Number(location.state.selectedUserBalance).toLocaleString()}`
// //           : "$0",
// //     totalIncome: `$${totalIncomeFromPoints.toLocaleString()}`,
// //     totalRedeem: `$${totalRedeemStatic.toLocaleString()}`,
// //     totalRequests:
// //       apiUser != null ? apiUser.totalRequests : 0,
// //   };

// //   // ── Filter data ───────────────────────────────────────────────────────────
// //   const getFilteredData = () => {
// //     if (activeTab === "points") {
// //       return pointsData.filter((item) => {
// //         const name = item.name || item.userName || "";
// //         return name.toLowerCase().includes(tableSearchTerm.toLowerCase());
// //       });
// //     } else if (activeTab === "coupon") {
// //       return couponsData.filter((item) => {
// //         const dateStr   = item.date   || "";
// //         const statusStr = item.status || "";
// //         const couponStr = item.coupon || "";
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())   ||
// //           statusStr.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
// //           couponStr.toLowerCase().includes(tableSearchTerm.toLowerCase())
// //         );
// //       });
// //     } else if (activeTab === "redeem") {
// //       return redeemsData.filter((item) => {
// //         const dateStr  = item.date   || "";
// //         const statStr  = item.status || "";
// //         const pointStr = String(item.points ?? "");
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           statStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           pointStr.includes(tableSearchTerm)
// //         );
// //       });
// //     }
// //     return [];
// //   };

// //   const filteredData = getFilteredData();

// //   // ── Dynamic page number helper ────────────────────────────────────────────
// //   const getPageNumbers = (currentPage, totalPages) => {
// //     let start = Math.max(1, currentPage - 1);
// //     let end   = Math.min(totalPages, start + 3);
// //     if (end - start < 3) start = Math.max(1, end - 3);
// //     const pages = [];
// //     for (let n = start; n <= end; n++) pages.push(n);
// //     return pages;
// //   };

// //   const handleBackClick = () => {
// //     localStorage.setItem("selectedUserName", currentUser.name);
// //     if (fromPaymentRequests) {
// //       navigate("/payment-requests");
// //     } else {
// //       const returnPage = location.state?.fromPage || localStorage.getItem("currentSidebarPage") || "/free-all-users";
// //       navigate(returnPage, { state: { selectedUserId, selectedUserName: currentUser.name } });
// //     }
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
// //       <Sidebar isCurrentPageFreeAllUsers={true} />

// //       {/* LEFT PANEL */}
// //       <div className="h-[980px] w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={leftSearchTerm}
// //           onChange={(e) => setLeftSearchTerm(e.target.value)}
// //           className="h-[40px] w-[270px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[230px] text-[#055860]" strokeWidth={2} />

// //         <div className="absolute top-5 right-3">
// //           <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
// //           {isOpen && (
// //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
// //             </div>
// //           )}
// //         </div>

// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-4 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={currentUser.image}
// //                   alt={currentUser.name}
// //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {loading ? "Loading..." : currentUser.name}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">Users: <span className="text-[#055860]">{currentUser.users}</span></span>
// //               <span className="text-gray-500">Balance: <span className="text-[#055860]">{currentUser.balance}</span></span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 h-[980px] max-w-[880px] p-6 border rounded-md mt-[10px] bg-white mb-[20px] mr-[16px]">
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={currentUser.image}
// //               alt={currentUser.name}
// //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser.name}</h2>
// //           </div>
// //           <button
// //             onClick={handleBackClick}
// //             className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
// //           >
// //             {fromPaymentRequests ? "Back to Payment Requests" : "Back to Referrals"}
// //             <img className="h-6 w-6" src={UserBackArrow} alt="back" />
// //           </button>
// //         </div>

// //         <div className="flex gap-4 mb-6">
// //           <img
// //             src={currentUser.image}
// //             alt="large"
// //             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //             className="w-[160px] h-[165px] rounded-md object-cover shadow-sm"
// //           />
// //           <div className="w-[620px] space-y-2">
// //             <div className="bg-gray-200 px-4 py-2 flex justify-between text-sm font-medium">
// //               <span>Balance</span>
// //               <span className="text-[#055860]">{currentUser.totalBalance}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Income</span>
// //               <span className="text-[#055860]">{currentUser.totalIncome}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Redeem</span>
// //               <span className="text-[#055860]">{currentUser.totalRedeem}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Requests</span>
// //               <span className="text-[#055860]">{currentUser.totalRequests}</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex gap-6 border-b mb-4 font-bold">
// //           <button
// //             onClick={() => { setActiveTab("points"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "points" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Point History
// //           </button>
// //           <button
// //             onClick={() => { setActiveTab("coupon"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "coupon" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Coupon History
// //           </button>
// //           <button
// //             onClick={() => { setActiveTab("redeem"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "redeem" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Redeem History
// //           </button>
// //         </div>

// //         <div className="overflow-x-hidden h-[600px]">

// //           {/* ── POINTS TAB ── */}
// //           {activeTab === "points" && (
// //             <>
// //               <table className="w-full border border-gray-200 text-sm">
// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     <th className="p-3 text-left">User</th>
// //                     <th className="p-3 text-center">Installed</th>
// //                     <th className="p-3 text-center">Subscribed</th>
// //                     <th className="p-3 text-center">Point</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {pointsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow = pointsData.length > 0;
// //                       const userName   = isApiRow ? (item.name || item.userName || "Unknown") : item.user;
// //                       const userAvatar = isApiRow
// //                         ? (item.image || resolveImageUrl(item.imageUrl) ||
// //                            `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`)
// //                         : `https://randomuser.me/api/portraits/men/${10 + index}.jpg`;

// //                       const fmtDate = (iso) => iso
// //                         ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : "—";
// //                       const fmtTime = (iso) => iso
// //                         ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";

// //                       const installedDate  = isApiRow ? fmtDate(item.installedDate)  : (item.installed  || "—");
// //                       const installedTime  = isApiRow ? fmtTime(item.installedDate)  : "11:35 PM";
// //                       const subscribedDate = isApiRow ? fmtDate(item.subscribedDate) : (item.subscribed || "—");
// //                       const subscribedTime = isApiRow ? fmtTime(item.subscribedDate) : "11:35 PM";
// //                       const pointVal = isApiRow ? (item.referralPoints ?? item.points ?? item.point ?? 0) : item.point;

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6 flex items-center gap-2">
// //                             <img
// //                               src={userAvatar}
// //                               className="w-8 h-8 rounded-full object-cover"
// //                               alt="user"
// //                               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// //                             />
// //                             {userName}
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {installedDate}
// //                             <div className="text-xs text-gray-400">{installedTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {subscribedDate}
// //                             <div className="text-xs text-gray-400">{subscribedTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">{pointVal}</td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {pointsData.length > 0 && pointsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {pointsPage} of {pointsTotalPages} &nbsp;·&nbsp; {pointsTotalUsers} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = pointsPage - 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                       disabled={pointsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${pointsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>

// //                     {getPageNumbers(pointsPage, pointsTotalPages).map((n) => (
// //                       <span
// //                         key={n}
// //                         onClick={() => { setPointsPage(n); fetchPoints(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${pointsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}
// //                       >
// //                         {n}
// //                       </span>
// //                     ))}

// //                     <button
// //                       onClick={() => { const p = pointsPage + 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                       disabled={pointsPage === pointsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${pointsPage === pointsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //           {/* ── COUPON TAB ── */}
// //           {activeTab === "coupon" && (
// //             <>
// //               <table className="w-full border border-gray-200 text-sm">
// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     <th className="p-3 text-center">Coupon</th>
// //                     <th className="p-3 text-center">Date</th>
// //                     <th className="p-3 text-center">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {couponsLoading ? (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow = couponsData.length > 0;

// //                       let displayDate = item.date || "";
// //                       let displayTime = "";
// //                       if (isApiRow && item.date) {
// //                         const colonIdx = item.date.indexOf(":");
// //                         const isoStr   = colonIdx !== -1 ? item.date.slice(colonIdx + 1).trim() : item.date;
// //                         const d        = new Date(isoStr);
// //                         if (!isNaN(d)) {
// //                           displayDate = d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
// //                           displayTime = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
// //                         }
// //                       } else {
// //                         displayTime = "11:35 PM";
// //                       }

// //                       const rawStatus     = isApiRow ? (item.status || "") : (item.status || "");
// //                       const isRedeemed    = rawStatus.toLowerCase() === "redeemed";
// //                       const displayStatus = isApiRow
// //                         ? rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1)
// //                         : rawStatus;

// //                       const couponCode = isApiRow ? item.coupon : null;

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6">
// //                             <div className="flex flex-col items-center justify-center gap-1">
// //                               <img src={Coupon} className="w-8 h-8" alt="coupon" />
// //                               {couponCode && (
// //                                 <span className="text-xs font-mono text-[#055860] font-semibold">{couponCode}</span>
// //                               )}
// //                             </div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {displayDate}
// //                             <div className="text-xs text-gray-400">{displayTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             <span className={`px-8 py-2 text-xs font-medium ${
// //                               isRedeemed
// //                                 ? "bg-green-100 text-green-700"
// //                                 : "bg-red-100 text-red-700 px-[40px] py-2"
// //                             }`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {/* ── FIXED: Dynamic pagination allows navigating all 7 pages (63 records) ── */}
// //               {couponsData.length > 0 && couponsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {couponsPage} of {couponsTotalPages} &nbsp;·&nbsp; {couponsTotalCount} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = couponsPage - 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                       disabled={couponsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${couponsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>

// //                     {getPageNumbers(couponsPage, couponsTotalPages).map((n) => (
// //                       <span
// //                         key={n}
// //                         onClick={() => { setCouponsPage(n); fetchCoupons(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${couponsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}
// //                       >
// //                         {n}
// //                       </span>
// //                     ))}

// //                     <button
// //                       onClick={() => { const p = couponsPage + 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                       disabled={couponsPage === couponsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${couponsPage === couponsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //           {/* ── REDEEM TAB ── */}
// //           {activeTab === "redeem" && (
// //             <>
// //               <table className="h-[680px] w-full border border-gray-200 text-sm">
// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     <th className="p-3 text-left">#</th>
// //                     <th className="p-3 text-center">Date</th>
// //                     <th className="p-3 text-center">Point</th>
// //                     <th className="p-3 text-center">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {redeemsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const d = item.date ? new Date(item.date) : null;
// //                       const displayDate = d && !isNaN(d)
// //                         ? d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : item.date || "—";
// //                       const displayTime = d && !isNaN(d)
// //                         ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";

// //                       const raw = (item.status || "").toLowerCase();
// //                       const statusColorMap = {
// //                         successful:  "bg-green-100 text-green-700",
// //                         pending:     "bg-yellow-100 text-yellow-700",
// //                         inprogress:  "bg-blue-100 text-blue-700",
// //                         cancelled:   "bg-red-100 text-red-700",
// //                       };
// //                       const colorClass    = statusColorMap[raw] || "bg-gray-100 text-gray-700";
// //                       const displayStatus = item.status
// //                         ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
// //                         : "";

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6 text-left font-semibold">{item.number ?? index + 1}</td>
// //                           <td className="p-3 text-center">
// //                             {displayDate}
// //                             <div className="text-xs text-gray-400">{displayTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center font-semibold">{item.points ?? 0}</td>
// //                           <td className="p-3 text-center">
// //                             <span className={`px-8 py-2 text-xs font-medium ${colorClass}`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {redeemsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {redeemsPage} of {redeemsTotalPages} &nbsp;·&nbsp; {redeemsTotalCount} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = redeemsPage - 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                       disabled={redeemsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${redeemsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>

// //                     {getPageNumbers(redeemsPage, redeemsTotalPages).map((n) => (
// //                       <span
// //                         key={n}
// //                         onClick={() => { setRedeemsPage(n); fetchRedeems(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${redeemsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}
// //                       >
// //                         {n}
// //                       </span>
// //                     ))}

// //                     <button
// //                       onClick={() => { const p = redeemsPage + 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                       disabled={redeemsPage === redeemsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${redeemsPage === redeemsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }









// // import React, { useState, useEffect, useCallback } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import UserBackArrow from "../assets/UserBackArrow.png";
// // import Coupon from "../assets/Coupon.png";
// // import { Search } from "lucide-react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const BASE_URL = "https://referralapis.appistan.co/api";

// // const resolveImageUrl = (imageUrl) => {
// //   if (!imageUrl) return null;
// //   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
// //   return `https://referralapis.appistan.co/uploads/${imageUrl}`;
// // };

// // export default function PointsHistory() {
// //   // const [isOpen, setIsOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("points");
// //   const [leftSearchTerm, setLeftSearchTerm] = useState("");
// //   const [tableSearchTerm, setTableSearchTerm] = useState("");

// //   const [apiUser, setApiUser] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const [pointsData, setPointsData] = useState([]);
// //   const [pointsPage, setPointsPage] = useState(1);
// //   const [pointsTotalPages, setPointsTotalPages] = useState(1);
// //   const [pointsTotalUsers, setPointsTotalUsers] = useState(0);
// //   const [pointsLoading, setPointsLoading] = useState(false);
// //   const pointsLimit = 10;

// //   const [couponsData, setCouponsData] = useState([]);
// //   const [couponsPage, setCouponsPage] = useState(1);
// //   const [couponsTotalPages, setCouponsTotalPages] = useState(1);
// //   const [couponsTotalCount, setCouponsTotalCount] = useState(0);
// //   const [couponsLoading, setCouponsLoading] = useState(false);
// //   const couponsLimit = 10;

// //   const [redeemsData, setRedeemsData] = useState([]);
// //   const [redeemsPage, setRedeemsPage] = useState(1);
// //   const [redeemsTotalPages, setRedeemsTotalPages] = useState(1);
// //   const [redeemsTotalCount, setRedeemsTotalCount] = useState(0);
// //   const [redeemsLoading, setRedeemsLoading] = useState(false);
// //   const redeemsLimit = 10;

// //   const [totalRedeemStatic, setTotalRedeemStatic] = useState(0);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const fromPaymentRequests = location.state?.fromPaymentRequests || false;

// //   // ── FIX: read selectedUserId from location.state first, then localStorage ──
// //   const selectedUserId =
// //     location.state?.selectedUserId ||
// //     parseInt(localStorage.getItem("selectedUserId")) ||
// //     null;

// //   // ── FIX: use name/image passed from PaymentRequests as fallback while loading ──
// //   const navUserName  = location.state?.selectedUserName  || "";
// //   const navUserImage = location.state?.selectedUserImage || "";

// //   const fetchUserDetail = useCallback(async (userId) => {
// //     if (!userId) return;
// //     setLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}`);
// //       const json = await res.json();
// //       if (json.success && json.data) {
// //         setApiUser(json.data);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch user detail:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) fetchUserDetail(selectedUserId);
// //   }, [selectedUserId]);

// //   const fetchPoints = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setPointsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/points?page=${page}&limit=${pointsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setPointsData(json.data || []);
// //         setPointsTotalPages(json.totalPages || 1);
// //         setPointsTotalUsers(json.totalUsers || 0);
// //         setPointsPage(json.currentPage || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch points:", err);
// //     } finally {
// //       setPointsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "points") {
// //       fetchPoints(selectedUserId, pointsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   const fetchCoupons = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setCouponsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/coupons?page=${page}&limit=${couponsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setCouponsData(json.data || []);
// //         const total = json.totalCoupons || 0;
// //         setCouponsTotalCount(total);
// //         setCouponsTotalPages(Math.ceil(total / couponsLimit) || 1);
// //         setCouponsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch coupons:", err);
// //     } finally {
// //       setCouponsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "coupon") {
// //       fetchCoupons(selectedUserId, couponsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   const fetchRedeems = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setRedeemsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${page}&limit=${redeemsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setRedeemsData(json.data || []);
// //         const total = json.totalRecords || 0;
// //         setRedeemsTotalCount(total);
// //         setRedeemsTotalPages(Math.ceil(total / redeemsLimit) || 1);
// //         setRedeemsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch redeems:", err);
// //     } finally {
// //       setRedeemsLoading(false);
// //     }
// //   }, []);

// //   const fetchTotalRedeemOnLoad = useCallback(async (userId) => {
// //     if (!userId) return;
// //     try {
// //       const res1  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=1&limit=${redeemsLimit}`);
// //       const json1 = await res1.json();
// //       if (!json1.success) return;

// //       const totalRecords = json1.totalRecords || 0;
// //       const totalPages   = Math.ceil(totalRecords / redeemsLimit) || 1;
// //       let allData = [...(json1.data || [])];

// //       if (totalPages > 1) {
// //         const pageRequests = [];
// //         for (let p = 2; p <= totalPages; p++) {
// //           pageRequests.push(
// //             fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${p}&limit=${redeemsLimit}`)
// //               .then((r) => r.json())
// //               .then((j) => (j.success ? j.data || [] : []))
// //           );
// //         }
// //         const rest = await Promise.all(pageRequests);
// //         rest.forEach((pageData) => { allData = allData.concat(pageData); });
// //       }

// //       const total = allData.reduce((sum, item) => sum + (item.points ?? 0), 0);
// //       setTotalRedeemStatic(total);
// //     } catch (err) {
// //       console.error("Failed to fetch total redeem on load:", err);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) fetchTotalRedeemOnLoad(selectedUserId);
// //   }, [selectedUserId]);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "redeem") {
// //       fetchRedeems(selectedUserId, redeemsPage);
// //     }
// //   }, [selectedUserId, activeTab]);

// //   const totalUsersCount = pointsTotalUsers;
// //   const totalIncomeFromPoints = pointsData.reduce(
// //     (sum, item) => sum + (item.referralPoints ?? item.points ?? 0), 0
// //   );

// //   const resolvedApiAvatar = apiUser?.imageUrl ? resolveImageUrl(apiUser.imageUrl) : null;
// //   // ── FIX: use navUserImage passed from PaymentRequests when apiUser not yet loaded ──
// //   const fallbackName  = apiUser?.name || navUserName || "U";
// //   const fallbackImage = navUserImage || null;
// //   const avatarSrc =
// //     resolvedApiAvatar ||
// //     fallbackImage ||
// //     `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=055860&color=fff`;

// //   // ── FIX: balance comes strictly from apiUser.balance — NOT from totalIncome ──
// //   const rawBalance = apiUser != null ? Number(apiUser.balance) : null;
// //   const displayBalance =
// //     rawBalance !== null
// //       ? `$${rawBalance.toLocaleString()}`
// //       : location.state?.selectedUserBalance
// //         ? `$${Number(location.state.selectedUserBalance).toLocaleString()}`
// //         : "$0";

// //   const currentUser = {
// //     name:          apiUser?.name          || navUserName    || "User",
// //     image:         avatarSrc,
// //     country:       location.state?.selectedUserCountry || "USA",
// //     users:         totalUsersCount,
// //     balance:       displayBalance,
// //     totalBalance:  displayBalance,
// //     totalIncome:   `$${totalIncomeFromPoints.toLocaleString()}`,
// //     totalRedeem:   `$${totalRedeemStatic.toLocaleString()}`,
// //     totalRequests: apiUser != null ? apiUser.totalRequests : 0,
// //   };

// //   const getFilteredData = () => {
// //     if (activeTab === "points") {
// //       return pointsData.filter((item) => {
// //         const name = item.name || item.userName || "";
// //         return name.toLowerCase().includes(tableSearchTerm.toLowerCase());
// //       });
// //     } else if (activeTab === "coupon") {
// //       return couponsData.filter((item) => {
// //         const dateStr   = item.date   || "";
// //         const statusStr = item.status || "";
// //         const couponStr = item.coupon || "";
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())   ||
// //           statusStr.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
// //           couponStr.toLowerCase().includes(tableSearchTerm.toLowerCase())
// //         );
// //       });
// //     } else if (activeTab === "redeem") {
// //       return redeemsData.filter((item) => {
// //         const dateStr  = item.date   || "";
// //         const statStr  = item.status || "";
// //         const pointStr = String(item.points ?? "");
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           statStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           pointStr.includes(tableSearchTerm)
// //         );
// //       });
// //     }
// //     return [];
// //   };

// //   const filteredData = getFilteredData();

// //   const getPageNumbers = (currentPage, totalPages) => {
// //     let start = Math.max(1, currentPage - 1);
// //     let end   = Math.min(totalPages, start + 3);
// //     if (end - start < 3) start = Math.max(1, end - 3);
// //     const pages = [];
// //     for (let n = start; n <= end; n++) pages.push(n);
// //     return pages;
// //   };

// //   const handleBackClick = () => {
// //     localStorage.setItem("selectedUserName", currentUser.name);
// //     if (fromPaymentRequests) {
// //       navigate("/payment-requests");
// //     } else {
// //       const returnPage = location.state?.fromPage || localStorage.getItem("currentSidebarPage") || "/payment-requests";
// //       navigate(returnPage, { state: { selectedUserId, selectedUserName: currentUser.name } });
// //     }
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
// //       <Sidebar isCurrentPageFreeAllUsers={true} />

// //       {/* LEFT PANEL */}
// //       <div className="h-full w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={leftSearchTerm}
// //           onChange={(e) => setLeftSearchTerm(e.target.value)}
// //           className="h-[40px] w-[315px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[280px] text-[#055860]" strokeWidth={2} />

// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-4 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={currentUser.image}
// //                   alt={currentUser.name}
// //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {loading ? "Loading..." : currentUser.name}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">Users: <span className="text-[#055860]">{currentUser.users}</span></span>
// //               <span className="text-gray-500">Balance: <span className="text-[#055860]">{currentUser.balance}</span></span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       {/* <div className="flex-1 h-[980px] max-w-[880px] p-6 border rounded-md mt-[10px] bg-white mb-[20px] mr-[16px]"> */}
// //                         <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={currentUser.image}
// //               alt={currentUser.name}
// //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser.name}</h2>
// //           </div>
// //           <button
// //             onClick={handleBackClick}
// //             className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
// //           >
// //             {fromPaymentRequests ? "Back to Payment Requests" : "Back to Referrals"}
// //             <img className="h-6 w-6" src={UserBackArrow} alt="back" />
// //           </button>
// //         </div>

// //         <div className="flex gap-4 mb-6">
// //           <img
// //             src={currentUser.image}
// //             alt="large"
// //             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //             className="w-[160px] h-[165px] rounded-md object-cover shadow-sm"
// //           />
// //           <div className="w-[3620px] space-y-2">
// //             {/* ── FIX: Balance row now shows apiUser.balance correctly ── */}
// //             <div className="bg-gray-200 px-4 py-2 flex justify-between text-sm font-medium">
// //               <span>Balance</span>
// //               <span className="text-[#055860]">{currentUser.totalBalance}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Income</span>
// //               <span className="text-[#055860]">{currentUser.totalIncome}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Redeem</span>
// //               <span className="text-[#055860]">{currentUser.totalRedeem}</span>
// //             </div>
// //             <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
// //               <span>Total Requests</span>
// //               <span className="text-[#055860]">{currentUser.totalRequests}</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex gap-6 border-b mb-4 font-bold">
// //           <button
// //             onClick={() => { setActiveTab("points"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "points" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Point History
// //           </button>
// //           <button
// //             onClick={() => { setActiveTab("coupon"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "coupon" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Coupon History
// //           </button>
// //           <button
// //             onClick={() => { setActiveTab("redeem"); setTableSearchTerm(""); }}
// //             className={`pb-2 ${activeTab === "redeem" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}
// //           >
// //             Redeem History
// //           </button>
// //         </div>

// //         <div className="overflow-x-hidden h-[600px]">

// //           {/* ── POINTS TAB ── */}
// //           {activeTab === "points" && (
// //             <>
// //               <table className="w-full border border-gray-200 text-sm">
// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     {/* <th className="p-3 text-center ml-[-20px]">User</th> */}
// //                     <th className="py-3 px-1 text-left ml-[100px]">User</th>
// //                     <th className="p-3 text-center">Installed</th>
// //                     <th className="p-3 text-center">Subscribed</th>
// //                     <th className="p-3 text-center">Point</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {pointsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow = pointsData.length > 0;
// //                       const userName   = isApiRow ? (item.name || item.userName || "Unknown") : item.user;
// //                       const userAvatar = isApiRow
// //                         ? (item.image || resolveImageUrl(item.imageUrl) ||
// //                            `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`)
// //                         : `https://randomuser.me/api/portraits/men/${10 + index}.jpg`;

// //                       const fmtDate = (iso) => iso
// //                         ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : "—";
// //                       const fmtTime = (iso) => iso
// //                         ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";

// //                       const installedDate  = isApiRow ? fmtDate(item.installedDate)  : (item.installed  || "—");
// //                       const installedTime  = isApiRow ? fmtTime(item.installedDate)  : "11:35 PM";
// //                       const subscribedDate = isApiRow ? fmtDate(item.subscribedDate) : (item.subscribed || "—");
// //                       const subscribedTime = isApiRow ? fmtTime(item.subscribedDate) : "11:35 PM";
// //                       const pointVal = isApiRow ? (item.referralPoints ?? item.points ?? item.point ?? 0) : item.point;

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6 flex items-center gap-2">
// //                             <img
// //                               src={userAvatar}
// //                               className="w-8 h-8 rounded-full object-cover"
// //                               alt="user"
// //                               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// //                             />
// //                             {userName}
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {installedDate}
// //                             <div className="text-xs text-gray-400">{installedTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {subscribedDate}
// //                             <div className="text-xs text-gray-400">{subscribedTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">{pointVal}</td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {pointsData.length > 0 && pointsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {pointsPage} of {pointsTotalPages} &nbsp;·&nbsp; {pointsTotalUsers} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = pointsPage - 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                       disabled={pointsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${pointsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>
// //                     {getPageNumbers(pointsPage, pointsTotalPages).map((n) => (
// //                       <span key={n} onClick={() => { setPointsPage(n); fetchPoints(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${pointsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
// //                         {n}
// //                       </span>
// //                     ))}
// //                     <button
// //                       onClick={() => { const p = pointsPage + 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                       disabled={pointsPage === pointsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${pointsPage === pointsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //           {/* ── COUPON TAB ── */}
// //           {activeTab === "coupon" && (
// //             <>
// //               <table className="w-full border border-gray-200 text-sm">
// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     <th className="p-3 text-center">Coupon</th>
// //                     <th className="p-3 text-center">Date</th>
// //                     <th className="p-3 text-center">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {couponsLoading ? (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow = couponsData.length > 0;
// //                       let displayDate = item.date || "";
// //                       let displayTime = "";
// //                       if (isApiRow && item.date) {
// //                         const colonIdx = item.date.indexOf(":");
// //                         const isoStr   = colonIdx !== -1 ? item.date.slice(colonIdx + 1).trim() : item.date;
// //                         const d        = new Date(isoStr);
// //                         if (!isNaN(d)) {
// //                           displayDate = d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
// //                           displayTime = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
// //                         }
// //                       } else {
// //                         displayTime = "11:35 PM";
// //                       }
// //                       const rawStatus     = isApiRow ? (item.status || "") : (item.status || "");
// //                       const isRedeemed    = rawStatus.toLowerCase() === "redeemed";
// //                       const displayStatus = isApiRow
// //                         ? rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1)
// //                         : rawStatus;
// //                       const couponCode = isApiRow ? item.coupon : null;

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6">
// //                             <div className="flex flex-col items-center justify-center gap-1">
// //                               <img src={Coupon} className="w-8 h-8" alt="coupon" />
// //                               {couponCode && (
// //                                 <span className="text-xs font-mono text-[#055860] font-semibold">{couponCode}</span>
// //                               )}
// //                             </div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             {displayDate}
// //                             <div className="text-xs text-gray-400">{displayTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             <span className={`px-8 py-2 text-xs font-medium ${isRedeemed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700 px-[40px] py-2"}`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {couponsData.length > 0 && couponsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {couponsPage} of {couponsTotalPages} &nbsp;·&nbsp; {couponsTotalCount} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = couponsPage - 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                       disabled={couponsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${couponsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>
// //                     {getPageNumbers(couponsPage, couponsTotalPages).map((n) => (
// //                       <span key={n} onClick={() => { setCouponsPage(n); fetchCoupons(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${couponsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
// //                         {n}
// //                       </span>
// //                     ))}
// //                     <button
// //                       onClick={() => { const p = couponsPage + 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                       disabled={couponsPage === couponsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${couponsPage === couponsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}

// //           {/* ── REDEEM TAB ── */}
// //           {activeTab === "redeem" && (
// //             <>
// //               {/* <table className="h-[680px] w-full border border-gray-200 text-sm"> */}
// //               <table className="w-full border border-gray-200 text-sm">

// //                 <thead className="bg-[#055860] text-white">
// //                   <tr>
// //                     <th className="p-3 text-left">#</th>
// //                     <th className="p-3 text-center">Date</th>
// //                     <th className="p-3 text-center">Point</th>
// //                     <th className="p-3 text-center">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {redeemsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const d = item.date ? new Date(item.date) : null;
// //                       const displayDate = d && !isNaN(d)
// //                         ? d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : item.date || "—";
// //                       const displayTime = d && !isNaN(d)
// //                         ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";
// //                       const raw = (item.status || "").toLowerCase();
// //                       const statusColorMap = {
// //                         successful: "bg-green-100 text-green-700",
// //                         pending:    "bg-yellow-100 text-yellow-700",
// //                         inprogress: "bg-blue-100 text-blue-700",
// //                         cancelled:  "bg-red-100 text-red-700",
// //                       };
// //                       const colorClass    = statusColorMap[raw] || "bg-gray-100 text-gray-700";
// //                       const displayStatus = item.status
// //                         ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
// //                         : "";

// //                       return (
// //                         <tr key={item.id || index} className="border-b">
// //                           <td className="p-6 text-left font-semibold">{item.number ?? index + 1}</td>
// //                           <td className="p-3 text-center">
// //                             {displayDate}
// //                             <div className="text-xs text-gray-400">{displayTime}</div>
// //                           </td>
// //                           <td className="p-3 text-center font-semibold">{item.points ?? 0}</td>
// //                           <td className="p-3 text-center">
// //                             <span className={`px-8 py-2 text-xs font-medium ${colorClass}`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {redeemsTotalPages > 1 && (
// //                 <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //                   <p className="text-sm text-gray-600">
// //                     Page {redeemsPage} of {redeemsTotalPages} &nbsp;·&nbsp; {redeemsTotalCount} total
// //                   </p>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => { const p = redeemsPage - 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                       disabled={redeemsPage === 1}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${redeemsPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //                     </button>
// //                     {getPageNumbers(redeemsPage, redeemsTotalPages).map((n) => (
// //                       <span key={n} onClick={() => { setRedeemsPage(n); fetchRedeems(selectedUserId, n); }}
// //                         className={`cursor-pointer text-sm ${redeemsPage === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
// //                         {n}
// //                       </span>
// //                     ))}
// //                     <button
// //                       onClick={() => { const p = redeemsPage + 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                       disabled={redeemsPage === redeemsTotalPages}
// //                       className={`w-6 h-6 flex items-center justify-center rounded-full ${redeemsPage === redeemsTotalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //                     >
// //                       <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect, useCallback } from "react";
// // import Sidebar from "./Sidebar.jsx";
// // import UserBackArrow from "../assets/UserBackArrow.png";
// // import Coupon from "../assets/Coupon.png";
// // import { Search } from "lucide-react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const BASE_URL = "https://referralapis.appistan.co/api";

// // const resolveImageUrl = (imageUrl) => {
// //   if (!imageUrl) return null;
// //   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
// //   return `https://referralapis.appistan.co/uploads/${imageUrl}`;
// // };

// // export default function PointsHistory() {
// //   const [activeTab, setActiveTab] = useState("points");
// //   const [leftSearchTerm, setLeftSearchTerm] = useState("");
// //   const [tableSearchTerm, setTableSearchTerm] = useState("");

// //   const [apiUser, setApiUser] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const [pointsData, setPointsData] = useState([]);
// //   const [pointsPage, setPointsPage] = useState(1);
// //   const [pointsTotalPages, setPointsTotalPages] = useState(1);
// //   const [pointsTotalUsers, setPointsTotalUsers] = useState(0);
// //   const [pointsLoading, setPointsLoading] = useState(false);
// //   const pointsLimit = 10;

// //   const [couponsData, setCouponsData] = useState([]);
// //   const [couponsPage, setCouponsPage] = useState(1);
// //   const [couponsTotalPages, setCouponsTotalPages] = useState(1);
// //   const [couponsTotalCount, setCouponsTotalCount] = useState(0);
// //   const [couponsLoading, setCouponsLoading] = useState(false);
// //   const couponsLimit = 10;

// //   const [redeemsData, setRedeemsData] = useState([]);
// //   const [redeemsPage, setRedeemsPage] = useState(1);
// //   const [redeemsTotalPages, setRedeemsTotalPages] = useState(1);
// //   const [redeemsTotalCount, setRedeemsTotalCount] = useState(0);
// //   const [redeemsLoading, setRedeemsLoading] = useState(false);
// //   const redeemsLimit = 10;

// //   const [totalRedeemStatic, setTotalRedeemStatic] = useState(0);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const fromPaymentRequests = location.state?.fromPaymentRequests || false;

// //   const selectedUserId =
// //     location.state?.selectedUserId ||
// //     parseInt(localStorage.getItem("selectedUserId")) ||
// //     null;

// //   const navUserName  = location.state?.selectedUserName  || "";
// //   const navUserImage = location.state?.selectedUserImage || "";

// //   const fetchUserDetail = useCallback(async (userId) => {
// //     if (!userId) return;
// //     setLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}`);
// //       const json = await res.json();
// //       if (json.success && json.data) setApiUser(json.data);
// //     } catch (err) {
// //       console.error("Failed to fetch user detail:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) fetchUserDetail(selectedUserId);
// //   }, [selectedUserId]);

// //   const fetchPoints = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setPointsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/points?page=${page}&limit=${pointsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setPointsData(json.data || []);
// //         setPointsTotalPages(json.totalPages || 1);
// //         setPointsTotalUsers(json.totalUsers || 0);
// //         setPointsPage(json.currentPage || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch points:", err);
// //     } finally {
// //       setPointsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "points") fetchPoints(selectedUserId, pointsPage);
// //   }, [selectedUserId, activeTab]);

// //   const fetchCoupons = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setCouponsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/coupons?page=${page}&limit=${couponsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setCouponsData(json.data || []);
// //         const total = json.totalCoupons || 0;
// //         setCouponsTotalCount(total);
// //         setCouponsTotalPages(Math.ceil(total / couponsLimit) || 1);
// //         setCouponsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch coupons:", err);
// //     } finally {
// //       setCouponsLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "coupon") fetchCoupons(selectedUserId, couponsPage);
// //   }, [selectedUserId, activeTab]);

// //   const fetchRedeems = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setRedeemsLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${page}&limit=${redeemsLimit}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setRedeemsData(json.data || []);
// //         const total = json.totalRecords || 0;
// //         setRedeemsTotalCount(total);
// //         setRedeemsTotalPages(Math.ceil(total / redeemsLimit) || 1);
// //         setRedeemsPage(json.page || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch redeems:", err);
// //     } finally {
// //       setRedeemsLoading(false);
// //     }
// //   }, []);

// //   const fetchTotalRedeemOnLoad = useCallback(async (userId) => {
// //     if (!userId) return;
// //     try {
// //       const res1  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=1&limit=${redeemsLimit}`);
// //       const json1 = await res1.json();
// //       if (!json1.success) return;
// //       const totalRecords = json1.totalRecords || 0;
// //       const totalPages   = Math.ceil(totalRecords / redeemsLimit) || 1;
// //       let allData = [...(json1.data || [])];
// //       if (totalPages > 1) {
// //         const pageRequests = [];
// //         for (let p = 2; p <= totalPages; p++) {
// //           pageRequests.push(
// //             fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${p}&limit=${redeemsLimit}`)
// //               .then((r) => r.json())
// //               .then((j) => (j.success ? j.data || [] : []))
// //           );
// //         }
// //         const rest = await Promise.all(pageRequests);
// //         rest.forEach((pageData) => { allData = allData.concat(pageData); });
// //       }
// //       const total = allData.reduce((sum, item) => sum + (item.points ?? 0), 0);
// //       setTotalRedeemStatic(total);
// //     } catch (err) {
// //       console.error("Failed to fetch total redeem on load:", err);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUserId) fetchTotalRedeemOnLoad(selectedUserId);
// //   }, [selectedUserId]);

// //   useEffect(() => {
// //     if (selectedUserId && activeTab === "redeem") fetchRedeems(selectedUserId, redeemsPage);
// //   }, [selectedUserId, activeTab]);

// //   const totalUsersCount = pointsTotalUsers;
// //   const totalIncomeFromPoints = pointsData.reduce(
// //     (sum, item) => sum + (item.referralPoints ?? item.points ?? 0), 0
// //   );

// //   const resolvedApiAvatar = apiUser?.imageUrl ? resolveImageUrl(apiUser.imageUrl) : null;
// //   const fallbackName  = apiUser?.name || navUserName || "U";
// //   const fallbackImage = navUserImage || null;
// //   const avatarSrc =
// //     resolvedApiAvatar ||
// //     fallbackImage ||
// //     `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=055860&color=fff`;

// //   const rawBalance = apiUser != null ? Number(apiUser.balance) : null;
// //   const displayBalance =
// //     rawBalance !== null
// //       ? `${rawBalance.toLocaleString()}$`
// //       : location.state?.selectedUserBalance
// //         ? `${Number(location.state.selectedUserBalance).toLocaleString()}$`
// //         : "0$";

// //   const currentUser = {
// //     name:          apiUser?.name    || navUserName || "User",
// //     image:         avatarSrc,
// //     country:       location.state?.selectedUserCountry || "USA",
// //     users:         totalUsersCount,
// //     balance:       displayBalance,
// //     totalBalance:  displayBalance,
// //     totalIncome:   `${totalIncomeFromPoints.toLocaleString()} $`,
// //     totalRedeem:   `${totalRedeemStatic.toLocaleString()} $`,
// //     totalRequests: apiUser != null ? apiUser.totalRequests : 0,
// //   };

// //   const getFilteredData = () => {
// //     if (activeTab === "points") {
// //       return pointsData.filter((item) => {
// //         const name = item.name || item.userName || "";
// //         return name.toLowerCase().includes(tableSearchTerm.toLowerCase());
// //       });
// //     } else if (activeTab === "coupon") {
// //       return couponsData.filter((item) => {
// //         const dateStr   = item.date   || "";
// //         const statusStr = item.status || "";
// //         const couponStr = item.coupon || "";
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())   ||
// //           statusStr.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
// //           couponStr.toLowerCase().includes(tableSearchTerm.toLowerCase())
// //         );
// //       });
// //     } else if (activeTab === "redeem") {
// //       return redeemsData.filter((item) => {
// //         const dateStr  = item.date   || "";
// //         const statStr  = item.status || "";
// //         const pointStr = String(item.points ?? "");
// //         return (
// //           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           statStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
// //           pointStr.includes(tableSearchTerm)
// //         );
// //       });
// //     }
// //     return [];
// //   };

// //   const filteredData = getFilteredData();

// //   const getPageNumbers = (currentPage, totalPages) => {
// //     let start = Math.max(1, currentPage - 1);
// //     let end   = Math.min(totalPages, start + 3);
// //     if (end - start < 3) start = Math.max(1, end - 3);
// //     const pages = [];
// //     for (let n = start; n <= end; n++) pages.push(n);
// //     return pages;
// //   };

// //   const handleBackClick = () => {
// //     localStorage.setItem("selectedUserName", currentUser.name);
// //     if (fromPaymentRequests) {
// //       navigate("/payment-requests");
// //     } else {
// //       const returnPage = location.state?.fromPage || localStorage.getItem("currentSidebarPage") || "/payment-requests";
// //       navigate(returnPage, { state: { selectedUserId, selectedUserName: currentUser.name } });
// //     }
// //   };

// //   const PaginationBar = ({ page, totalPages, totalCount, onPrev, onNext, onPage }) => (
// //     <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
// //       <p className="text-sm text-gray-600">
// //         Page {page} of {totalPages} &nbsp;·&nbsp; {totalCount} total
// //       </p>
// //       <div className="flex items-center gap-2">
// //         <button
// //           onClick={onPrev}
// //           disabled={page === 1}
// //           className={`w-6 h-6 flex items-center justify-center rounded-full ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //         >
// //           <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
// //         </button>
// //         {getPageNumbers(page, totalPages).map((n) => (
// //           <span key={n} onClick={() => onPage(n)}
// //             className={`cursor-pointer text-sm ${page === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
// //             {n}
// //           </span>
// //         ))}
// //         <button
// //           onClick={onNext}
// //           disabled={page === totalPages}
// //           className={`w-6 h-6 flex items-center justify-center rounded-full ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
// //         >
// //           <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
// //       <Sidebar isCurrentPageFreeAllUsers={true} />

// //       {/* LEFT PANEL */}
// //       <div className="h-full w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={leftSearchTerm}
// //           onChange={(e) => setLeftSearchTerm(e.target.value)}
// //           className="h-[40px] w-[315px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[280px] text-[#055860]" strokeWidth={2} />

// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-4 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={currentUser.image}
// //                   alt={currentUser.name}
// //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {loading ? "Loading..." : currentUser.name}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">Users: <span className="text-[#055860]">{currentUser.users}</span></span>
// //               <span className="text-gray-500">Balance: <span className="text-[#055860]">{currentUser.balance}</span></span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

// //         {/* TOP: avatar + name + back button */}
// //         <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
// //           <div className="flex items-center gap-3">
// //             <img
// //               src={currentUser.image}
// //               alt={currentUser.name}
// //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //               className="w-11 h-11 rounded-full object-cover"
// //             />
// //             <h2 className="text-xl font-semibold text-gray-800">{currentUser.name}</h2>
// //           </div>
// //           <button
// //             onClick={handleBackClick}
// //             className="flex items-center gap-2 text-[#055860] font-medium hover:underline cursor-pointer bg-none border-none"
// //           >
// //             {fromPaymentRequests ? "Back to Payment Requests" : "Back to referrals"}
// //             <img className="h-6 w-6" src={UserBackArrow} alt="back" />
// //           </button>
// //         </div>

// //         {/* INFO: large avatar + stats rows */}
// //         <div className="flex gap-6 mb-6">
// //           <img
// //             src={currentUser.image}
// //             alt="large"
// //             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
// //             className="w-[200px] h-[200px] rounded-lg object-cover shadow-sm flex-shrink-0"
// //           />
// //           <div className="flex-1 space-y-3">
// //             <div className="bg-gray-200 px-5 py-3 flex justify-between items-center rounded-sm">
// //               <span className="text-base font-bold text-gray-800">Balance</span>
// //               <span className="text-base font-semibold text-[#055860]">{currentUser.totalBalance}</span>
// //             </div>
// //             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
// //               <span className="text-base text-gray-500">
// //                 {activeTab === "coupon" ? "Total Revenue" : "Total Income"}
// //               </span>
// //               <span className="text-base font-semibold text-[#055860]">{currentUser.totalIncome}</span>
// //             </div>
// //             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
// //               <span className="text-base text-gray-500">Total Redeem</span>
// //               <span className="text-base font-semibold text-[#055860]">{currentUser.totalRedeem}</span>
// //             </div>
// //             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
// //               <span className="text-base text-gray-500">Total Requests</span>
// //               <span className="text-base font-semibold text-[#055860]">{currentUser.totalRequests}</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* TABS */}
// //         <div className="flex gap-8 border-b mb-4">
// //           {[
// //             { key: "points", label: "Point History" },
// //             { key: "coupon", label: "Coupon History" },
// //             { key: "redeem", label: "Redeem History" },
// //           ].map((tab) => (
// //             <button
// //               key={tab.key}
// //               onClick={() => { setActiveTab(tab.key); setTableSearchTerm(""); }}
// //               className={`pb-2 text-sm font-medium transition-colors ${
// //                 activeTab === tab.key
// //                   ? "border-b-2 border-[#055860] text-[#055860]"
// //                   : "text-gray-400 hover:text-gray-600"
// //               }`}
// //             >
// //               {tab.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* TABLE AREA */}
// //         <div className="overflow-x-hidden" style={{ maxHeight: "480px", overflowY: "auto" }}>

// //           {/* ── POINTS TAB ── */}
// //           {activeTab === "points" && (
// //             <>
// //               <table className="w-full text-sm border-collapse">
// //                 <thead>
// //                   <tr className="bg-[#055860] text-white">
// //                     {/* <th className="px-4 py-3 text-center">
// //                         <div className="ml-[-150px]">User</div>
// //                       </th> */}
// // <th className="px-4 py-3 text-center">
// //   <div className="-ml-40">User</div>
// // </th>
// //                     <th className="px-4 py-3 text-center">Installed</th>
// //                     <th className="px-4 py-3 text-center">Subscribed</th>
// //                     <th className="px-4 py-3 text-center">Point</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {pointsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow   = pointsData.length > 0;
// //                       const userName   = isApiRow ? (item.name || item.userName || "Unknown") : item.user;
// //                       const userAvatar = isApiRow
// //                         ? (item.image || resolveImageUrl(item.imageUrl) ||
// //                            `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`)
// //                         : `https://randomuser.me/api/portraits/men/${10 + index}.jpg`;

// //                       const fmtDate = (iso) => iso
// //                         ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : "—";
// //                       const fmtTime = (iso) => iso
// //                         ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";

// //                       const installedDate  = isApiRow ? fmtDate(item.installedDate)  : (item.installed  || "—");
// //                       const installedTime  = isApiRow ? fmtTime(item.installedDate)  : "11:35 PM";
// //                       const subscribedDate = isApiRow ? fmtDate(item.subscribedDate) : (item.subscribed || "—");
// //                       const subscribedTime = isApiRow ? fmtTime(item.subscribedDate) : "11:35 PM";
// //                       const pointVal       = isApiRow ? (item.referralPoints ?? item.points ?? item.point ?? 0) : item.point;

// //                       return (
              
// // <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
// //   <td className="px-4 py-3 w-[37%]">
// //     <div className="flex items-center gap-3 ml-[15px]">
// //       <img
// //         src={userAvatar}
// //         className="w-10 h-10 rounded-full object-cover flex-shrink-0"
// //         alt="user"
// //         onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// //       />
// //       <span className="text-sm text-gray-700 whitespace-nowrap">{userName}</span>
// //     </div>
// //   </td>
// //                           <td className="px-4 py-3 text-center text-gray-700">
// //                             {installedDate}
// //                             <div className="text-xs text-gray-400">{installedTime}</div>
// //                           </td>
// //                           <td className="px-4 py-3 text-center text-gray-700">
// //                             {subscribedDate}
// //                             <div className="text-xs text-gray-400">{subscribedTime}</div>
// //                           </td>
// //                           <td className="px-4 py-3 text-center font-medium text-gray-700">{pointVal}</td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {pointsData.length > 0 && pointsTotalPages > 1 && (
// //                 <PaginationBar
// //                   page={pointsPage}
// //                   totalPages={pointsTotalPages}
// //                   totalCount={pointsTotalUsers}
// //                   onPrev={() => { const p = pointsPage - 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                   onNext={() => { const p = pointsPage + 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
// //                   onPage={(n) => { setPointsPage(n); fetchPoints(selectedUserId, n); }}
// //                 />
// //               )}
// //             </>
// //           )}

// //           {/* ── COUPON TAB ── */}
// //           {activeTab === "coupon" && (
// //             <>
// //               <table className="w-full text-sm border-collapse">
// //                 <thead>
// //                   <tr className="bg-[#055860] text-white">
// //                     {/* ── FIXED: all three headers centered ── */}
// //                     <th className="px-4 py-3 text-center w-[25%]">Coupon</th>
// //                     <th className="px-4 py-3 text-center w-[45%]">Date</th>
// //                     <th className="px-4 py-3 text-center w-[30%]">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {couponsLoading ? (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const isApiRow = couponsData.length > 0;

// //                       let rawDateStr  = item.date || "";
// //                       let prefixLabel = "";
// //                       let displayDate = "";
// //                       let displayTime = "";

// //                       if (isApiRow && rawDateStr) {
// //                         const colonIdx = rawDateStr.indexOf(":");
// //                         let isoStr = rawDateStr;
// //                         if (colonIdx !== -1) {
// //                           const possiblePrefix = rawDateStr.slice(0, colonIdx).trim();
// //                           if (possiblePrefix && !/^\d/.test(possiblePrefix)) {
// //                             prefixLabel = possiblePrefix;
// //                             isoStr = rawDateStr.slice(colonIdx + 1).trim();
// //                           }
// //                         }
// //                         const d = new Date(isoStr);
// //                         if (!isNaN(d)) {
// //                           displayDate = d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
// //                           displayTime = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
// //                         } else {
// //                           displayDate = rawDateStr;
// //                         }
// //                       }

// //                       const rawStatus  = item.status || "";
// //                       const isRedeemed = rawStatus.toLowerCase() === "redeemed";
// //                       const isExpired  = rawStatus.toLowerCase() === "expired";

// //                       // ── FIXED: always capitalize first letter properly ──
// //                       const displayStatus = rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1).toLowerCase();

// //                       // ── FIXED: statusLabel capitalized with R/E uppercase ──
// //                       const statusLabel = prefixLabel
// //                         ? prefixLabel.charAt(0).toUpperCase() + prefixLabel.slice(1).toLowerCase()
// //                         : isRedeemed
// //                         ? "Redeemed"
// //                         : isExpired
// //                         ? "Expired"
// //                         : displayStatus;

// //                       const statusBadgeClass = isRedeemed
// //                         ? "bg-green-100 text-green-700"
// //                         : isExpired
// //                         ? "bg-red-100 text-red-600"
// //                         : "bg-gray-100 text-gray-600";

// //                       const couponCode = isApiRow ? item.coupon : null;

// //                       return (
// //                         <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">

// //                           {/* ── FIXED: Coupon cell centered ── */}
// //                           <td className="px-4 py-4 text-center">
// //                             <div className="flex flex-col items-center justify-center gap-1">
// //                               <img src={Coupon} className="w-9 h-9" alt="coupon" />
// //                               {couponCode && (
// //                                 <span className="text-[10px] font-mono text-[#055860] font-semibold">{couponCode}</span>
// //                               )}
// //                             </div>
// //                           </td>

// //                           {/* ── FIXED: Date cell centered ── */}
// //                           <td className="px-4 py-4 text-center text-gray-700">
// //                             <div className="flex flex-col items-center gap-0.5">
// //                               <span className="text-sm">
// //                                 {statusLabel} : {displayDate}
// //                               </span>
// //                               <span className="text-xs text-gray-400">{displayTime}</span>
// //                             </div>
// //                           </td>

// //                           {/* Status badge centered */}
// //                           <td className="px-4 py-4 text-center">
// //                             <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${statusBadgeClass}`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>

// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {couponsData.length > 0 && couponsTotalPages > 1 && (
// //                 <PaginationBar
// //                   page={couponsPage}
// //                   totalPages={couponsTotalPages}
// //                   totalCount={couponsTotalCount}
// //                   onPrev={() => { const p = couponsPage - 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                   onNext={() => { const p = couponsPage + 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
// //                   onPage={(n) => { setCouponsPage(n); fetchCoupons(selectedUserId, n); }}
// //                 />
// //               )}
// //             </>
// //           )}

// //           {/* ── REDEEM TAB ── */}
// //           {activeTab === "redeem" && (
// //             <>
// //               <table className="w-full text-sm border-collapse">
// //                 <thead>
// //                   <tr className="bg-[#055860] text-white">
// //                     <th className="px-4 py-3 text-left w-[10%]">#</th>
// //                     <th className="px-4 py-3 text-center">Date</th>
// //                     <th className="px-4 py-3 text-center">Point</th>
// //                     <th className="px-4 py-3 text-center">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {redeemsLoading ? (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //                   ) : filteredData.length > 0 ? (
// //                     filteredData.map((item, index) => {
// //                       const d = item.date ? new Date(item.date) : null;
// //                       const displayDate = d && !isNaN(d)
// //                         ? d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                         : item.date || "—";
// //                       const displayTime = d && !isNaN(d)
// //                         ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                         : "11:35 PM";
// //                       const raw = (item.status || "").toLowerCase();
// //                       const statusColorMap = {
// //                         successful: "bg-green-100 text-green-700",
// //                         pending:    "bg-yellow-100 text-yellow-700",
// //                         inprogress: "bg-blue-100 text-blue-700",
// //                         cancelled:  "bg-red-100 text-red-700",
// //                       };
// //                       const colorClass    = statusColorMap[raw] || "bg-gray-100 text-gray-700";
// //                       const displayStatus = item.status
// //                         ? item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase()
// //                         : "";

// //                       return (
// //                         <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
// //                           <td className="px-4 py-3 text-left font-semibold text-gray-700">{item.number ?? index + 1}</td>
// //                           <td className="px-4 py-3 text-center text-gray-700">
// //                             {displayDate}
// //                             <div className="text-xs text-gray-400">{displayTime}</div>
// //                           </td>
// //                           <td className="px-4 py-3 text-center font-semibold text-gray-700">{item.points ?? 0}</td>
// //                           <td className="px-4 py-3 text-center">
// //                             <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${colorClass}`}>
// //                               {displayStatus}
// //                             </span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   ) : (
// //                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>

// //               {redeemsTotalPages > 1 && (
// //                 <PaginationBar
// //                   page={redeemsPage}
// //                   totalPages={redeemsTotalPages}
// //                   totalCount={redeemsTotalCount}
// //                   onPrev={() => { const p = redeemsPage - 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                   onNext={() => { const p = redeemsPage + 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
// //                   onPage={(n) => { setRedeemsPage(n); fetchRedeems(selectedUserId, n); }}
// //                 />
// //               )}
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import UserBackArrow from "../assets/UserBackArrow.png";
// import Coupon from "../assets/Coupon.png";
// import { Search } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return null;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `https://apis.famocare.com/uploads/${imageUrl}`;
// };

// export default function PointsHistory() {
//   const [activeTab, setActiveTab] = useState("points");
//   const [leftSearchTerm, setLeftSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");

//   const [apiUser, setApiUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [pointsData, setPointsData] = useState([]);
//   const [pointsPage, setPointsPage] = useState(1);
//   const [pointsTotalPages, setPointsTotalPages] = useState(1);
//   const [pointsTotalUsers, setPointsTotalUsers] = useState(0);
//   const [pointsLoading, setPointsLoading] = useState(false);
//   const pointsLimit = 10;

//   const [couponsData, setCouponsData] = useState([]);
//   const [couponsPage, setCouponsPage] = useState(1);
//   const [couponsTotalPages, setCouponsTotalPages] = useState(1);
//   const [couponsTotalCount, setCouponsTotalCount] = useState(0);
//   const [couponsLoading, setCouponsLoading] = useState(false);
//   const couponsLimit = 10    ;

//   const [redeemsData, setRedeemsData] = useState([]);
//   const [redeemsPage, setRedeemsPage] = useState(1);
//   const [redeemsTotalPages, setRedeemsTotalPages] = useState(1);
//   const [redeemsTotalCount, setRedeemsTotalCount] = useState(0);
//   const [redeemsLoading, setRedeemsLoading] = useState(false);
//   const redeemsLimit = 10;

//   const [totalRedeemStatic, setTotalRedeemStatic] = useState(0);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const fromPaymentRequests = location.state?.fromPaymentRequests || false;

//   const selectedUserId =
//     location.state?.selectedUserId ||
//     parseInt(localStorage.getItem("selectedUserId")) ||
//     null;

//   const navUserName  = location.state?.selectedUserName  || "";
//   const navUserImage = location.state?.selectedUserImage || "";

//   const fetchUserDetail = useCallback(async (userId) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referral-users/${userId}`);
//       const json = await res.json();
//       if (json.success && json.data) setApiUser(json.data);
//     } catch (err) {
//       console.error("Failed to fetch user detail:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedUserId) fetchUserDetail(selectedUserId);
//   }, [selectedUserId]);

//   const fetchPoints = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setPointsLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/points?page=${page}&limit=${pointsLimit}`);
//       const json = await res.json();
//       if (json.success) {
//         setPointsData(json.data || []);
//         setPointsTotalPages(json.totalPages || 1);
//         setPointsTotalUsers(json.totalUsers || 0);
//         setPointsPage(json.currentPage || 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch points:", err);
//     } finally {
//       setPointsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedUserId && activeTab === "points") fetchPoints(selectedUserId, pointsPage);
//   }, [selectedUserId, activeTab]);

//   const fetchCoupons = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setCouponsLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/coupons?page=${page}&limit=${couponsLimit}`);
//       const json = await res.json();
//       if (json.success) {
//         setCouponsData(json.data || []);
//         const total = json.totalCoupons || 0;
//         setCouponsTotalCount(total);
//         setCouponsTotalPages(Math.ceil(total / couponsLimit) || 1);
//         setCouponsPage(json.page || 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch coupons:", err);
//     } finally {
//       setCouponsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedUserId && activeTab === "coupon") fetchCoupons(selectedUserId, couponsPage);
//   }, [selectedUserId, activeTab]);

//   const fetchRedeems = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setRedeemsLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${page}&limit=${redeemsLimit}`);
//       const json = await res.json();
//       if (json.success) {
//         setRedeemsData(json.data || []);
//         const total = json.totalRecords || 0;
//         setRedeemsTotalCount(total);
//         setRedeemsTotalPages(Math.ceil(total / redeemsLimit) || 1);
//         setRedeemsPage(json.page || 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch redeems:", err);
//     } finally {
//       setRedeemsLoading(false);
//     }
//   }, []);

//   const fetchTotalRedeemOnLoad = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res1  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=1&limit=${redeemsLimit}`);
//       const json1 = await res1.json();
//       if (!json1.success) return;
//       const totalRecords = json1.totalRecords || 0;
//       const totalPages   = Math.ceil(totalRecords / redeemsLimit) || 1;
//       let allData = [...(json1.data || [])];
//       if (totalPages > 1) {
//         const pageRequests = [];
//         for (let p = 2; p <= totalPages; p++) {
//           pageRequests.push(
//             fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${p}&limit=${redeemsLimit}`)
//               .then((r) => r.json())
//               .then((j) => (j.success ? j.data || [] : []))
//           );
//         }
//         const rest = await Promise.all(pageRequests);
//         rest.forEach((pageData) => { allData = allData.concat(pageData); });
//       }
//       const total = allData.reduce((sum, item) => sum + (item.points ?? 0), 0);
//       setTotalRedeemStatic(total);
//     } catch (err) {
//       console.error("Failed to fetch total redeem on load:", err);
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedUserId) fetchTotalRedeemOnLoad(selectedUserId);
//   }, [selectedUserId]);

//   useEffect(() => {
//     if (selectedUserId && activeTab === "redeem") fetchRedeems(selectedUserId, redeemsPage);
//   }, [selectedUserId, activeTab]);

//   const totalUsersCount = pointsTotalUsers;
//   const totalIncomeFromPoints = pointsData.reduce(
//     (sum, item) => sum + (item.referralPoints ?? item.points ?? 0), 0
//   );

//   const resolvedApiAvatar = apiUser?.imageUrl ? resolveImageUrl(apiUser.imageUrl) : null;
//   const fallbackName  = apiUser?.name || navUserName || "U";
//   const fallbackImage = navUserImage || null;
//   const avatarSrc =
//     resolvedApiAvatar ||
//     fallbackImage ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=055860&color=fff`;

//   const rawBalance = apiUser != null ? Number(apiUser.balance) : null;
//   const displayBalance =
//     rawBalance !== null
//       ? `${rawBalance.toLocaleString()}$`
//       : location.state?.selectedUserBalance
//         ? `${Number(location.state.selectedUserBalance).toLocaleString()}$`
//         : "0$";

//   const currentUser = {
//     name:          apiUser?.name    || navUserName || "User",
//     image:         avatarSrc,
//     country:       location.state?.selectedUserCountry || "USA",
//     users:         totalUsersCount,
//     balance:       displayBalance,
//     totalBalance:  displayBalance,
//     totalIncome:   `${totalIncomeFromPoints.toLocaleString()} $`,
//     totalRedeem:   `${totalRedeemStatic.toLocaleString()} $`,
//     totalRequests: apiUser != null ? apiUser.totalRequests : 0,
//   };

//   const getFilteredData = () => {
//     if (activeTab === "points") {
//       return pointsData.filter((item) => {
//         const name = item.name || item.userName || "";
//         return name.toLowerCase().includes(tableSearchTerm.toLowerCase());
//       });
//     } else if (activeTab === "coupon") {
//       return couponsData.filter((item) => {
//         const dateStr   = item.date   || "";
//         const statusStr = item.status || "";
//         const couponStr = item.coupon || "";
//         return (
//           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())   ||
//           statusStr.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
//           couponStr.toLowerCase().includes(tableSearchTerm.toLowerCase())
//         );
//       });
//     } else if (activeTab === "redeem") {
//       return redeemsData.filter((item) => {
//         const dateStr  = item.date   || "";
//         const statStr  = item.status || "";
//         const pointStr = String(item.points ?? "");
//         return (
//           dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
//           statStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
//           pointStr.includes(tableSearchTerm)
//         );
//       });
//     }
//     return [];
//   };

//   const filteredData = getFilteredData();

//   const getPageNumbers = (currentPage, totalPages) => {
//     let start = Math.max(1, currentPage - 1);
//     let end   = Math.min(totalPages, start + 3);
//     if (end - start < 3) start = Math.max(1, end - 3);
//     const pages = [];
//     for (let n = start; n <= end; n++) pages.push(n);
//     return pages;
//   };

//   const handleBackClick = () => {
//     localStorage.setItem("selectedUserName", currentUser.name);
//     if (fromPaymentRequests) {
//       navigate("/payment-requests");
//     } else {
//       const returnPage = location.state?.fromPage || localStorage.getItem("currentSidebarPage") || "/payment-requests";
//       navigate(returnPage, { state: { selectedUserId, selectedUserName: currentUser.name } });
//     }
//   };

//   const PaginationBar = ({ page, totalPages, totalCount, onPrev, onNext, onPage }) => (
//     <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
//       <p className="text-sm text-gray-600">
//         Page {page} of {totalPages} &nbsp;·&nbsp; {totalCount} total
//       </p>
//       <div className="flex items-center gap-2">
//         <button
//           onClick={onPrev}
//           disabled={page === 1}
//           className={`w-6 h-6 flex items-center justify-center rounded-full ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
//         >
//           <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
//         </button>
//         {getPageNumbers(page, totalPages).map((n) => (
//           <span key={n} onClick={() => onPage(n)}
//             className={`cursor-pointer text-sm ${page === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
//             {n}
//           </span>
//         ))}
//         <button
//           onClick={onNext}
//           disabled={page === totalPages}
//           className={`w-6 h-6 flex items-center justify-center rounded-full ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
//         >
//           <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
//       <Sidebar isCurrentPageFreeAllUsers={true} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[969px] w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={leftSearchTerm}
//           onChange={(e) => setLeftSearchTerm(e.target.value)}
//           className="h-[40px] w-[315px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[280px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-4 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={currentUser.image}
//                   alt={currentUser.name}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {loading ? "Loading..." : currentUser.name}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">Users: <span className="text-[#055860]">{currentUser.users}</span></span>
//               <span className="text-gray-500">Balance: <span className="text-[#055860]">{currentUser.balance}</span></span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2.5 bg-white mb-5 overflow-hidden">

//         {/* TOP: avatar + name + back button */}
//         <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//           <div className="flex items-center gap-3">
//             <img
//               src={currentUser.image}
//               alt={currentUser.name}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
//               className="w-11 h-11 rounded-full object-cover"
//             />
//             <h2 className="text-xl font-semibold text-gray-800">{currentUser.name}</h2>
//           </div>
//           <button
//             onClick={handleBackClick}
//             className="flex items-center gap-2 text-[#055860] font-medium hover:underline cursor-pointer bg-none border-none"
//           >
//             {fromPaymentRequests ? "Back to Payment Requests" : "Back to referrals"}
//             <img className="h-6 w-6" src={UserBackArrow} alt="back" />
//           </button>
//         </div>

//         {/* INFO: large avatar + stats rows */}
//         <div className="flex gap-6 mb-6">
//           <img
//             src={currentUser.image}
//             alt="large"
//             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
//             className="w-[225px] h-[225px] rounded-lg object-cover shadow-md flex-shrink-0"
//           />
//           <div className="flex-1 space-y-3">
//             <div className="bg-gray-200 px-5 py-3 flex justify-between items-center rounded-sm">
//               <span className="text-base font-bold text-gray-800">Balance</span>
//               <span className="text-base font-semibold text-[#055860]">{currentUser.totalBalance}</span>
//             </div>
//             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
//               <span className="text-base text-gray-500">
//                 {activeTab === "coupon" ? "Total Income" : "Total Income"}
//               </span>
//               <span className="text-base font-semibold text-[#055860]">{currentUser.totalIncome}</span>
//             </div>
//             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
//               <span className="text-base text-gray-500">Total Redeem</span>
//               <span className="text-base font-semibold text-[#055860]">{currentUser.totalRedeem}</span>
//             </div>
//             <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
//               <span className="text-base text-gray-500">Total Requests</span>
//               <span className="text-base font-semibold text-[#055860]">{currentUser.totalRequests}</span>
//             </div>
//           </div>
//         </div>

//         {/* TABS */}
//         <div className="flex gap-8 mb-4">
//           {[
//             { key: "points", label: "Point History" },
//             { key: "coupon", label: "Coupon History" },
//             { key: "redeem", label: "Redeem History" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => { setActiveTab(tab.key); setTableSearchTerm(""); }}
//               className={`pb-2 text-sm font-medium transition-colors ${
//                 activeTab === tab.key
//                   ? "border-b-2 border-[#055860] text-[#055860]"
//                   : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* TABLE AREA */}
//         <div className="overflow-x-hidden" style={{ maxHeight: "480px", overflowY: "auto" }}>

//           {/* ── POINTS TAB ── */}
//           {activeTab === "points" && (
//             <>
       
//  <table className="w-full border border-gray-200 text-sm">
//                 <thead className="bg-[#055860] text-white">
//                   <tr>
//                      {/* <th className="p-3 text-left">User</th> */}
//                       <th className="px-4 py-3 text-start">
//                   <div className="ml-4">User</div>
//                 </th>
//                      <th className="p-3 text-center">Installed</th>
//                     <th className="p-3 text-center">Subscribed</th>
//                     <th className="p-3 text-center">Point</th>
//                   </tr>
//                  </thead>

//                 <tbody>
//                   {pointsLoading ? (
//                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//                   ) : filteredData.length > 0 ? (
//                     filteredData.map((item, index) => {
//                       const isApiRow   = pointsData.length > 0;
//                       const userName   = isApiRow ? (item.name || item.userName || "Unknown") : item.user;
//                       const userAvatar = isApiRow
//                         ? (item.image || resolveImageUrl(item.imageUrl) ||
//                            `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`)
//                         : `https://randomuser.me/api/portraits/men/${10 + index}.jpg`;

//                       const fmtDate = (iso) => iso
//                         ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                         : "—";
//                       const fmtTime = (iso) => iso
//                         ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                         : "11:35 PM";

//                       const installedDate  = isApiRow ? fmtDate(item.installedDate)  : (item.installed  || "—");
//                       const installedTime  = isApiRow ? fmtTime(item.installedDate)  : "11:35 PM";
//                       const subscribedDate = isApiRow ? fmtDate(item.subscribedDate) : (item.subscribed || "—");
//                       const subscribedTime = isApiRow ? fmtTime(item.subscribedDate) : "11:35 PM";
//                       const pointVal       = isApiRow ? (item.referralPoints ?? item.points ?? item.point ?? 0) : item.point;

//                       return (
//                         <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
//                           <td className="px-4 py-3 w-[37%]">
//                             <div className="flex items-center gap-3 ml-[15px]">
//                               <img
//                                 src={userAvatar}
//                                 className="w-10 h-10 rounded-full object-cover flex-shrink-0"
//                                 alt="user"
//                                 onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
//                               />
//                               <span className="text-sm text-gray-700 whitespace-nowrap">{userName}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 text-center text-gray-700">
//                             {installedDate}
//                             <div className="text-xs text-gray-400">{installedTime}</div>
//                           </td>
//                           <td className="px-4 py-3 text-center text-gray-700">
//                             {subscribedDate}
//                             <div className="text-xs text-gray-400">{subscribedTime}</div>
//                           </td>
//                           <td className="px-4 py-3 text-center font-medium text-gray-700">{pointVal}</td>
//                         </tr>
//                       );
//                     })
//                   ) : (
//                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
//                   )}
//                 </tbody>
//               </table>

//               {pointsData.length > 0 && pointsTotalPages > 1 && (
//                 <PaginationBar
//                   page={pointsPage}
//                   totalPages={pointsTotalPages}
//                   totalCount={pointsTotalUsers}
//                   onPrev={() => { const p = pointsPage - 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
//                   onNext={() => { const p = pointsPage + 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
//                   onPage={(n) => { setPointsPage(n); fetchPoints(selectedUserId, n); }}
//                 />
//               )}
//             </>
//           )}

//           {/* ── COUPON TAB ── */}
//           {activeTab === "coupon" && (
//             <>
//               <table className="w-full text-sm border border-gray-200">
//                 <thead>
//                   <tr className="bg-[#055860] text-white">
//                     <th className="px-4 py-3 text-center w-[25%]">Coupon</th>
//                     <th className="px-4 py-3 text-center w-[45%]">Date</th>
//                     <th className="px-4 py-3 text-center w-[30%]">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {couponsLoading ? (
//                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td></tr>
//                   ) : filteredData.length > 0 ? (
//                     filteredData.map((item, index) => {
//                       const isApiRow = couponsData.length > 0;

//                       let rawDateStr  = item.date || "";
//                       let prefixLabel = "";
//                       let displayDate = "";
//                       let displayTime = "";

//                       if (isApiRow && rawDateStr) {
//                         const colonIdx = rawDateStr.indexOf(":");
//                         let isoStr = rawDateStr;
//                         if (colonIdx !== -1) {
//                           const possiblePrefix = rawDateStr.slice(0, colonIdx).trim();
//                           if (possiblePrefix && !/^\d/.test(possiblePrefix)) {
//                             prefixLabel = possiblePrefix;
//                             isoStr = rawDateStr.slice(colonIdx + 1).trim();
//                           }
//                         }
//                         const d = new Date(isoStr);
//                         if (!isNaN(d)) {
//                           displayDate = d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
//                           displayTime = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
//                         } else {
//                           displayDate = rawDateStr;
//                         }
//                       }

//                       const rawStatus  = item.status || "";
//                       const isRedeemed = rawStatus.toLowerCase() === "redeemed";
//                       const isExpired  = rawStatus.toLowerCase() === "expired";

//                       const displayStatus = rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1).toLowerCase();

//                       const statusLabel = prefixLabel
//                         ? prefixLabel.charAt(0).toUpperCase() + prefixLabel.slice(1).toLowerCase()
//                         : isRedeemed
//                         ? "Redeemed"
//                         : isExpired
//                         ? "Expired"
//                         : displayStatus;

//                       const statusBadgeClass = isRedeemed
//                         ? "bg-green-100 text-green-700"
//                         : isExpired
//                         ? "bg-red-100 text-red-600"
//                         : "bg-gray-100 text-gray-600";

//                       const couponCode = isApiRow ? item.coupon : null;

//                       return (
//                         <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
//                           <td className="px-4 py-4 text-center">
//                             <div className="flex flex-col items-center justify-center gap-1">
//                               <img src={Coupon} className="w-9 h-9" alt="coupon" />
//                               {couponCode && (
//                                 <span className="text-[10px] font-mono text-[#055860] font-semibold">{couponCode}</span>
//                               )}
//                             </div>
//                           </td>
//                           <td className="px-4 py-4 text-center text-gray-700">
//                             <div className="flex flex-col items-center gap-0.5">
//                               <span className="text-sm">
//                                 {statusLabel} : {displayDate}
//                               </span>
//                               <span className="text-xs text-gray-400">{displayTime}</span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-4 text-center">
//                             <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${statusBadgeClass}`}>
//                               {displayStatus}
//                             </span>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   ) : (
//                     <tr><td colSpan="3" className="p-4 text-center text-gray-500">No results found</td></tr>
//                   )}
//                 </tbody>
//               </table>

//               {couponsData.length > 0 && couponsTotalPages > 1 && (
//                 <PaginationBar
//                   page={couponsPage}
//                   totalPages={couponsTotalPages}
//                   totalCount={couponsTotalCount}
//                   onPrev={() => { const p = couponsPage - 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
//                   onNext={() => { const p = couponsPage + 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
//                   onPage={(n) => { setCouponsPage(n); fetchCoupons(selectedUserId, n); }}
//                 />
//               )}
//             </>
//           )}

//           {/* ── REDEEM TAB ── */}
//           {activeTab === "redeem" && (
//             <>
//               <table className="w-full text-sm border border-gray-200">
//                 <thead>
//                   <tr className="bg-[#055860] text-white">
//                     <th className="px-4 py-3 text-left w-[10%]">#</th>
//                     <th className="px-4 py-3 text-center">Date</th>
//                     <th className="px-4 py-3 text-center">Point</th>
//                     <th className="px-4 py-3 text-center">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {redeemsLoading ? (
//                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//                   ) : filteredData.length > 0 ? (
//                     filteredData.map((item, index) => {
//                       const d = item.date ? new Date(item.date) : null;
//                       const displayDate = d && !isNaN(d)
//                         ? d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                         : item.date || "—";
//                       const displayTime = d && !isNaN(d)
//                         ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                         : "11:35 PM";
//                       const raw = (item.status || "").toLowerCase();
//                       const statusColorMap = {
//                         successful: "bg-green-100 text-green-700",
//                         pending:    "bg-yellow-100 text-yellow-700",
//                         inprogress: "bg-blue-100 text-blue-700",
//                         cancelled:  "bg-red-100 text-red-700",
//                       };
//                       const colorClass    = statusColorMap[raw] || "bg-gray-100 text-gray-700";
//                       const displayStatus = item.status
//                         ? item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase()
//                         : "";

//                       return (
//                         <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
//                           <td className="px-4 py-3 text-left font-semibold text-gray-700">{item.number ?? index + 1}</td>
//                           <td className="px-4 py-3 text-center text-gray-700">
//                             {displayDate}
//                             <div className="text-xs text-gray-400">{displayTime}</div>
//                           </td>
//                           <td className="px-4 py-3 text-center font-semibold text-gray-700">{item.points ?? 0}</td>
//                           <td className="px-4 py-3 text-center">
//                             <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${colorClass}`}>
//                               {displayStatus}
//                             </span>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   ) : (
//                     <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
//                   )}
//                 </tbody>
//               </table>

//               {redeemsTotalPages > 1 && (
//                 <PaginationBar
//                   page={redeemsPage}
//                   totalPages={redeemsTotalPages}
//                   totalCount={redeemsTotalCount}
//                   onPrev={() => { const p = redeemsPage - 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
//                   onNext={() => { const p = redeemsPage + 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
//                   onPage={(n) => { setRedeemsPage(n); fetchRedeems(selectedUserId, n); }}
//                 />
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar.jsx";
import UserBackArrow from "../assets/UserBackArrow.png";
import Coupon from "../assets/Coupon.png";
import { Search } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const BASE_URL = "https://apis.famocare.com/api/referralsystem";

const resolveImageUrl = (imageUrl) => {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  return `https://apis.famocare.com/uploads/${imageUrl}`;
};

export default function PointsHistory() {
  const [activeTab, setActiveTab] = useState("points");
  const [leftSearchTerm, setLeftSearchTerm] = useState("");
  const [tableSearchTerm, setTableSearchTerm] = useState("");

  const [apiUser, setApiUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [pointsData, setPointsData] = useState([]);
  const [pointsPage, setPointsPage] = useState(1);
  const [pointsTotalPages, setPointsTotalPages] = useState(1);
  const [pointsTotalUsers, setPointsTotalUsers] = useState(0);
  const [pointsLoading, setPointsLoading] = useState(false);
  const pointsLimit = 10;

  const [couponsData, setCouponsData] = useState([]);
  const [couponsPage, setCouponsPage] = useState(1);
  const [couponsTotalPages, setCouponsTotalPages] = useState(1);
  const [couponsTotalCount, setCouponsTotalCount] = useState(0);
  const [couponsLoading, setCouponsLoading] = useState(false);
  const couponsLimit = 10;

  const [redeemsData, setRedeemsData] = useState([]);
  const [redeemsPage, setRedeemsPage] = useState(1);
  const [redeemsTotalPages, setRedeemsTotalPages] = useState(1);
  const [redeemsTotalCount, setRedeemsTotalCount] = useState(0);
  const [redeemsLoading, setRedeemsLoading] = useState(false);
  const redeemsLimit = 10;

  const [totalRedeemStatic, setTotalRedeemStatic] = useState(0);

  const location       = useLocation();
  const navigate       = useNavigate();
  const [searchParams] = useSearchParams();

  const fromPaymentRequests = location.state?.fromPaymentRequests || false;

  // ── 3-tier ID resolution: URL param → location.state → localStorage ──
  const urlUid = searchParams.get("uid") ? parseInt(searchParams.get("uid"), 10) : null;

  const selectedUserId =
    urlUid ||
    (location.state?.selectedUserId ? parseInt(location.state.selectedUserId, 10) : null) ||
    (localStorage.getItem("selectedUserId") ? parseInt(localStorage.getItem("selectedUserId"), 10) : null);

  // Fallback display values from localStorage when location.state is gone (refresh)
  const navUserName  = location.state?.selectedUserName  || localStorage.getItem("selectedUserName")  || "";
  const navUserImage = location.state?.selectedUserImage || localStorage.getItem("selectedUserAvatar") || "";
  const navCountry   = location.state?.selectedUserCountry || localStorage.getItem("selectedUserCountry") || "USA";
  const navBalance   = location.state?.selectedUserBalance || localStorage.getItem("selectedUserBalance") || "0";

  // Persist correct uid to localStorage whenever it's resolved from URL
  useEffect(() => {
    if (selectedUserId) {
      localStorage.setItem("selectedUserId", String(selectedUserId));
    }
  }, [selectedUserId]);

  const fetchUserDetail = useCallback(async (userId) => {
    if (!userId) return;
    setLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/referral-users/${userId}`);
      const json = await res.json();
      if (json.success && json.data) {
        setApiUser(json.data);
        // Keep localStorage in sync with actual fetched data
        localStorage.setItem("selectedUserName",    json.data.name    || "");
        localStorage.setItem("selectedUserAvatar",  json.data.imageUrl || "");
        localStorage.setItem("selectedUserBalance", String(json.data.balance || 0));
      }
    } catch (err) {
      console.error("Failed to fetch user detail:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedUserId) fetchUserDetail(selectedUserId);
  }, [selectedUserId]);

  const fetchPoints = useCallback(async (userId, page = 1) => {
    if (!userId) return;
    setPointsLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/referral-users/${userId}/points?page=${page}&limit=${pointsLimit}`);
      const json = await res.json();
      if (json.success) {
        setPointsData(json.data || []);
        setPointsTotalPages(json.totalPages || 1);
        setPointsTotalUsers(json.totalUsers || 0);
        setPointsPage(json.currentPage || 1);
      }
    } catch (err) {
      console.error("Failed to fetch points:", err);
    } finally {
      setPointsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedUserId && activeTab === "points") fetchPoints(selectedUserId, pointsPage);
  }, [selectedUserId, activeTab]);

  const fetchCoupons = useCallback(async (userId, page = 1) => {
    if (!userId) return;
    setCouponsLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/referral-users/${userId}/coupons?page=${page}&limit=${couponsLimit}`);
      const json = await res.json();
      if (json.success) {
        setCouponsData(json.data || []);
        const total = json.totalCoupons || 0;
        setCouponsTotalCount(total);
        setCouponsTotalPages(Math.ceil(total / couponsLimit) || 1);
        setCouponsPage(json.page || 1);
      }
    } catch (err) {
      console.error("Failed to fetch coupons:", err);
    } finally {
      setCouponsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedUserId && activeTab === "coupon") fetchCoupons(selectedUserId, couponsPage);
  }, [selectedUserId, activeTab]);

  const fetchRedeems = useCallback(async (userId, page = 1) => {
    if (!userId) return;
    setRedeemsLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${page}&limit=${redeemsLimit}`);
      const json = await res.json();
      if (json.success) {
        setRedeemsData(json.data || []);
        const total = json.totalRecords || 0;
        setRedeemsTotalCount(total);
        setRedeemsTotalPages(Math.ceil(total / redeemsLimit) || 1);
        setRedeemsPage(json.page || 1);
      }
    } catch (err) {
      console.error("Failed to fetch redeems:", err);
    } finally {
      setRedeemsLoading(false);
    }
  }, []);

  const fetchTotalRedeemOnLoad = useCallback(async (userId) => {
    if (!userId) return;
    try {
      const res1  = await fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=1&limit=${redeemsLimit}`);
      const json1 = await res1.json();
      if (!json1.success) return;
      const totalRecords = json1.totalRecords || 0;
      const totalPages   = Math.ceil(totalRecords / redeemsLimit) || 1;
      let allData = [...(json1.data || [])];
      if (totalPages > 1) {
        const pageRequests = [];
        for (let p = 2; p <= totalPages; p++) {
          pageRequests.push(
            fetch(`${BASE_URL}/referral-users/${userId}/redeems?page=${p}&limit=${redeemsLimit}`)
              .then((r) => r.json())
              .then((j) => (j.success ? j.data || [] : []))
          );
        }
        const rest = await Promise.all(pageRequests);
        rest.forEach((pageData) => { allData = allData.concat(pageData); });
      }
      const total = allData.reduce((sum, item) => sum + (item.points ?? 0), 0);
      setTotalRedeemStatic(total);
    } catch (err) {
      console.error("Failed to fetch total redeem on load:", err);
    }
  }, []);

  useEffect(() => {
    if (selectedUserId) fetchTotalRedeemOnLoad(selectedUserId);
  }, [selectedUserId]);

  useEffect(() => {
    if (selectedUserId && activeTab === "redeem") fetchRedeems(selectedUserId, redeemsPage);
  }, [selectedUserId, activeTab]);

  const totalUsersCount = pointsTotalUsers;
  const totalIncomeFromPoints = pointsData.reduce(
    (sum, item) => sum + (item.referralPoints ?? item.points ?? 0), 0
  );

  const resolvedApiAvatar = apiUser?.imageUrl ? resolveImageUrl(apiUser.imageUrl) : null;
  const fallbackName  = apiUser?.name || navUserName || "U";
  const fallbackImage = navUserImage  || null;
  const avatarSrc =
    resolvedApiAvatar ||
    fallbackImage ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=055860&color=fff`;

  const rawBalance    = apiUser != null ? Number(apiUser.balance) : null;
  const displayBalance =
    rawBalance !== null
      ? `${rawBalance.toLocaleString()}$`
      : navBalance
        ? `${Number(navBalance).toLocaleString()}$`
        : "0$";

  const currentUser = {
    name:          apiUser?.name    || navUserName || "User",
    image:         avatarSrc,
    country:       apiUser?.country || navCountry  || "USA",
    users:         totalUsersCount,
    balance:       displayBalance,
    totalBalance:  displayBalance,
    totalIncome:   `${totalIncomeFromPoints.toLocaleString()} $`,
    totalRedeem:   `${totalRedeemStatic.toLocaleString()} $`,
    totalRequests: apiUser != null ? apiUser.totalRequests : 0,
  };

  const getFilteredData = () => {
    if (activeTab === "points") {
      return pointsData.filter((item) => {
        const name = item.name || item.userName || "";
        return name.toLowerCase().includes(tableSearchTerm.toLowerCase());
      });
    } else if (activeTab === "coupon") {
      return couponsData.filter((item) => {
        const dateStr   = item.date   || "";
        const statusStr = item.status || "";
        const couponStr = item.coupon || "";
        return (
          dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())   ||
          statusStr.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
          couponStr.toLowerCase().includes(tableSearchTerm.toLowerCase())
        );
      });
    } else if (activeTab === "redeem") {
      return redeemsData.filter((item) => {
        const dateStr  = item.date   || "";
        const statStr  = item.status || "";
        const pointStr = String(item.points ?? "");
        return (
          dateStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
          statStr.toLowerCase().includes(tableSearchTerm.toLowerCase())  ||
          pointStr.includes(tableSearchTerm)
        );
      });
    }
    return [];
  };

  const filteredData = getFilteredData();

  const getPageNumbers = (currentPage, totalPages) => {
    let start = Math.max(1, currentPage - 1);
    let end   = Math.min(totalPages, start + 3);
    if (end - start < 3) start = Math.max(1, end - 3);
    const pages = [];
    for (let n = start; n <= end; n++) pages.push(n);
    return pages;
  };

  const handleBackClick = () => {
    if (fromPaymentRequests) {
      navigate("/payment-requests");
    } else {
      const returnPage = location.state?.fromPage || localStorage.getItem("currentSidebarPage") || "/marketing-agents";
      // Preserve uid in URL so back page also survives refresh
      navigate(
        selectedUserId ? `${returnPage}?uid=${selectedUserId}` : returnPage,
        { state: { selectedUserId, selectedUserName: currentUser.name } }
      );
    }
  };

  const PaginationBar = ({ page, totalPages, totalCount, onPrev, onNext, onPage }) => (
    <div className="flex items-center justify-between px-2 py-3 border-t mt-1">
      <p className="text-sm text-gray-600">
        Page {page} of {totalPages} &nbsp;·&nbsp; {totalCount} total
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={page === 1}
          className={`w-6 h-6 flex items-center justify-center rounded-full ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
        >
          <span className="text-white text-[20px] leading-none mt-[-4px]">‹</span>
        </button>
        {getPageNumbers(page, totalPages).map((n) => (
          <span key={n} onClick={() => onPage(n)}
            className={`cursor-pointer text-sm ${page === n ? "text-[#055860] font-semibold" : "text-gray-500"}`}>
            {n}
          </span>
        ))}
        <button
          onClick={onNext}
          disabled={page === totalPages}
          className={`w-6 h-6 flex items-center justify-center rounded-full ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#055860] cursor-pointer"}`}
        >
          <span className="text-white text-[20px] leading-none mt-[-4px]">›</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
      <Sidebar isCurrentPageFreeAllUsers={true} />

      {/* LEFT PANEL */}
      <div className="min-h-screen h-[969px] w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search..."
          value={leftSearchTerm}
          onChange={(e) => setLeftSearchTerm(e.target.value)}
          className="h-[40px] w-[315px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[280px] text-[#055860]" strokeWidth={2} />

        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          <div className="flex flex-col p-2 mt-4 rounded-md bg-[#E8F0F6] border border-[#055860]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={currentUser.image}
                  alt={currentUser.name}
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
                  className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                />
                <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
                  {loading ? "Loading..." : currentUser.name}
                </p>
              </div>
              <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
            </div>
            <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
              <span className="text-gray-500">Users: <span className="text-[#055860]">{currentUser.users}</span></span>
              <span className="text-gray-500">Balance: <span className="text-[#055860]">{currentUser.balance}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2.5 bg-white mb-5 overflow-hidden">

        {/* TOP: avatar + name + back button */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src={currentUser.image}
              alt={currentUser.name}
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
              className="w-11 h-11 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">{currentUser.name}</h2>
          </div>
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-[#055860] font-medium hover:underline cursor-pointer bg-none border-none"
          >
            {fromPaymentRequests ? "Back to Payment Requests" : "Back to referrals"}
            <img className="h-6 w-6" src={UserBackArrow} alt="back" />
          </button>
        </div>

        {/* INFO: large avatar + stats rows */}
        <div className="flex gap-6 mb-6">
          <img
            src={currentUser.image}
            alt="large"
            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=055860&color=fff`; }}
            className="w-[225px] h-[225px] rounded-lg object-cover shadow-md flex-shrink-0"
          />
          <div className="flex-1 space-y-3">
            <div className="bg-gray-200 px-5 py-3 flex justify-between items-center rounded-sm">
              <span className="text-base font-bold text-gray-800">Balance</span>
              <span className="text-base font-semibold text-[#055860]">{currentUser.totalBalance}</span>
            </div>
            <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
              <span className="text-base text-gray-500">Total Income</span>
              <span className="text-base font-semibold text-[#055860]">{currentUser.totalIncome}</span>
            </div>
            <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
              <span className="text-base text-gray-500">Total Redeem</span>
              <span className="text-base font-semibold text-[#055860]">{currentUser.totalRedeem}</span>
            </div>
            <div className="bg-gray-100 px-5 py-3 flex justify-between items-center rounded-sm">
              <span className="text-base text-gray-500">Total Requests</span>
              <span className="text-base font-semibold text-[#055860]">{currentUser.totalRequests}</span>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-8 mb-4">
          {[
            { key: "points", label: "Point History"  },
            { key: "coupon", label: "Coupon History" },
            { key: "redeem", label: "Redeem History" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setTableSearchTerm(""); }}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "border-b-2 border-[#055860] text-[#055860]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TABLE AREA */}
        <div className="overflow-x-hidden" style={{ maxHeight: "480px", overflowY: "auto" }}>

          {/* ── POINTS TAB ── */}
          {activeTab === "points" && (
            <>
              <table className="w-full border border-gray-200 text-sm">
                <thead className="bg-[#055860] text-white">
                  <tr>
                    <th className="px-4 py-3 text-start"><div className="ml-4">User</div></th>
                    <th className="p-3 text-center">Installed</th>
                    <th className="p-3 text-center">Subscribed</th>
                    <th className="p-3 text-center">Point</th>
                  </tr>
                </thead>
                <tbody>
                  {pointsLoading ? (
                    <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
                  ) : filteredData.length > 0 ? (
                    filteredData.map((item, index) => {
                      const isApiRow   = pointsData.length > 0;
                      const userName   = isApiRow ? (item.name || item.userName || "Unknown") : item.user;
                      const userAvatar = isApiRow
                        ? (item.image || resolveImageUrl(item.imageUrl) ||
                           `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`)
                        : `https://randomuser.me/api/portraits/men/${10 + index}.jpg`;

                      const fmtDate = (iso) => iso
                        ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
                        : "—";
                      const fmtTime = (iso) => iso
                        ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                        : "11:35 PM";

                      const installedDate  = isApiRow ? fmtDate(item.installedDate)  : (item.installed  || "—");
                      const installedTime  = isApiRow ? fmtTime(item.installedDate)  : "11:35 PM";
                      const subscribedDate = isApiRow ? fmtDate(item.subscribedDate) : (item.subscribed || "—");
                      const subscribedTime = isApiRow ? fmtTime(item.subscribedDate) : "11:35 PM";
                      const pointVal       = isApiRow ? (item.referralPoints ?? item.points ?? item.point ?? 0) : item.point;

                      return (
                        <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 w-[37%]">
                            <div className="flex items-center gap-3 ml-[15px]">
                              <img
                                src={userAvatar}
                                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                                alt="user"
                                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
                              />
                              <span className="text-sm text-gray-700 whitespace-nowrap">{userName}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700">
                            {installedDate}
                            <div className="text-xs text-gray-400">{installedTime}</div>
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700">
                            {subscribedDate}
                            <div className="text-xs text-gray-400">{subscribedTime}</div>
                          </td>
                          <td className="px-4 py-3 text-center font-medium text-gray-700">{pointVal}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
                  )}
                </tbody>
              </table>
              {pointsData.length > 0 && pointsTotalPages > 1 && (
                <PaginationBar
                  page={pointsPage}
                  totalPages={pointsTotalPages}
                  totalCount={pointsTotalUsers}
                  onPrev={() => { const p = pointsPage - 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
                  onNext={() => { const p = pointsPage + 1; setPointsPage(p); fetchPoints(selectedUserId, p); }}
                  onPage={(n) => { setPointsPage(n); fetchPoints(selectedUserId, n); }}
                />
              )}
            </>
          )}

          {/* ── COUPON TAB ── */}
          {activeTab === "coupon" && (
            <>
              <table className="w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-[#055860] text-white">
                    <th className="px-4 py-3 text-center w-[25%]">Coupon</th>
                    <th className="px-4 py-3 text-center w-[45%]">Date</th>
                    <th className="px-4 py-3 text-center w-[30%]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {couponsLoading ? (
                    <tr><td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td></tr>
                  ) : filteredData.length > 0 ? (
                    filteredData.map((item, index) => {
                      const isApiRow = couponsData.length > 0;
                      let rawDateStr  = item.date || "";
                      let prefixLabel = "";
                      let displayDate = "";
                      let displayTime = "";

                      if (isApiRow && rawDateStr) {
                        const colonIdx = rawDateStr.indexOf(":");
                        let isoStr = rawDateStr;
                        if (colonIdx !== -1) {
                          const possiblePrefix = rawDateStr.slice(0, colonIdx).trim();
                          if (possiblePrefix && !/^\d/.test(possiblePrefix)) {
                            prefixLabel = possiblePrefix;
                            isoStr = rawDateStr.slice(colonIdx + 1).trim();
                          }
                        }
                        const d = new Date(isoStr);
                        if (!isNaN(d)) {
                          displayDate = d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
                          displayTime = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                        } else {
                          displayDate = rawDateStr;
                        }
                      }

                      const rawStatus  = item.status || "";
                      const isRedeemed = rawStatus.toLowerCase() === "redeemed";
                      const isExpired  = rawStatus.toLowerCase() === "expired";
                      const displayStatus = rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1).toLowerCase();
                      const statusLabel = prefixLabel
                        ? prefixLabel.charAt(0).toUpperCase() + prefixLabel.slice(1).toLowerCase()
                        : isRedeemed ? "Redeemed" : isExpired ? "Expired" : displayStatus;
                      const statusBadgeClass = isRedeemed
                        ? "bg-green-100 text-green-700"
                        : isExpired
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600";
                      const couponCode = isApiRow ? item.coupon : null;

                      return (
                        <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-4 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                              <img src={Coupon} className="w-9 h-9" alt="coupon" />
                              {couponCode && (
                                <span className="text-[10px] font-mono text-[#055860] font-semibold">{couponCode}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center text-gray-700">
                            <div className="flex flex-col items-center gap-0.5">
                              <span className="text-sm">{statusLabel} : {displayDate}</span>
                              <span className="text-xs text-gray-400">{displayTime}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${statusBadgeClass}`}>
                              {displayStatus}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr><td colSpan="3" className="p-4 text-center text-gray-500">No results found</td></tr>
                  )}
                </tbody>
              </table>
              {couponsData.length > 0 && couponsTotalPages > 1 && (
                <PaginationBar
                  page={couponsPage}
                  totalPages={couponsTotalPages}
                  totalCount={couponsTotalCount}
                  onPrev={() => { const p = couponsPage - 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
                  onNext={() => { const p = couponsPage + 1; setCouponsPage(p); fetchCoupons(selectedUserId, p); }}
                  onPage={(n) => { setCouponsPage(n); fetchCoupons(selectedUserId, n); }}
                />
              )}
            </>
          )}

          {/* ── REDEEM TAB ── */}
          {activeTab === "redeem" && (
            <>
              <table className="w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-[#055860] text-white">
                    <th className="px-4 py-3 text-left w-[10%]">#</th>
                    <th className="px-4 py-3 text-center">Date</th>
                    <th className="px-4 py-3 text-center">Point</th>
                    <th className="px-4 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {redeemsLoading ? (
                    <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
                  ) : filteredData.length > 0 ? (
                    filteredData.map((item, index) => {
                      const d = item.date ? new Date(item.date) : null;
                      const displayDate = d && !isNaN(d)
                        ? d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
                        : item.date || "—";
                      const displayTime = d && !isNaN(d)
                        ? d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                        : "11:35 PM";
                      const raw = (item.status || "").toLowerCase();
                      const statusColorMap = {
                        successful: "bg-green-100 text-green-700",
                        pending:    "bg-yellow-100 text-yellow-700",
                        inprogress: "bg-blue-100 text-blue-700",
                        cancelled:  "bg-red-100 text-red-700",
                      };
                      const colorClass    = statusColorMap[raw] || "bg-gray-100 text-gray-700";
                      const displayStatus = item.status
                        ? item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase()
                        : "";

                      return (
                        <tr key={item.id || index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 text-left font-semibold text-gray-700">{item.number ?? index + 1}</td>
                          <td className="px-4 py-3 text-center text-gray-700">
                            {displayDate}
                            <div className="text-xs text-gray-400">{displayTime}</div>
                          </td>
                          <td className="px-4 py-3 text-center font-semibold text-gray-700">{item.points ?? 0}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`inline-block px-6 py-1.5 text-xs font-medium rounded-sm ${colorClass}`}>
                              {displayStatus}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr><td colSpan="4" className="p-4 text-center text-gray-500">No results found</td></tr>
                  )}
                </tbody>
              </table>
              {redeemsTotalPages > 1 && (
                <PaginationBar
                  page={redeemsPage}
                  totalPages={redeemsTotalPages}
                  totalCount={redeemsTotalCount}
                  onPrev={() => { const p = redeemsPage - 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
                  onNext={() => { const p = redeemsPage + 1; setRedeemsPage(p); fetchRedeems(selectedUserId, p); }}
                  onPage={(n) => { setRedeemsPage(n); fetchRedeems(selectedUserId, n); }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}