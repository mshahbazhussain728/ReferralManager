// import React, { useState, useEffect, UseCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function YearlySubscribedUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const itemsPerPage = 10;

//   const selectedUserId =
//     location.state?.selectedUserId ||
//     localStorage.getItem("selectedUserId");

//   const selectedUserName_nav =
//     location.state?.selectedUserName ||
//     localStorage.getItem("selectedUserName") ||
//     "User";

//   const selectedUserAvatar =
//     location.state?.selectedUserAvatar ||
//     localStorage.getItem("selectedUserAvatar") ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

//   const selectedUserBalance =
//     location.state?.selectedUserBalance ||
//     localStorage.getItem("selectedUserBalance") ||
//     "0";

//   const selectedUserCountry =
//     location.state?.selectedUserCountry ||
//     localStorage.getItem("selectedUserCountry") ||
//     "USA";

//   useEffect(() => {
//     if (location.state?.selectedUserId)      localStorage.setItem("selectedUserId",      location.state.selectedUserId);
//     if (location.state?.selectedUserName)    localStorage.setItem("selectedUserName",    location.state.selectedUserName);
//     if (location.state?.selectedUserAvatar)  localStorage.setItem("selectedUserAvatar",  location.state.selectedUserAvatar);
//     if (location.state?.selectedUserBalance) localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
//     if (location.state?.selectedUserCountry) localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);
//   }, []);

//   useEffect(() => {
//     setSelectedUserName(selectedUserName_nav);
//   }, []);

//   const [stats] = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [tableData] = useState([]);
//   const [totalRecords] = useState(0);
//   const [totalPages] = useState(1);
//   const [tableLoading] = useState(false);
//   const [statsLoading] = useState(false);

//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser = selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)         { setCurrentPage((p) => p - 1); } };
//   const handleNextPage  = () => { if (currentPage < totalPages) { setCurrentPage((p) => p + 1); } };
//   const handlePageClick = (p) => { if (p !== currentPage)       { setCurrentPage(p); } };

//   const getPageNumbers = () => {
//     const pages = [];
//     for (let i = 1; i <= Math.min(4, totalPages); i++) pages.push(i);
//     return pages;
//   };
//   const pageNumbers = getPageNumbers();

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={selectedUserAvatar}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">${parseFloat(selectedUserBalance).toLocaleString()}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={selectedUserAvatar}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
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
//             <div className="flex">
//               <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//                 <div className="text-md font-semibold leading-[210%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Expired Users</span>
//                 </div>
//               </div>

//               <div className="flex flex-1">
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{tableLoading ? "..." : totalRecords}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                   <div className="text-md opacity-90 mt-[14px]">This Week</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//                   <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 <th className="p-2 text-left">User</th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Expired</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = row.image ||
//                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.startDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.startDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.clearedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.clearedDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No expired users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar.jsx";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function YearlySubscribedUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const itemsPerPage = 10;

//   const selectedUserId =
//     location.state?.selectedUserId ||
//     localStorage.getItem("selectedUserId");

//   const selectedUserName_nav =
//     location.state?.selectedUserName ||
//     localStorage.getItem("selectedUserName") ||
//     "User";

//   const selectedUserAvatar =
//     location.state?.selectedUserAvatar ||
//     localStorage.getItem("selectedUserAvatar") ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName_nav)}&background=055860&color=fff`;

//   const selectedUserBalance =
//     location.state?.selectedUserBalance ||
//     localStorage.getItem("selectedUserBalance") ||
//     "0";

//   const selectedUserCountry =
//     location.state?.selectedUserCountry ||
//     localStorage.getItem("selectedUserCountry") ||
//     "USA";

//   useEffect(() => {
//     if (location.state?.selectedUserId)      localStorage.setItem("selectedUserId",      location.state.selectedUserId);
//     if (location.state?.selectedUserName)    localStorage.setItem("selectedUserName",    location.state.selectedUserName);
//     if (location.state?.selectedUserAvatar)  localStorage.setItem("selectedUserAvatar",  location.state.selectedUserAvatar);
//     if (location.state?.selectedUserBalance) localStorage.setItem("selectedUserBalance", location.state.selectedUserBalance);
//     if (location.state?.selectedUserCountry) localStorage.setItem("selectedUserCountry", location.state.selectedUserCountry);
//   }, []);

//   useEffect(() => {
//     setSelectedUserName(selectedUserName_nav);
//   }, []);

//   // ─── API STATE ────────────────────────────────────────────────────────────────
//   const [stats, setStats] = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [tableData, setTableData] = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);
//   const [statsLoading, setStatsLoading] = useState(false);

//   // ─── FETCH API ────────────────────────────────────────────────────────────────
//   const fetchData = async (page = 1, search = "") => {
//     if (!selectedUserId) return;

//     setTableLoading(true);
//     setStatsLoading(true);

//     try {
//       const response = await fetch(
//         "https://apis.famocare.com/api/referralsystem/referrals/users/details",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             uid: Number(selectedUserId),
//             type: "yearly",
//             status: "expired",
//             sort: "subscribedDate",
//             size: itemsPerPage,
//             page: page,
//           }),
//         }
//       );

//       const json = await response.json();

//       if (json.success) {
//         const metrics = json.metrics || {};
//         const pagination = json.pagination || {};

//         setStats({
//           thisMonth: metrics.thisMonth || 0,
//           thisWeek: metrics.thisWeek  || 0,
//           revenue:  metrics.totalrevenue || 0,
//         });

//         setTableData(metrics.data || []);
//         setTotalRecords(pagination.total || 0);
//         setTotalPages(pagination.totalPages || 1);
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//     } finally {
//       setTableLoading(false);
//       setStatsLoading(false);
//     }
//   };

//   // Fetch on mount and when page changes
//   useEffect(() => {
//     fetchData(currentPage, tableSearchTerm);
//   }, [currentPage, selectedUserId]);

//   // Reset to page 1 on search
//   useEffect(() => {
//     setCurrentPage(1);
//     fetchData(1, tableSearchTerm);
//   }, [tableSearchTerm]);

//   // ─── FILTER / PAGINATION HELPERS ─────────────────────────────────────────────
//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser = selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)         setCurrentPage((p) => p - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };
//   const handlePageClick = (p) => { if (p !== currentPage)       setCurrentPage(p); };

//   const getPageNumbers = () => {
//     const pages = [];
//     for (let i = 1; i <= Math.min(4, totalPages); i++) pages.push(i);
//     return pages;
//   };
//   const pageNumbers = getPageNumbers();

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   // ─── RENDER ───────────────────────────────────────────────────────────────────
//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={selectedUserAvatar}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">${parseFloat(selectedUserBalance).toLocaleString()}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={selectedUserAvatar}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUserName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
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
//             <div className="flex">
//               <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//                 <div className="text-md font-semibold leading-[210%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Expired Users</span>
//                 </div>
//               </div>

//               <div className="flex flex-1">
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{tableLoading ? "..." : totalRecords}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                   <div className="text-md opacity-90 mt-[14px]">This Week</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//                   <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 {/* <th className="p-2 text-left">User</th> */}
//                  <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Expired</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = row.image ||
//                     `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`;
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.startDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.startDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.clearedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.clearedDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No expired users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



////localstorage


// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function YearlyExpiredUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [userSearchTerm, setUserSearchTerm] = useState("");
//   const [tableSearchTerm, setTableSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // ── User identity — only from location.state ──────────────────────────────
//   const selectedUserId      = location.state?.selectedUserId     || null;
//   const selectedUserName    = location.state?.selectedUserName   || "";
//   const selectedUserAvatar  = location.state?.selectedUserAvatar ||
//     `https://ui-avatars.com/api/?name=${encodeURIComponent(location.state?.selectedUserName || "U")}&background=055860&color=fff`;
//   const selectedUserBalance = location.state?.selectedUserBalance || "0";
//   const selectedUserCountry = location.state?.selectedUserCountry || "";

//   // ── API STATE ──────────────────────────────────────────────────────────────
//   const [stats, setStats]               = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
//   const [tableData, setTableData]       = useState([]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [tableLoading, setTableLoading] = useState(false);
//   const [statsLoading, setStatsLoading] = useState(false);

//   // ── FETCH ──────────────────────────────────────────────────────────────────
//   const fetchData = useCallback(async (page = 1) => {
//     if (!selectedUserId) return;

//     setTableLoading(true);
//     setStatsLoading(true);

//     try {
//       const response = await fetch(
//         "https://apis.famocare.com/api/referralsystem/referrals/users/details",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             uid:    Number(selectedUserId),
//             type:   "yearly",
//             status: "expired",
//             sort:   "subscribedDate",
//             size:   itemsPerPage,
//             page,
//           }),
//         }
//       );

//       const json = await response.json();

//       if (json.success) {
//         const metrics    = json.metrics    || {};
//         const pagination = json.pagination || {};

//         setStats({
//           thisMonth: metrics.thisMonth    ?? 0,
//           thisWeek:  metrics.thisWeek     ?? 0,
//           revenue:   metrics.totalrevenue ?? 0,
//         });

//         setTableData(metrics.data || []);
//         setTotalRecords(pagination.total ?? metrics.total ?? 0);
//         setTotalPages(pagination.totalPages ?? 1);
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//     } finally {
//       setTableLoading(false);
//       setStatsLoading(false);
//     }
//   }, [selectedUserId]);

//   useEffect(() => { fetchData(currentPage); }, [fetchData, currentPage]);
//   useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);

//   // ── DERIVED ────────────────────────────────────────────────────────────────
//   const filteredTableData = tableData.filter((row) =>
//     (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
//   );

//   const showLeftUser =
//     !!selectedUserName &&
//     selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage((p) => p - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages)  setCurrentPage((p) => p + 1); };
//   const handlePageClick = (p) => { if (p !== currentPage)        setCurrentPage(p); };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   const fmtDate = (iso) => iso
//     ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     : "—";
//   const fmtTime = (iso) => iso
//     ? new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//     : "—";

//   const resolveAvatar = (src, name) =>
//     src || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "U")}&background=055860&color=fff`;

//   return (
//     <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={userSearchTerm}
//           onChange={(e) => setUserSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           {showLeftUser ? (
//             <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//                     alt={selectedUserName}
//                     onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//                     className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                   />
//                   <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{selectedUserName}</p>
//                 </div>
//                 <span className="text-xs text-[#055860] mt-3">{selectedUserCountry}</span>
//               </div>
//               <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//                 <span className="text-gray-500">Users: <span className="text-[#055860]">{totalRecords}</span></span>
//                 <span className="text-gray-500">Balance: <span className="text-[#055860]">${parseFloat(selectedUserBalance).toLocaleString()}</span></span>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={resolveAvatar(selectedUserAvatar, selectedUserName)}
//               alt={selectedUserName}
//               onError={(e) => { e.target.src = resolveAvatar("", selectedUserName); }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{selectedUserName}</h2>
//           </div>
//           <div className="relative w-full max-w-sm">
//             <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={tableSearchTerm}
//               onChange={(e) => setTableSearchTerm(e.target.value)}
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
//             <div className="flex">
//               <div className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center" style={{ borderRight: "0.5px solid white" }}>
//                 <div className="text-md font-semibold leading-[210%]">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Expired Users</span>
//                 </div>
//               </div>
//               <div className="flex flex-1">
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{tableLoading ? "..." : totalRecords}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white p-6 text-center">
//                   <div className="text-lg font-semibold mt-1">{statsLoading ? "..." : stats.thisMonth}</div>
//                   <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : stats.thisWeek}</div>
//                   <div className="text-md opacity-90 mt-[14px]">This Week</div>
//                 </div>
//                 <div className="flex-1 bg-[#055860] text-white pt-9 text-center" style={{ borderLeft: "0.5px solid white" }}>
//                   <div className="text-lg font-semibold leading-[70%]">{statsLoading ? "..." : `$${stats.revenue.toLocaleString()}`}</div>
//                   <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white font-md">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="p-2 text-center">Installed</th>
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Expired</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableLoading ? (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
//               ) : filteredTableData.length > 0 ? (
//                 filteredTableData.map((row, index) => {
//                   const sub        = row.Subscriptions?.[0];
//                   const userName   = row.name || "Unknown";
//                   const userAvatar = resolveAvatar(row.image, userName);
//                   return (
//                     <tr key={row.id || index} className="border-b">
//                       <td className="p-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src={userAvatar}
//                             alt="User"
//                             onError={(e) => { e.target.src = resolveAvatar("", userName); }}
//                             className="w-8 h-8 rounded-full object-cover"
//                           />
//                           {userName}
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(row.installedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(row.installedDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.startDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.startDate)}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {fmtDate(sub?.clearedDate)}<br />
//                         <span className="text-xs text-gray-400">{fmtTime(sub?.clearedDate)}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr><td colSpan="4" className="p-4 text-center text-gray-500">
//                   {selectedUserId ? "No expired users found" : "No user selected"}
//                 </td></tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalRecords > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalRecords)} of {totalRecords} entries
//           </p>
//           <div className="flex items-center gap-2 mr-[-19px]">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
//             </button>
//             {pageNumbers.map((pageNum) => (
//               <span
//                 key={pageNum}
//                 onClick={() => handlePageClick(pageNum)}
//                 className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}
//               >
//                 {pageNum}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
//                 <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
//               </button>
//             )}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"}`}
//             >
//               <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



////

import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar.jsx";
import BackArrow from "../assets/BackArrow.png";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function YearlyExpiredUsers() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [tableSearchTerm, setTableSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ── Save location.state to sessionStorage whenever it has valid data ───────
  useEffect(() => {
    if (location.state?.selectedUserId) {
      sessionStorage.setItem("yearlyExpiredUser", JSON.stringify(location.state));
    }
  }, [location.state]);

  // ── Read from sessionStorage as fallback when location.state is lost ───────
  const savedUser = (() => {
    try {
      const raw = sessionStorage.getItem("yearlyExpiredUser");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  })();

  // ── Merge: prefer live location.state, fallback to sessionStorage ──────────
  const merged = location.state?.selectedUserId ? location.state : savedUser;

  const selectedUserId = merged.selectedUserId || null;
  const selectedUserName = merged.selectedUserName || "";
  const selectedUserAvatar =
    merged.selectedUserAvatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      merged.selectedUserName || "U"
    )}&background=055860&color=fff`;
  const selectedUserBalance = merged.selectedUserBalance || "0";
  const selectedUserCountry = merged.selectedUserCountry || "";

  // ── API STATE ──────────────────────────────────────────────────────────────
  const [stats, setStats] = useState({ thisMonth: 0, thisWeek: 0, revenue: 0 });
  const [tableData, setTableData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [tableLoading, setTableLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);

  // ── FETCH ──────────────────────────────────────────────────────────────────
  const fetchData = useCallback(
    async (page = 1) => {
      if (!selectedUserId) return;

      setTableLoading(true);
      setStatsLoading(true);

      try {
        const response = await fetch(
          "https://apis.famocare.com/api/referralsystem/referrals/users/details",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              uid: Number(selectedUserId),
              type: "yearly",
              status: "expired",
              sort: "subscribedDate",
              size: itemsPerPage,
              page,
            }),
          }
        );

        const json = await response.json();

        if (json.success) {
          const metrics = json.metrics || {};
          const pagination = json.pagination || {};

          setStats({
            thisMonth: metrics.thisMonth ?? 0,
            thisWeek: metrics.thisWeek ?? 0,
            revenue: metrics.totalrevenue ?? 0,
          });

          setTableData(metrics.data || []);
          setTotalRecords(pagination.total ?? metrics.total ?? 0);
          setTotalPages(pagination.totalPages ?? 1);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setTableLoading(false);
        setStatsLoading(false);
      }
    },
    [selectedUserId]
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [tableSearchTerm]);

  // ── DERIVED ────────────────────────────────────────────────────────────────
  const filteredTableData = tableData.filter((row) =>
    (row.name || "").toLowerCase().includes(tableSearchTerm.toLowerCase())
  );

  const showLeftUser =
    !!selectedUserName &&
    selectedUserName.toLowerCase().includes(userSearchTerm.toLowerCase());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };
  const handlePageClick = (p) => {
    if (p !== currentPage) setCurrentPage(p);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

  const fmtDate = (iso) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      : "—";
  const fmtTime = (iso) =>
    iso
      ? new Date(iso).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "—";

  const resolveAvatar = (src, name) =>
    src ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name || "U"
    )}&background=055860&color=fff`;

  return (
    <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar isCurrentPageFreeAllUsers={false} />

      {/* LEFT PANEL */}
      <div className="min-h-screen h-[979px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
          className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search
          size={18}
          className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]"
          strokeWidth={2}
        />

        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {showLeftUser ? (
            <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    src={resolveAvatar(selectedUserAvatar, selectedUserName)}
                    alt={selectedUserName}
                    onError={(e) => {
                      e.target.src = resolveAvatar("", selectedUserName);
                    }}
                    className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                  />
                  <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
                    {selectedUserName}
                  </p>
                </div>
                <span className="text-xs text-[#055860] mt-3">
                  {selectedUserCountry}
                </span>
              </div>
              <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
                <span className="text-gray-500">
                  Users:{" "}
                  <span className="text-[#055860]">{totalRecords}</span>
                </span>
                <span className="text-gray-500">
                  Balance:{" "}
                  <span className="text-[#055860]">
                    ${parseFloat(selectedUserBalance).toLocaleString()}
                  </span>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
              No users found
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-[10px] bg-white mb-5 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={resolveAvatar(selectedUserAvatar, selectedUserName)}
              alt={selectedUserName}
              onError={(e) => {
                e.target.src = resolveAvatar("", selectedUserName);
              }}
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
              {selectedUserName}
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
              value={tableSearchTerm}
              onChange={(e) => setTableSearchTerm(e.target.value)}
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
            <div className="flex">
              <div
                className="h-[115px] w-[135px] bg-[#055860] text-white text-center flex items-center justify-center"
                style={{ borderRight: "0.5px solid white" }}
              >
                <div className="text-md font-semibold leading-[210%]">
                  <span className="block whitespace-nowrap">Yearly</span>
                  <span className="block whitespace-nowrap">Expired Users</span>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="flex-1 bg-[#055860] text-white p-6 text-center">
                  <div className="text-lg font-semibold mt-1">
                    {tableLoading ? "..." : totalRecords}
                  </div>
                  <div className="text-md mt-2 opacity-90 whitespace-nowrap">
                    Total Users
                  </div>
                </div>
                <div className="flex-1 bg-[#055860] text-white p-6 text-center">
                  <div className="text-lg font-semibold mt-1">
                    {statsLoading ? "..." : stats.thisMonth}
                  </div>
                  <div className="text-md mt-2 opacity-90 whitespace-nowrap">
                    This Month
                  </div>
                </div>
                <div className="flex-1 bg-[#055860] text-white pt-9 text-center">
                  <div className="text-lg font-semibold leading-[70%]">
                    {statsLoading ? "..." : stats.thisWeek}
                  </div>
                  <div className="text-md opacity-90 mt-[14px]">This Week</div>
                </div>
                <div
                  className="flex-1 bg-[#055860] text-white pt-9 text-center"
                  style={{ borderLeft: "0.5px solid white" }}
                >
                  <div className="text-lg font-semibold leading-[70%]">
                    {statsLoading
                      ? "..."
                      : `$${stats.revenue.toLocaleString()}`}
                  </div>
                  <div className="text-md opacity-90 mt-[14px]">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="h-[45px] bg-[#055860] text-white font-md">
              <tr>
                <th className="px-4 py-3 text-start">
                  <div className="ml-1">User</div>
                </th>
                <th className="p-2 text-center">Installed</th>
                <th className="p-2 text-center">Subscribed</th>
                <th className="p-2 text-center">Expired</th>
              </tr>
            </thead>
            <tbody>
              {tableLoading ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : filteredTableData.length > 0 ? (
                filteredTableData.map((row, index) => {
                  const sub = row.Subscriptions?.[0];
                  const userName = row.name || "Unknown";
                  const userAvatar = resolveAvatar(row.image, userName);
                  return (
                    <tr key={row.id || index} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={userAvatar}
                            alt="User"
                            onError={(e) => {
                              e.target.src = resolveAvatar("", userName);
                            }}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {userName}
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(row.installedDate)}
                        <br />
                        <span className="text-xs text-gray-400">
                          {fmtTime(row.installedDate)}
                        </span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(sub?.startDate)}
                        <br />
                        <span className="text-xs text-gray-400">
                          {fmtTime(sub?.startDate)}
                        </span>
                      </td>
                      <td className="p-2 text-center">
                        {fmtDate(sub?.clearedDate)}
                        <br />
                        <span className="text-xs text-gray-400">
                          {fmtTime(sub?.clearedDate)}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    {selectedUserId
                      ? "No expired users found"
                      : "No user selected"}
                  </td>
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
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#691188] cursor-pointer"
              }`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">
                ‹
              </span>
            </button>
            {pageNumbers.map((pageNum) => (
              <span
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`cursor-pointer ${
                  currentPage === pageNum
                    ? "text-[#691188] font-semibold"
                    : "text-gray-500"
                }`}
              >
                {pageNum}
              </span>
            ))}
            {totalPages > 4 && (
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
                <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">
                  ···
                </span>
              </button>
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#691188] cursor-pointer"
              }`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}