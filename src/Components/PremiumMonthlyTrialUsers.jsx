

// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import Groups from "../assets/Groups.png";
// // // // import BackArrow from "../assets/BackArrow.png";
// // // // import { Search } from "lucide-react";
// // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // const BASE_URL = "https://referralapis.appistan.co/api";

// // // // export default function MonthlyTrialUsers() {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [SelectedUserName, SetSelectedUserName] = useState("");
// // // //   const itemsPerPage = 10;

// // // //   // ── Left panel user (from navigation / localStorage) ─────────────────────
// // // //   const selectedUserId =
// // // //     location.state?.selectedUserId ||
// // // //     parseInt(localStorage.getItem("selectedUserId")) ||
// // // //     null;

// // // //   const leftUser = {
// // // //     name:    location.state?.selectedUserName    || localStorage.getItem("selectedUserName")    || "User",
// // // //     balance: location.state?.selectedUserBalance || localStorage.getItem("selectedUserBalance") || "$0",
// // // //     country: location.state?.selectedUserCountry || localStorage.getItem("selectedUserCountry") || "USA",
// // // //     image:   location.state?.selectedUserImage   || localStorage.getItem("selectedUserImage")   ||
// // // //       `https://ui-avatars.com/api/?name=User&background=055860&color=fff`,
// // // //   };

// // // //   // ── Stats state (from /referrals/details/get) ─────────────────────────────
// // // //   const [stats, setStats] = useState({
// // // //     total: 0, thisMonth: 0, thisWeek: 0, revenue: 0,
// // // //   });
// // // //   const [statsLoading, setStatsLoading] = useState(false);

// // // //   // ── Table state (from /referrals/users/details) ───────────────────────────
// // // //   const [tableData, setTableData]         = useState([]);
// // // //   const [totalRecords, setTotalRecords]   = useState(0);
// // // //   const [totalPages, setTotalPages]       = useState(1);
// // // //   const [tableLoading, setTableLoading]   = useState(false);

// // // //   // ── Fetch stats ───────────────────────────────────────────────────────────
// // // //   const fetchStats = useCallback(async () => {
// // // //     setStatsLoading(true);
// // // //     try {
// // // //       const res  = await fetch(`${BASE_URL}/referrals/details/get`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({}),
// // // //       });
// // // //       const json = await res.json();
// // // //       if (json.success && json.data?.monthlyTrialUsers) {
// // // //         const m = json.data.monthlyTrialUsers;
// // // //         setStats({
// // // //           total:      m.total      ?? 0,
// // // //           thisMonth:  m.thisMonth  ?? 0,
// // // //           thisWeek:   m.thisWeek   ?? 0,
// // // //           revenue:    m.revenue    ?? 0,
// // // //         });
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch stats:", err);
// // // //     } finally {
// // // //       setStatsLoading(false);
// // // //     }
// // // //   }, []);

// // // //   // ── Fetch table data ──────────────────────────────────────────────────────
// // // //   const fetchTableData = useCallback(async (page = 1) => {
// // // //     if (!selectedUserId) return;
// // // //     setTableLoading(true);
// // // //     try {
// // // //       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           uid:    selectedUserId,
// // // //           type:   "monthly",
// // // //           status: "trial",
// // // //           sort:   "subscribedDate",
// // // //           size:   itemsPerPage,
// // // //           page,
// // // //         }),
// // // //       });
// // // //       const json = await res.json();
// // // //       if (json.success && json.metrics) {
// // // //         setTableData(json.metrics.data || []);
// // // //         setTotalRecords(json.pagination?.total     || 0);
// // // //         setTotalPages(json.pagination?.totalPages  || 1);
// // // //         setCurrentPage(json.pagination?.page       || 1);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch table data:", err);
// // // //     } finally {
// // // //       setTableLoading(false);
// // // //     }
// // // //   }, [selectedUserId]);

// // // //   // ── On mount: fetch both ──────────────────────────────────────────────────
// // // //   useEffect(() => {
// // // //     fetchStats();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (selectedUserId) fetchTableData(1);
// // // //   }, [selectedUserId]);

// // // //   // ── Client-side search filter on current page data ────────────────────────
// // // //   const filteredData = tableData.filter((row) => {
// // // //     const name = row.name || row.userName || "";
// // // //     return name.toLowerCase().includes(searchTerm.toLowerCase());
// // // //   });

// // // //   // ── Pagination handlers ───────────────────────────────────────────────────
// // // //   const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handlePageClick = (n) => { if (n !== currentPage)      { setCurrentPage(n); fetchTableData(n); } };

// // // //   const pageNumbers = [];
// // // //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// // // //   // ── Date / time formatter ─────────────────────────────────────────────────
// // // //   const fmtDate = (iso) => iso
// // // //     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// // // //     : "—";
// // // //   const fmtTime = (iso) => iso
// // // //     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// // // //     : "—";

// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const endIndex   = startIndex + itemsPerPage;

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar isCurrentPageFreeAllUsers={false} />

// // // //       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
// // // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search..."
// // // //           value={searchTerm}
// // // //           onChange={(e) => { setSearchTerm(e.target.value); }}
// // // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // //         />
// // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

// // // //         <div className="absolute top-5 right-3">
// // // //           <img
// // // //             className="h-6 w-6 cursor-pointer"
// // // //             src={Groups}
// // // //             alt="Groups Icon"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //           />
// // // //           {isOpen && (
// // // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // // //               {["Active Users","Total Users","Monthly Users","Weekly Users",
// // // //                 "Total Sales","Monthly Sales","Weekly Sales","Balance"].map((item) => (
// // // //                 <button key={item} className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// // // //                   {item}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Selected user card */}
// // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// // // //             <div className="flex items-center justify-between mb-2">
// // // //               <div className="flex items-center gap-2">
// // // //                 <img
// // // //                   src={leftUser.image}
// // // //                   alt={leftUser.name}
// // // //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`; }}
// // // //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// // // //                 />
// // // //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// // // //                   {leftUser.name}
// // // //                 </p>
// // // //               </div>
// // // //               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
// // // //             </div>
// // // //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// // // //               <span className="text-gray-500">
// // // //                 Users: <span className="text-[#055860]">{stats.total}</span>
// // // //               </span>
// // // //               <span className="text-gray-500">
// // // //                 Balance: <span className="text-[#055860]">{leftUser.balance}</span>
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
// // // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div className="flex items-center gap-4">
// // // //             <img
// // // //               src={leftUser.image}
// // // //               alt={leftUser.name}
// // // //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`; }}
// // // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // // //             />
// // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // // //               {leftUser.name}
// // // //             </h2>
// // // //           </div>
// // // //           <div className="relative w-full max-w-sm">
// // // //             <Search
// // // //               size={18}
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// // // //               strokeWidth={2}
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search..."
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Stats bar — from /referrals/details/get → monthlyTrialUsers */}
// // // //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// // // //           >
// // // //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// // // //           </button>
// // // //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// // // //                 <div className="text-md font-semibold leading-[200%]">
// // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">
// // // //                   {statsLoading ? "..." : stats.total}
// // // //                 </div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">
// // // //                   {statsLoading ? "..." : stats.thisMonth}
// // // //                 </div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">
// // // //                   {statsLoading ? "..." : stats.thisWeek}
// // // //                 </div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">
// // // //                   {statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}
// // // //                 </div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Table — from /referrals/users/details */}
// // // //         <div className="flex-1 overflow-x-auto">
// // // //           <table className="w-full border border-gray-200 rounded-md text-sm">
// // // //             <thead className="h-[45px] bg-[#055860] text-white">
// // // //               <tr>
// // // //                 <th className="p-2 text-left">User</th>
// // // //                 <th className="p-2 text-center">Installed</th>
// // // //                 <th className="p-2 text-center">Trial Start</th>
// // // //                 <th className="p-2 text-center">Trial End</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {tableLoading ? (
// // // //                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// // // //               ) : filteredData.length > 0 ? (
// // // //                 filteredData.map((row, idx) => {
// // // //                   const userName   = row.name || row.userName || "Unknown";
// // // //                   const userAvatar = row.image || row.imageUrl ||
// // // //                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

// // // //                   return (
// // // //                     <tr key={row.id || idx} className="border-b">
// // // //                       <td className="p-4">
// // // //                         <div className="flex items-center gap-2">
// // // //                           <img
// // // //                             src={userAvatar}
// // // //                             alt="User"
// // // //                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// // // //                             className="w-8 h-8 rounded-full object-cover"
// // // //                           />
// // // //                           {userName}
// // // //                         </div>
// // // //                       </td>
// // // //                       {/* Installed */}
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.installedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       {/* Trial Start */}
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       {/* Trial End */}
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
// // // //                       </td>
// // // //                     </tr>
// // // //                   );
// // // //                 })
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// // // //           <p className="text-sm text-gray-600 ml-[-13px]">
// // // //             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
// // // //             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
// // // //           </p>
// // // //           <div className="flex items-center gap-2 mr-[-19px]">
// // // //             <button
// // // //               onClick={handlePrevPage}
// // // //               disabled={currentPage === 1}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// // // //             </button>

// // // //             {pageNumbers.map((n) => (
// // // //               <span
// // // //                 key={n}
// // // //                 onClick={() => handlePageClick(n)}
// // // //                 className={`cursor-pointer ${
// // // //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// // // //                 }`}
// // // //               >
// // // //                 {n}
// // // //               </span>
// // // //             ))}

// // // //             {totalPages > 4 && (
// // // //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// // // //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// // // //               </button>
// // // //             )}

// // // //             <button
// // // //               onClick={handleNextPage}
// // // //               disabled={currentPage === totalPages}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }








// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import Groups from "../assets/Groups.png";
// // // // import BackArrow from "../assets/BackArrow.png";
// // // // import { Search } from "lucide-react";
// // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // const BASE_URL = "https://referralapis.appistan.co/api";

// // // // export default function MonthlyTrialUsers() {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   // const [isOpen, setIsOpen] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const itemsPerPage = 10;

// // // //   const selectedUserId =
// // // //     location.state?.selectedUserId ||
// // // //     parseInt(localStorage.getItem("selectedUserId")) ||
// // // //     null;

// // // //   const selectedUserName_nav =
// // // //     location.state?.selectedUserName ||
// // // //     localStorage.getItem("selectedUserName") ||
// // // //     "User";

// // // //   // ── FIX: read selectedUserAvatar (not selectedUserImage) ─────────────────
// // // //   // MarketingAgents passes it as selectedUserAvatar in subPageState
// // // //   const selectedUserAvatar = location.state?.selectedUserAvatar
// // // //     ? location.state.selectedUserAvatar
// // // //     : location.state?.selectedUserId
// // // //       ? `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`
// // // //       : localStorage.getItem("selectedUserAvatar") ||
// // // //         `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

// // // //   const selectedUserBalance =
// // // //     location.state?.selectedUserBalance ||
// // // //     localStorage.getItem("selectedUserBalance") ||
// // // //     "0";

// // // //   const selectedUserCountry =
// // // //     location.state?.selectedUserCountry ||
// // // //     localStorage.getItem("selectedUserCountry") ||
// // // //     "USA";

// // // //   // ── FIX: Always overwrite localStorage with latest navigation state ───────
// // // //   useEffect(() => {
// // // //     if (location.state?.selectedUserId)
// // // //       localStorage.setItem("selectedUserId", location.state.selectedUserId);
// // // //     if (location.state?.selectedUserName)
// // // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // // //     if (location.state?.selectedUserBalance)
// // // //       localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
// // // //     if (location.state?.selectedUserCountry)
// // // //       localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);

// // // //     // ── FIX: Always update avatar — clear stale if new user arrived ───────
// // // //     if (location.state?.selectedUserAvatar) {
// // // //       localStorage.setItem("selectedUserAvatar", location.state.selectedUserAvatar);
// // // //     } else if (location.state?.selectedUserId) {
// // // //       localStorage.removeItem("selectedUserAvatar");
// // // //     }
// // // //   }, []);

// // // //   const leftUser = {
// // // //     name:    selectedUserName_nav,
// // // //     balance: selectedUserBalance,
// // // //     country: selectedUserCountry,
// // // //     image:   selectedUserAvatar, // ── FIX: now correctly uses selectedUserAvatar
// // // //   };

// // // //   // ── Stats state ───────────────────────────────────────────────────────────
// // // //   const [stats, setStats] = useState({
// // // //     total: 0, thisMonth: 0, thisWeek: 0, revenue: 0,
// // // //   });
// // // //   const [statsLoading, setStatsLoading] = useState(false);

// // // //   // ── Table state ───────────────────────────────────────────────────────────
// // // //   const [tableData, setTableData]       = useState([]);
// // // //   const [totalRecords, setTotalRecords] = useState(0);
// // // //   const [totalPages, setTotalPages]     = useState(1);
// // // //   const [tableLoading, setTableLoading] = useState(false);

// // // //   const fetchStats = useCallback(async () => {
// // // //     setStatsLoading(true);
// // // //     try {
// // // //       const res  = await fetch(`${BASE_URL}/referrals/details/get`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({}),
// // // //       });
// // // //       const json = await res.json();
// // // //       if (json.success && json.data?.monthlyTrialUsers) {
// // // //         const m = json.data.monthlyTrialUsers;
// // // //         setStats({
// // // //           total:     m.total     ?? 0,
// // // //           thisMonth: m.thisMonth ?? 0,
// // // //           thisWeek:  m.thisWeek  ?? 0,
// // // //           revenue:   m.revenue   ?? 0,
// // // //         });
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch stats:", err);
// // // //     } finally {
// // // //       setStatsLoading(false);
// // // //     }
// // // //   }, []);

// // // //   const fetchTableData = useCallback(async (page = 1) => {
// // // //     if (!selectedUserId) return;
// // // //     setTableLoading(true);
// // // //     try {
// // // //       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           uid:    selectedUserId,
// // // //           type:   "monthly",
// // // //           status: "trial",
// // // //           sort:   "subscribedDate",
// // // //           size:   itemsPerPage,
// // // //           page,
// // // //         }),
// // // //       });
// // // //       const json = await res.json();
// // // //       if (json.success && json.metrics) {
// // // //         setTableData(json.metrics.data || []);
// // // //         setTotalRecords(json.pagination?.total    || 0);
// // // //         setTotalPages(json.pagination?.totalPages || 1);
// // // //         setCurrentPage(json.pagination?.page      || 1);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch table data:", err);
// // // //     } finally {
// // // //       setTableLoading(false);
// // // //     }
// // // //   }, [selectedUserId]);

// // // //   useEffect(() => { fetchStats(); }, []);
// // // //   useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);

// // // //   const filteredData = tableData.filter((row) => {
// // // //     const name = row.name || row.userName || "";
// // // //     return name.toLowerCase().includes(searchTerm.toLowerCase());
// // // //   });

// // // //   const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handlePageClick = (n) => { if (n !== currentPage)      { setCurrentPage(n); fetchTableData(n); } };

// // // //   const pageNumbers = [];
// // // //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// // // //   const fmtDate = (iso) => iso
// // // //     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// // // //     : "—";
// // // //   const fmtTime = (iso) => iso
// // // //     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// // // //     : "—";

// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const endIndex   = startIndex + itemsPerPage;

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar isCurrentPageFreeAllUsers={false} />

// // // //       {/* LEFT PANEL */}
// // // //       <div className="h-full w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search..."
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // //         />
// // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// // // //         {/* Selected user card */}
// // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// // // //             <div className="flex items-center justify-between mb-2">
// // // //               <div className="flex items-center gap-2">
// // // //                 <img
// // // //                   src={leftUser.image}
// // // //                   alt={leftUser.name}
// // // //                   onError={(e) => {
// // // //                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // // //                   }}
// // // //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// // // //                 />
// // // //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// // // //                   {leftUser.name}
// // // //                 </p>
// // // //               </div>
// // // //               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
// // // //             </div>
// // // //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// // // //               <span className="text-gray-500">
// // // //                 Users: <span className="text-[#055860]">{stats.total}</span>
// // // //               </span>
// // // //               <span className="text-gray-500">
// // // //                 Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT PANEL */}
// // // //       {/* <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]"> */}
// // // //             <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div className="flex items-center gap-4">
// // // //             <img
// // // //               src={leftUser.image}
// // // //               alt={leftUser.name}
// // // //               onError={(e) => {
// // // //                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // // //               }}
// // // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // // //             />
// // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // // //               {leftUser.name}
// // // //             </h2>
// // // //           </div>
// // // //           <div className="relative w-full max-w-sm">
// // // //             <Search
// // // //               size={18}
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// // // //               strokeWidth={2}
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search..."
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Stats bar */}
// // // //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// // // //           >
// // // //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// // // //           </button>
// // // //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// // // //                 <div className="text-md font-semibold leading-[200%]">
// // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.total}</div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Table */}
// // // //         <div className="flex-1 overflow-x-auto">
// // // //           <table className="w-full border border-gray-200 rounded-md text-sm">
// // // //             <thead className="h-[45px] bg-[#055860] text-white">
// // // //               <tr>
// // // //                 <th className="p-2 text-left">User</th>
// // // //                 <th className="p-2 text-center">Installed</th>
// // // //                 <th className="p-2 text-center">Trial Start</th>
// // // //                 <th className="p-2 text-center">Trial End</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {tableLoading ? (
// // // //                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// // // //               ) : filteredData.length > 0 ? (
// // // //                 filteredData.map((row, idx) => {
// // // //                   const userName   = row.name || row.userName || "Unknown";
// // // //                   const userAvatar = row.image || row.imageUrl ||
// // // //                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

// // // //                   return (
// // // //                     <tr key={row.id || idx} className="border-b">
// // // //                       <td className="p-4">
// // // //                         <div className="flex items-center gap-2">
// // // //                           <img
// // // //                             src={userAvatar}
// // // //                             alt="User"
// // // //                             onError={(e) => {
// // // //                               e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
// // // //                             }}
// // // //                             className="w-8 h-8 rounded-full object-cover"
// // // //                           />
// // // //                           {userName}
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.installedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
// // // //                       </td>
// // // //                     </tr>
// // // //                   );
// // // //                 })
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// // // //           <p className="text-sm text-gray-600 ml-[-13px]">
// // // //             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
// // // //             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
// // // //           </p>
// // // //           <div className="flex items-center gap-2 mr-[-19px]">
// // // //             <button
// // // //               onClick={handlePrevPage}
// // // //               disabled={currentPage === 1}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// // // //             </button>

// // // //             {pageNumbers.map((n) => (
// // // //               <span
// // // //                 key={n}
// // // //                 onClick={() => handlePageClick(n)}
// // // //                 className={`cursor-pointer ${
// // // //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// // // //                 }`}
// // // //               >
// // // //                 {n}
// // // //               </span>
// // // //             ))}

// // // //             {totalPages > 4 && (
// // // //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// // // //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// // // //               </button>
// // // //             )}

// // // //             <button
// // // //               onClick={handleNextPage}
// // // //               disabled={currentPage === totalPages}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import Groups from "../assets/Groups.png";
// // // // import BackArrow from "../assets/BackArrow.png";
// // // // import { Search } from "lucide-react";
// // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // const BASE_URL = "https://referralapis.appistan.co/api";
// // // // const BASE_URL = "https://apis.famocare.com/api/referralsystem";


// // // // export default function MonthlyTrialUsers() {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const itemsPerPage = 10;

// // // //   const selectedUserId =
// // // //     location.state?.selectedUserId ||
// // // //     parseInt(localStorage.getItem("selectedUserId")) ||
// // // //     null;

// // // //   const selectedUserName_nav =
// // // //     location.state?.selectedUserName ||
// // // //     localStorage.getItem("selectedUserName") ||
// // // //     "User";

// // // //   const selectedUserAvatar = location.state?.selectedUserAvatar
// // // //     ? location.state.selectedUserAvatar
// // // //     : location.state?.selectedUserId
// // // //       ? `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`
// // // //       : localStorage.getItem("selectedUserAvatar") ||
// // // //         `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

// // // //   const selectedUserBalance =
// // // //     location.state?.selectedUserBalance ||
// // // //     localStorage.getItem("selectedUserBalance") ||
// // // //     "0";

// // // //   const selectedUserCountry =
// // // //     location.state?.selectedUserCountry ||
// // // //     localStorage.getItem("selectedUserCountry") ||
// // // //     "USA";

// // // //   useEffect(() => {
// // // //     if (location.state?.selectedUserId)
// // // //       localStorage.setItem("selectedUserId", location.state.selectedUserId);
// // // //     if (location.state?.selectedUserName)
// // // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // // //     if (location.state?.selectedUserBalance)
// // // //       localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
// // // //     if (location.state?.selectedUserCountry)
// // // //       localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);

// // // //     if (location.state?.selectedUserAvatar) {
// // // //       localStorage.setItem("selectedUserAvatar", location.state.selectedUserAvatar);
// // // //     } else if (location.state?.selectedUserId) {
// // // //       localStorage.removeItem("selectedUserAvatar");
// // // //     }
// // // //   }, []);

// // // //   const leftUser = {
// // // //     name:    selectedUserName_nav,
// // // //     balance: selectedUserBalance,
// // // //     country: selectedUserCountry,
// // // //     image:   selectedUserAvatar,
// // // //   };

// // // //   // ── Stats state — now driven by table API response ────────────────────────
// // // //   const [stats, setStats] = useState({
// // // //     total: 0, thisMonth: 0, thisWeek: 0, revenue: 0,
// // // //   });
// // // //   const [statsLoading, setStatsLoading] = useState(false);

// // // //   // ── Table state ───────────────────────────────────────────────────────────
// // // //   const [tableData, setTableData]       = useState([]);
// // // //   const [totalRecords, setTotalRecords] = useState(0);
// // // //   const [totalPages, setTotalPages]     = useState(1);
// // // //   const [tableLoading, setTableLoading] = useState(false);

// // // //   // ── Helper: compute thisMonth and thisWeek counts from data ───────────────
// // // //   const computeLocalStats = useCallback((data, total, revenue) => {
// // // //     const now       = new Date();
// // // //     const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
// // // //     const startOfWeek  = new Date(now);
// // // //     startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
// // // //     startOfWeek.setHours(0, 0, 0, 0);

// // // //     let thisMonth = 0;
// // // //     let thisWeek  = 0;

// // // //     data.forEach((row) => {
// // // //       const dateStr = row.subscribedDate || row.trialStartDate || row.createdAt;
// // // //       if (!dateStr) return;
// // // //       const d = new Date(dateStr);
// // // //       if (d >= startOfMonth) thisMonth++;
// // // //       if (d >= startOfWeek)  thisWeek++;
// // // //     });

// // // //     setStats({
// // // //       total:     total,
// // // //       thisMonth: thisMonth,
// // // //       thisWeek:  thisWeek,
// // // //       revenue:   revenue ?? 0,
// // // //     });
// // // //   }, []);

// // // //   const fetchTableData = useCallback(async (page = 1) => {
// // // //     if (!selectedUserId) return;
// // // //     setTableLoading(true);
// // // //     setStatsLoading(true);
// // // //     try {
// // // //       // const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
// // // //       const res = await fetch(`${BASE_URL}/referrals/users/details`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           uid:    selectedUserId,
// // // //           type:   "monthly",
// // // //           status: "trial",
// // // //           sort:   "subscribedDate",
// // // //           size:   itemsPerPage,
// // // //           page,
// // // //         }),
// // // //       });
// // // //       const json = await res.json();
// // // //       if (json.success && json.metrics) {
// // // //         const data     = json.metrics.data || [];
// // // //         const total    = json.pagination?.total    || 0;
// // // //         const revenue  = json.metrics?.revenue     ?? json.data?.revenue ?? 0;

// // // //         setTableData(data);
// // // //         setTotalRecords(total);
// // // //         setTotalPages(json.pagination?.totalPages || 1);
// // // //         setCurrentPage(json.pagination?.page      || 1);

// // // //         // ── Drive all stats from this single API call ─────────────────────
// // // //         computeLocalStats(data, total, revenue);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch table data:", err);
// // // //     } finally {
// // // //       setTableLoading(false);
// // // //       setStatsLoading(false);
// // // //     }
// // // //   }, [selectedUserId, computeLocalStats]);

// // // //   useEffect(() => { if (selectedUserId) fetchTableData(1); }, [selectedUserId]);

// // // //   const filteredData = tableData.filter((row) => {
// // // //     const name = row.name || row.userName || "";
// // // //     return name.toLowerCase().includes(searchTerm.toLowerCase());
// // // //   });

// // // //   const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
// // // //   const handlePageClick = (n) => { if (n !== currentPage)      { setCurrentPage(n); fetchTableData(n); } };

// // // //   const pageNumbers = [];
// // // //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// // // //   const fmtDate = (iso) => iso
// // // //     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// // // //     : "—";
// // // //   const fmtTime = (iso) => iso
// // // //     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// // // //     : "—";

// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const endIndex   = startIndex + itemsPerPage;

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar isCurrentPageFreeAllUsers={false} />

// // // //       {/* LEFT PANEL */}
// // // //       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search..."
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // //         />
// // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// // // //         {/* Selected user card */}
// // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// // // //             <div className="flex items-center justify-between mb-2">
// // // //               <div className="flex items-center gap-2">
// // // //                 <img
// // // //                   src={leftUser.image}
// // // //                   alt={leftUser.name}
// // // //                   onError={(e) => {
// // // //                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // // //                   }}
// // // //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// // // //                 />
// // // //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// // // //                   {leftUser.name}
// // // //                 </p>
// // // //               </div>
// // // //               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
// // // //             </div>
// // // //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// // // //               <span className="text-gray-500">
// // // //                 {/* ── FIX: show totalRecords (actual user count) not stats.total ── */}
// // // //                 Users: <span className="text-[#055860]">{statsLoading ? "..." : totalRecords}</span>
// // // //               </span>
// // // //               <span className="text-gray-500">
// // // //                 Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT PANEL */}
// // // //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div className="flex items-center gap-4">
// // // //             <img
// // // //               src={leftUser.image}
// // // //               alt={leftUser.name}
// // // //               onError={(e) => {
// // // //                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // // //               }}
// // // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // // //             />
// // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // // //               {leftUser.name}
// // // //             </h2>
// // // //           </div>
// // // //           <div className="relative w-full max-w-sm">
// // // //             <Search
// // // //               size={18}
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// // // //               strokeWidth={2}
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search..."
// // // //               value={searchTerm}
// // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Stats bar */}
// // // //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// // // //           >
// // // //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// // // //           </button>
// // // //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// // // //                 <div className="text-md font-semibold leading-[200%]">
// // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // //                 </div>
// // // //               </div>
// // // //               {/* ── FIX: All stats now come from table API ── */}
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : totalRecords}</div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
// // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
// // // //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Table */}
// // // //         <div className="flex-1 overflow-x-auto">
// // // //           <table className="w-full border border-gray-200 rounded-md text-sm">
// // // //             <thead className="h-[45px] bg-[#055860] text-white">
// // // //               <tr>
// // // //                 <th className="p-2 text-left">User</th>
// // // //                 <th className="p-2 text-center">Installed</th>
// // // //                 <th className="p-2 text-center">Trial Start</th>
// // // //                 <th className="p-2 text-center">Trial End</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {tableLoading ? (
// // // //                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// // // //               ) : filteredData.length > 0 ? (
// // // //                 filteredData.map((row, idx) => {
// // // //                   const userName   = row.name || row.userName || "Unknown";
// // // //                   const userAvatar = row.image || row.imageUrl ||
// // // //                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

// // // //                   return (
// // // //                     <tr key={row.id || idx} className="border-b">
// // // //                       <td className="p-4">
// // // //                         <div className="flex items-center gap-2">
// // // //                           <img
// // // //                             src={userAvatar}
// // // //                             alt="User"
// // // //                             onError={(e) => {
// // // //                               e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
// // // //                             }}
// // // //                             className="w-8 h-8 rounded-full object-cover"
// // // //                           />
// // // //                           {userName}
// // // //                         </div>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.installedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
// // // //                       </td>
// // // //                       <td className="p-2 text-center">
// // // //                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
// // // //                         <br />
// // // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
// // // //                       </td>
// // // //                     </tr>
// // // //                   );
// // // //                 })
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="4" className="p-4 text-center text-gray-500">No trial users found</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// // // //           <p className="text-sm text-gray-600 ml-[-13px]">
// // // //             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
// // // //             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
// // // //           </p>
// // // //           <div className="flex items-center gap-2 mr-[-19px]">
// // // //             <button
// // // //               onClick={handlePrevPage}
// // // //               disabled={currentPage === 1}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// // // //             </button>

// // // //             {pageNumbers.map((n) => (
// // // //               <span
// // // //                 key={n}
// // // //                 onClick={() => handlePageClick(n)}
// // // //                 className={`cursor-pointer ${
// // // //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// // // //                 }`}
// // // //               >
// // // //                 {n}
// // // //               </span>
// // // //             ))}

// // // //             {totalPages > 4 && (
// // // //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// // // //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// // // //               </button>
// // // //             )}

// // // //             <button
// // // //               onClick={handleNextPage}
// // // //               disabled={currentPage === totalPages}
// // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // //               }`}
// // // //             >
// // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // /////


// // // import React, { useState, useEffect, useCallback } from "react";
// // // import Sidebar from "./Sidebar.jsx";
// // // import Groups from "../assets/Groups.png";
// // // import BackArrow from "../assets/BackArrow.png";
// // // import { Search } from "lucide-react";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // const BASE_URL    = "https://apis.famocare.com/api/referralsystem";
// // // const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// // // export default function MonthlyTrialUsers() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10;

// // //   const selectedUserId =
// // //     location.state?.selectedUserId ||
// // //     parseInt(localStorage.getItem("selectedUserId")) ||
// // //     null;

// // //   const selectedUserName_nav =
// // //     location.state?.selectedUserName ||
// // //     localStorage.getItem("selectedUserName") ||
// // //     "User";

// // //   const selectedUserAvatar = location.state?.selectedUserAvatar
// // //     ? location.state.selectedUserAvatar
// // //     : location.state?.selectedUserId
// // //       ? `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`
// // //       : localStorage.getItem("selectedUserAvatar") ||
// // //         `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

// // //   const selectedUserBalance =
// // //     location.state?.selectedUserBalance ||
// // //     localStorage.getItem("selectedUserBalance") ||
// // //     "0";

// // //   const selectedUserCountry =
// // //     location.state?.selectedUserCountry ||
// // //     localStorage.getItem("selectedUserCountry") ||
// // //     "USA";

// // //   useEffect(() => {
// // //     if (location.state?.selectedUserId)
// // //       localStorage.setItem("selectedUserId", location.state.selectedUserId);
// // //     if (location.state?.selectedUserName)
// // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // //     if (location.state?.selectedUserBalance)
// // //       localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
// // //     if (location.state?.selectedUserCountry)
// // //       localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);
// // //     if (location.state?.selectedUserAvatar) {
// // //       localStorage.setItem("selectedUserAvatar", location.state.selectedUserAvatar);
// // //     } else if (location.state?.selectedUserId) {
// // //       localStorage.removeItem("selectedUserAvatar");
// // //     }
// // //   }, []);

// // //   const leftUser = {
// // //     name:    selectedUserName_nav,
// // //     balance: selectedUserBalance,
// // //     country: selectedUserCountry,
// // //     image:   selectedUserAvatar,
// // //   };

// // //   // ── Stats state — driven by new POST API ──────────────────────────────────
// // //   const [stats, setStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });
// // //   const [statsLoading, setStatsLoading] = useState(false);

// // //   // ── Table state ───────────────────────────────────────────────────────────
// // //   const [tableData, setTableData]       = useState([]);
// // //   const [totalRecords, setTotalRecords] = useState(0);
// // //   const [totalPages, setTotalPages]     = useState(1);
// // //   const [tableLoading, setTableLoading] = useState(false);

// // //   // ── Fetch stats from new POST API ─────────────────────────────────────────
// // //   const fetchStatistics = useCallback(async (userId) => {
// // //     if (!userId) return;
// // //     setStatsLoading(true);
// // //     try {
// // //       const res  = await fetch(DETAILS_URL, {
// // //         method:  "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body:    JSON.stringify({ uid: userId }),
// // //       });
// // //       const json = await res.json();
// // //       if (json.success && json.data?.monthlyTrialUsers) {
// // //         const d = json.data.monthlyTrialUsers;
// // //         setStats({
// // //           total:     d.total,
// // //           thisMonth: d.thisMonth,
// // //           thisWeek:  d.thisWeek,
// // //           revenue:   d.revenue ?? 0,
// // //         });
// // //       }
// // //     } catch (err) {
// // //       console.error("Failed to fetch statistics:", err);
// // //     } finally {
// // //       setStatsLoading(false);
// // //     }
// // //   }, []);

// // //   // ── Fetch table data ──────────────────────────────────────────────────────
// // //   const fetchTableData = useCallback(async (page = 1) => {
// // //     if (!selectedUserId) return;
// // //     setTableLoading(true);
// // //     try {
// // //       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
// // //         method:  "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body:    JSON.stringify({
// // //           uid:    selectedUserId,
// // //           type:   "monthly",
// // //           status: "trial",
// // //           sort:   "subscribedDate",
// // //           size:   itemsPerPage,
// // //           page,
// // //         }),
// // //       });
// // //       const json = await res.json();
// // //       if (json.success && json.metrics) {
// // //         setTableData(json.metrics.data || []);
// // //         setTotalRecords(json.pagination?.total    || 0);
// // //         setTotalPages(json.pagination?.totalPages || 1);
// // //         setCurrentPage(json.pagination?.page      || 1);
// // //       }
// // //     } catch (err) {
// // //       console.error("Failed to fetch table data:", err);
// // //     } finally {
// // //       setTableLoading(false);
// // //     }
// // //   }, [selectedUserId]);

// // //   // ── On mount: fetch both ──────────────────────────────────────────────────
// // //   useEffect(() => {
// // //     if (selectedUserId) {
// // //       fetchStatistics(selectedUserId);
// // //       fetchTableData(1);
// // //     }
// // //   }, [selectedUserId]);

// // //   const filteredData = tableData.filter((row) => {
// // //     const name = row.name || row.userName || "";
// // //     return name.toLowerCase().includes(searchTerm.toLowerCase());
// // //   });

// // //   const handlePrevPage  = () => { if (currentPage > 1)          { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
// // //   const handleNextPage  = () => { if (currentPage < totalPages)  { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
// // //   const handlePageClick = (n) => { if (n !== currentPage)        { setCurrentPage(n); fetchTableData(n); } };

// // //   const pageNumbers = [];
// // //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// // //   const fmtDate = (iso) => iso
// // //     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// // //     : "—";
// // //   const fmtTime = (iso) => iso
// // //     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// // //     : "—";

// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const endIndex   = startIndex + itemsPerPage;

// // //   return (
// // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // //       <Sidebar isCurrentPageFreeAllUsers={false} />

// // //       {/* LEFT PANEL */}
// // //       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // //         <input
// // //           type="text"
// // //           placeholder="Search..."
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // //         />
// // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// // //         {/* Selected user card */}
// // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// // //             <div className="flex items-center justify-between mb-2">
// // //               <div className="flex items-center gap-2">
// // //                 <img
// // //                   src={leftUser.image}
// // //                   alt={leftUser.name}
// // //                   onError={(e) => {
// // //                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // //                   }}
// // //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// // //                 />
// // //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// // //                   {leftUser.name}
// // //                 </p>
// // //               </div>
// // //               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
// // //             </div>
// // //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// // //               <span className="text-gray-500">
// // //                 Users: <span className="text-[#055860]">{statsLoading ? "..." : stats.total}</span>
// // //               </span>
// // //               <span className="text-gray-500">
// // //                 Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT PANEL */}
// // //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

// // //         {/* Header */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="flex items-center gap-4">
// // //             <img
// // //               src={leftUser.image}
// // //               alt={leftUser.name}
// // //               onError={(e) => {
// // //                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// // //               }}
// // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // //             />
// // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // //               {leftUser.name}
// // //             </h2>
// // //           </div>
// // //           <div className="relative w-full max-w-sm">
// // //             <Search
// // //               size={18}
// // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// // //               strokeWidth={2}
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="Search..."
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Stats bar */}
// // //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// // //           <button
// // //             onClick={() => navigate(-1)}
// // //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// // //           >
// // //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// // //           </button>
// // //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// // //             <div className="grid grid-cols-5">
// // //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// // //                 <div className="text-md font-semibold leading-[200%]">
// // //                   <span className="block whitespace-nowrap">Monthly</span>
// // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // //                 </div>
// // //               </div>
// // //               <div className="bg-[#055860] text-white p-6 text-center">
// // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.total}</div>
// // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// // //               </div>
// // //               <div className="bg-[#055860] text-white p-6 text-center">
// // //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
// // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// // //               </div>
// // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
// // //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// // //               </div>
// // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
// // //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Table */}
// // //         <div className="flex-1 overflow-x-auto">
// // //           <table className="w-full border border-gray-200 rounded-md text-sm">
// // //             <thead className="h-[45px] bg-[#055860] text-white">
// // //               <tr>
// // //  <th className="px-4 py-3 text-start">
// // //                   <div className="ml-1">User</div>
// // //                 </th>

// // //                 <th className="p-2 text-center">Installed</th>
// // //                 <th className="p-2 text-center">Trial Start</th>
// // //                 <th className="p-2 text-center">Trial End</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {tableLoading ? (
// // //                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// // //               ) : filteredData.length > 0 ? (
// // //                 filteredData.map((row, idx) => {
// // //                   const userName   = row.name || row.userName || "Unknown";
// // //                   const userAvatar = row.image || row.imageUrl ||
// // //                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

// // //                   return (
// // //                     <tr key={row.id || idx} className="border-b">
// // //                       <td className="p-4">
// // //                         <div className="flex items-center gap-2">
// // //                           <img
// // //                             src={userAvatar}
// // //                             alt="User"
// // //                             onError={(e) => {
// // //                               e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
// // //                             }}
// // //                             className="w-8 h-8 rounded-full object-cover"
// // //                           />
// // //                           {userName}
// // //                         </div>
// // //                       </td>
// // //                       <td className="p-2 text-center">
// // //                         {fmtDate(row.installedDate || row.createdAt)}
// // //                         <br />
// // //                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
// // //                       </td>
// // //                       <td className="p-2 text-center">
// // //                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
// // //                         <br />
// // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
// // //                       </td>
// // //                       <td className="p-2 text-center">
// // //                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
// // //                         <br />
// // //                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
// // //                       </td>
// // //                     </tr>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan="4" className="p-4 text-center text-gray-500">No trial users found</td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Pagination */}
// // //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// // //           <p className="text-sm text-gray-600 ml-[-13px]">
// // //             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
// // //             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
// // //           </p>
// // //           <div className="flex items-center gap-2 mr-[-19px]">
// // //             <button
// // //               onClick={handlePrevPage}
// // //               disabled={currentPage === 1}
// // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // //               }`}
// // //             >
// // //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// // //             </button>

// // //             {pageNumbers.map((n) => (
// // //               <span
// // //                 key={n}
// // //                 onClick={() => handlePageClick(n)}
// // //                 className={`cursor-pointer ${
// // //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// // //                 }`}
// // //               >
// // //                 {n}
// // //               </span>
// // //             ))}

// // //             {totalPages > 4 && (
// // //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// // //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// // //               </button>
// // //             )}

// // //             <button
// // //               onClick={handleNextPage}
// // //               disabled={currentPage === totalPages}
// // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // //               }`}
// // //             >
// // //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // /////localstorage


// // import React, { useState, useEffect, useCallback } from "react";
// // import Sidebar from "./Sidebar.jsx";
// // import BackArrow from "../assets/BackArrow.png";
// // import { Search } from "lucide-react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // const BASE_URL    = "https://apis.famocare.com/api/referralsystem";
// // const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// // export default function MonthlyTrialUsers() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   // ── Read ONLY from location.state ────────────────────────────────────────
// //   const selectedUserId      = location.state?.selectedUserId      || null;
// //   const selectedUserName    = location.state?.selectedUserName    || "User";
// //   const selectedUserAvatar  = location.state?.selectedUserAvatar  ||
// //     `https://ui-avatars.com/api/?name=${encodeURIComponent(location.state?.selectedUserName || "User")}&background=055860&color=fff`;
// //   const selectedUserBalance = location.state?.selectedUserBalance || 0;
// //   const selectedUserCountry = location.state?.selectedUserCountry || "USA";

// //   const leftUser = {
// //     name:    selectedUserName,
// //     balance: selectedUserBalance,
// //     country: selectedUserCountry,
// //     image:   selectedUserAvatar,
// //   };

// //   // ── Stats state ───────────────────────────────────────────────────────────
// //   const [stats, setStats]             = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });
// //   const [statsLoading, setStatsLoading] = useState(false);

// //   // ── Table state ───────────────────────────────────────────────────────────
// //   const [tableData, setTableData]       = useState([]);
// //   const [totalRecords, setTotalRecords] = useState(0);
// //   const [totalPages, setTotalPages]     = useState(1);
// //   const [tableLoading, setTableLoading] = useState(false);

// //   // ── Fetch stats ───────────────────────────────────────────────────────────
// //   const fetchStatistics = useCallback(async (userId) => {
// //     if (!userId) return;
// //     setStatsLoading(true);
// //     try {
// //       const res  = await fetch(DETAILS_URL, {
// //         method:  "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body:    JSON.stringify({ uid: userId }),
// //       });
// //       const json = await res.json();
// //       if (json.success && json.data?.monthlyTrialUsers) {
// //         const d = json.data.monthlyTrialUsers;
// //         setStats({
// //           total:     d.total,
// //           thisMonth: d.thisMonth,
// //           thisWeek:  d.thisWeek,
// //           revenue:   d.revenue ?? 0,
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch statistics:", err);
// //     } finally {
// //       setStatsLoading(false);
// //     }
// //   }, []);

// //   // ── Fetch table data ──────────────────────────────────────────────────────
// //   const fetchTableData = useCallback(async (page = 1) => {
// //     if (!selectedUserId) return;
// //     setTableLoading(true);
// //     try {
// //       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
// //         method:  "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body:    JSON.stringify({
// //           uid:    selectedUserId,
// //           type:   "monthly",
// //           status: "trial",
// //           sort:   "subscribedDate",
// //           size:   itemsPerPage,
// //           page,
// //         }),
// //       });
// //       const json = await res.json();
// //       if (json.success && json.metrics) {
// //         setTableData(json.metrics.data || []);
// //         setTotalRecords(json.pagination?.total      || 0);
// //         setTotalPages(json.pagination?.totalPages   || 1);
// //         setCurrentPage(json.pagination?.page        || 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch table data:", err);
// //     } finally {
// //       setTableLoading(false);
// //     }
// //   }, [selectedUserId]);

// //   // ── On mount ──────────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchStatistics(selectedUserId);
// //       fetchTableData(1);
// //     }
// //   }, [selectedUserId]);

// //   const filteredData = tableData.filter((row) => {
// //     const name = row.name || row.userName || "";
// //     return name.toLowerCase().includes(searchTerm.toLowerCase());
// //   });

// //   const handlePrevPage  = () => { if (currentPage > 1)         { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
// //   const handleNextPage  = () => { if (currentPage < totalPages) { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
// //   const handlePageClick = (n) => { if (n !== currentPage)       { setCurrentPage(n); fetchTableData(n); } };

// //   const pageNumbers = [];
// //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// //   const fmtDate = (iso) => iso
// //     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //     : "—";
// //   const fmtTime = (iso) => iso
// //     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //     : "—";

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex   = startIndex + itemsPerPage;

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       <Sidebar isCurrentPageFreeAllUsers={false} />

// //       {/* LEFT PANEL */}
// //       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// //         {/* Selected user card */}
// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={leftUser.image}
// //                   alt={leftUser.name}
// //                   onError={(e) => {
// //                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// //                   }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {leftUser.name}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">
// //                 Users: <span className="text-[#055860]">{statsLoading ? "..." : stats.total}</span>
// //               </span>
// //               <span className="text-gray-500">
// //                 Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={leftUser.image}
// //               alt={leftUser.name}
// //               onError={(e) => {
// //                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
// //               }}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// //               {leftUser.name}
// //             </h2>
// //           </div>
// //           <div className="relative w-full max-w-sm">
// //             <Search
// //               size={18}
// //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// //               strokeWidth={2}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// //             />
// //           </div>
// //         </div>

// //         {/* Stats bar */}
// //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// //           <button
// //             onClick={() => navigate(-1)}
// //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// //           >
// //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// //           </button>
// //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// //                 <div className="text-md font-semibold leading-[200%]">
// //                   <span className="block whitespace-nowrap">Monthly</span>
// //                   <span className="block whitespace-nowrap">Trial Users</span>
// //                 </div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.total}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
// //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
// //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Table */}
// //         <div className="flex-1 overflow-x-auto">
// //           <table className="w-full border border-gray-200 rounded-md text-sm">
// //             <thead className="h-[45px] bg-[#055860] text-white">
// //               <tr>
// //                 <th className="px-4 py-3 text-start">
// //                   <div className="ml-1">User</div>
// //                 </th>
// //                 <th className="p-2 text-center">Installed</th>
// //                 <th className="p-2 text-center">Trial Start</th>
// //                 <th className="p-2 text-center">Trial End</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {tableLoading ? (
// //                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
// //               ) : filteredData.length > 0 ? (
// //                 filteredData.map((row, idx) => {
// //                   const userName   = row.name || row.userName || "Unknown";
// //                   const userAvatar = row.image || row.imageUrl ||
// //                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

// //                   return (
// //                     <tr key={row.id || idx} className="border-b">
// //                       <td className="p-4">
// //                         <div className="flex items-center gap-2">
// //                           <img
// //                             src={userAvatar}
// //                             alt="User"
// //                             onError={(e) => {
// //                               e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
// //                             }}
// //                             className="w-8 h-8 rounded-full object-cover"
// //                           />
// //                           {userName}
// //                         </div>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {fmtDate(row.installedDate || row.createdAt)}
// //                         <br />
// //                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
// //                         <br />
// //                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
// //                         <br />
// //                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
// //                       </td>
// //                     </tr>
// //                   );
// //                 })
// //               ) : (
// //                 <tr>
// //                   <td colSpan="4" className="p-4 text-center text-gray-500">No trial users found</td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// //           <p className="text-sm text-gray-600 ml-[-13px]">
// //             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
// //             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
// //           </p>
// //           <div className="flex items-center gap-2 mr-[-19px]">
// //             <button
// //               onClick={handlePrevPage}
// //               disabled={currentPage === 1}
// //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// //               }`}
// //             >
// //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// //             </button>

// //             {pageNumbers.map((n) => (
// //               <span
// //                 key={n}
// //                 onClick={() => handlePageClick(n)}
// //                 className={`cursor-pointer ${
// //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// //                 }`}
// //               >
// //                 {n}
// //               </span>
// //             ))}

// //             {totalPages > 4 && (
// //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// //               </button>
// //             )}

// //             <button
// //               onClick={handleNextPage}
// //               disabled={currentPage === totalPages}
// //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// //               }`}
// //             >
// //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// /////



// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL    = "https://apis.famocare.com/api/referralsystem";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// export default function MonthlyTrialUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [searchTerm, setSearchTerm] = useState("");   // left panel search only
//   const [tableSearch, setTableSearch] = useState(""); // table search only
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // ── Read ONLY from location.state ────────────────────────────────────────
//   const selectedUserId      = location.state?.selectedUserId      || null;
//   const selectedUserName    = location.state?.selectedUserName    || "User";
//   const selectedUserAvatar  = location.state?.selectedUserAvatar  ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(location.state?.selectedUserName || "User")}&background=055860&color=fff`;
//   const selectedUserBalance = location.state?.selectedUserBalance || 0;
//   const selectedUserCountry = location.state?.selectedUserCountry || "USA";

//   const leftUser = {
//     name:    selectedUserName,
//     balance: selectedUserBalance,
//     country: selectedUserCountry,
//     image:   selectedUserAvatar,
//   };

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [stats, setStats]               = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [statsLoading, setStatsLoading] = useState(false);

//   // ── Table state ───────────────────────────────────────────────────────────
//   const [tableData, setTableData]       = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);

//   // ── Fetch stats ───────────────────────────────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     setStatsLoading(true);
//     try {
//       const res  = await fetch(DETAILS_URL, {
//         method:  "POST",
//         headers: { "Content-Type": "application/json" },
//         body:    JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.monthlyTrialUsers) {
//         const d = json.data.monthlyTrialUsers;
//         setStats({
//           total:     d.total,
//           thisMonth: d.thisMonth,
//           thisWeek:  d.thisWeek,
//           revenue:   d.revenue ?? 0,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     } finally {
//       setStatsLoading(false);
//     }
//   }, []);

//   // ── Fetch table data ──────────────────────────────────────────────────────
//   const fetchTableData = useCallback(async (page = 1) => {
//     if (!selectedUserId) return;
//     setTableLoading(true);
//     try {
//       const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
//         method:  "POST",
//         headers: { "Content-Type": "application/json" },
//         body:    JSON.stringify({
//           uid:    selectedUserId,
//           type:   "monthly",
//           status: "trial",
//           sort:   "subscribedDate",
//           size:   itemsPerPage,
//           page,
//         }),
//       });
//       const json = await res.json();
//       if (json.success && json.metrics) {
//         setTableData(json.metrics.data || []);
//         setTotalRecords(json.pagination?.total      || 0);
//         setTotalPages(json.pagination?.totalPages   || 1);
//         setCurrentPage(json.pagination?.page        || 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch table data:", err);
//     } finally {
//       setTableLoading(false);
//     }
//   }, [selectedUserId]);

//   // ── On mount ──────────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchStatistics(selectedUserId);
//       fetchTableData(1);
//     }
//   }, [selectedUserId]);

//   // ── Table filtered by tableSearch only ───────────────────────────────────
//   const filteredData = tableData.filter((row) => {
//     const name = row.name || row.userName || "";
//     return name.toLowerCase().includes(tableSearch.toLowerCase());
//   });

//   const handlePrevPage  = () => { if (currentPage > 1)          { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
//   const handleNextPage  = () => { if (currentPage < totalPages)  { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
//   const handlePageClick = (n) => { if (n !== currentPage)        { setCurrentPage(n); fetchTableData(n); } };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Selected user card */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={leftUser.image}
//                   alt={leftUser.name}
//                   onError={(e) => {
//                     e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
//                   }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {leftUser.name}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{statsLoading ? "..." : stats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={leftUser.image}
//               alt={leftUser.name}
//               onError={(e) => {
//                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
//               }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {leftUser.name}
//             </h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search
//               size={18}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
//               strokeWidth={2}
//             />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearch}
//               onChange={(e) => setTableSearch(e.target.value)}
//               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
//             />
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
//           <button
//             onClick={() => navigate(-1)}
//             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
//           >
//             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
//           </button>
//           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5">
//               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
//                 <div className="text-md font-semibold leading-[200%]">
//                   <span className="block whitespace-nowrap">Monthly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Trial Start</th>
//                 <th className="p-2 text-center">Trial End</th>
//               </tr>
//             </thead>

//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName   = row.name || row.userName || "Unknown";
//                   const userAvatar = row.image || row.imageUrl ||
//                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

//                   return (
//                     <tr key={row.id || idx} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => {
//                               e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
//                             }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate || row.createdAt)}
//                         <br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
//                         <br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
//                         <br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">No trial users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${
//                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//               }`}
//             >
//               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>

//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${
//                   currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {pageNum}
//               </span>
//             ))}

//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}

//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${
//                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//               }`}
//             >
//               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }


///update


import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar.jsx";
import BackArrow from "../assets/BackArrow.png";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BASE_URL    = "https://apis.famocare.com/api/referralsystem";
const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

export default function MonthlyTrialUsers() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm]   = useState("");
  const [tableSearch, setTableSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ── Persist location.state to sessionStorage on arrival ──────────────────
  useEffect(() => {
    if (location.state?.selectedUserId) {
      sessionStorage.setItem("monthlyTrialUsersState", JSON.stringify(location.state));
    }
  }, [location.state]);

  // ── Read from location.state first, fallback to sessionStorage ────────────
  const savedState = location.state?.selectedUserId
    ? location.state
    : (() => {
        try {
          const s = sessionStorage.getItem("monthlyTrialUsersState");
          return s ? JSON.parse(s) : {};
        } catch { return {}; }
      })();

  const selectedUserId      = savedState.selectedUserId      || null;
  const selectedUserName    = savedState.selectedUserName    || "User";
  const selectedUserAvatar  = savedState.selectedUserAvatar  ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(savedState.selectedUserName || "User")}&background=055860&color=fff`;
  const selectedUserBalance = savedState.selectedUserBalance || 0;
  const selectedUserCountry = savedState.selectedUserCountry || "USA";

  const leftUser = {
    name:    selectedUserName,
    balance: selectedUserBalance,
    country: selectedUserCountry,
    image:   selectedUserAvatar,
  };

  // ── Stats state ───────────────────────────────────────────────────────────
  const [stats, setStats]               = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });
  const [statsLoading, setStatsLoading] = useState(false);

  // ── Table state ───────────────────────────────────────────────────────────
  const [tableData, setTableData]       = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages]     = useState(1);
  const [tableLoading, setTableLoading] = useState(false);

  // ── Fetch stats ───────────────────────────────────────────────────────────
  const fetchStatistics = useCallback(async (userId) => {
    if (!userId) return;
    setStatsLoading(true);
    try {
      const res  = await fetch(DETAILS_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ uid: userId }),
      });
      const json = await res.json();
      if (json.success && json.data?.monthlyTrialUsers) {
        const d = json.data.monthlyTrialUsers;
        setStats({
          total:     d.total,
          thisMonth: d.thisMonth,
          thisWeek:  d.thisWeek,
          revenue:   d.revenue ?? 0,
        });
      }
    } catch (err) {
      console.error("Failed to fetch statistics:", err);
    } finally {
      setStatsLoading(false);
    }
  }, []);

  // ── Fetch table data ──────────────────────────────────────────────────────
  const fetchTableData = useCallback(async (page = 1) => {
    if (!selectedUserId) return;
    setTableLoading(true);
    try {
      const res  = await fetch(`${BASE_URL}/referrals/users/details`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          uid:    selectedUserId,
          type:   "monthly",
          status: "trial",
          sort:   "subscribedDate",
          size:   itemsPerPage,
          page,
        }),
      });
      const json = await res.json();
      if (json.success && json.metrics) {
        setTableData(json.metrics.data || []);
        setTotalRecords(json.pagination?.total      || 0);
        setTotalPages(json.pagination?.totalPages   || 1);
        setCurrentPage(json.pagination?.page        || 1);
      }
    } catch (err) {
      console.error("Failed to fetch table data:", err);
    } finally {
      setTableLoading(false);
    }
  }, [selectedUserId]);

  // ── On mount ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (selectedUserId) {
      fetchStatistics(selectedUserId);
      fetchTableData(1);
    }
  }, [selectedUserId]);

  // ── Table filtered by tableSearch only ───────────────────────────────────
  const filteredData = tableData.filter((row) => {
    const name = row.name || row.userName || "";
    return name.toLowerCase().includes(tableSearch.toLowerCase());
  });

  const handlePrevPage  = () => { if (currentPage > 1)          { const p = currentPage - 1; setCurrentPage(p); fetchTableData(p); } };
  const handleNextPage  = () => { if (currentPage < totalPages)  { const p = currentPage + 1; setCurrentPage(p); fetchTableData(p); } };
  const handlePageClick = (n) => { if (n !== currentPage)        { setCurrentPage(n); fetchTableData(n); } };

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

  const fmtDate = (iso) => iso
    ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    : "—";
  const fmtTime = (iso) => iso
    ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "—";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex   = startIndex + itemsPerPage;

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar isCurrentPageFreeAllUsers={false} />

      {/* LEFT PANEL */}
      <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

        {/* Selected user card */}
        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={leftUser.image}
                  alt={leftUser.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
                  }}
                  className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                />
                <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
                  {leftUser.name}
                </p>
              </div>
              <span className="text-xs text-[#055860] mt-3">{leftUser.country}</span>
            </div>
            <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
              <span className="text-gray-500">
                Users: <span className="text-[#055860]">{statsLoading ? "..." : stats.total}</span>
              </span>
              <span className="text-gray-500">
                Balance: <span className="text-[#055860]">${parseFloat(leftUser.balance || 0).toLocaleString()}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={leftUser.image}
              alt={leftUser.name}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leftUser.name)}&background=055860&color=fff`;
              }}
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
              {leftUser.name}
            </h2>
          </div>
          <div className="relative w-full max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search..."
              value={tableSearch}
              onChange={(e) => setTableSearch(e.target.value)}
              className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-4 mb-4 mt-[-8px]">
          <button
            onClick={() => navigate(-1)}
            className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
          >
            <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
          </button>
          <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
                <div className="text-md font-semibold leading-[200%]">
                  <span className="block whitespace-nowrap">Monthly</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.total}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
                <div className="text-md opacity-90 mt-[14px]">This Week</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
                <div className="text-md opacity-90 mt-[14px]">Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="h-[45px] bg-[#055860] text-white">
              <tr>
                <th className="px-4 py-3 text-start">
                  <div className="ml-1">User</div>
                </th>
                <th className="p-2 text-center">Installed</th>
                <th className="p-2 text-center">Trial Start</th>
                <th className="p-2 text-center">Trial End</th>
              </tr>
            </thead>

            <tbody>
              {tableLoading ? (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((row, idx) => {
                  const userName   = row.name || row.userName || "Unknown";
                  const userAvatar = row.image || row.imageUrl ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;

                  return (
                    <tr key={row.id || idx} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={userAvatar}
                            alt="User"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
                            }}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {userName}
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(row.installedDate || row.createdAt)}
                        <br />
                        <span className="text-xs text-gray-400">{fmtTime(row.installedDate || row.createdAt)}</span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(row.trialStartDate || row.subscribedDate || row.createdAt)}
                        <br />
                        <span className="text-xs text-gray-400">{fmtTime(row.trialStartDate || row.subscribedDate || row.createdAt)}</span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(row.trialEndDate || row.expiryDate || row.updatedAt)}
                        <br />
                        <span className="text-xs text-gray-400">{fmtTime(row.trialEndDate || row.expiryDate || row.updatedAt)}</span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">No trial users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
          <p className="text-sm text-gray-600 ml-[-13px]">
            Showing {totalRecords > 0 ? startIndex + 1 : 0} to{" "}
            {Math.min(endIndex, totalRecords)} of {totalRecords} entries
          </p>
          <div className="flex items-center gap-2 mr-[-19px]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
              }`}
            >
              <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
            </button>

            {pageNumbers.map((pageNum) => (
              <span
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`cursor-pointer ${
                  currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"
                }`}
              >
                {pageNum}
              </span>
            ))}

            {totalPages > 4 && (
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
                <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
              </button>
            )}

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
  );
}