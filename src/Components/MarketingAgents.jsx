
// import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
// import Groups from "../assets/Groups.png";
// import Sidebar from "./Sidebar.jsx";
// import { ChevronRight } from "lucide-react";
// import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
// import { Search } from "lucide-react";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const REFERRAL_DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const FILTER_OPTIONS = [
//   { label: "Active Users",    value: "active"       },
//   { label: "Total Users",     value: "total"        },
//   { label: "Monthly Users",   value: "monthly"      },
//   { label: "Weekly Users",    value: "weekly"       },
//   { label: "Total Sales",     value: "totalSales"   },
//   { label: "Monthly Sales",   value: "monthlySales" },
//   { label: "Weekly Sales",    value: "weeklySales"  },
//   { label: "Balance",         value: "balance"      },
// ];

// const resolveImageUrl = (imageUrl, name = "User") => {
//   const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=055860&color=fff&size=128`;
//   if (!imageUrl || imageUrl.trim() === "") return fallback;
//   if (imageUrl.includes("googleusercontent.com")) {
//     return imageUrl.replace(/=s\d+-c$/, "=s400-c");
//   }
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `https://apis.famocare.com/uploads/${imageUrl}`;
// };




// const moduleCache = {
//   users:           [],
//   stableSortedIds: [],
//   currentPage:     1,
//   totalPages:      1,
//   loadedUpToPage:  1,
//   selectedUserId:  null,
//   statisticsCache: {},
//   initialized:     false,
//   scrollTop:       0,
// };

// export default function MarketingAgents() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const urlUid    = searchParams.get("uid")    ? parseInt(searchParams.get("uid"), 10) : null;
//   const urlFilter = searchParams.get("filter") || null;

//   const [searchTerm,       setSearchTerm]       = useState("");
//   const [isOpen,           setIsOpen]           = useState(false);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [users,            setUsers]            = useState(moduleCache.users);
//   const [loading,          setLoading]          = useState(false);
//   const [currentPage,      setCurrentPage]      = useState(moduleCache.currentPage);
//   const [totalPages,       setTotalPages]       = useState(moduleCache.totalPages);
//   const [loadedUpToPage,   setLoadedUpToPage]   = useState(moduleCache.loadedUpToPage);
//   const [statistics,       setStatistics]       = useState(null);
//   const [statisticsCache,  setStatisticsCache]  = useState(moduleCache.statisticsCache);
//   const [selectedUserId,   setSelectedUserId]   = useState(urlUid || moduleCache.selectedUserId || null);
//   const [activeFilter,     setActiveFilter]     = useState(urlFilter);
//   const [stableSortedIds,  setStableSortedIds]  = useState(moduleCache.stableSortedIds);

//   const navigate   = useNavigate();
//   const location   = useLocation();
//   const listRef    = useRef(null);
//   const didInitRef = useRef(false);

//   useEffect(() => { moduleCache.users           = users;           }, [users]);
//   useEffect(() => { moduleCache.stableSortedIds = stableSortedIds; }, [stableSortedIds]);
//   useEffect(() => { moduleCache.currentPage     = currentPage;     }, [currentPage]);
//   useEffect(() => { moduleCache.totalPages      = totalPages;      }, [totalPages]);
//   useEffect(() => { moduleCache.loadedUpToPage  = loadedUpToPage;  }, [loadedUpToPage]);
//   useEffect(() => { moduleCache.statisticsCache = statisticsCache; }, [statisticsCache]);
//   useEffect(() => { moduleCache.selectedUserId  = selectedUserId;  }, [selectedUserId]);

//   const updateUrl = useCallback((uid, filter) => {
//     const params = {};
//     if (uid)    params.uid    = uid;
//     if (filter) params.filter = filter;
//     setSearchParams(params, { replace: true });
//   }, [setSearchParams]);

//   const buildUrl = useCallback((page, filter) => {
//     if (filter) {
//       return `${BASE_URL}/referral-users/filters?page=${page}&limit=20&filter=${filter}`;
//     }
//     return `${BASE_URL}/referral-users?page=${page}&limit=20`;
//   }, []);

//   const fetchUsers = useCallback(async (page = 1, filter = null) => {
//     setLoading(true);
//     try {
//       const res  = await fetch(buildUrl(page, filter));
//       const json = await res.json();
//       if (json.success) {
//         const mapped = json.data.map((u) => {
//           const displayName = u.name && u.name.trim() !== "" ? u.name : "User";
//           return {
//             id:                 u.id,
//             name:               displayName,
//             earning:            parseFloat(u.balance || 0),
//             country:            u.country && u.country !== "N/A" && u.country !== "" ? u.country : "USA",
//             avatar:             resolveImageUrl(u.imageUrl || u.image || u.profileImage || u.avatar, displayName),
//             balance:            parseFloat(u.balance || 0),
//             totalReferredUsers: u.totalReferredUsers || 0,
//             totalSales:         u.totalSales !== undefined ? parseInt(u.totalSales || 0) : undefined,
//             createdAt:          u.createdAt,
//           };
//         });

//         if (page === 1) {
//           setUsers(mapped);
//           setStableSortedIds(mapped.map((u) => u.id));
//         } else {
//           setUsers((prev) => [...prev, ...mapped]);
//           setStableSortedIds((prevIds) => {
//             const newIds = mapped.map((u) => u.id).filter((id) => !prevIds.includes(id));
//             return [...prevIds, ...newIds];
//           });
//         }

//         setCurrentPage(json.pagination.page);
//         setTotalPages(json.pagination.totalPages || 0);
//         setLoadedUpToPage(page);
//       }
//     } catch (err) {
//       console.error("Failed to fetch users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [buildUrl]);

//   const fetchUserStatistics = useCallback(async (userId, cache) => {
//     if (!userId) return;
//     const currentCache = cache || moduleCache.statisticsCache;
//     if (currentCache[userId]) {
//       setStatistics(currentCache[userId]);
//       return;
//     }
//     try {
//       const res  = await fetch(REFERRAL_DETAILS_URL, {
//         method:  "POST",
//         headers: { "Content-Type": "application/json" },
//         body:    JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success) {
//         const d      = json.data;
//         const parsed = {
//           freeUsers:         d.freeUsers              || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlyPremium:    d.monthlyTotal           || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlyTrial:      d.monthlyTrialUsers      || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlySubscribed: d.monthlySubscribedUsers || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlyCancelled:  d.monthlyCanceledUsers   || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlyExpired:    d.monthlyExpiredUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           monthlyRefund:     d.monthlyRefundedUsers   || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlyPremium:     d.yearlyTotal            || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlyTrial:       d.yearlyTrialUsers       || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlySubscribed:  d.yearlySubscribedUsers  || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlyCancelled:   d.yearlyCanceledUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlyExpired:     d.yearlyExpiredUsers     || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//           yearlyRefund:      d.yearlyRefundedUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
//         };
//         setStatisticsCache((prev) => {
//           const updated = { ...prev, [userId]: parsed };
//           moduleCache.statisticsCache = updated;
//           return updated;
//         });
//         setStatistics(parsed);
//       }
//     } catch (err) {
//       console.error("Failed to fetch user statistics:", err);
//     }
//   }, []);

//   const getStatsForUser = useCallback((userId) => statisticsCache[userId] || null, [statisticsCache]);

//   const getLeftPanelStats = useCallback((user) => {
//     const s = getStatsForUser(user.id);
//     if (!s) return { totalUsers: null, totalRevenue: null };
//     const totalUsers =
//       (s.freeUsers?.total      || 0) +
//       (s.monthlyPremium?.total || 0) +
//       (s.yearlyPremium?.total  || 0);
//     const totalRevenue =
//       parseFloat(s.freeUsers?.revenue      || 0) +
//       parseFloat(s.monthlyPremium?.revenue || 0) +
//       parseFloat(s.yearlyPremium?.revenue  || 0);
//     return { totalUsers, totalRevenue };
//   }, [getStatsForUser]);

//   const usersById = useMemo(() => {
//     const map = {};
//     users.forEach((u) => { map[u.id] = u; });
//     return map;
//   }, [users]);

//   const displayUsers = useMemo(() =>
//     stableSortedIds
//       .map((id) => usersById[id])
//       .filter(Boolean)
//       .map((user) => ({ ...user, ...getLeftPanelStats(user) })),
//     [stableSortedIds, usersById, getLeftPanelStats]
//   );

//   const filteredUsers = useMemo(() => {
//     if (!searchTerm) return displayUsers;
//     return displayUsers.filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));
//   }, [displayUsers, searchTerm]);

//   const selectUser = useCallback((user, filter) => {
//     setSelectedUserId(user.id);
//     setSelectedUserName(user.name);
//     moduleCache.selectedUserId = user.id;
//     updateUrl(user.id, filter);
//     const cached = moduleCache.statisticsCache[user.id];
//     if (cached) setStatistics(cached);
//     else fetchUserStatistics(user.id, moduleCache.statisticsCache);
//   }, [updateUrl, fetchUserStatistics]);

//   useEffect(() => {
//     if (didInitRef.current) return;
//     didInitRef.current = true;

//     const currentAuthToken = localStorage.getItem("token") || localStorage.getItem("authToken") || "";
//     const cachedAuthToken  = sessionStorage.getItem("_ma_auth") || "";
//     if (currentAuthToken !== cachedAuthToken) {
//       sessionStorage.removeItem("referralMarketingUser");
//       sessionStorage.setItem("_ma_auth", currentAuthToken);
//       moduleCache.users           = [];
//       moduleCache.stableSortedIds = [];
//       moduleCache.currentPage     = 1;
//       moduleCache.totalPages      = 1;
//       moduleCache.loadedUpToPage  = 1;
//       moduleCache.selectedUserId  = null;
//       moduleCache.statisticsCache = {};
//       moduleCache.scrollTop       = 0;
//       moduleCache.initialized     = false;
//     }

//     const navSelectedId = location.state?.selectedUserId
//       ? parseInt(location.state.selectedUserId, 10)
//       : null;

//     if (moduleCache.initialized && moduleCache.users.length > 0) {
//       const resolvedId = navSelectedId || urlUid || moduleCache.selectedUserId;
//       if (resolvedId) {
//         const found  = moduleCache.users.find((u) => u.id === resolvedId);
//         const target = found || moduleCache.users[0];
//         setSelectedUserId(target.id);
//         setSelectedUserName(target.name);
//         moduleCache.selectedUserId = target.id;
//         updateUrl(target.id, activeFilter);
//         const cached = moduleCache.statisticsCache[target.id];
//         if (cached) setStatistics(cached);
//         else fetchUserStatistics(target.id, moduleCache.statisticsCache);
//       }
//       if (moduleCache.scrollTop && listRef.current) {
//         setTimeout(() => {
//           if (listRef.current) listRef.current.scrollTop = moduleCache.scrollTop;
//         }, 50);
//       }
//       if (navSelectedId) window.history.replaceState({}, document.title);
//       return;
//     }

//     fetchUsers(1, urlFilter).then(() => { moduleCache.initialized = true; });
//     if (navSelectedId) window.history.replaceState({}, document.title);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     if (users.length === 0) return;

//     if (selectedUserId && users.find((u) => u.id === selectedUserId)) {
//       const found = users.find((u) => u.id === selectedUserId);
//       if (found) setSelectedUserName(found.name);
//       moduleCache.selectedUserId = selectedUserId;
//       updateUrl(selectedUserId, activeFilter);
//       const cached = moduleCache.statisticsCache[selectedUserId];
//       if (cached) setStatistics(cached);
//       else fetchUserStatistics(selectedUserId, moduleCache.statisticsCache);
//       return;
//     }

//     if (urlUid) {
//       const found = users.find((u) => u.id === urlUid);
//       selectUser(found || users[0], activeFilter);
//       return;
//     }

//     selectUser(users[0], activeFilter);
//   }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     const el = listRef.current;
//     if (!el) return;
//     const onScroll = () => { moduleCache.scrollTop = el.scrollTop; };
//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => el.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleUserClick = useCallback((user) => {
//     selectUser(user, activeFilter);
//   }, [selectUser, activeFilter]);

//   const handleLoadMore = useCallback(() => {
//     if (loading || currentPage >= totalPages) return;
//     fetchUsers(currentPage + 1, activeFilter);
//   }, [loading, currentPage, totalPages, activeFilter, fetchUsers]);

//   const resetState = useCallback(() => {
//     moduleCache.users           = [];
//     moduleCache.stableSortedIds = [];
//     moduleCache.currentPage     = 1;
//     moduleCache.totalPages      = 1;
//     moduleCache.loadedUpToPage  = 1;
//     moduleCache.selectedUserId  = null;
//     moduleCache.scrollTop       = 0;
//     moduleCache.initialized     = false;
//     setUsers([]);
//     setStableSortedIds([]);
//     setCurrentPage(1);
//     setTotalPages(1);
//     setLoadedUpToPage(1);
//     setSelectedUserId(null);
//     setStatistics(null);
//   }, []);

//   const handleFilterSelect = useCallback((filterValue) => {
//     setIsOpen(false);
//     setActiveFilter(filterValue);
//     resetState();
//     setSearchParams({ filter: filterValue }, { replace: true });
//     fetchUsers(1, filterValue).then(() => { moduleCache.initialized = true; });
//   }, [fetchUsers, resetState, setSearchParams]);

//   const handleClearFilter = useCallback(() => {
//     setActiveFilter(null);
//     resetState();
//     setSearchParams({}, { replace: true });
//     fetchUsers(1, null).then(() => { moduleCache.initialized = true; });
//   }, [fetchUsers, resetState, setSearchParams]);

//   const saveAndNavigate = useCallback((path, state) => {
//     navigate(path, { state });
//   }, [navigate]);

//   const currentUser = users.find((u) => u.id === selectedUserId) || users[0] || null;

//   const ZERO = { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 };
//   const stats             = statistics || {};
//   const freeStats         = stats.freeUsers         || ZERO;
//   const monthlyPremium    = stats.monthlyPremium     || ZERO;
//   const monthlyTrial      = stats.monthlyTrial       || ZERO;
//   const monthlySubscribed = stats.monthlySubscribed  || ZERO;
//   const monthlyCancelled  = stats.monthlyCancelled   || ZERO;
//   const monthlyExpired    = stats.monthlyExpired      || ZERO;
//   const monthlyRefund     = stats.monthlyRefund      || ZERO;
//   const yearlyPremium     = stats.yearlyPremium      || ZERO;
//   const yearlyTrial       = stats.yearlyTrial        || ZERO;
//   const yearlySubscribed  = stats.yearlySubscribed   || ZERO;
//   const yearlyCancelled   = stats.yearlyCancelled    || ZERO;
//   const yearlyExpired     = stats.yearlyExpired      || ZERO;
//   const yearlyRefund      = stats.yearlyRefund       || ZERO;

//   const fmt = (val) => `$${parseFloat(val || 0).toFixed(0)}`;

//   const subPageState = {
//     selectedUserId,
//     selectedUserName,
//     selectedUserAvatar:  currentUser?.avatar  || "",
//     selectedUserBalance: currentUser?.balance || 0,
//     selectedUserCountry: currentUser?.country || "USA",
//   };

//   const handleSeeDetail = () => {
//     if (!currentUser) return;
//     const displayUser = displayUsers.find((u) => u.id === currentUser.id) || displayUsers[0];
//     saveAndNavigate("/user-detail-points-history", {
//       selectedUserId:      currentUser.id,
//       selectedUserName:    currentUser.name,
//       selectedUserAvatar:  currentUser.avatar,
//       selectedUserEarning: currentUser.earning,
//       selectedUserCountry: currentUser.country,
//       selectedUserTotal:   displayUser?.totalUsers,
//       selectedUserBalance: displayUser?.totalRevenue,
//       fromPage:            "/marketing-agents",
//     });
//   };

//   const handleFreeUsersClick         = () => saveAndNavigate("/referral-marketing-users",         subPageState);
//   const handleMonthlyTrialClick      = () => saveAndNavigate("/premium-monthly-trial-users",      subPageState);
//   const handleMonthlySubscribedClick = () => saveAndNavigate("/premium-monthly-subscribed-users", subPageState);
//   const handleMonthlyCancelledClick  = () => saveAndNavigate("/premium-monthly-cancelled-users",  subPageState);
//   const handleMonthlyExpiredClick    = () => saveAndNavigate("/premium-monthly-expired-users",    subPageState);
//   const handleMonthlyRefundClick     = () => saveAndNavigate("/premium-monthly-refund-users",     subPageState);
//   const handleYearlyTrialClick       = () => saveAndNavigate("/premium-yearly-trial-users",       subPageState);
//   const handleYearlySubscribedClick  = () => saveAndNavigate("/premium-yearly-subscribed-users",  subPageState);
//   const handleYearlyCancelledClick   = () => saveAndNavigate("/premium-yearly-cancelled-users",   subPageState);
//   const handleYearlyExpiredClick     = () => saveAndNavigate("/premium-yearly-expired-users",     subPageState);
//   const handleYearlyRefundClick      = () => saveAndNavigate("/premium-yearly-refund-users",      subPageState);

//   const activeFilterLabel = activeFilter
//     ? FILTER_OPTIONS.find((f) => f.value === activeFilter)?.label
//     : null;

//   // ── Shared img style for crisp rendering on retina screens ────────────────
//   const imgStyle = {
//     imageRendering:          "auto",
//     WebkitBackfaceVisibility: "hidden",
//     transform:               "translateZ(0)",
//   };

//   return (
//     <div className="min-h-screen h-[1310px] flex bg-[#F5F6FA]">
//       <Sidebar marketingAgentsCount={users.length} isCurrentPageMarketingAgents={true} />

//       {/* LEFT PANEL */}
//       <div className="min-h-screen h-[1279px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px] overflow-hidden">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[240px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[200px] text-[#055860]" strokeWidth={2} />

//         <div className="absolute top-5 right-2">
//           <img
//             className="h-6 w-6 cursor-pointer"
//             src={Groups}
//             alt="Groups Icon"
//             onClick={() => setIsOpen(!isOpen)}
//           />
//           {isOpen && (
//             <div className="absolute right-[-7px] mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50 overflow-hidden">
//               {FILTER_OPTIONS.map((item) => (
//                 <button
//                   key={item.value}
//                   onClick={() => handleFilterSelect(item.value)}
//                   className={`w-full text-center px-4 py-2 text-sm hover:bg-gray-100 ${
//                     activeFilter === item.value ? "bg-[#E8F0F5] text-[#055860] font-semibold" : ""
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {activeFilterLabel && (
//           <div className="flex items-center gap-1 mb-1 mt-[-4px]">
//             <span className="text-xs bg-[#055860] text-white px-2 py-0.5 rounded-lg">
//               {activeFilterLabel}
//             </span>
//             <button
//               onClick={handleClearFilter}
//               className="text-xs text-gray-400 hover:text-red-500 font-bold leading-none"
//               title="Clear filter"
//             >
//               ✕
//             </button>
//           </div>
//         )}

//         <div
//           ref={listRef}
//           className="user-list flex-1 space-y-2 mt-1 pr-1 mt-[-8px]"
//           style={{ maxHeight: "1200px", overflowY: "scroll", overflowX: "hidden" }}
//         >
//           {loading && users.length === 0 ? (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">Loading...</div>
//           ) : filteredUsers.length > 0 ? (
//             <>
//               {filteredUsers.map((user, idx) => {
//                 const isSelected = selectedUserId === user.id;
//                 return (
//                   <div
//                     key={`${user.id}-${idx}`}
//                     onClick={() => handleUserClick(user)}
//                     className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
//                       isSelected
//                         ? "bg-[#E8F0F5] border-[#055860] border"
//                         : "border border-gray-200 hover:bg-[#F5F6FA]"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center gap-2 whitespace-nowrap">
//                         <img
//                           src={user.avatar}
//                           alt={user.name}
//                           referrerPolicy="no-referrer"
//                           onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=055860&color=fff&size=128`;
//                           }}
//                           className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]"
//                           style={imgStyle}
//                         />



//                         <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>
//                           {user.name}
//                         </p>
//                       </div>
//                       <span className="text-xs text-[#055860] mt-4">{user.country}</span>
//                     </div>

//                     <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
//                       <span className="text-gray-500">
//                         Users: <span className="text-[#055860]">{(user.totalReferredUsers ?? 0).toLocaleString()}</span>
//                       </span>
//                       <span className="text-gray-500">
//                         Balance: <span className="text-[#055860]">${parseFloat(user.balance || 0).toLocaleString()}</span>
//                       </span>
//                       {user.totalSales !== undefined && (
//                         <span className="text-gray-500">
//                           Sales: <span className="text-[#055860]">{user.totalSales}</span>
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}

//               {currentPage < totalPages && (
//                 <button
//                   onClick={handleLoadMore}
//                   disabled={loading}
//                   className="w-full py-2 mt-2 text-sm text-[#055860] font-medium hover:bg-[#E8F0F5] rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {loading ? "Loading..." : "Load More"}
//                 </button>
//               )}
//             </>
//           ) : (
//             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//           )}
//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2.5 bg-white mb-5 overflow-hidden">

//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={currentUser?.avatar}
//               alt={currentUser?.name}
//               referrerPolicy="no-referrer"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser?.name || "User")}&background=055860&color=fff&size=128`;
//               }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//               style={imgStyle}
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline hover:cursor-default mt-[-15px]">
//               {currentUser?.name}
//             </h2>
//           </div>
//           <button
//             onClick={handleSeeDetail}
//             className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
//           >
//             See Detail <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="w-full max-w-[3500px] space-y-0 ml-3 overflow-hidden">

//           {/* Free Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-2">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <button onClick={handleFreeUsersClick} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button>
//               </div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{freeStats.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{freeStats.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{freeStats.thisWeek}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(freeStats.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Premium Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{monthlyPremium.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{monthlyPremium.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{monthlyPremium.thisWeek}</div><div className="text-md mt-1 opacity-90">This week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(monthlyPremium.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Trial Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-5 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleMonthlyTrialClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Monthly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyTrial.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Subscribed Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleMonthlySubscribedClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlySubscribed.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Cancelled Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleMonthlyCancelledClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyCancelled.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Expired Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleMonthlyExpiredClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Expired Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyExpired.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Refund Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleMonthlyRefundClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Refund Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyRefund.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Premium Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5 bg-[#055860] text-white">
//               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{yearlyPremium.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{yearlyPremium.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{yearlyPremium.thisWeek}</div><div className="text-md mt-1 opacity-90">This week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(yearlyPremium.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Trial Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleYearlyTrialClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyTrial.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Subscribed Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleYearlySubscribedClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlySubscribed.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Cancelled Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleYearlyCancelledClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyCancelled.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Expired Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleYearlyExpiredClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Expired Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyExpired.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Refund Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
//                 <button onClick={handleYearlyRefundClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer">
//                   <span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Refund Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyRefund.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .user-list::-webkit-scrollbar { width: 8px; }
//         .user-list::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
//         .user-list::-webkit-scrollbar-thumb { background: #055860; border-radius: 10px; }
//         .user-list::-webkit-scrollbar-thumb:hover { background: #044850; }
//         .user-list::-webkit-scrollbar-button:single-button:vertical:decrement { display: block; height: 16px; background-color: #f1f1f1; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%23055860' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; border-radius: 4px 4px 0 0; }
//         .user-list::-webkit-scrollbar-button:single-button:vertical:decrement:hover { background-color: #e0e0e0; }
//         .user-list::-webkit-scrollbar-button:single-button:vertical:increment { display: block; height: 16px; background-color: #f1f1f1; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%23055860' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; border-radius: 0 0 4px 4px; }
//         .user-list::-webkit-scrollbar-button:single-button:vertical:increment:hover { background-color: #e0e0e0; }
//       `}</style>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Groups from "../assets/Groups.png";
import Sidebar from "./Sidebar.jsx";
import { ChevronRight } from "lucide-react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";

const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
const REFERRAL_DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

const FILTER_OPTIONS = [
  { label: "Active Users",    value: "active"       },
  { label: "Total Users",     value: "total"        },
  { label: "Monthly Users",   value: "monthly"      },
  { label: "Weekly Users",    value: "weekly"       },
  { label: "Total Sales",     value: "totalSales"   },
  { label: "Monthly Sales",   value: "monthlySales" },
  { label: "Weekly Sales",    value: "weeklySales"  },
  { label: "Balance",         value: "balance"      },
];

const resolveImageUrl = (imageUrl, name = "User") => {
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=055860&color=fff&size=128`;
  if (!imageUrl || imageUrl.trim() === "") return fallback;
  if (imageUrl.includes("googleusercontent.com")) {
    return imageUrl.replace(/=s\d+-c$/, "=s400-c");
  }
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  return `https://apis.famocare.com/uploads/${imageUrl}`;
};

const moduleCache = {
  users:           [],
  stableSortedIds: [],
  currentPage:     1,
  totalPages:      1,
  loadedUpToPage:  1,
  selectedUserId:  null,
  statisticsCache: {},
  initialized:     false,
  scrollTop:       0,
};

export default function MarketingAgents() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlUid    = searchParams.get("uid")    ? parseInt(searchParams.get("uid"), 10) : null;
  const urlFilter = searchParams.get("filter") || null;

  const [searchTerm,       setSearchTerm]       = useState("");
  const [isOpen,           setIsOpen]           = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [users,            setUsers]            = useState(moduleCache.users);
  const [loading,          setLoading]          = useState(false);
  const [currentPage,      setCurrentPage]      = useState(moduleCache.currentPage);
  const [totalPages,       setTotalPages]       = useState(moduleCache.totalPages);
  const [loadedUpToPage,   setLoadedUpToPage]   = useState(moduleCache.loadedUpToPage);
  const [statistics,       setStatistics]       = useState(null);
  const [statisticsCache,  setStatisticsCache]  = useState(moduleCache.statisticsCache);
  const [selectedUserId,   setSelectedUserId]   = useState(urlUid || moduleCache.selectedUserId || null);
  const [activeFilter,     setActiveFilter]     = useState(urlFilter);
  const [stableSortedIds,  setStableSortedIds]  = useState(moduleCache.stableSortedIds);

  const navigate   = useNavigate();
  const location   = useLocation();
  const listRef    = useRef(null);
  const didInitRef = useRef(false);

  useEffect(() => { moduleCache.users           = users;           }, [users]);
  useEffect(() => { moduleCache.stableSortedIds = stableSortedIds; }, [stableSortedIds]);
  useEffect(() => { moduleCache.currentPage     = currentPage;     }, [currentPage]);
  useEffect(() => { moduleCache.totalPages      = totalPages;      }, [totalPages]);
  useEffect(() => { moduleCache.loadedUpToPage  = loadedUpToPage;  }, [loadedUpToPage]);
  useEffect(() => { moduleCache.statisticsCache = statisticsCache; }, [statisticsCache]);
  useEffect(() => { moduleCache.selectedUserId  = selectedUserId;  }, [selectedUserId]);

  const updateUrl = useCallback((uid, filter) => {
    const params = {};
    if (uid)    params.uid    = uid;
    if (filter) params.filter = filter;
    setSearchParams(params, { replace: true });
  }, [setSearchParams]);

  const buildUrl = useCallback((page, filter) => {
    if (filter) {
      return `${BASE_URL}/referral-users/filters?page=${page}&limit=20&filter=${filter}`;
    }
    return `${BASE_URL}/referral-users?page=${page}&limit=20`;
  }, []);

  const fetchUsers = useCallback(async (page = 1, filter = null) => {
    setLoading(true);
    try {
      const res  = await fetch(buildUrl(page, filter));
      const json = await res.json();
      if (json.success) {
        const mapped = json.data.map((u) => {
          const displayName = u.name && u.name.trim() !== "" ? u.name : "User";
          return {
            id:                 u.id,
            name:               displayName,
            earning:            parseFloat(u.balance || 0),
            country:            u.country && u.country !== "N/A" && u.country !== "" ? u.country : "USA",
            avatar:             resolveImageUrl(u.imageUrl || u.image || u.profileImage || u.avatar, displayName),
            balance:            parseFloat(u.balance || 0),
            totalReferredUsers: u.totalReferredUsers || 0,
            totalSales:         u.totalSales !== undefined ? parseInt(u.totalSales || 0) : undefined,
            createdAt:          u.createdAt,
          };
        });

        if (page === 1) {
          setUsers(mapped);
          setStableSortedIds(mapped.map((u) => u.id));
        } else {
          setUsers((prev) => [...prev, ...mapped]);
          setStableSortedIds((prevIds) => {
            const newIds = mapped.map((u) => u.id).filter((id) => !prevIds.includes(id));
            return [...prevIds, ...newIds];
          });
        }

        setCurrentPage(json.pagination.page);
        setTotalPages(json.pagination.totalPages || 0);
        setLoadedUpToPage(page);
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  }, [buildUrl]);

  const fetchUserStatistics = useCallback(async (userId, cache) => {
    if (!userId) return;
    const currentCache = cache || moduleCache.statisticsCache;
    if (currentCache[userId]) {
      setStatistics(currentCache[userId]);
      return;
    }
    try {
      const res  = await fetch(REFERRAL_DETAILS_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ uid: userId }),
      });
      const json = await res.json();
      if (json.success) {
        const d      = json.data;
        const parsed = {
          freeUsers:         d.freeUsers              || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlyPremium:    d.monthlyTotal           || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlyTrial:      d.monthlyTrialUsers      || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlySubscribed: d.monthlySubscribedUsers || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlyCancelled:  d.monthlyCanceledUsers   || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlyExpired:    d.monthlyExpiredUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          monthlyRefund:     d.monthlyRefundedUsers   || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlyPremium:     d.yearlyTotal            || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlyTrial:       d.yearlyTrialUsers       || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlySubscribed:  d.yearlySubscribedUsers  || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlyCancelled:   d.yearlyCanceledUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlyExpired:     d.yearlyExpiredUsers     || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
          yearlyRefund:      d.yearlyRefundedUsers    || { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 },
        };
        setStatisticsCache((prev) => {
          const updated = { ...prev, [userId]: parsed };
          moduleCache.statisticsCache = updated;
          return updated;
        });
        setStatistics(parsed);
      }
    } catch (err) {
      console.error("Failed to fetch user statistics:", err);
    }
  }, []);

  const getStatsForUser = useCallback((userId) => statisticsCache[userId] || null, [statisticsCache]);

  const getLeftPanelStats = useCallback((user) => {
    const s = getStatsForUser(user.id);
    if (!s) return { totalUsers: null, totalRevenue: null };
    const totalUsers =
      (s.freeUsers?.total      || 0) +
      (s.monthlyPremium?.total || 0) +
      (s.yearlyPremium?.total  || 0);
    const totalRevenue =
      parseFloat(s.freeUsers?.revenue      || 0) +
      parseFloat(s.monthlyPremium?.revenue || 0) +
      parseFloat(s.yearlyPremium?.revenue  || 0);
    return { totalUsers, totalRevenue };
  }, [getStatsForUser]);

  const usersById = useMemo(() => {
    const map = {};
    users.forEach((u) => { map[u.id] = u; });
    return map;
  }, [users]);

  const displayUsers = useMemo(() =>
    stableSortedIds
      .map((id) => usersById[id])
      .filter(Boolean)
      .map((user) => ({ ...user, ...getLeftPanelStats(user) })),
    [stableSortedIds, usersById, getLeftPanelStats]
  );

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return displayUsers;
    return displayUsers.filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [displayUsers, searchTerm]);

  const selectUser = useCallback((user, filter) => {
    setSelectedUserId(user.id);
    setSelectedUserName(user.name);
    moduleCache.selectedUserId = user.id;
    updateUrl(user.id, filter);
    const cached = moduleCache.statisticsCache[user.id];
    if (cached) setStatistics(cached);
    else fetchUserStatistics(user.id, moduleCache.statisticsCache);
  }, [updateUrl, fetchUserStatistics]);

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;

    const currentAuthToken = localStorage.getItem("token") || localStorage.getItem("authToken") || "";
    const cachedAuthToken  = sessionStorage.getItem("_ma_auth") || "";
    if (currentAuthToken !== cachedAuthToken) {
      sessionStorage.removeItem("referralMarketingUser");
      sessionStorage.setItem("_ma_auth", currentAuthToken);
      moduleCache.users           = [];
      moduleCache.stableSortedIds = [];
      moduleCache.currentPage     = 1;
      moduleCache.totalPages      = 1;
      moduleCache.loadedUpToPage  = 1;
      moduleCache.selectedUserId  = null;
      moduleCache.statisticsCache = {};
      moduleCache.scrollTop       = 0;
      moduleCache.initialized     = false;
    }

    const navSelectedId = location.state?.selectedUserId
      ? parseInt(location.state.selectedUserId, 10)
      : null;

    if (moduleCache.initialized && moduleCache.users.length > 0) {
      const resolvedId = navSelectedId || urlUid || moduleCache.selectedUserId;
      if (resolvedId) {
        const found  = moduleCache.users.find((u) => u.id === resolvedId);
        const target = found || moduleCache.users[0];
        setSelectedUserId(target.id);
        setSelectedUserName(target.name);
        moduleCache.selectedUserId = target.id;
        updateUrl(target.id, activeFilter);
        const cached = moduleCache.statisticsCache[target.id];
        if (cached) setStatistics(cached);
        else fetchUserStatistics(target.id, moduleCache.statisticsCache);
      }
      if (moduleCache.scrollTop && listRef.current) {
        setTimeout(() => {
          if (listRef.current) listRef.current.scrollTop = moduleCache.scrollTop;
        }, 50);
      }
      if (navSelectedId) window.history.replaceState({}, document.title);
      return;
    }

    fetchUsers(1, urlFilter).then(() => { moduleCache.initialized = true; });
    if (navSelectedId) window.history.replaceState({}, document.title);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (users.length === 0) return;

    if (selectedUserId && users.find((u) => u.id === selectedUserId)) {
      const found = users.find((u) => u.id === selectedUserId);
      if (found) setSelectedUserName(found.name);
      moduleCache.selectedUserId = selectedUserId;
      updateUrl(selectedUserId, activeFilter);
      const cached = moduleCache.statisticsCache[selectedUserId];
      if (cached) setStatistics(cached);
      else fetchUserStatistics(selectedUserId, moduleCache.statisticsCache);
      return;
    }

    if (urlUid) {
      const found = users.find((u) => u.id === urlUid);
      selectUser(found || users[0], activeFilter);
      return;
    }

    selectUser(users[0], activeFilter);
  }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onScroll = () => { moduleCache.scrollTop = el.scrollTop; };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const handleUserClick = useCallback((user) => {
    selectUser(user, activeFilter);
  }, [selectUser, activeFilter]);

  const handleLoadMore = useCallback(() => {
    if (loading || currentPage >= totalPages) return;
    fetchUsers(currentPage + 1, activeFilter);
  }, [loading, currentPage, totalPages, activeFilter, fetchUsers]);

  const resetState = useCallback(() => {
    moduleCache.users           = [];
    moduleCache.stableSortedIds = [];
    moduleCache.currentPage     = 1;
    moduleCache.totalPages      = 1;
    moduleCache.loadedUpToPage  = 1;
    moduleCache.selectedUserId  = null;
    moduleCache.scrollTop       = 0;
    moduleCache.initialized     = false;
    setUsers([]);
    setStableSortedIds([]);
    setCurrentPage(1);
    setTotalPages(1);
    setLoadedUpToPage(1);
    setSelectedUserId(null);
    setStatistics(null);
  }, []);

  const handleFilterSelect = useCallback((filterValue) => {
    setIsOpen(false);
    setActiveFilter(filterValue);
    resetState();
    setSearchParams({ filter: filterValue }, { replace: true });
    fetchUsers(1, filterValue).then(() => { moduleCache.initialized = true; });
  }, [fetchUsers, resetState, setSearchParams]);

  const handleClearFilter = useCallback(() => {
    setActiveFilter(null);
    resetState();
    setSearchParams({}, { replace: true });
    fetchUsers(1, null).then(() => { moduleCache.initialized = true; });
  }, [fetchUsers, resetState, setSearchParams]);

  const saveAndNavigate = useCallback((path, state) => {
    navigate(path, { state });
  }, [navigate]);

  const currentUser = users.find((u) => u.id === selectedUserId) || users[0] || null;

  const ZERO = { total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 };
  const stats             = statistics || {};
  const freeStats         = stats.freeUsers         || ZERO;
  const monthlyPremium    = stats.monthlyPremium     || ZERO;
  const monthlyTrial      = stats.monthlyTrial       || ZERO;
  const monthlySubscribed = stats.monthlySubscribed  || ZERO;
  const monthlyCancelled  = stats.monthlyCancelled   || ZERO;
  const monthlyExpired    = stats.monthlyExpired      || ZERO;
  const monthlyRefund     = stats.monthlyRefund      || ZERO;
  const yearlyPremium     = stats.yearlyPremium      || ZERO;
  const yearlyTrial       = stats.yearlyTrial        || ZERO;
  const yearlySubscribed  = stats.yearlySubscribed   || ZERO;
  const yearlyCancelled   = stats.yearlyCancelled    || ZERO;
  const yearlyExpired     = stats.yearlyExpired      || ZERO;
  const yearlyRefund      = stats.yearlyRefund       || ZERO;

  const fmt = (val) => `$${parseFloat(val || 0).toFixed(0)}`;

  const subPageState = {
    selectedUserId,
    selectedUserName,
    selectedUserAvatar:  currentUser?.avatar  || "",
    selectedUserBalance: currentUser?.balance || 0,
    selectedUserCountry: currentUser?.country || "USA",
  };

  // ── Navigate to detail page with uid IN the URL so refresh works ──
  const handleSeeDetail = () => {
    if (!currentUser) return;
    const displayUser = displayUsers.find((u) => u.id === currentUser.id) || displayUsers[0];
    // Persist so PointsHistory can read on refresh
    localStorage.setItem("selectedUserId",      String(currentUser.id));
    localStorage.setItem("selectedUserName",    currentUser.name);
    localStorage.setItem("selectedUserAvatar",  currentUser.avatar  || "");
    localStorage.setItem("selectedUserBalance", String(currentUser.balance || 0));
    localStorage.setItem("selectedUserCountry", currentUser.country || "USA");
    navigate(`/user-detail-points-history?uid=${currentUser.id}`, {
      state: {
        selectedUserId:      currentUser.id,
        selectedUserName:    currentUser.name,
        selectedUserAvatar:  currentUser.avatar,
        selectedUserEarning: currentUser.earning,
        selectedUserCountry: currentUser.country,
        selectedUserTotal:   displayUser?.totalUsers,
        selectedUserBalance: displayUser?.totalRevenue,
        fromPage:            "/marketing-agents",
      },
    });
  };

  const handleFreeUsersClick         = () => saveAndNavigate("/referral-marketing-users",         subPageState);
  const handleMonthlyTrialClick      = () => saveAndNavigate("/premium-monthly-trial-users",      subPageState);
  const handleMonthlySubscribedClick = () => saveAndNavigate("/premium-monthly-subscribed-users", subPageState);
  const handleMonthlyCancelledClick  = () => saveAndNavigate("/premium-monthly-cancelled-users",  subPageState);
  const handleMonthlyExpiredClick    = () => saveAndNavigate("/premium-monthly-expired-users",    subPageState);
  const handleMonthlyRefundClick     = () => saveAndNavigate("/premium-monthly-refund-users",     subPageState);
  const handleYearlyTrialClick       = () => saveAndNavigate("/premium-yearly-trial-users",       subPageState);
  const handleYearlySubscribedClick  = () => saveAndNavigate("/premium-yearly-subscribed-users",  subPageState);
  const handleYearlyCancelledClick   = () => saveAndNavigate("/premium-yearly-cancelled-users",   subPageState);
  const handleYearlyExpiredClick     = () => saveAndNavigate("/premium-yearly-expired-users",     subPageState);
  const handleYearlyRefundClick      = () => saveAndNavigate("/premium-yearly-refund-users",      subPageState);

  const activeFilterLabel = activeFilter
    ? FILTER_OPTIONS.find((f) => f.value === activeFilter)?.label
    : null;

  const imgStyle = {
    imageRendering:           "auto",
    WebkitBackfaceVisibility: "hidden",
    transform:                "translateZ(0)",
  };

  return (
    <div className="min-h-screen h-[1310px] flex bg-[#F5F6FA]">
      <Sidebar marketingAgentsCount={users.length} isCurrentPageMarketingAgents={true} />

      {/* LEFT PANEL */}
      <div className="min-h-screen h-[1279px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px] overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[40px] w-[240px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[200px] text-[#055860]" strokeWidth={2} />

        <div className="absolute top-5 right-2">
          <img
            className="h-6 w-6 cursor-pointer"
            src={Groups}
            alt="Groups Icon"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-[-7px] mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50 overflow-hidden">
              {FILTER_OPTIONS.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleFilterSelect(item.value)}
                  className={`w-full text-center px-4 py-2 text-sm hover:bg-gray-100 ${
                    activeFilter === item.value ? "bg-[#E8F0F5] text-[#055860] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {activeFilterLabel && (
          <div className="flex items-center gap-1 mb-1 mt-[-4px]">
            <span className="text-xs bg-[#055860] text-white px-2 py-0.5 rounded-lg">
              {activeFilterLabel}
            </span>
            <button
              onClick={handleClearFilter}
              className="text-xs text-gray-400 hover:text-red-500 font-bold leading-none"
              title="Clear filter"
            >
              ✕
            </button>
          </div>
        )}

        <div
          ref={listRef}
          className="user-list flex-1 space-y-2 mt-1 pr-1 mt-[-8px]"
          style={{ maxHeight: "1200px", overflowY: "scroll", overflowX: "hidden" }}
        >
          {loading && users.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">Loading...</div>
          ) : filteredUsers.length > 0 ? (
            <>
              {filteredUsers.map((user, idx) => {
                const isSelected = selectedUserId === user.id;
                return (
                  <div
                    key={`${user.id}-${idx}`}
                    onClick={() => handleUserClick(user)}
                    className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#E8F0F5] border-[#055860] border"
                        : "border border-gray-200 hover:bg-[#F5F6FA]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=055860&color=fff&size=128`;
                          }}
                          className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]"
                          style={imgStyle}
                        />
                        <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>
                          {user.name}
                        </p>
                      </div>
                      <span className="text-xs text-[#055860] mt-4">{user.country}</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
                      <span className="text-gray-500">
                        Users: <span className="text-[#055860]">{(user.totalReferredUsers ?? 0).toLocaleString()}</span>
                      </span>
                      <span className="text-gray-500">
                        Balance: <span className="text-[#055860]">${parseFloat(user.balance || 0).toLocaleString()}</span>
                      </span>
                      {user.totalSales !== undefined && (
                        <span className="text-gray-500">
                          Sales: <span className="text-[#055860]">{user.totalSales}</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              {currentPage < totalPages && (
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="w-full py-2 mt-2 text-sm text-[#055860] font-medium hover:bg-[#E8F0F5] rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Loading..." : "Load More"}
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2.5 bg-white mb-5 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser?.avatar}
              alt={currentUser?.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser?.name || "User")}&background=055860&color=fff&size=128`;
              }}
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
              style={imgStyle}
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline hover:cursor-default mt-[-15px]">
              {currentUser?.name}
            </h2>
          </div>
          <button
            onClick={handleSeeDetail}
            className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
          >
            See Detail <ChevronRight size={24} />
          </button>
        </div>

        <div className="w-full max-w-[3500px] space-y-0 ml-3 overflow-hidden">
          {/* Free Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-2">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <button onClick={handleFreeUsersClick} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button>
              </div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{freeStats.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{freeStats.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{freeStats.thisWeek}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(freeStats.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Premium Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{monthlyPremium.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{monthlyPremium.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{monthlyPremium.thisWeek}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(monthlyPremium.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Trial Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-5 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleMonthlyTrialClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyTrial.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyTrial.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Subscribed Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleMonthlySubscribedClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlySubscribed.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlySubscribed.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Cancelled Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleMonthlyCancelledClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyCancelled.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyCancelled.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Expired Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleMonthlyExpiredClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Expired Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyExpired.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyExpired.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Refund Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleMonthlyRefundClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Refund Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{monthlyRefund.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(monthlyRefund.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Premium Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-[#055860] text-white">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{yearlyPremium.total}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{yearlyPremium.thisMonth}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{yearlyPremium.thisWeek}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{fmt(yearlyPremium.revenue)}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Trial Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleYearlyTrialClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyTrial.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyTrial.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Subscribed Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleYearlySubscribedClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlySubscribed.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlySubscribed.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Cancelled Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleYearlyCancelledClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyCancelled.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyCancelled.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Expired Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleYearlyExpiredClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Expired Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyExpired.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyExpired.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Refund Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white flex items-center justify-center">
                <button onClick={handleYearlyRefundClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Refund Users</span></button>
              </div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.total}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.thisMonth}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#055860]/10 p-4 text-center border-r border-white"><div className="text-lg font-bold text-[#055860]">{yearlyRefund.thisWeek}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#055860]/10 p-4 text-center"><div className="text-lg font-bold text-[#055860]">{fmt(yearlyRefund.revenue)}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .user-list::-webkit-scrollbar { width: 8px; }
        .user-list::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .user-list::-webkit-scrollbar-thumb { background: #055860; border-radius: 10px; }
        .user-list::-webkit-scrollbar-thumb:hover { background: #044850; }
        .user-list::-webkit-scrollbar-button:single-button:vertical:decrement { display: block; height: 16px; background-color: #f1f1f1; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%23055860' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; border-radius: 4px 4px 0 0; }
        .user-list::-webkit-scrollbar-button:single-button:vertical:decrement:hover { background-color: #e0e0e0; }
        .user-list::-webkit-scrollbar-button:single-button:vertical:increment { display: block; height: 16px; background-color: #f1f1f1; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 24 24' fill='none' stroke='%23055860' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center; border-radius: 0 0 4px 4px; }
        .user-list::-webkit-scrollbar-button:single-button:vertical:increment:hover { background-color: #e0e0e0; }
      `}</style>
    </div>
  );
}