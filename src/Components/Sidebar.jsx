
// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { FiMenu } from "react-icons/fi";
// // import { ChevronLeft } from "lucide-react";
// // import { X } from "lucide-react";
// // import FreeUsers from "../assets/FreeUsers.png";
// // import PremiumUsers from "../assets/PremiumUsers.png";
// // import MarketingAgents from "../assets/MarketingAgents.png";
// // import PaymentRequests from "../assets/PaymentRequests.png";
// // import Logout from "../assets/Logout.png";
// // import FamocareLogo from "../assets/FamocareLogo.png";

// // export default function Sidebar({ 
// //   isDrawer = false, 
// //   handleDrawer = () => {}, 
// //   freeUsersCount,
// //   premiumUsersCount,
// //   marketingAgentsCount,
// //   paymentRequestsCount,
// //   isCurrentPageFreeAllUsers = false,
// //   isCurrentPagePremiumUsers = false,
// //   isCurrentPageMarketingAgents = false,
// //   isCurrentPagePaymentRequests = false
// // }) {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [activeMainPage, setActiveMainPage] = useState(null);
// //   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
// //   const [logoutLoading, setLogoutLoading] = useState(false);
// //   const [logoutError, setLogoutError] = useState("");

// //   const [staticFreeCount, setStaticFreeCount] = useState(null);
// //   const [staticPremiumCount, setStaticPremiumCount] = useState(null);
// //   const [staticMarketingAgentsCount, setStaticMarketingAgentsCount] = useState(null);
// //   const [staticPaymentRequestsCount, setStaticPaymentRequestsCount] = useState(null);

// //   const PERMANENT_STORAGE_PREFIX = 'permanent_count_';
// //   const PERMANENT_FREE_KEY = PERMANENT_STORAGE_PREFIX + 'freeUsers';
// //   const PERMANENT_PREMIUM_KEY = PERMANENT_STORAGE_PREFIX + 'premiumUsers';
// //   const PERMANENT_MARKETING_KEY = PERMANENT_STORAGE_PREFIX + 'marketingAgents';
// //   const PERMANENT_PAYMENT_KEY = PERMANENT_STORAGE_PREFIX + 'paymentRequests';

// //   useEffect(() => {
// //     if (location.pathname === '/free-all-users' || location.pathname.includes('/free-all-users')) {
// //       localStorage.setItem('currentSidebarPage', '/free-all-users');
// //       setActiveMainPage('/free-all-users');
// //     } else if (location.pathname === '/premium-users' || location.pathname.includes('/premium-users')) {
// //       localStorage.setItem('currentSidebarPage', '/premium-users');
// //       setActiveMainPage('/premium-users');
// //     } else if (location.pathname === '/marketing-agents' || location.pathname.includes('/marketing-agents')) {
// //       localStorage.setItem('currentSidebarPage', '/marketing-agents');
// //       setActiveMainPage('/marketing-agents');
// //     } else if (location.pathname === '/payment-requests' || location.pathname.includes('/payment-requests')) {
// //       localStorage.setItem('currentSidebarPage', '/payment-requests');
// //       setActiveMainPage('/payment-requests');
// //     }
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const loadCount = (tempKey, permanentKey, setter) => {
// //       const temp = localStorage.getItem(tempKey);
// //       if (temp !== null && temp !== "null" && temp !== "undefined") {
// //         const parsed = parseInt(temp, 10);
// //         if (!isNaN(parsed)) { setter(parsed); return; }
// //       }
// //       const permanent = localStorage.getItem(permanentKey);
// //       if (permanent !== null && permanent !== "null" && permanent !== "undefined") {
// //         const parsed = parseInt(permanent, 10);
// //         if (!isNaN(parsed)) { setter(parsed); }
// //       }
// //     };

// //     loadCount('staticFreeUsersCountFinal', PERMANENT_FREE_KEY, setStaticFreeCount);
// //     loadCount('staticPremiumUsersCountFinal', PERMANENT_PREMIUM_KEY, setStaticPremiumCount);
// //     loadCount('staticMarketingAgentsCountFinal', PERMANENT_MARKETING_KEY, setStaticMarketingAgentsCount);
// //     loadCount('staticPaymentRequestsCountFinal', PERMANENT_PAYMENT_KEY, setStaticPaymentRequestsCount);

// //     const storedPage = localStorage.getItem('currentSidebarPage');
// //     if (storedPage) setActiveMainPage(storedPage);
// //   }, []);

// //   useEffect(() => {
// //     if (freeUsersCount !== null && freeUsersCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_FREE_KEY), 10);
// //       if (!stored || freeUsersCount >= stored) {
// //         setStaticFreeCount(freeUsersCount);
// //         localStorage.setItem('staticFreeUsersCountFinal', freeUsersCount);
// //         localStorage.setItem(PERMANENT_FREE_KEY, freeUsersCount);
// //       }
// //     }
// //   }, [freeUsersCount]);

// //   useEffect(() => {
// //     if (premiumUsersCount !== null && premiumUsersCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_PREMIUM_KEY), 10);
// //       if (!stored || premiumUsersCount >= stored) {
// //         setStaticPremiumCount(premiumUsersCount);
// //         localStorage.setItem('staticPremiumUsersCountFinal', premiumUsersCount);
// //         localStorage.setItem(PERMANENT_PREMIUM_KEY, premiumUsersCount);
// //       }
// //     }
// //   }, [premiumUsersCount]);

// //   useEffect(() => {
// //     if (marketingAgentsCount !== null && marketingAgentsCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_MARKETING_KEY), 10);
// //       if (!stored || marketingAgentsCount >= stored) {
// //         setStaticMarketingAgentsCount(marketingAgentsCount);
// //         localStorage.setItem('staticMarketingAgentsCountFinal', marketingAgentsCount);
// //         localStorage.setItem(PERMANENT_MARKETING_KEY, marketingAgentsCount);
// //       }
// //     }
// //   }, [marketingAgentsCount]);

// //   useEffect(() => {
// //     if (paymentRequestsCount !== null && paymentRequestsCount !== undefined) {
// //       setStaticPaymentRequestsCount(paymentRequestsCount);
// //       localStorage.setItem('staticPaymentRequestsCountFinal', paymentRequestsCount);
// //       localStorage.setItem(PERMANENT_PAYMENT_KEY, paymentRequestsCount);
// //     }
// //   }, [paymentRequestsCount]);

// //   const displayMarketingAgentsCount = (marketingAgentsCount !== null && marketingAgentsCount !== undefined) ? marketingAgentsCount : staticMarketingAgentsCount;
// //   const displayPaymentRequestsCount = (paymentRequestsCount !== null && paymentRequestsCount !== undefined) ? paymentRequestsCount : staticPaymentRequestsCount;

// //   const menuItems = [
// //     { name: "Marketing Agents", path: "/marketing-agents", icon: MarketingAgents, count: displayMarketingAgentsCount },
// //     { name: "Payment Requests", path: "/payment-requests", icon: PaymentRequests, count: displayPaymentRequestsCount },
// //   ];

// //   const handleNavigateToPage = (path) => {
// //     setActiveMainPage(path);
// //     navigate(path);
// //   };

// //   const handleLogoutClick = () => {
// //     setLogoutError("");
// //     setShowLogoutPopup(true);
// //   };

// //   // ── Logout API ────────────────────────────────────────────────────────────
// //   const handleConfirmLogout = async () => {
// //     setLogoutLoading(true);
// //     setLogoutError("");
// //     try {
// //       // ── Use refreshToken saved at login (we saved accessToken as refreshToken) ──
// //       const refreshToken = localStorage.getItem("refreshToken");

// //       const res = await fetch(
// //         "https://referralapis.appistan.co/api/auth/logout",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ refreshToken }),
// //         }
// //       );
// //       const json = await res.json();

// //       if (json.success) {
// //         localStorage.clear();
// //         setShowLogoutPopup(false);
// //         navigate("/");
// //       } else {
// //         // ── If API returns error, still log out locally ───────────────────
// //         localStorage.clear();
// //         setShowLogoutPopup(false);
// //         navigate("/");
// //       }
// //     } catch (err) {
// //       console.error("Logout error:", err);
// //       // ── On network error, still clear and redirect ────────────────────
// //       localStorage.clear();
// //       setShowLogoutPopup(false);
// //       navigate("/");
// //     } finally {
// //       setLogoutLoading(false);
// //     }
// //   };

// //   const handleCancelLogout = () => {
// //     setShowLogoutPopup(false);
// //     setLogoutError("");
// //   };

// //   return (
// //     <div
// //       className={`${
// //         collapsed ? "w-20" : "w-55"
// //       } h-full min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 relative ml-[-7px] overflow-y-hidden`}
// //     >
// //       {isDrawer && (
// //         <div className="absolute top-2 right-4 min-[768px]:hidden z-10">
// //           <button
// //             onClick={handleDrawer}
// //             className="p-2 hover:bg-gray-100 rounded-full transition"
// //             aria-label="Close sidebar"
// //           >
// //             <X size={20} className="text-gray-600" />
// //           </button>
// //         </div>
// //       )}

// //       <div className="relative flex flex-col items-center py-6 border-b border-gray-200 ml-3 flex-shrink-0">
// //         <button
// //           onClick={() => setCollapsed(!collapsed)}
// //           className="absolute top-3 right-4 text-[#055860] hover:bg-gray-100 p-1 rounded"
// //           aria-label="Toggle sidebar"
// //         >
// //           {collapsed ? <FiMenu size={22} /> : <ChevronLeft size={22} />}
// //         </button>

// //         <img
// //           src={FamocareLogo}
// //           alt="Famocare"
// //           className={`${collapsed ? "w-10 mt-4" : "w-[150px]"}`}
// //         />

// //         {!collapsed && (
// //           <h1 className="text-[30px] font-bold text-[#055860] leading-none">
// //             Famo<span className="text-[#691188]">care</span>
// //           </h1>
// //         )}
// //       </div>

// //       <nav className="flex-1 py-4 px-4 overflow-y-auto">
// //         {menuItems.map((item) => {
// //           const isActive = activeMainPage === item.path;
// //           return (
// //             <button
// //               key={item.path}
// //               onClick={() => handleNavigateToPage(item.path)}
// //               type="button"
// //               className={`w-full flex items-center cursor-pointer px-4 py-3 mt-[6px] rounded-md transition ${
// //                 isActive
// //                   ? "bg-[#f3e7fa] text-[#691188] border-[#691188]"
// //                   : "text-gray-500 hover:bg-[#f3e7fa] border-transparent"
// //               } ${collapsed ? "justify-center" : "justify-between"}`}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <img
// //                   src={item.icon}
// //                   alt={item.name}
// //                   className="w-6 h-6"
// //                   style={isActive ? { filter: 'brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(2034%) hue-rotate(283deg) brightness(89%) contrast(93%)' } : {}}
// //                 />
// //                 {!collapsed && (
// //                   <span className="text-sm font-medium">{item.name}</span>
// //                 )}
// //               </div>

// //               {!collapsed && item.count !== null && item.count !== undefined && (
// //                 <span className="h-5 w-5 bg-[#691188] text-white text-xs font-semibold rounded-full flex items-center justify-center ml-5">
// //                   {item.count}
// //                 </span>
// //               )}
// //             </button>
// //           );
// //         })}
// //       </nav>

// //       <div className="flex-shrink-0">
// //         <button
// //           onClick={handleLogoutClick}
// //           type="button"
// //           className={`mx-4 mb-4 w-[calc(100%-32px)] flex items-center gap-3 rounded-md cursor-pointer border-gray-300 transition hover:bg-[#f3e7fa] border-transparent hover:border-gray-400 ${
// //             collapsed ? "justify-center py-4" : "px-4 py-3"
// //           }`}
// //           aria-label="Logout"
// //         >
// //           <img src={Logout} alt="Logout" className="w-6 h-6" />
// //           {!collapsed && (
// //             <span className="text-sm font-medium text-gray-600 hover:text-[#691188]">Logout</span>
// //           )}
// //         </button>
// //       </div>

// //       {/* Logout Popup */}
// //       {showLogoutPopup && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-[90%] md:w-full">
// //             <div className="flex items-center justify-center mb-6">
// //               <div className="w-16 h-16 bg-[#055860] rounded-full flex items-center justify-center">
// //                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
// //                 </svg>
// //               </div>
// //             </div>

// //             <h2 className="text-center text-2xl font-bold text-[#055860] mb-2">
// //               Confirm Logout
// //             </h2>
// //             <p className="text-center text-gray-600 mb-4">
// //               Are you sure you want to logout? You will be redirected to the login page.
// //             </p>

// //             {logoutError && (
// //               <p className="text-center text-red-500 text-sm mb-4">{logoutError}</p>
// //             )}

// //             <div className="flex gap-4">
// //               <button
// //                 onClick={handleCancelLogout}
// //                 disabled={logoutLoading}
// //                 className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmLogout}
// //                 disabled={logoutLoading}
// //                 className="flex-1 px-6 py-3 bg-[#055860] text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
// //               >
// //                 {logoutLoading ? "Logging out..." : "Logout"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style jsx>{`
// //         .overflow-y-auto::-webkit-scrollbar { width: 6px; }
// //         .overflow-y-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
// //         .overflow-y-auto::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
// //         .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #555; }
// //       `}</style>
// //     </div>
// //   );
// // }




// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { FiMenu } from "react-icons/fi";
// // import { ChevronLeft } from "lucide-react";
// // import { X } from "lucide-react";
// // // import FreeUsers from "../assets/FreeUsers.png";
// // // import PremiumUsers from "../assets/PremiumUsers.png";
// // import MarketingAgents from "../assets/MarketingAgents.png";
// // import PaymentRequests from "../assets/PaymentRequests.png";
// // import Logout from "../assets/Logout.png";
// // import FamocareLogo from "../assets/FamocareLogo.png";

// // // Keys that must survive logout — accepted/cancelled payment requests
// // const PERSIST_ACROSS_LOGOUT = ["pr_accepted", "pr_cancelled", "pr_optimistic"];

// // export default function Sidebar({ 
// //   isDrawer = false, 
// //   handleDrawer = () => {}, 
// //   freeUsersCount,
// //   premiumUsersCount,
// //   marketingAgentsCount,
// //   paymentRequestsCount,
// //   isCurrentPageFreeAllUsers = false,
// //   isCurrentPagePremiumUsers = false,
// //   isCurrentPageMarketingAgents = false,
// //   isCurrentPagePaymentRequests = false
// // }) {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [activeMainPage, setActiveMainPage] = useState(null);
// //   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
// //   const [logoutLoading, setLogoutLoading] = useState(false);
// //   const [logoutError, setLogoutError] = useState("");

// //   const [staticFreeCount, setStaticFreeCount] = useState(null);
// //   const [staticPremiumCount, setStaticPremiumCount] = useState(null);
// //   const [staticMarketingAgentsCount, setStaticMarketingAgentsCount] = useState(null);
// //   const [staticPaymentRequestsCount, setStaticPaymentRequestsCount] = useState(null);

// //   const PERMANENT_STORAGE_PREFIX = 'permanent_count_';
// //   const PERMANENT_FREE_KEY = PERMANENT_STORAGE_PREFIX + 'freeUsers';
// //   const PERMANENT_PREMIUM_KEY = PERMANENT_STORAGE_PREFIX + 'premiumUsers';
// //   const PERMANENT_MARKETING_KEY = PERMANENT_STORAGE_PREFIX + 'marketingAgents';
// //   const PERMANENT_PAYMENT_KEY = PERMANENT_STORAGE_PREFIX + 'paymentRequests';

// //   useEffect(() => {
// //     if (location.pathname === '/free-all-users' || location.pathname.includes('/free-all-users')) {
// //       localStorage.setItem('currentSidebarPage', '/free-all-users');
// //       setActiveMainPage('/free-all-users');
// //     } else if (location.pathname === '/premium-users' || location.pathname.includes('/premium-users')) {
// //       localStorage.setItem('currentSidebarPage', '/premium-users');
// //       setActiveMainPage('/premium-users');
// //     } else if (location.pathname === '/marketing-agents' || location.pathname.includes('/marketing-agents')) {
// //       localStorage.setItem('currentSidebarPage', '/marketing-agents');
// //       setActiveMainPage('/marketing-agents');
// //     } else if (location.pathname === '/payment-requests' || location.pathname.includes('/payment-requests')) {
// //       localStorage.setItem('currentSidebarPage', '/payment-requests');
// //       setActiveMainPage('/payment-requests');
// //     }
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const loadCount = (tempKey, permanentKey, setter) => {
// //       const temp = localStorage.getItem(tempKey);
// //       if (temp !== null && temp !== "null" && temp !== "undefined") {
// //         const parsed = parseInt(temp, 10);
// //         if (!isNaN(parsed)) { setter(parsed); return; }
// //       }
// //       const permanent = localStorage.getItem(permanentKey);
// //       if (permanent !== null && permanent !== "null" && permanent !== "undefined") {
// //         const parsed = parseInt(permanent, 10);
// //         if (!isNaN(parsed)) { setter(parsed); }
// //       }
// //     };

// //     loadCount('staticFreeUsersCountFinal', PERMANENT_FREE_KEY, setStaticFreeCount);
// //     loadCount('staticPremiumUsersCountFinal', PERMANENT_PREMIUM_KEY, setStaticPremiumCount);
// //     loadCount('staticMarketingAgentsCountFinal', PERMANENT_MARKETING_KEY, setStaticMarketingAgentsCount);
// //     loadCount('staticPaymentRequestsCountFinal', PERMANENT_PAYMENT_KEY, setStaticPaymentRequestsCount);

// //     const storedPage = localStorage.getItem('currentSidebarPage');
// //     if (storedPage) setActiveMainPage(storedPage);
// //   }, []);

// //   useEffect(() => {
// //     if (freeUsersCount !== null && freeUsersCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_FREE_KEY), 10);
// //       if (!stored || freeUsersCount >= stored) {
// //         setStaticFreeCount(freeUsersCount);
// //         localStorage.setItem('staticFreeUsersCountFinal', freeUsersCount);
// //         localStorage.setItem(PERMANENT_FREE_KEY, freeUsersCount);
// //       }
// //     }
// //   }, [freeUsersCount]);

// //   useEffect(() => {
// //     if (premiumUsersCount !== null && premiumUsersCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_PREMIUM_KEY), 10);
// //       if (!stored || premiumUsersCount >= stored) {
// //         setStaticPremiumCount(premiumUsersCount);
// //         localStorage.setItem('staticPremiumUsersCountFinal', premiumUsersCount);
// //         localStorage.setItem(PERMANENT_PREMIUM_KEY, premiumUsersCount);
// //       }
// //     }
// //   }, [premiumUsersCount]);

// //   useEffect(() => {
// //     if (marketingAgentsCount !== null && marketingAgentsCount !== undefined) {
// //       const stored = parseInt(localStorage.getItem(PERMANENT_MARKETING_KEY), 10);
// //       if (!stored || marketingAgentsCount >= stored) {
// //         setStaticMarketingAgentsCount(marketingAgentsCount);
// //         localStorage.setItem('staticMarketingAgentsCountFinal', marketingAgentsCount);
// //         localStorage.setItem(PERMANENT_MARKETING_KEY, marketingAgentsCount);
// //       }
// //     }
// //   }, [marketingAgentsCount]);

// //   useEffect(() => {
// //     if (paymentRequestsCount !== null && paymentRequestsCount !== undefined) {
// //       setStaticPaymentRequestsCount(paymentRequestsCount);
// //       localStorage.setItem('staticPaymentRequestsCountFinal', paymentRequestsCount);
// //       localStorage.setItem(PERMANENT_PAYMENT_KEY, paymentRequestsCount);
// //     }
// //   }, [paymentRequestsCount]);

// //   const displayMarketingAgentsCount = (marketingAgentsCount !== null && marketingAgentsCount !== undefined) ? marketingAgentsCount : staticMarketingAgentsCount;
// //   const displayPaymentRequestsCount = (paymentRequestsCount !== null && paymentRequestsCount !== undefined) ? paymentRequestsCount : staticPaymentRequestsCount;

// //   const menuItems = [
// //     { name: "Marketing Agents", path: "/marketing-agents", icon: MarketingAgents, count: displayMarketingAgentsCount },
// //     { name: "Payment Requests", path: "/payment-requests", icon: PaymentRequests, count: displayPaymentRequestsCount },
// //   ];

// //   const handleNavigateToPage = (path) => {
// //     setActiveMainPage(path);
// //     navigate(path);
// //   };

// //   const handleLogoutClick = () => {
// //     setLogoutError("");
// //     setShowLogoutPopup(true);
// //   };

// //   // ── Logout API ────────────────────────────────────────────────────────────
// //   const handleConfirmLogout = async () => {
// //     setLogoutLoading(true);
// //     setLogoutError("");
// //     try {
// //       const refreshToken = localStorage.getItem("refreshToken");

// //       const res = await fetch(
// //         "https://referralapis.appistan.co/api/auth/logout",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ refreshToken }),
// //         }
// //       );
// //       const json = await res.json();

// //       // ── Save persistent keys BEFORE clearing localStorage ──────────────
// //       const preserved = {};
// //       PERSIST_ACROSS_LOGOUT.forEach((key) => {
// //         const val = localStorage.getItem(key);
// //         if (val !== null) preserved[key] = val;
// //       });

// //       localStorage.clear();

// //       // ── Restore persistent keys AFTER clearing ─────────────────────────
// //       Object.entries(preserved).forEach(([key, val]) => {
// //         localStorage.setItem(key, val);
// //       });

// //       setShowLogoutPopup(false);
// //       navigate("/");
// //     } catch (err) {
// //       console.error("Logout error:", err);

// //       // ── On network error, still preserve keys, clear and redirect ──────
// //       const preserved = {};
// //       PERSIST_ACROSS_LOGOUT.forEach((key) => {
// //         const val = localStorage.getItem(key);
// //         if (val !== null) preserved[key] = val;
// //       });

// //       localStorage.clear();

// //       Object.entries(preserved).forEach(([key, val]) => {
// //         localStorage.setItem(key, val);
// //       });

// //       setShowLogoutPopup(false);
// //       navigate("/");
// //     } finally {
// //       setLogoutLoading(false);
// //     }
// //   };

// //   const handleCancelLogout = () => {
// //     setShowLogoutPopup(false);
// //     setLogoutError("");
// //   };

// //   return (
// //     <div
// //       className={`${
// //         collapsed ? "w-20" : "w-55"
// //       } h-full min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 relative ml-[-7px] overflow-y-hidden`}
// //     >
// //       {isDrawer && (
// //         <div className="absolute top-2 right-4 min-[768px]:hidden z-10">
// //           <button
// //             onClick={handleDrawer}
// //             className="p-2 hover:bg-gray-100 rounded-full transition"
// //             aria-label="Close sidebar"
// //           >
// //             <X size={20} className="text-gray-600" />
// //           </button>
// //         </div>
// //       )}

// //       <div className="relative flex flex-col items-center py-6 border-b border-gray-200 ml-3 flex-shrink-0">
// //         <button
// //           onClick={() => setCollapsed(!collapsed)}
// //           className="absolute top-3 right-4 text-[#055860] hover:bg-gray-100 p-1 rounded"
// //           aria-label="Toggle sidebar"
// //         >
// //           {collapsed ? <FiMenu size={22} /> : <ChevronLeft size={22} />}
// //         </button>

// //         <img
// //           src={FamocareLogo}
// //           alt="Famocare"
// //           className={`${collapsed ? "w-10 mt-4" : "w-[150px]"}`}
// //         />

// //         {!collapsed && (
// //           <h1 className="text-[30px] font-bold text-[#055860] leading-none">
// //             Famo<span className="text-[#691188]">care</span>
// //           </h1>
// //         )}
// //       </div>

// //       <nav className="flex-1 py-4 px-4 overflow-y-auto">
// //         {menuItems.map((item) => {
// //           const isActive = activeMainPage === item.path;
// //           return (
// //             <button
// //               key={item.path}
// //               onClick={() => handleNavigateToPage(item.path)}
// //               type="button"
// //               className={`w-full flex items-center cursor-pointer px-4 py-3 mt-[6px] rounded-md transition ${
// //                 isActive
// //                   ? "bg-[#f3e7fa] text-[#691188] border-[#691188]"
// //                   : "text-gray-500 hover:bg-[#f3e7fa] border-transparent"
// //               } ${collapsed ? "justify-center" : "justify-between"}`}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <img
// //                   src={item.icon}
// //                   alt={item.name}
// //                   className="w-6 h-6"
// //                   style={isActive ? { filter: 'brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(2034%) hue-rotate(283deg) brightness(89%) contrast(93%)' } : {}}
// //                 />
// //                 {!collapsed && (
// //                   <span className="text-sm font-medium">{item.name}</span>
// //                 )}
// //               </div>

// //               {!collapsed && item.count !== null && item.count !== undefined && (
// //                 <span className="h-5 w-5 bg-[#691188] text-white text-xs font-semibold rounded-full flex items-center justify-center ml-5">
// //                   {item.count}
// //                 </span>
// //               )}
// //             </button>
// //           );
// //         })}
// //       </nav>

// //       <div className="flex-shrink-0">
// //         <button
// //           onClick={handleLogoutClick}
// //           type="button"
// //           className={`mx-4 mb-4 w-[calc(100%-32px)] flex items-center gap-3 rounded-md cursor-pointer border-gray-300 transition hover:bg-[#f3e7fa] border-transparent hover:border-gray-400 ${
// //             collapsed ? "justify-center py-4" : "px-4 py-3"
// //           }`}
// //           aria-label="Logout"
// //         >
// //           <img src={Logout} alt="Logout" className="w-6 h-6" />
// //           {!collapsed && (
// //             <span className="text-sm font-medium text-gray-600 hover:text-[#691188]">Logout</span>
// //           )}
// //         </button>
// //       </div>

// //       {/* Logout Popup */}
// //       {showLogoutPopup && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-[90%] md:w-full">
// //             <div className="flex items-center justify-center mb-6">
// //               <div className="w-16 h-16 bg-[#055860] rounded-full flex items-center justify-center">
// //                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
// //                 </svg>
// //               </div>
// //             </div>

// //             <h2 className="text-center text-2xl font-bold text-[#055860] mb-2">
// //               Confirm Logout
// //             </h2>
// //             <p className="text-center text-gray-600 mb-4">
// //               Are you sure you want to logout? You will be redirected to the login page.
// //             </p>

// //             {logoutError && (
// //               <p className="text-center text-red-500 text-sm mb-4">{logoutError}</p>
// //             )}

// //             <div className="flex gap-4">
// //               <button
// //                 onClick={handleCancelLogout}
// //                 disabled={logoutLoading}
// //                 className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmLogout}
// //                 disabled={logoutLoading}
// //                 className="flex-1 px-6 py-3 bg-[#055860] text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50"
// //               >
// //                 {logoutLoading ? "Logging out..." : "Logout"}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style jsx>{`
// //         .overflow-y-auto::-webkit-scrollbar { width: 6px; }
// //         .overflow-y-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
// //         .overflow-y-auto::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
// //         .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #555; }
// //       `}</style>
// //     </div>
// //   );
// // }







// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { ChevronLeft } from "lucide-react";
// import { X } from "lucide-react";
// import FreeUsers from "../assets/FreeUsers.png";
// import PremiumUsers from "../assets/PremiumUsers.png";
// import MarketingAgents from "../assets/MarketingAgents.png";
// import PaymentRequests from "../assets/PaymentRequests.png";
// import Logout from "../assets/Logout.png";
// import FamocareLogo from "../assets/FamocareLogo.png";

// // Keys that must survive logout
// const PERSIST_ACROSS_LOGOUT = [
//   "pr_accepted", "pr_cancelled", "pr_optimistic",
//   "pr_active_tab",
//   "staticPaymentRequestsCountFinal", "permanent_count_paymentRequests",
//   "staticMarketingAgentsCountFinal", "permanent_count_marketingAgents",
// ];

// // ── Always a perfect 22x22 circle. Font shrinks for longer text ──────────────
// const CountBadge = ({ count }) => {
//   const n = Number(count);
//   if (isNaN(n) || count === null || count === undefined) return null;
//   const display  = n > 99 ? "99+" : String(n);
//   const fontSize = display.length >= 3 ? "8px" : display.length === 2 ? "9px" : "11px";
//   return (
//     <span
//       style={{ width: "22px", height: "22px", borderRadius: "50%", fontSize, flexShrink: 0, lineHeight: 1 }}
//       className="bg-[#691188] text-white font-semibold flex items-center justify-center ml-5"
//     >
//       {display}
//     </span>
//   );
// };

// export default function Sidebar({ 
//   isDrawer = false, 
//   handleDrawer = () => {}, 
//   freeUsersCount,
//   premiumUsersCount,
//   marketingAgentsCount,
//   paymentRequestsCount,
//   isCurrentPageFreeAllUsers = false,
//   isCurrentPagePremiumUsers = false,
//   isCurrentPageMarketingAgents = false,
//   isCurrentPagePaymentRequests = false
// }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeMainPage, setActiveMainPage] = useState(null);
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   const [logoutLoading, setLogoutLoading] = useState(false);
//   const [logoutError, setLogoutError] = useState("");

//   const [staticFreeCount, setStaticFreeCount] = useState(null);
//   const [staticPremiumCount, setStaticPremiumCount] = useState(null);
//   const [staticMarketingAgentsCount, setStaticMarketingAgentsCount] = useState(null);
//   const [staticPaymentRequestsCount, setStaticPaymentRequestsCount] = useState(null);

//   const PERMANENT_STORAGE_PREFIX = 'permanent_count_';
//   const PERMANENT_FREE_KEY       = PERMANENT_STORAGE_PREFIX + 'freeUsers';
//   const PERMANENT_PREMIUM_KEY    = PERMANENT_STORAGE_PREFIX + 'premiumUsers';
//   const PERMANENT_MARKETING_KEY  = PERMANENT_STORAGE_PREFIX + 'marketingAgents';
//   const PERMANENT_PAYMENT_KEY    = PERMANENT_STORAGE_PREFIX + 'paymentRequests';

//   useEffect(() => {
//     if (location.pathname.includes('/free-all-users')) {
//       localStorage.setItem('currentSidebarPage', '/free-all-users');
//       setActiveMainPage('/free-all-users');
//     } else if (location.pathname.includes('/premium-users')) {
//       localStorage.setItem('currentSidebarPage', '/premium-users');
//       setActiveMainPage('/premium-users');
//     } else if (location.pathname.includes('/marketing-agents')) {
//       localStorage.setItem('currentSidebarPage', '/marketing-agents');
//       setActiveMainPage('/marketing-agents');
//     } else if (location.pathname.includes('/payment-requests')) {
//       localStorage.setItem('currentSidebarPage', '/payment-requests');
//       setActiveMainPage('/payment-requests');
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     const loadCount = (tempKey, permanentKey, setter) => {
//       const temp = localStorage.getItem(tempKey);
//       if (temp !== null && temp !== "null" && temp !== "undefined") {
//         const parsed = parseInt(temp, 10);
//         if (!isNaN(parsed)) { setter(parsed); return; }
//       }
//       const permanent = localStorage.getItem(permanentKey);
//       if (permanent !== null && permanent !== "null" && permanent !== "undefined") {
//         const parsed = parseInt(permanent, 10);
//         if (!isNaN(parsed)) { setter(parsed); }
//       }
//     };
//     loadCount('staticFreeUsersCountFinal',         PERMANENT_FREE_KEY,      setStaticFreeCount);
//     loadCount('staticPremiumUsersCountFinal',       PERMANENT_PREMIUM_KEY,   setStaticPremiumCount);
//     loadCount('staticMarketingAgentsCountFinal',    PERMANENT_MARKETING_KEY, setStaticMarketingAgentsCount);
//     loadCount('staticPaymentRequestsCountFinal',    PERMANENT_PAYMENT_KEY,   setStaticPaymentRequestsCount);
//     const storedPage = localStorage.getItem('currentSidebarPage');
//     if (storedPage) setActiveMainPage(storedPage);
//   }, []);

//   useEffect(() => {
//     if (freeUsersCount !== null && freeUsersCount !== undefined) {
//       const stored = parseInt(localStorage.getItem(PERMANENT_FREE_KEY), 10);
//       if (!stored || freeUsersCount >= stored) {
//         setStaticFreeCount(freeUsersCount);
//         localStorage.setItem('staticFreeUsersCountFinal', freeUsersCount);
//         localStorage.setItem(PERMANENT_FREE_KEY, freeUsersCount);
//       }
//     }
//   }, [freeUsersCount]);

//   useEffect(() => {
//     if (premiumUsersCount !== null && premiumUsersCount !== undefined) {
//       const stored = parseInt(localStorage.getItem(PERMANENT_PREMIUM_KEY), 10);
//       if (!stored || premiumUsersCount >= stored) {
//         setStaticPremiumCount(premiumUsersCount);
//         localStorage.setItem('staticPremiumUsersCountFinal', premiumUsersCount);
//         localStorage.setItem(PERMANENT_PREMIUM_KEY, premiumUsersCount);
//       }
//     }
//   }, [premiumUsersCount]);

//   useEffect(() => {
//     if (marketingAgentsCount !== null && marketingAgentsCount !== undefined) {
//       setStaticMarketingAgentsCount(Number(marketingAgentsCount));
//       localStorage.setItem('staticMarketingAgentsCountFinal', marketingAgentsCount);
//       localStorage.setItem(PERMANENT_MARKETING_KEY, marketingAgentsCount);
//     }
//   }, [marketingAgentsCount]);

//   useEffect(() => {
//     if (paymentRequestsCount !== null && paymentRequestsCount !== undefined) {
//       setStaticPaymentRequestsCount(paymentRequestsCount);
//       localStorage.setItem('staticPaymentRequestsCountFinal', paymentRequestsCount);
//       localStorage.setItem(PERMANENT_PAYMENT_KEY, paymentRequestsCount);
//     }
//   }, [paymentRequestsCount]);

//   const displayMarketingAgentsCount =
//     (marketingAgentsCount !== null && marketingAgentsCount !== undefined)
//       ? Number(marketingAgentsCount)
//       : (staticMarketingAgentsCount !== null ? Number(staticMarketingAgentsCount) : null);

//   const displayPaymentRequestsCount =
//     (paymentRequestsCount !== null && paymentRequestsCount !== undefined)
//       ? Number(paymentRequestsCount)
//       : (staticPaymentRequestsCount !== null ? Number(staticPaymentRequestsCount) : null);

//   const menuItems = [
//     { name: "Marketing Agents", path: "/marketing-agents", icon: MarketingAgents, count: displayMarketingAgentsCount },
//     { name: "Payment Requests", path: "/payment-requests", icon: PaymentRequests, count: displayPaymentRequestsCount },
//   ];

//   const handleNavigateToPage = (path) => {
//     setActiveMainPage(path);
//     navigate(path);
//   };

//   const handleLogoutClick = () => {
//     setLogoutError("");
//     setShowLogoutPopup(true);
//   };

//   const handleConfirmLogout = async () => {
//     setLogoutLoading(true);
//     setLogoutError("");

//     // Save persistent keys BEFORE clearing
//     const preserved = {};
//     PERSIST_ACROSS_LOGOUT.forEach((key) => {
//       const val = localStorage.getItem(key);
//       if (val !== null) preserved[key] = val;
//     });

//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       await fetch("https://referralapis.appistan.co/api/auth/logout", {
//         method:  "POST",
//         headers: { "Content-Type": "application/json" },
//         body:    JSON.stringify({ refreshToken }),
//       });
//     } catch (err) {
//       console.error("Logout error:", err);
//     } finally {
//       localStorage.clear();
//       // Restore persistent keys AFTER clearing
//       Object.entries(preserved).forEach(([key, val]) => {
//         localStorage.setItem(key, val);
//       });
//       setLogoutLoading(false);
//       setShowLogoutPopup(false);
//       navigate("/");
//     }
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutPopup(false);
//     setLogoutError("");
//   };

//   return (
//     <div
//       className={`${
//         collapsed ? "w-20" : "w-55"
//       } h-full min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 relative ml-[-7px] overflow-y-hidden`}
//     >
//       {isDrawer && (
//         <div className="absolute top-2 right-4 min-[768px]:hidden z-10">
//           <button onClick={handleDrawer} className="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Close sidebar">
//             <X size={20} className="text-gray-600" />
//           </button>
//         </div>
//       )}

//       <div className="relative flex flex-col items-center py-6 border-b border-gray-200 ml-3 flex-shrink-0">
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="absolute top-3 right-4 text-[#055860] hover:bg-gray-100 p-1 rounded"
//           aria-label="Toggle sidebar"
//         >
//           {collapsed ? <FiMenu size={22} /> : <ChevronLeft size={22} />}
//         </button>
//         <img src={FamocareLogo} alt="Famocare" className={`${collapsed ? "w-10 mt-4" : "w-[150px]"}`} />
//         {!collapsed && (
//           <h1 className="text-[30px] font-bold text-[#055860] leading-none">
//             Famo<span className="text-[#691188]">care</span>
//           </h1>
//         )}
//       </div>

//       <nav className="flex-1 py-4 px-4 overflow-y-auto">
//         {menuItems.map((item) => {
//           const isActive = activeMainPage === item.path;
//           return (
//             <button
//               key={item.path}
//               onClick={() => handleNavigateToPage(item.path)}
//               type="button"
//               className={`w-full flex items-center cursor-pointer px-4 py-3 mt-[6px] rounded-md transition ${
//                 isActive ? "bg-[#f3e7fa] text-[#691188] border-[#691188]" : "text-gray-500 hover:bg-[#f3e7fa] border-transparent"
//               } ${collapsed ? "justify-center" : "justify-between"}`}
//             >
//               <div className="flex items-center gap-3">
//                 <img
//                   src={item.icon}
//                   alt={item.name}
//                   className="w-6 h-6"
//                   style={isActive ? { filter: 'brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(2034%) hue-rotate(283deg) brightness(89%) contrast(93%)' } : {}}
//                 />
//                 {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
//               </div>

//               {/* Badge — only renders when not collapsed AND item.count is a valid number */}
//               {!collapsed && item.count !== null && item.count !== undefined && !isNaN(Number(item.count)) && (
//                 <CountBadge count={item.count} />
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       <div className="flex-shrink-0">
//         <button
//           onClick={handleLogoutClick}
//           type="button"
//           className={`mx-4 mb-4 w-[calc(100%-32px)] flex items-center gap-3 rounded-md cursor-pointer border-gray-300 transition hover:bg-[#f3e7fa] border-transparent hover:border-gray-400 ${
//             collapsed ? "justify-center py-4" : "px-4 py-3"
//           }`}
//           aria-label="Logout"
//         >
//           <img src={Logout} alt="Logout" className="w-6 h-6" />
//           {!collapsed && <span className="text-sm font-medium text-gray-600 hover:text-[#691188]">Logout</span>}
//         </button>
//       </div>

//       {/* Logout Popup */}
//       {showLogoutPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-[90%] md:w-full">
//             <div className="flex items-center justify-center mb-6">
//               <div className="w-16 h-16 bg-[#055860] rounded-full flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                 </svg>
//               </div>
//             </div>
//             <h2 className="text-center text-2xl font-bold text-[#055860] mb-2">Confirm Logout</h2>
//             <p className="text-center text-gray-600 mb-4">Are you sure you want to logout? You will be redirected to the login page.</p>
//             {logoutError && <p className="text-center text-red-500 text-sm mb-4">{logoutError}</p>}
//             <div className="flex gap-4">
//               <button onClick={handleCancelLogout} disabled={logoutLoading}
//                 className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50">
//                 Cancel
//               </button>
//               <button onClick={handleConfirmLogout} disabled={logoutLoading}
//                 className="flex-1 px-6 py-3 bg-[#055860] text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50">
//                 {logoutLoading ? "Logging out..." : "Logout"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .overflow-y-auto::-webkit-scrollbar { width: 6px; }
//         .overflow-y-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
//         .overflow-y-auto::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
//         .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #555; }
//       `}</style>
//     </div>
//   );
// }


////




import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ChevronLeft } from "lucide-react";
import { X } from "lucide-react";
import FreeUsers from "../assets/FreeUsers.png";
import PremiumUsers from "../assets/PremiumUsers.png";
import MarketingAgents from "../assets/MarketingAgents.png";
import PaymentRequests from "../assets/PaymentRequests.png";
import Logout from "../assets/Logout.png";
import FamocareLogo from "../assets/FamocareLogo.png";

const PERSIST_ACROSS_LOGOUT = [
  "pr_accepted", "pr_cancelled", "pr_optimistic",
  "pr_active_tab",
  "staticPaymentRequestsCountFinal", "permanent_count_paymentRequests",
  "staticMarketingAgentsCountFinal", "permanent_count_marketingAgents",
];

const CountBadge = ({ count }) => {
  const n = Number(count);
  if (isNaN(n) || count === null || count === undefined) return null;
  const display  = n > 99 ? "99+" : String(n);
  const fontSize = display.length >= 3 ? "8px" : display.length === 2 ? "9px" : "11px";
  return (
    <span
      style={{ width: "22px", height: "22px", borderRadius: "50%", fontSize, flexShrink: 0, lineHeight: 1 }}
      className="bg-[#691188] text-white font-semibold flex items-center justify-center ml-5"
    >
      {display}
    </span>
  );
};

export default function Sidebar({
  isDrawer = false,
  handleDrawer = () => {},
  freeUsersCount,
  premiumUsersCount,
  marketingAgentsCount,
  paymentRequestsCount,
  isCurrentPageFreeAllUsers = false,
  isCurrentPagePremiumUsers = false,
  isCurrentPageMarketingAgents = false,
  isCurrentPagePaymentRequests = false
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeMainPage, setActiveMainPage] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [logoutError, setLogoutError] = useState("");

  const [staticFreeCount, setStaticFreeCount] = useState(null);
  const [staticPremiumCount, setStaticPremiumCount] = useState(null);
  const [staticMarketingAgentsCount, setStaticMarketingAgentsCount] = useState(null);
  const [staticPaymentRequestsCount, setStaticPaymentRequestsCount] = useState(null);

  const PERMANENT_STORAGE_PREFIX = 'permanent_count_';
  const PERMANENT_FREE_KEY       = PERMANENT_STORAGE_PREFIX + 'freeUsers';
  const PERMANENT_PREMIUM_KEY    = PERMANENT_STORAGE_PREFIX + 'premiumUsers';
  const PERMANENT_MARKETING_KEY  = PERMANENT_STORAGE_PREFIX + 'marketingAgents';
  const PERMANENT_PAYMENT_KEY    = PERMANENT_STORAGE_PREFIX + 'paymentRequests';

  useEffect(() => {
    if (location.pathname.includes('/free-all-users')) {
      localStorage.setItem('currentSidebarPage', '/free-all-users');
      setActiveMainPage('/free-all-users');
    } else if (location.pathname.includes('/premium-users')) {
      localStorage.setItem('currentSidebarPage', '/premium-users');
      setActiveMainPage('/premium-users');
    } else if (location.pathname.includes('/marketing-agents')) {
      localStorage.setItem('currentSidebarPage', '/marketing-agents');
      setActiveMainPage('/marketing-agents');
    } else if (location.pathname.includes('/payment-requests')) {
      localStorage.setItem('currentSidebarPage', '/payment-requests');
      setActiveMainPage('/payment-requests');
    }
  }, [location.pathname]);

  useEffect(() => {
    const loadCount = (tempKey, permanentKey, setter) => {
      const temp = localStorage.getItem(tempKey);
      if (temp !== null && temp !== "null" && temp !== "undefined") {
        const parsed = parseInt(temp, 10);
        if (!isNaN(parsed)) { setter(parsed); return; }
      }
      const permanent = localStorage.getItem(permanentKey);
      if (permanent !== null && permanent !== "null" && permanent !== "undefined") {
        const parsed = parseInt(permanent, 10);
        if (!isNaN(parsed)) { setter(parsed); }
      }
    };
    loadCount('staticFreeUsersCountFinal',      PERMANENT_FREE_KEY,      setStaticFreeCount);
    loadCount('staticPremiumUsersCountFinal',    PERMANENT_PREMIUM_KEY,   setStaticPremiumCount);
    loadCount('staticMarketingAgentsCountFinal', PERMANENT_MARKETING_KEY, setStaticMarketingAgentsCount);
    loadCount('staticPaymentRequestsCountFinal', PERMANENT_PAYMENT_KEY,   setStaticPaymentRequestsCount);
    const storedPage = localStorage.getItem('currentSidebarPage');
    if (storedPage) setActiveMainPage(storedPage);
  }, []);

  useEffect(() => {
    if (freeUsersCount !== null && freeUsersCount !== undefined) {
      const stored = parseInt(localStorage.getItem(PERMANENT_FREE_KEY), 10);
      if (!stored || freeUsersCount >= stored) {
        setStaticFreeCount(freeUsersCount);
        localStorage.setItem('staticFreeUsersCountFinal', freeUsersCount);
        localStorage.setItem(PERMANENT_FREE_KEY, freeUsersCount);
      }
    }
  }, [freeUsersCount]);

  useEffect(() => {
    if (premiumUsersCount !== null && premiumUsersCount !== undefined) {
      const stored = parseInt(localStorage.getItem(PERMANENT_PREMIUM_KEY), 10);
      if (!stored || premiumUsersCount >= stored) {
        setStaticPremiumCount(premiumUsersCount);
        localStorage.setItem('staticPremiumUsersCountFinal', premiumUsersCount);
        localStorage.setItem(PERMANENT_PREMIUM_KEY, premiumUsersCount);
      }
    }
  }, [premiumUsersCount]);

  useEffect(() => {
    if (marketingAgentsCount !== null && marketingAgentsCount !== undefined) {
      setStaticMarketingAgentsCount(Number(marketingAgentsCount));
      localStorage.setItem('staticMarketingAgentsCountFinal', marketingAgentsCount);
      localStorage.setItem(PERMANENT_MARKETING_KEY, marketingAgentsCount);
    }
  }, [marketingAgentsCount]);

  // ✅ FIXED — payment requests count always updates from API (rawPendingTotal)
  // Never keep a stale higher value — pending counts only reflect current API state
  useEffect(() => {
    if (paymentRequestsCount !== null && paymentRequestsCount !== undefined) {
      const count = Number(paymentRequestsCount);
      if (!isNaN(count)) {
        setStaticPaymentRequestsCount(count);
        // ✅ Always overwrite — rawPendingTotal is always the correct API value
        localStorage.setItem('staticPaymentRequestsCountFinal', count);
        localStorage.setItem(PERMANENT_PAYMENT_KEY, count);
      }
    }
  }, [paymentRequestsCount]);

  const displayMarketingAgentsCount =
    (marketingAgentsCount !== null && marketingAgentsCount !== undefined)
      ? Number(marketingAgentsCount)
      : (staticMarketingAgentsCount !== null ? Number(staticMarketingAgentsCount) : null);

  // ✅ FIXED — when on payment requests page, always use live prop value
  // When on other pages, use localStorage value
  const displayPaymentRequestsCount =
    (paymentRequestsCount !== null && paymentRequestsCount !== undefined)
      ? Number(paymentRequestsCount)
      : (staticPaymentRequestsCount !== null ? Number(staticPaymentRequestsCount) : null);

  const menuItems = [
    { name: "Marketing Agents", path: "/marketing-agents", icon: MarketingAgents, count: displayMarketingAgentsCount },
    { name: "Payment Requests", path: "/payment-requests", icon: PaymentRequests, count: displayPaymentRequestsCount },
  ];

  const handleNavigateToPage = (path) => {
    setActiveMainPage(path);
    navigate(path);
  };

  const handleLogoutClick = () => {
    setLogoutError("");
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = async () => {
    setLogoutLoading(true);
    setLogoutError("");

    const preserved = {};
    PERSIST_ACROSS_LOGOUT.forEach((key) => {
      const val = localStorage.getItem(key);
      if (val !== null) preserved[key] = val;
    });

    try {
      const refreshToken = localStorage.getItem("refreshToken");
    await fetch("https://apis.famocare.com/api/referralsystem/auth/logout", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ refreshToken }),
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.clear();
      Object.entries(preserved).forEach(([key, val]) => {
        localStorage.setItem(key, val);
      });
      setLogoutLoading(false);
      setShowLogoutPopup(false);
      navigate("/");
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
    setLogoutError("");
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-55"
      } h-full min-h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 relative ml-[-7px] overflow-y-hidden`}
    >
      {isDrawer && (
        <div className="absolute top-2 right-4 min-[768px]:hidden z-10">
          <button onClick={handleDrawer} className="p-2 hover:bg-gray-100 rounded-full transition" aria-label="Close sidebar">
            <X size={20} className="text-gray-600" />
          </button>
        </div>
      )}

      <div className="relative flex flex-col items-center py-6 border-b border-gray-200 ml-3 flex-shrink-0">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-3 right-4 text-[#055860] hover:bg-gray-100 p-1 rounded"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <FiMenu size={22} /> : <ChevronLeft size={22} />}
        </button>
        <img src={FamocareLogo} alt="Famocare" className={`${collapsed ? "w-10 mt-4" : "w-[150px]"}`} />
        {!collapsed && (
          <h1 className="text-[30px] font-bold text-[#055860] leading-none">
            Famo<span className="text-[#691188]">care</span>
          </h1>
        )}
      </div>

      <nav className="flex-1 py-4 px-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeMainPage === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavigateToPage(item.path)}
              type="button"
              // className={`w-full flex items-center cursor-pointer px-4 py-3 mt-[6px] rounded-md transition ${
              //   isActive ? "bg-[#f3e7fa] text-[#691188] border-[#691188]" : "text-gray-500 hover:bg-[#f3e7fa] border-transparent"
              // } ${collapsed ? "justify-center" : "justify-between"}`}
            className={`w-full flex items-center cursor-pointer px-4 py-3 mt-[6px] rounded-md transition ${
  isActive ? "text-[#691188] border-[#691188]" : "text-gray-500 border-transparent"
} ${collapsed ? "justify-center" : "justify-between"}`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6"
                  style={isActive ? { filter: 'brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(2034%) hue-rotate(283deg) brightness(89%) contrast(93%)' } : {}}
                />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </div>
              {!collapsed && item.count !== null && item.count !== undefined && !isNaN(Number(item.count)) && (
                <CountBadge count={item.count} />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex-shrink-0">
        <button
          onClick={handleLogoutClick}
          type="button"
          className={`mx-4 mb-4 w-[calc(100%-32px)] flex items-center gap-3 rounded-md cursor-pointer border-gray-300 transition hover:bg-[#f3e7fa] border-transparent hover:border-gray-400 ${
            collapsed ? "justify-center py-4" : "px-4 py-3"
          }`}
          aria-label="Logout"
        >
          <img src={Logout} alt="Logout" className="w-6 h-6" />
          {!collapsed && <span className="text-sm font-medium text-gray-600 hover:text-[#691188]">Logout</span>}
        </button>
      </div>

      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-[90%] md:w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#055860] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold text-[#055860] mb-2">Confirm Logout</h2>
            <p className="text-center text-gray-600 mb-4">Are you sure you want to logout? You will be redirected to the login page.</p>
            {logoutError && <p className="text-center text-red-500 text-sm mb-4">{logoutError}</p>}
            <div className="flex gap-4">
              <button onClick={handleCancelLogout} disabled={logoutLoading}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50">
                Cancel
              </button>
              <button onClick={handleConfirmLogout} disabled={logoutLoading}
                className="flex-1 px-6 py-3 bg-[#055860] text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50">
                {logoutLoading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar { width: 6px; }
        .overflow-y-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .overflow-y-auto::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>
    </div>
  );
}