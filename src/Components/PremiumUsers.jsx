
// // import React, { useState, useEffect } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import { ChevronRight } from "lucide-react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { Search } from "lucide-react";

// // // Star component
// // // const Star = () => <span className="text-[#691188] text-md">★</span>;

// // export default function UserStatsDashboard() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedUserName, setSelectedUserName] = useState("");

// // const navigate = useNavigate();
// //   const location = useLocation();

// //   // User data with earnings for star calculation
// // const users = [
// //   { id: 1, name: "Olivia Bennett", earning: 5200, reviews: 4.1, balance: "$410", country: "USA", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
// //   { id: 2, name: "Liam Harrison", earning: 4800, reviews: 3.9, balance: "$380", country: "USA", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
// //   { id: 3, name: "Sophia Mitchell", earning: 4300, reviews: 4.3, balance: "$390", country: "USA", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
// //   { id: 4, name: "Ethan Cooper", earning: 4600, reviews: 3.8, balance: "$360", country: "USA", avatar: "https://randomuser.me/api/portraits/men/13.jpg" },
// //   { id: 5, name: "Ava Thompson", earning: 5100, reviews: 4.0, balance: "$400", country: "USA", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
// //   { id: 6, name: "Noah Parker", earning: 4700, reviews: 3.7, balance: "$350", country: "USA", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
// //   { id: 7, name: "Isabella Morgan", earning: 4900, reviews: 4.2, balance: "$420", country: "USA", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
// //   { id: 8, name: "Mason Reed", earning: 4500, reviews: 3.9, balance: "$370", country: "USA", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
// //   { id: 9, name: "Lucas Turner", earning: 3800, reviews: 3.5, balance: "$340", country: "USA", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
// //   { id: 10, name: "Natalie Scott", earning: 4100, reviews: 3.8, balance: "$390", country: "USA", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
// // ];


// //   // Different stats data for each user
// //   const userStats = [
// //     [
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// //       { totalUsers: 950, thisMonth: 170, thisWeek: 17, revenue: "$3950" },
// //       { totalUsers: 1180, thisMonth: 210, thisWeek: 23, revenue: "$5050" },
// //     ],
// //     [
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// //       { totalUsers: 920, thisMonth: 165, thisWeek: 16, revenue: "$3750" },
// //       { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" },
// //     ],
// //     [
// //       { totalUsers: 800, thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// //       { totalUsers: 900, thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 850, thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// //       { totalUsers: 920, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 880, thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// //       { totalUsers: 910, thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// //       { totalUsers: 940, thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// //       { totalUsers: 870, thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// //       { totalUsers: 895, thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// //       { totalUsers: 780, thisMonth: 155, thisWeek: 15, revenue: "$2900" },
// //       { totalUsers: 925, thisMonth: 175, thisWeek: 18, revenue: "$3300" },
// //     ],
// //     [
// //       { totalUsers: 650, thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// //       { totalUsers: 700, thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// //       { totalUsers: 680, thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// //       { totalUsers: 720, thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// //       { totalUsers: 690, thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// //       { totalUsers: 710, thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// //       { totalUsers: 730, thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// //       { totalUsers: 670, thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// //       { totalUsers: 740, thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// //       { totalUsers: 705, thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// //       { totalUsers: 640, thisMonth: 128, thisWeek: 12, revenue: "$1950" },
// //       { totalUsers: 755, thisMonth: 150, thisWeek: 15, revenue: "$2250" },
// //     ],
// //     [
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// //       { totalUsers: 980, thisMonth: 176, thisWeek: 18, revenue: "$3850" },
// //       { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" },
// //     ],
// //     [
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// //       { totalUsers: 920, thisMonth: 164, thisWeek: 16, revenue: "$3200" },
// //       { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" },
// //     ],
// //     [
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// //       { totalUsers: 960, thisMonth: 172, thisWeek: 17, revenue: "$3750" },
// //       { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" },
// //     ],
// //     [
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// //       { totalUsers: 990, thisMonth: 178, thisWeek: 18, revenue: "$3950" },
// //       { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" },
// //     ],
// //     [
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// //       { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// //       { totalUsers: 970, thisMonth: 170, thisWeek: 17, revenue: "$3400" },
// //       { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" },
// //     ],
// //   ];

// // const allLeftUsers = [
// //   { name: "Olivia Bennett", users: "4.1M", balance: "$410", country: "USA", image: "https://randomuser.me/api/portraits/women/12.jpg", earning: 5200 },
// //   { name: "Liam Harrison", users: "3.9K", balance: "$380", country: "USA", image: "https://randomuser.me/api/portraits/men/12.jpg", earning: 4800 },
// //   { name: "Sophia Mitchell", users: "4.3K", balance: "$390", country: "USA", image: "https://randomuser.me/api/portraits/women/13.jpg", earning: 4300 },
// //   { name: "Ethan Cooper", users: "3.8M", balance: "$360", country: "USA", image: "https://randomuser.me/api/portraits/men/13.jpg", earning: 4600 },
// //   { name: "Ava Thompson", users: "4.0K", balance: "$400", country: "USA", image: "https://randomuser.me/api/portraits/women/14.jpg", earning: 5100 },
// //   { name: "Noah Parker", users: "3.7K", balance: "$350", country: "USA", image: "https://randomuser.me/api/portraits/men/14.jpg", earning: 4700 },
// //   { name: "Isabella Morgan", users: "4.2M", balance: "$420", country: "USA", image: "https://randomuser.me/api/portraits/women/15.jpg", earning: 4900 },
// //   { name: "Mason Reed", users: "3.9K", balance: "$370", country: "USA", image: "https://randomuser.me/api/portraits/men/15.jpg", earning: 4500 },
// //   { name: "Lucas Turner", users: "3.5M", balance: "$340", country: "USA", image: "https://randomuser.me/api/portraits/men/16.jpg", earning: 3800 },
// //   { name: "Natalie Scott", users: "3.8M", balance: "$390", country: "USA", image: "https://randomuser.me/api/portraits/women/16.jpg", earning: 4100 },
// // ];

// // const safeUsers = Array.isArray(users) ? users : [];
// // const safeUserStats = Array.isArray(userStats) ? userStats : [];


// //   // Get unique earnings sorted highest to lowest
// //   // const uniqueEarnings = [...new Set(allLeftUsers.map(u => u.earning))].sort((a, b) => b - a);

// //   // // Calculate star rating based on earning rank
// //   // const calculateStars = (earning) => {
// //   //   const rank = uniqueEarnings.indexOf(earning);
// //   //   if (rank === 0) return 5; // Highest earning (5000)
// //   //   if (rank === 1) return 4; // 2nd highest (4800)
// //   //   if (rank === 2) return 3; // 3rd highest (4700)
// //   //   if (rank === 3) return 2; // 4th highest (4500)
// //   //   if (rank === 4) return 1; // 5th highest (4200)
// //   //   return 1; // Rest get 1 star
// //   // };

// //   // Sort users by earning (highest to lowest)
// //   const leftUsers = [...allLeftUsers].sort((a, b) => b.earning - a.earning);

// //   // Filter users based on search term from sorted list
// //   const filteredUsers = leftUsers.filter(user =>
// //     user.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );


// // useEffect(() => {
// //   if (!safeUsers.length) return;

// //   // Already selected? do nothing
// //   if (selectedUserName) return;

// //   // Try localStorage
// //   const stored = localStorage.getItem("selectedUserName");
// //   if (stored && safeUsers.some(u => u.name === stored)) {
// //     setSelectedUserName(stored);
// //     return;
// //   }

// //   // Try navigation state
// //   const fromState = location.state?.selectedUserName;
// //   if (fromState && safeUsers.some(u => u.name === fromState)) {
// //     setSelectedUserName(fromState);
// //     localStorage.setItem("selectedUserName", fromState);
// //     window.history.replaceState({}, document.title);
// //     return;
// //   }

// //   // Fallback → first user
// //   setSelectedUserName(safeUsers[0].name);
// //   localStorage.setItem("selectedUserName", safeUsers[0].name);

// // }, [safeUsers.length, selectedUserName, location.state]);



// //   // const RenderStars = (rating) => {
// //   //   return Array.from({ length: 5 }, (_, i) => (
// //   //     <span key={i} className={i < rating ? "text-[#691188]" : "text-gray-300"}>
// //   //       ★
// //   //     </span>
// //   //   ));
// //   // };


// // const selectedIndex = safeUsers.findIndex(u => u.name === selectedUserName);
// // const safeIndex = selectedIndex >= 0 ? selectedIndex : 0;

// // const currentUser = safeUsers[safeIndex] || safeUsers[0] || null;
// // const currentStats =
// //   (safeUserStats[safeIndex] && safeUserStats[safeIndex].length > 0)
// //     ? safeUserStats[safeIndex]
// //     : safeUserStats[0] || [];

// //   const totalFreeUsers = 0; // Always 0 - not used
// //   const totalPremiumUsers = allLeftUsers.length; // Only premium-users count (12)
// //   const totalMarketingAgents = 0; // Always 0 - not used
// //   const totalPaymentRequests = 0; // Always 0 - not used
  
// //   // Pass a flag to Sidebar to indicate this is the premium-users page
// //   const isCurrentPagePremiumUsers = true;

// //   // Handle "See Detail" click - navigate with selected user data
// //   const handleSeeDetailClick = () => {
// //     // Store the current page path for back navigation
// //     localStorage.setItem('currentSidebarPage', '/premium-users');
// //     // Store the selected user name in localStorage
// //     localStorage.setItem('selectedUserName', selectedUserName);
    
// //     // Navigate and pass the selected user name
// //     navigate('/user-detail-points-history', { 
// //       state: { selectedUserName: selectedUserName } 
// //     });
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       {/* Update Sidebar props to pass only filtered premium users count */}
// //       <Sidebar 
// //         freeUsersCount={totalFreeUsers}
// //         premiumUsersCount={totalPremiumUsers}
// //         marketingAgentsCount={totalMarketingAgents}
// //         paymentRequestsCount={totalPaymentRequests}
// //         isCurrentPagePremiumUsers={isCurrentPagePremiumUsers}
// //       />
    
// //       {/* ================= LEFT PANEL ================= */}
// //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
   
// //         {/* Search Input */}
// //         <input
// //           type="text"
// //           placeholder="Search"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search
// //           size={18}
// //           className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]"
// //           strokeWidth={2}
// //         />   

// //         {/* Groups Icon with Dropdown */}
// //         <div className="absolute top-5 right-3">
// //           <img
// //             className="h-6 w-6 cursor-pointer"
// //             src={Groups}
// //             alt="Groups Icon"
// //             onClick={() => setIsOpen(!isOpen)}
// //           />
// //           {isOpen && (
// //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Active Users
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Total Users
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Monthly Users
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Weekly Users
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Total Sales
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Monthly Sales
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Weekly Sales
// //               </button>
// //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// //                 Balance
// //               </button>
// //             </div>
// //           )}
// //         </div>
   
// //         {/* Users List */}
// //             <div className="flex-1 space-y-2 overflow-y-auto mt-[3px]">
// //           {filteredUsers.length > 0 ? (
// //             filteredUsers.map((user, index) => {
// //               const isSelected = selectedUserName === user.name;
// //               return (
// //                 <div
// //                   key={index}
// //                   onClick={() => setSelectedUserName(user.name)}
// //                   className={`flex flex-col p-2 rounded-md cursor-pointer transition-all ${
// //                     isSelected 
// //                       ? "bg-[#E8F0F5] border-[#055860] border" 
// //                       : "hover:bg-[#F5F6FA]"
// //                   }`}
// //                 >
// //                   {/* Top row: image + name + stars + country */}
// //                   <div className="flex items-center justify-between mb-2">
// //                     <div className="flex items-center gap-2">
// //                       <img
// //                         src={user.image}
// //                         alt={user.name}
// //                         className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-7px] "
// //                       />
// //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>
// //                         {user.name}
// //                       </p>
// //                       <div className="flex gap-[2px] ml-1 mt-[-10px] text-[#691188]">
// //                         {/* {RenderStars(calculateStars(user.earning))} */}
// //                       </div>
// //                     </div>
// //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// //                   </div>
     
// //                   {/* Bottom row: users number and balance */}
// //                   <div className="flex items-center justify-start gap-2 text-xs ml-[45px] mt-[-20px]">
// //                     <span className="text-gray-500">
// //                       Users: <span className="text-[#055860]">{user.users}</span>
// //                     </span>
// //                     <span className="text-gray-500">
// //                       Balance: <span className="text-[#055860]">{user.balance}</span>
// //                     </span>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           ) : (
// //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">
// //               No users found
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Right Content - User Details */}
// //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={currentUser.avatar}
// //               alt={currentUser.name}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// //               {currentUser.name}
// //             </h2>
// //           </div>
// //           <button 
// //             onClick={handleSeeDetailClick}
// //             className="flex items-center gap-1 text-[#055860] hover:text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
// //           >
// //             See Detail
// //             <ChevronRight size={24} />
// //           </button>
// //         </div>

// //         {/* Stats Grid */}
// //         <div className="w-[705px] space-y-4 ml-3">
// //           {/* Header Row */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// //             <div className="grid grid-cols-5">
// //               {/* Free Users */}
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <Link to="/refferal-free-users" className="text-md font-semibold flex-overlawp">Free Users</Link>
// //               </div>

// //               {/* Total Users */}
// //               <div className="bg-[#055860] text-white p-4 text-center">
// //                 <div className="text-lg font-bold">{currentStats[0].totalUsers}</div>
// //                 <div className="text-md mt-1 opacity-90">Total Users</div>
// //               </div>

// //               {/* This Month */}
// //               <div className="bg-[#055860] text-white p-4 text-center">
// //                 <div className="text-lg font-bold">{currentStats[0].thisMonth}</div>
// //                 <div className="text-md mt-1 opacity-90">This Month</div>
// //               </div>

// //               {/* This Week (border BEFORE Revenue) */}
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold">{currentStats[0].thisWeek}</div>
// //                 <div className="text-md mt-1 opacity-90">This Week</div>
// //               </div>

// //               {/* Revenue */}
// //               <div className="bg-[#055860] text-white p-4 text-center">
// //                 <div className="text-lg font-bold">{currentStats[0].revenue}</div>
// //                 <div className="text-md mt-1 opacity-90">Revenue</div>
// //               </div>
// //             </div>
// //           </div> 
// //           {/* Data Rows */}
// //           {currentStats.map((stat, index) => (
// //             <div key={index}>
// //               {index === 1 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden">
// //                   <div className="grid grid-cols-5">
// //                     <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <div className="text-md font-semibold leading-[170%] text-white">
// //                         <span className="block whitespace-nowrap">Monthly</span>
// //                         <span className="block whitespace-nowrap">Premium Users</span>
// //                       </div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 opacity-90">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 opacity-90">This Month</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 opacity-90">This week</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.revenue}</div>
// //                       <div className="text-md mt-1 opacity-90">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )} 
// //               {index === 2 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Monthly</span>
// //                         <span className="block whitespace-nowrap">Trial Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               {index === 3 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Monthly</span>
// //                         <span className="block whitespace-nowrap">Subscribed Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               {index === 4 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5 bg-[#E0E0E0] text-[#055860]">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Monthly</span>
// //                         <span className="block whitespace-nowrap">Cancelled Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               {index === 5 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden">
// //                   <div className="grid grid-cols-5 bg-[#055860] text-white">
// //                     <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <div className="text-md font-semibold leading-[180%] text-white">
// //                         <span className="block whitespace-nowrap">Yearly</span>
// //                         <span className="block whitespace-nowrap">Premium Users</span>
// //                       </div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 opacity-90">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 opacity-90">This Month</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 opacity-90">This week</div>
// //                     </div>
// //                     <div className="bg-[#055860] text-white p-4 text-center">
// //                       <div className="text-lg font-bold">{stat.revenue}</div>
// //                       <div className="text-md mt-1 opacity-90">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )} 
// //               {index === 6 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5 bg-[#055860] text-white">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Yearly</span>
// //                         <span className="block whitespace-nowrap">Trial Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               {index === 7 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5 bg-[#055860] text-white">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Yearly</span>
// //                         <span className="block whitespace-nowrap">Subscribed Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               {index === 8 && (
// //                 <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //                   <div className="grid grid-cols-5">
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                       <Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                         <span className="block whitespace-nowrap">Yearly</span>
// //                         <span className="block whitespace-nowrap">Cancelled Users</span>
// //                       </Link>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.totalUsers}</div>
// //                       <div className="text-md mt-1 text-gray-500">Total Users</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisMonth}</div>
// //                       <div className="text-md mt-1 text-gray-500">This Month</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.thisWeek}</div>
// //                       <div className="text-md mt-1 text-gray-500">This week</div>
// //                     </div>
// //                     <div className="bg-[#E0E0E0] p-4 text-center">
// //                       <div className="text-lg font-bold text-[#055860]">{stat.revenue}</div>
// //                       <div className="text-md mt-1 text-gray-500">Revenue</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }









// // // // // import React, { useState, useEffect } from "react";
// // // // // import Groups from "../assets/Groups.png";
// // // // // import Sidebar from "./Sidebar.jsx";
// // // // // import { ChevronRight } from "lucide-react";
// // // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // // import { Search } from "lucide-react";

// // // // // export default function PremiumUsersDashboard() {
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [selectedUserName, setSelectedUserName] = useState("");

// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   // ── Users array — index must stay stable for userStats lookup ──────────────
// // // // //   const users = [
// // // // //     { id: 1,  name: "Olivia Bennett",   earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
// // // // //     { id: 2,  name: "Liam Harrison",    earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/12.jpg"   },
// // // // //     { id: 3,  name: "Sophia Mitchell",  earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
// // // // //     { id: 4,  name: "Ethan Cooper",     earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/13.jpg"   },
// // // // //     { id: 5,  name: "Ava Thompson",     earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
// // // // //     { id: 6,  name: "Noah Parker",      earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/14.jpg"   },
// // // // //     { id: 7,  name: "Isabella Morgan",  earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
// // // // //     { id: 8,  name: "Mason Reed",       earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/15.jpg"   },
// // // // //     { id: 9,  name: "Lucas Turner",     earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/16.jpg"   },
// // // // //     { id: 10, name: "Natalie Scott",    earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
// // // // //   ];

// // // // //   // ── userStats[categoryRow][userIndex] ──────────────────────────────────────
// // // // //   // categoryRow 0 = Free Users
// // // // //   // categoryRow 1 = Monthly Premium Users
// // // // //   // categoryRow 2 = Monthly Trial Users
// // // // //   // categoryRow 3 = Monthly Subscribed Users
// // // // //   // categoryRow 4 = Monthly Cancelled Users
// // // // //   // categoryRow 5 = Yearly Premium Users
// // // // //   // categoryRow 6 = Yearly Trial Users
// // // // //   // categoryRow 7 = Yearly Subscribed Users
// // // // //   // categoryRow 8 = Yearly Cancelled Users
// // // // //   const userStats = [
// // // // //     [ // row 0: Free Users
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },  // Olivia    [0]
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },  // Liam      [1]
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },  // Sophia    [2]
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },  // Ethan     [3]
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },  // Ava       [4]
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },  // Noah      [5]
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },  // Isabella  [6]
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },  // Mason     [7]
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },  // Lucas     [8]
// // // // //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },  // Natalie   [9]
// // // // //     ],
// // // // //     [ // row 1: Monthly Premium Users
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },  // Olivia    [0]
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },  // Liam      [1]
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },  // Sophia    [2]
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },  // Ethan     [3]
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },  // Ava       [4]
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },  // Noah      [5]
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },  // Isabella  [6]
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },  // Mason     [7]
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },  // Lucas     [8]
// // // // //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },  // Natalie   [9]
// // // // //     ],
// // // // //     [ // row 2: Monthly Trial Users
// // // // //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// // // // //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // // // //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// // // // //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // // // //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// // // // //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// // // // //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// // // // //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// // // // //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// // // // //     ],
// // // // //     [ // row 3: Monthly Subscribed Users
// // // // //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// // // // //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// // // // //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// // // // //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// // // // //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// // // // //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// // // // //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// // // // //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// // // // //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// // // // //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// // // // //     ],
// // // // //     [ // row 4: Monthly Cancelled Users
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // // //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// // // // //     ],
// // // // //     [ // row 5: Yearly Premium Users
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },  // Olivia    [0]
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },  // Liam      [1]
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },  // Sophia    [2]
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },  // Ethan     [3]
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },  // Ava       [4]
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },  // Noah      [5]
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },  // Isabella  [6]
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },  // Mason     [7]
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },  // Lucas     [8]
// // // // //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },  // Natalie   [9]
// // // // //     ],
// // // // //     [ // row 6: Yearly Trial Users
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// // // // //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// // // // //     ],
// // // // //     [ // row 7: Yearly Subscribed Users
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // // //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// // // // //     ],
// // // // //     [ // row 8: Yearly Cancelled Users
// // // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// // // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// // // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// // // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// // // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// // // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// // // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// // // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// // // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// // // // //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// // // // //     ],
// // // // //   ];

// // // // //   // ── Parse "$5000" → 5000 ──────────────────────────────────────────────────
// // // // //   const parseRevenue = (val) =>
// // // // //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// // // // //   // ── For each user at userIndex, sum Free + MonthlyPremium + YearlyPremium ─
// // // // //   const getLeftPanelStats = (userIndex) => {
// // // // //     const free    = userStats[0][userIndex];
// // // // //     const monthly = userStats[1][userIndex];
// // // // //     const yearly  = userStats[5][userIndex];

// // // // //     const totalUsers =
// // // // //       (free?.totalUsers    || 0) +
// // // // //       (monthly?.totalUsers || 0) +
// // // // //       (yearly?.totalUsers  || 0);

// // // // //     const totalRevenue =
// // // // //       parseRevenue(free?.revenue)    +
// // // // //       parseRevenue(monthly?.revenue) +
// // // // //       parseRevenue(yearly?.revenue);

// // // // //     return { totalUsers, totalRevenue };
// // // // //   };

// // // // //   // ── Build display list with summed stats + stable userIndex ───────────────
// // // // //   const displayUsers = users.map((user, userIndex) => {
// // // // //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// // // // //     return {
// // // // //       ...user,
// // // // //       userIndex,
// // // // //       totalUsers,
// // // // //       totalRevenue,
// // // // //     };
// // // // //   });

// // // // //   // ── Sort by earning desc, then filter by search ───────────────────────────
// // // // //   const filteredUsers = [...displayUsers]
// // // // //     .sort((a, b) => b.earning - a.earning)
// // // // //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// // // // //   // ── Init selected user from location state → localStorage → first user ────
// // // // //   useEffect(() => {
// // // // //     if (location.state?.selectedUserName) {
// // // // //       setSelectedUserName(location.state.selectedUserName);
// // // // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // // // //       window.history.replaceState({}, document.title);
// // // // //     } else {
// // // // //       const stored = localStorage.getItem("selectedUserName");
// // // // //       if (stored && users.some((u) => u.name === stored)) {
// // // // //         setSelectedUserName(stored);
// // // // //       } else {
// // // // //         setSelectedUserName(users[0].name);
// // // // //         localStorage.setItem("selectedUserName", users[0].name);
// // // // //       }
// // // // //     }
// // // // //   }, []);

// // // // //   // ── Right panel — use the original users array index ─────────────────────
// // // // //   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
// // // // //   const safeIndex = Math.max(0, selectedIndex);
// // // // //   const currentUser = users[safeIndex] || users[0];

// // // // //   // currentStats: all 9 category rows, each at safeIndex → one stat per row
// // // // //   const currentStats = userStats.map((categoryRow) => categoryRow[safeIndex]);

// // // // //   // ── Navigation ────────────────────────────────────────────────────────────
// // // // //   const handleSeeDetailClick = () => {
// // // // //     localStorage.setItem("currentSidebarPage", "/premium-users");
// // // // //     localStorage.setItem("selectedUserName", selectedUserName);
// // // // //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// // // // //   };




// // // // //   const totalPremiumUsers = users.length;

// // // // //   return (
// // // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // // //       <Sidebar
// // // // //         freeUsersCount={0}
// // // // //         premiumUsersCount={totalPremiumUsers}
// // // // //         marketingAgentsCount={0}
// // // // //         paymentRequestsCount={0}
// // // // //         isCurrentPagePremiumUsers={true}
// // // // //       />

// // // // //       {/* ═══════════════ LEFT PANEL ═══════════════ */}
// // // // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">

// // // // //         {/* Search Input */}
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search"
// // // // //           value={searchTerm}
// // // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // // //         />
// // // // //         <Search
// // // // //           size={18}
// // // // //           className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]"
// // // // //           strokeWidth={2}
// // // // //         />

// // // // //         {/* Groups Icon with Dropdown */}
// // // // //         <div className="absolute top-5 right-3">
// // // // //           <img
// // // // //             className="h-6 w-6 cursor-pointer"
// // // // //             src={Groups}
// // // // //             alt="Groups Icon"
// // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // //           />
// // // // //           {isOpen && (
// // // // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
// // // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* User list — each card shows real summed stats */}
// // // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // // //           {filteredUsers.length > 0 ? (
// // // // //             filteredUsers.map((user) => {
// // // // //               const isSelected = selectedUserName === user.name;
// // // // //               return (
// // // // //                 <div
// // // // //                   key={user.id}
// // // // //                   onClick={() => {
// // // // //                     setSelectedUserName(user.name);
// // // // //                     localStorage.setItem("selectedUserName", user.name);
// // // // //                   }}
// // // // //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// // // // //                     isSelected
// // // // //                       ? "bg-[#E8F0F5] border-[#055860] border"
// // // // //                       : "hover:bg-[#F5F6FA]"
// // // // //                   }`}
// // // // //                 >
// // // // //                   <div className="flex items-center justify-between mb-2">
// // // // //                     <div className="flex items-center gap-2">
// // // // //                       <img
// // // // //                         src={user.avatar}
// // // // //                         alt={user.name}
// // // // //                         className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]"
// // // // //                       />
// // // // //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>
// // // // //                         {user.name}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// // // // //                   </div>

// // // // //                   {/* Summed: Free[userIndex] + MonthlyPremium[userIndex] + YearlyPremium[userIndex] */}
// // // // //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// // // // //                     <span className="text-gray-500">
// // // // //                       Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span>
// // // // //                     </span>
// // // // //                     <span className="text-gray-500">
// // // // //                       Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span>
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })
// // // // //           ) : (
// // // // //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">
// // // // //               No users found
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ═══════════════ RIGHT PANEL ═══════════════ */}
// // // // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // // // //         <div className="flex items-center justify-between mb-6">
// // // // //           <div className="flex items-center gap-4">
// // // // //             <img
// // // // //               src={currentUser?.avatar}
// // // // //               alt={currentUser?.name}
// // // // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // // // //             />
// // // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // // // //               {currentUser?.name}
// // // // //             </h2>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={handleSeeDetailClick}
// // // // //             className="flex items-center gap-1 text-[#055860] hover:text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none"
// // // // //           >
// // // // //             See Detail
// // // // //             <ChevronRight size={24} />
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="w-[705px] space-y-0 ml-3">

// // // // //           {/* Free Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // // //                 <Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This Week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Monthly Premium Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <div className="text-md font-semibold leading-[170%] text-white">
// // // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // // //                   <span className="block whitespace-nowrap">Premium Users</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Monthly Trial Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Monthly Subscribed Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // // //                   <span className="block whitespace-nowrap">Subscribed Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Monthly Cancelled Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5 bg-[#E0E0E0] text-[#055860]">
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // // //                   <span className="block whitespace-nowrap">Cancelled Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Yearly Premium Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // // //             <div className="grid grid-cols-5 bg-[#055860] text-white">
// // // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <div className="text-md font-semibold leading-[180%] text-white">
// // // // //                   <span className="block whitespace-nowrap">Yearly</span>
// // // // //                   <span className="block whitespace-nowrap">Premium Users</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-4 text-center">
// // // // //                 <div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 opacity-90">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Yearly Trial Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Yearly</span>
// // // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Yearly Subscribed Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Yearly</span>
// // // // //                   <span className="block whitespace-nowrap">Subscribed Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Yearly Cancelled Users */}
// // // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // // //                 <Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // // //                   <span className="block whitespace-nowrap">Yearly</span>
// // // // //                   <span className="block whitespace-nowrap">Cancelled Users</span>
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">This week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#E0E0E0] p-4 text-center">
// // // // //                 <div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div>
// // // // //                 <div className="text-md mt-1 text-gray-500">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import React, { useState, useEffect } from "react";
// // // // import Groups from "../assets/Groups.png";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import { ChevronRight } from "lucide-react";
// // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // import { Search } from "lucide-react";

// // // // // ─── Defined OUTSIDE component so useState lazy initializer can access it ─────
// // // // const USERS = [
// // // //   { id: 1,  name: "Olivia Bennett",   earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
// // // //   { id: 2,  name: "Liam Harrison",    earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/12.jpg"   },
// // // //   { id: 3,  name: "Sophia Mitchell",  earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
// // // //   { id: 4,  name: "Ethan Cooper",     earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/13.jpg"   },
// // // //   { id: 5,  name: "Ava Thompson",     earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
// // // //   { id: 6,  name: "Noah Parker",      earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/14.jpg"   },
// // // //   { id: 7,  name: "Isabella Morgan",  earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
// // // //   { id: 8,  name: "Mason Reed",       earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/15.jpg"   },
// // // //   { id: 9,  name: "Lucas Turner",     earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/16.jpg"   },
// // // //   { id: 10, name: "Natalie Scott",    earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
// // // // ];

// // // // const THIS_PAGE = "/premium-users";

// // // // export default function PremiumUsersDashboard() {
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // ── KEY FIX: validate stored name against THIS page's users on first render ─
// // // //   const [selectedUserName, setSelectedUserName] = useState(() => {
// // // //     const stored = localStorage.getItem("selectedUserName") || "";
// // // //     // If stored name belongs to this page's list → use it, else fall back to first user
// // // //     return USERS.some((u) => u.name === stored) ? stored : USERS[0].name;
// // // //   });

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const userStats = [
// // // //     [ // row 0: Free Users
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// // // //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// // // //     ],
// // // //     [ // row 1: Monthly Premium Users
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// // // //     ],
// // // //     [ // row 2: Monthly Trial Users
// // // //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// // // //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // // //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// // // //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // // //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// // // //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// // // //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// // // //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// // // //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// // // //     ],
// // // //     [ // row 3: Monthly Subscribed Users
// // // //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// // // //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// // // //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// // // //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// // // //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// // // //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// // // //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// // // //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// // // //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// // // //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// // // //     ],
// // // //     [ // row 4: Monthly Cancelled Users
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// // // //     ],
// // // //     [ // row 5: Yearly Premium Users
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// // // //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// // // //     ],
// // // //     [ // row 6: Yearly Trial Users
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// // // //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// // // //     ],
// // // //     [ // row 7: Yearly Subscribed Users
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// // // //     ],
// // // //     [ // row 8: Yearly Cancelled Users
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// // // //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// // // //     ],
// // // //   ];

// // // //   const parseRevenue = (val) =>
// // // //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// // // //   const getLeftPanelStats = (userIndex) => {
// // // //     const free    = userStats[0][userIndex];
// // // //     const monthly = userStats[1][userIndex];
// // // //     const yearly  = userStats[5][userIndex];
// // // //     return {
// // // //       totalUsers:
// // // //         (free?.totalUsers || 0) + (monthly?.totalUsers || 0) + (yearly?.totalUsers || 0),
// // // //       totalRevenue:
// // // //         parseRevenue(free?.revenue) + parseRevenue(monthly?.revenue) + parseRevenue(yearly?.revenue),
// // // //     };
// // // //   };

// // // //   const displayUsers = USERS.map((user, userIndex) => ({
// // // //     ...user,
// // // //     userIndex,
// // // //     ...getLeftPanelStats(userIndex),
// // // //   }));

// // // //   const filteredUsers = [...displayUsers]
// // // //     .sort((a, b) => b.earning - a.earning)
// // // //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// // // //   // ── On mount: stamp sidebar page + handle navigation state ───────────────
// // // //   useEffect(() => {
// // // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // // //     if (location.state?.selectedUserName) {
// // // //       const name = location.state.selectedUserName;
// // // //       if (USERS.some((u) => u.name === name)) {
// // // //         setSelectedUserName(name);
// // // //         localStorage.setItem("selectedUserName", name);
// // // //       }
// // // //       window.history.replaceState({}, document.title);
// // // //     }
// // // //   }, []);

// // // //   const selectedIndex = USERS.findIndex((u) => u.name === selectedUserName);
// // // //   const safeIndex = Math.max(0, selectedIndex);
// // // //   const currentUser = USERS[safeIndex];
// // // //   const currentStats = userStats.map((row) => row[safeIndex]);

// // // //   const handleSeeDetailClick = () => {
// // // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // // //     localStorage.setItem("selectedUserName", selectedUserName);
// // // //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// // // //   };

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar isCurrentPagePremiumUsers={true} />

// // // //       {/* LEFT PANEL */}
// // // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search"
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // //         />
// // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

// // // //         <div className="absolute top-5 right-3">
// // // //           <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
// // // //           {isOpen && (
// // // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // //           {filteredUsers.length > 0 ? (
// // // //             filteredUsers.map((user) => {
// // // //               const isSelected = selectedUserName === user.name;
// // // //               return (
// // // //                 <div
// // // //                   key={user.id}
// // // //                   onClick={() => {
// // // //                     setSelectedUserName(user.name);
// // // //                     localStorage.setItem("selectedUserName", user.name);
// // // //                   }}
// // // //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// // // //                     isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"
// // // //                   }`}
// // // //                 >
// // // //                   <div className="flex items-center justify-between mb-2">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
// // // //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
// // // //                     </div>
// // // //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// // // //                   </div>
// // // //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// // // //                     <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
// // // //                     <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })
// // // //           ) : (
// // // //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT PANEL */}
// // // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div className="flex items-center gap-4">
// // // //             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
// // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
// // // //           </div>
// // // //           <button onClick={handleSeeDetailClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// // // //             See Detail <ChevronRight size={24} />
// // // //           </button>
// // // //         </div>

// // // //         <div className="w-[705px] space-y-0 ml-3">
// // // //           {/* Free Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Trial Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Trial Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }






// // // // import React, { useState, useEffect } from "react";
// // // // import Groups from "../assets/Groups.png";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import { ChevronRight } from "lucide-react";
// // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // import { Search } from "lucide-react";

// // // // // ─── Defined OUTSIDE component so useState lazy initializer can access it ─────
// // // // const USERS = [
// // // //   { id: 1,  name: "Olivia Bennett",   earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
// // // //   { id: 2,  name: "Liam Harrison",    earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/12.jpg"   },
// // // //   { id: 3,  name: "Sophia Mitchell",  earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
// // // //   { id: 4,  name: "Ethan Cooper",     earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/13.jpg"   },
// // // //   { id: 5,  name: "Ava Thompson",     earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
// // // //   { id: 6,  name: "Noah Parker",      earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/14.jpg"   },
// // // //   { id: 7,  name: "Isabella Morgan",  earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
// // // //   { id: 8,  name: "Mason Reed",       earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/15.jpg"   },
// // // //   { id: 9,  name: "Lucas Turner",     earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/16.jpg"   },
// // // //   { id: 10, name: "Natalie Scott",    earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
// // // // ];

// // // // const THIS_PAGE = "/premium-users";

// // // // export default function PremiumUsersDashboard() {
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // ── KEY FIX: validate stored name against THIS page's users on first render ─
// // // //   const [selectedUserName, setSelectedUserName] = useState(() => {
// // // //     const stored = localStorage.getItem("selectedUserName") || "";
// // // //     // If stored name belongs to this page's list → use it, else fall back to first user
// // // //     return USERS.some((u) => u.name === stored) ? stored : USERS[0].name;
// // // //   });

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const userStats = [
// // // //     [ // row 0: Free Users
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// // // //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// // // //     ],
// // // //     [ // row 1: Monthly Premium Users
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// // // //     ],
// // // //     [ // row 2: Monthly Trial Users
// // // //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// // // //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // // //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// // // //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // // //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// // // //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// // // //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// // // //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// // // //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// // // //     ],
// // // //     [ // row 3: Monthly Subscribed Users
// // // //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// // // //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// // // //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// // // //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// // // //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// // // //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// // // //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// // // //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// // // //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// // // //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// // // //     ],
// // // //     [ // row 4: Monthly Cancelled Users
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// // // //     ],
// // // //     [ // row 5: Yearly Premium Users
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// // // //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// // // //     ],
// // // //     [ // row 6: Yearly Trial Users
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// // // //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// // // //     ],
// // // //     [ // row 7: Yearly Subscribed Users
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // // //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// // // //     ],
// // // //     [ // row 8: Yearly Cancelled Users
// // // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// // // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// // // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// // // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// // // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// // // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// // // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// // // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// // // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// // // //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// // // //     ],
// // // //   ];

// // // //   const parseRevenue = (val) =>
// // // //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// // // //   const getLeftPanelStats = (userIndex) => {
// // // //     const free    = userStats[0][userIndex];
// // // //     const monthly = userStats[1][userIndex];
// // // //     const yearly  = userStats[5][userIndex];
// // // //     return {
// // // //       totalUsers:
// // // //         (free?.totalUsers || 0) + (monthly?.totalUsers || 0) + (yearly?.totalUsers || 0),
// // // //       totalRevenue:
// // // //         parseRevenue(free?.revenue) + parseRevenue(monthly?.revenue) + parseRevenue(yearly?.revenue),
// // // //     };
// // // //   };

// // // //   const displayUsers = USERS.map((user, userIndex) => ({
// // // //     ...user,
// // // //     userIndex,
// // // //     ...getLeftPanelStats(userIndex),
// // // //   }));

// // // //   const filteredUsers = [...displayUsers]
// // // //     .sort((a, b) => b.earning - a.earning)
// // // //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// // // //   // ── On mount: stamp sidebar page + handle navigation state ───────────────
// // // //   useEffect(() => {
// // // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // // //     if (location.state?.selectedUserName) {
// // // //       const name = location.state.selectedUserName;
// // // //       if (USERS.some((u) => u.name === name)) {
// // // //         setSelectedUserName(name);
// // // //         localStorage.setItem("selectedUserName", name);
// // // //       }
// // // //       window.history.replaceState({}, document.title);
// // // //     }
// // // //   }, []);

// // // //   const selectedIndex = USERS.findIndex((u) => u.name === selectedUserName);
// // // //   const safeIndex = Math.max(0, selectedIndex);
// // // //   const currentUser = USERS[safeIndex];
// // // //   const currentStats = userStats.map((row) => row[safeIndex]);

// // // //   const handleSeeDetailClick = () => {
// // // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // // //     localStorage.setItem("selectedUserName", selectedUserName);
// // // //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// // // //   };

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar isCurrentPagePremiumUsers={true} />

// // // //       {/* LEFT PANEL */}
// // // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search"
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // //         />
// // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

// // // //         <div className="absolute top-5 right-3">
// // // //           <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
// // // //           {isOpen && (
// // // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
// // // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // //           {filteredUsers.length > 0 ? (
// // // //             filteredUsers.map((user) => {
// // // //               const isSelected = selectedUserName === user.name;
// // // //               return (
// // // //                 <div
// // // //                   key={user.id}
// // // //                   onClick={() => {
// // // //                     setSelectedUserName(user.name);
// // // //                     localStorage.setItem("selectedUserName", user.name);
// // // //                   }}
// // // //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// // // //                     isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"
// // // //                   }`}
// // // //                 >
// // // //                   <div className="flex items-center justify-between mb-2">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
// // // //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
// // // //                     </div>
// // // //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// // // //                   </div>
// // // //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// // // //                     <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
// // // //                     <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })
// // // //           ) : (
// // // //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT PANEL */}
// // // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // // //         <div className="flex items-center justify-between mb-6">
// // // //           <div className="flex items-center gap-4">
// // // //             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
// // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
// // // //           </div>
// // // //           <button onClick={handleSeeDetailClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// // // //             See Detail <ChevronRight size={24} />
// // // //           </button>
// // // //         </div>

// // // //         <div className="w-[705px] space-y-0 ml-3">
// // // //           {/* Free Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Trial Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Monthly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Trial Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Yearly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }









// // // import React, { useState, useEffect } from "react";
// // // import Groups from "../assets/Groups.png";
// // // import Sidebar from "./Sidebar.jsx";
// // // import { ChevronRight } from "lucide-react";
// // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // import { Search } from "lucide-react";

// // // export default function PremiumUsersDashboard() {
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [selectedUserName, setSelectedUserName] = useState("");

// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const users = [
// // //     { id: 1,  name: "Olivia Bennett",  earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
// // //     { id: 2,  name: "Liam Harrison",   earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/12.jpg"   },
// // //     { id: 3,  name: "Sophia Mitchell", earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
// // //     { id: 4,  name: "Ethan Cooper",    earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/13.jpg"   },
// // //     { id: 5,  name: "Ava Thompson",    earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
// // //     { id: 6,  name: "Noah Parker",     earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/14.jpg"   },
// // //     { id: 7,  name: "Isabella Morgan", earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
// // //     { id: 8,  name: "Mason Reed",      earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/15.jpg"   },
// // //     { id: 9,  name: "Lucas Turner",    earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/16.jpg"   },
// // //     { id: 10, name: "Natalie Scott",   earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
// // //   ];

// // //   const userStats = [
// // //     [ // row 0: Free Users
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// // //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// // //     ],
// // //     [ // row 1: Monthly Premium Users
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// // //     ],
// // //     [ // row 2: Monthly Trial Users
// // //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// // //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// // //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// // //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// // //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// // //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// // //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// // //     ],
// // //     [ // row 3: Monthly Subscribed Users
// // //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// // //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// // //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// // //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// // //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// // //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// // //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// // //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// // //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// // //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// // //     ],
// // //     [ // row 4: Monthly Cancelled Users
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// // //     ],
// // //     [ // row 5: Yearly Premium Users
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// // //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// // //     ],
// // //     [ // row 6: Yearly Trial Users
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// // //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// // //     ],
// // //     [ // row 7: Yearly Subscribed Users
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// // //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// // //     ],
// // //     [ // row 8: Yearly Cancelled Users
// // //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// // //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// // //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// // //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// // //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// // //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// // //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// // //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// // //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// // //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// // //     ],
// // //   ];

// // //   const parseRevenue = (val) =>
// // //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// // //   const getLeftPanelStats = (userIndex) => {
// // //     const free    = userStats[0][userIndex];
// // //     const monthly = userStats[1][userIndex];
// // //     const yearly  = userStats[5][userIndex];
// // //     const totalUsers =
// // //       (free?.totalUsers    || 0) +
// // //       (monthly?.totalUsers || 0) +
// // //       (yearly?.totalUsers  || 0);
// // //     const totalRevenue =
// // //       parseRevenue(free?.revenue)    +
// // //       parseRevenue(monthly?.revenue) +
// // //       parseRevenue(yearly?.revenue);
// // //     return { totalUsers, totalRevenue };
// // //   };

// // //   const displayUsers = users.map((user, userIndex) => {
// // //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// // //     return { ...user, userIndex, totalUsers, totalRevenue };
// // //   });

// // //   const filteredUsers = [...displayUsers]
// // //     .sort((a, b) => b.earning - a.earning)
// // //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// // //   const THIS_PAGE = "/premium-users";

// // //   useEffect(() => {
// // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);

// // //     if (location.state?.selectedUserName) {
// // //       setSelectedUserName(location.state.selectedUserName);
// // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // //       window.history.replaceState({}, document.title);
// // //     } else {
// // //       const stored = localStorage.getItem("selectedUserName");
// // //       if (stored && users.some((u) => u.name === stored)) {
// // //         setSelectedUserName(stored);
// // //       } else {
// // //         setSelectedUserName(users[0].name);
// // //         localStorage.setItem("selectedUserName", users[0].name);
// // //       }
// // //     }
// // //   }, []);

// // //   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
// // //   const safeIndex = Math.max(0, selectedIndex);
// // //   const currentUser = users[safeIndex] || users[0];
// // //   const currentStats = userStats.map((categoryRow) => categoryRow[safeIndex]);

// // //   const handleSeeDetailClick = () => {
// // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // //     localStorage.setItem("selectedUserName", selectedUserName);
// // //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// // //   };

// // //   return (
// // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // //       <Sidebar isCurrentPagePremiumUsers={true} />

// // //       {/* LEFT PANEL */}
// // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // //         <input
// // //           type="text"
// // //           placeholder="Search"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // //         />
// // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

// // //         <div className="absolute top-5 right-3">
// // //           <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
// // //           {isOpen && (
// // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
// // //               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // //           {filteredUsers.length > 0 ? (
// // //             filteredUsers.map((user) => {
// // //               const isSelected = selectedUserName === user.name;
// // //               return (
// // //                 <div
// // //                   key={user.id}
// // //                   onClick={() => {
// // //                     setSelectedUserName(user.name);
// // //                     localStorage.setItem("selectedUserName", user.name);
// // //                   }}
// // //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// // //                     isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"
// // //                   }`}
// // //                 >
// // //                   <div className="flex items-center justify-between mb-2">
// // //                     <div className="flex items-center gap-2">
// // //                       <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
// // //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
// // //                     </div>
// // //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// // //                   </div>
// // //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// // //                     <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
// // //                     <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })
// // //           ) : (
// // //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* RIGHT PANEL */}
// // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="flex items-center gap-4">
// // //             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
// // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
// // //           </div>
// // //           <button onClick={handleSeeDetailClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// // //             See Detail <ChevronRight size={24} />
// // //           </button>
// // //         </div>

// // //         <div className="w-[705px] space-y-0 ml-3">
// // //           {/* Free Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Monthly Premium Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Monthly Trial Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Monthly Subscribed Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Monthly Cancelled Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Yearly Premium Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Yearly Trial Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Yearly Subscribed Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //           {/* Yearly Cancelled Users */}
// // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // //             <div className="grid grid-cols-5">
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // import React, { useState, useEffect } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import { ChevronRight } from "lucide-react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { Search } from "lucide-react";

// // export default function PremiumUsersDashboard() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedUserName, setSelectedUserName] = useState("");

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const users = [
// //     { id: 1,  name: "Charlotte Evans",  earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
// //     { id: 2,  name: "Henry Collins",    earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/20.jpg"   },
// //     { id: 3,  name: "Grace Hughes",     earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
// //     { id: 4,  name: "Dylan Foster",     earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/21.jpg"   },
// //     { id: 5,  name: "Zoe Patterson",    earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
// //     { id: 6,  name: "Carter Russell",   earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/22.jpg"   },
// //     { id: 7,  name: "Penelope Griffin", earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
// //     { id: 8,  name: "Wyatt Sanders",    earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/23.jpg"   },
// //     { id: 9,  name: "Lucas Turner",     earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/24.jpg"   },
// //     { id: 10, name: "Natalie Scott",    earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
// //   ];

// //   const userStats = [
// //     [ // row 0: Free Users
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// //     ],
// //     [ // row 1: Monthly Premium Users
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// //     ],
// //     [ // row 2: Monthly Trial Users
// //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// //     ],
// //     [ // row 3: Monthly Subscribed Users
// //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// //     ],
// //     [ // row 4: Monthly Cancelled Users
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// //     ],
// //     [ // row 5: Yearly Premium Users
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// //     ],
// //     [ // row 6: Yearly Trial Users
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// //     ],
// //     [ // row 7: Yearly Subscribed Users
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// //     ],
// //     [ // row 8: Yearly Cancelled Users
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// //     ],
// //   ];

// //   const parseRevenue = (val) =>
// //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// //   const getLeftPanelStats = (userIndex) => {
// //     const free    = userStats[0][userIndex];
// //     const monthly = userStats[1][userIndex];
// //     const yearly  = userStats[5][userIndex];
// //     const totalUsers =
// //       (free?.totalUsers    || 0) +
// //       (monthly?.totalUsers || 0) +
// //       (yearly?.totalUsers  || 0);
// //     const totalRevenue =
// //       parseRevenue(free?.revenue)    +
// //       parseRevenue(monthly?.revenue) +
// //       parseRevenue(yearly?.revenue);
// //     return { totalUsers, totalRevenue };
// //   };

// //   const displayUsers = users.map((user, userIndex) => {
// //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// //     return { ...user, userIndex, totalUsers, totalRevenue };
// //   });

// //   const filteredUsers = [...displayUsers]
// //     .sort((a, b) => b.earning - a.earning)
// //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// //   const THIS_PAGE = "/premium-users";

// //   useEffect(() => {
// //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// //     if (location.state?.selectedUserName) {
// //       setSelectedUserName(location.state.selectedUserName);
// //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// //       window.history.replaceState({}, document.title);
// //     } else {
// //       const stored = localStorage.getItem("selectedUserName");
// //       if (stored && users.some((u) => u.name === stored)) {
// //         setSelectedUserName(stored);
// //       } else {
// //         setSelectedUserName(users[0].name);
// //         localStorage.setItem("selectedUserName", users[0].name);
// //       }
// //     }
// //   }, []);

// //   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
// //   const safeIndex = Math.max(0, selectedIndex);
// //   const currentUser = users[safeIndex] || users[0];
// //   const currentStats = userStats.map((categoryRow) => categoryRow[safeIndex]);

// //   const handleSeeDetailClick = () => {
// //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// //     localStorage.setItem("selectedUserName", selectedUserName);
// //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       <Sidebar isCurrentPagePremiumUsers={true} />

// //       {/* LEFT PANEL */}
// //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

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
// //           {filteredUsers.length > 0 ? (
// //             filteredUsers.map((user) => {
// //               const isSelected = selectedUserName === user.name;
// //               return (
// //                 <div
// //                   key={user.id}
// //                   onClick={() => {
// //                     setSelectedUserName(user.name);
// //                     localStorage.setItem("selectedUserName", user.name);
// //                   }}
// //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// //                     isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"
// //                   }`}
// //                 >
// //                   <div className="flex items-center justify-between mb-2">
// //                     <div className="flex items-center gap-2">
// //                       <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
// //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
// //                     </div>
// //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// //                   </div>
// //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// //                     <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
// //                     <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           ) : (
// //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
// //           )}
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
// //           </div>
// //           <button onClick={handleSeeDetailClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// //             See Detail <ChevronRight size={24} />
// //           </button>
// //         </div>

// //         <div className="w-[705px] space-y-0 ml-3">
// //           {/* Free Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Trial Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Trial Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }








// // import React, { useState, useEffect } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import { ChevronRight } from "lucide-react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { Search } from "lucide-react";

// // export default function PremiumUsersDashboard() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedUserName, setSelectedUserName] = useState("");

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const users = [
// //     { id: 1,  name: "Charlotte Evans",  earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
// //     { id: 2,  name: "Henry Collins",    earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/20.jpg"   },
// //     { id: 3,  name: "Grace Hughes",     earning: 4300, country: "USA", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
// //     { id: 4,  name: "Dylan Foster",     earning: 4600, country: "USA", avatar: "https://randomuser.me/api/portraits/men/21.jpg"   },
// //     { id: 5,  name: "Zoe Patterson",    earning: 5100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
// //     { id: 6,  name: "Carter Russell",   earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/men/22.jpg"   },
// //     { id: 7,  name: "Penelope Griffin", earning: 4900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
// //     { id: 8,  name: "Wyatt Sanders",    earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/23.jpg"   },
// //     { id: 9,  name: "Lucas Turner",     earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/24.jpg"   },
// //     { id: 10, name: "Natalie Scott",    earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
// //   ];

// //   const userStats = [
// //     [ // row 0: Free Users
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$5000" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4200" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4800" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4500" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$5200" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$4100" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$5100" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4600" },
// //       { totalUsers: 1120, thisMonth: 195, thisWeek: 21, revenue: "$4750" },
// //     ],
// //     [ // row 1: Monthly Premium Users
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
// //     ],
// //     [ // row 2: Monthly Trial Users
// //       { totalUsers: 800,  thisMonth: 160, thisWeek: 16, revenue: "$3000" },
// //       { totalUsers: 900,  thisMonth: 170, thisWeek: 17, revenue: "$3200" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 850,  thisMonth: 165, thisWeek: 16, revenue: "$3100" },
// //       { totalUsers: 920,  thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 880,  thisMonth: 168, thisWeek: 17, revenue: "$3150" },
// //       { totalUsers: 910,  thisMonth: 172, thisWeek: 17, revenue: "$3250" },
// //       { totalUsers: 940,  thisMonth: 178, thisWeek: 18, revenue: "$3350" },
// //       { totalUsers: 870,  thisMonth: 167, thisWeek: 16, revenue: "$3050" },
// //       { totalUsers: 895,  thisMonth: 172, thisWeek: 17, revenue: "$3200" },
// //     ],
// //     [ // row 3: Monthly Subscribed Users
// //       { totalUsers: 650,  thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// //       { totalUsers: 700,  thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// //       { totalUsers: 680,  thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// //       { totalUsers: 720,  thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// //       { totalUsers: 690,  thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// //       { totalUsers: 710,  thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// //       { totalUsers: 730,  thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// //       { totalUsers: 670,  thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// //       { totalUsers: 740,  thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// //       { totalUsers: 705,  thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// //     ],
// //     [ // row 4: Monthly Cancelled Users
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
// //     ],
// //     [ // row 5: Yearly Premium Users
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
// //       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
// //     ],
// //     [ // row 6: Yearly Trial Users
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
// //       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
// //     ],
// //     [ // row 7: Yearly Subscribed Users
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
// //       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
// //     ],
// //     [ // row 8: Yearly Cancelled Users
// //       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
// //       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
// //       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
// //       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
// //       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
// //       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
// //       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
// //       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
// //       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
// //       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
// //     ],
// //   ];

// //   const parseRevenue = (val) =>
// //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// //   const getLeftPanelStats = (userIndex) => {
// //     const free    = userStats[0][userIndex];
// //     const monthly = userStats[1][userIndex];
// //     const yearly  = userStats[5][userIndex];
// //     const totalUsers =
// //       (free?.totalUsers    || 0) +
// //       (monthly?.totalUsers || 0) +
// //       (yearly?.totalUsers  || 0);
// //     const totalRevenue =
// //       parseRevenue(free?.revenue)    +
// //       parseRevenue(monthly?.revenue) +
// //       parseRevenue(yearly?.revenue);
// //     return { totalUsers, totalRevenue };
// //   };

// //   const displayUsers = users.map((user, userIndex) => {
// //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// //     return { ...user, userIndex, totalUsers, totalRevenue };
// //   });

// //   const filteredUsers = [...displayUsers]
// //     .sort((a, b) => b.earning - a.earning)
// //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// //   const THIS_PAGE = "/premium-users";

// //   useEffect(() => {
// //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// //     if (location.state?.selectedUserName) {
// //       setSelectedUserName(location.state.selectedUserName);
// //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// //       window.history.replaceState({}, document.title);
// //     } else {
// //       const stored = localStorage.getItem("selectedUserName");
// //       if (stored && users.some((u) => u.name === stored)) {
// //         setSelectedUserName(stored);
// //       } else {
// //         setSelectedUserName(users[0].name);
// //         localStorage.setItem("selectedUserName", users[0].name);
// //       }
// //     }
// //   }, []);

// //   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
// //   const safeIndex = Math.max(0, selectedIndex);
// //   const currentUser = users[safeIndex] || users[0];
// //   const currentStats = userStats.map((categoryRow) => categoryRow[safeIndex]);

// //   const handleSeeDetailClick = () => {
// //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// //     localStorage.setItem("selectedUserName", selectedUserName);
// //     navigate("/user-detail-points-history", { state: { selectedUserName } });
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       {/* ✅ Only change: added premiumUsersCount={users.length} */}
// //       {/* <Sidebar isCurrentPagePremiumUsers={true} premiumUsersCount={users.length} /> */}
// // <Sidebar isCurrentPagePremiumUsers={true} premiumUsersCount={filteredUsers.length} />

// //       {/* LEFT PANEL */}
// //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

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
// //           {filteredUsers.length > 0 ? (
// //             filteredUsers.map((user) => {
// //               const isSelected = selectedUserName === user.name;
// //               return (
// //                 <div
// //                   key={user.id}
// //                   onClick={() => {
// //                     setSelectedUserName(user.name);
// //                     localStorage.setItem("selectedUserName", user.name);
// //                   }}
// //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${
// //                     isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"
// //                   }`}
// //                 >
// //                   <div className="flex items-center justify-between mb-2">
// //                     <div className="flex items-center gap-2">
// //                       <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
// //                       <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
// //                     </div>
// //                     <span className="text-xs text-[#055860] mt-3">{user.country}</span>
// //                   </div>
// //                   <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
// //                     <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
// //                     <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           ) : (
// //             <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
// //           )}
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL */}
// //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
// //           </div>
// //           <button onClick={handleSeeDetailClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// //             See Detail <ChevronRight size={24} />
// //           </button>
// //         </div>

// //         <div className="w-[705px] space-y-0 ml-3">
// //           {/* Free Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[1]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[1]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Trial Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[2]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Monthly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[4]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[5]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[5]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Trial Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[6]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[7]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //           {/* Yearly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.totalUsers ?? 0}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisMonth ?? 0}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.thisWeek ?? 0}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentStats[8]?.revenue ?? "$0"}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }













import React, { useState, useEffect } from "react";
import Groups from "../assets/Groups.png";
import Sidebar from "./Sidebar.jsx";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function FreeAllUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // ── Referral Free Users actual tableData (source of truth) ──────────────
  const referralFreeUsers = [
    {
      name: "Courtney Smith", balance: "$0",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",      balance: "$0", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",      balance: "$0", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",       balance: "$0", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",     balance: "$0", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",     balance: "$0", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",       balance: "$0", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",     balance: "$0", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",      balance: "$0", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",     balance: "$0", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
    { name: "Marcus Brown",  balance: "$0",  tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",  tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  // ── Monthly Trial Users actual tableData (source of truth) ───────────────
  const monthlyTrialUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
    { name: "Marcus Brown",  balance: "$3200", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$4700", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  // ── Monthly Subscribed Users actual tableData (source of truth) ─────────
  const monthlySubscribedUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 10 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 20 2025" }, { date: "Feb 01 2025" },
        { date: "Feb 03 2025" }, { date: "Feb 07 2025" }, { date: "Feb 10 2025" },
        { date: "Feb 13 2025" }, { date: "Feb 14 2025" }, { date: "Feb 15 2025" },
        { date: "Feb 16 2025" }, { date: "Feb 17 2025" }, { date: "Feb 18 2025" },
        { date: "Feb 19 2025" }, { date: "Feb 19 2025" },
      ],
    },
    { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jan 05 2025" }, { date: "Jan 20 2025" }, { date: "Feb 05 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
    { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jan 10 2025" }, { date: "Feb 10 2025" }, { date: "Feb 15 2025" }, { date: "Feb 18 2025" }] },
    { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jan 12 2025" }, { date: "Feb 14 2025" }, { date: "Feb 17 2025" }] },
    { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jan 08 2025" }, { date: "Feb 04 2025" }, { date: "Feb 13 2025" }, { date: "Feb 19 2025" }] },
    { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jan 11 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }] },
    { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jan 13 2025" }, { date: "Feb 13 2025" }, { date: "Feb 17 2025" }, { date: "Feb 19 2025" }] },
    { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jan 09 2025" }, { date: "Feb 14 2025" }, { date: "Feb 18 2025" }] },
    { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jan 07 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
    { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Jan 06 2025" }, { date: "Feb 05 2025" }, { date: "Feb 15 2025" }, { date: "Feb 19 2025" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const computeStats = (userData, monthKey = "Jan", year = "2025", weekDates = [
    "Jan 14 2025", "Jan 15 2025", "Jan 16 2025", "Jan 17 2025",
    "Jan 18 2025", "Jan 19 2025", "Jan 20 2025",
  ]) => {
    const tableData = userData?.tableData || [];
    const totalUsers = tableData.length;
    const thisMonthUsers = tableData.filter(
      (u) => u.date.includes(monthKey) && u.date.includes(year)
    ).length;
    const thisWeekUsers = tableData.filter((u) => weekDates.includes(u.date)).length;
    const revenue = userData?.balance || "$0";
    return { totalUsers, thisMonthUsers, thisWeekUsers, revenue };
  };

  // ── Monthly Cancelled Users actual tableData (source of truth) ──────────
  const monthlyCancelledUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const users = [
    { id: 1,  name: "Courtney Smith", earning: 5000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2,  name: "Arlene",         earning: 4000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3,  name: "Aubrey",         earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4,  name: "Sohan",          earning: 2000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5,  name: "Eduardo",        earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6,  name: "Colleen",        earning: 3500, country: "USA", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7,  name: "Shane",          earning: 4200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8,  name: "Darrell",        earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 9,  name: "Marvin",         earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 10, name: "Jessica",        earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 11, name: "Marcus Brown",   earning: 3200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },

  ];

  const userStats = [
    [ // [0] Monthly Premium Users
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
      { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
      { totalUsers: 920,  thisMonth: 165, thisWeek: 16, revenue: "$3750" },
      { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" },
    ],
    [ // [1] Monthly Subscribed Users
      { totalUsers: 650, thisMonth: 130, thisWeek: 13, revenue: "$2000" },
      { totalUsers: 700, thisMonth: 140, thisWeek: 14, revenue: "$2100" },
      { totalUsers: 680, thisMonth: 135, thisWeek: 13, revenue: "$2050" },
      { totalUsers: 720, thisMonth: 145, thisWeek: 14, revenue: "$2150" },
      { totalUsers: 690, thisMonth: 138, thisWeek: 13, revenue: "$2080" },
      { totalUsers: 710, thisMonth: 142, thisWeek: 14, revenue: "$2120" },
      { totalUsers: 730, thisMonth: 146, thisWeek: 14, revenue: "$2180" },
      { totalUsers: 670, thisMonth: 134, thisWeek: 13, revenue: "$2020" },
      { totalUsers: 740, thisMonth: 148, thisWeek: 15, revenue: "$2200" },
      { totalUsers: 705, thisMonth: 141, thisWeek: 14, revenue: "$2110" },
      { totalUsers: 640, thisMonth: 128, thisWeek: 12, revenue: "$1950" },
      { totalUsers: 755, thisMonth: 150, thisWeek: 15, revenue: "$2250" },
    ],
    [ // [2] Monthly Cancelled Users
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
      { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
      { totalUsers: 980,  thisMonth: 176, thisWeek: 18, revenue: "$3850" },
      { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" },
    ],
    [ // [3] Yearly Premium Users
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
      { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
      { totalUsers: 920,  thisMonth: 164, thisWeek: 16, revenue: "$3200" },
      { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" },
    ],
    [ // [4] Yearly Trial Users
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
      { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
      { totalUsers: 960,  thisMonth: 172, thisWeek: 17, revenue: "$3750" },
      { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" },
    ],
    [ // [5] Yearly Subscribed Users
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
      { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
      { totalUsers: 990,  thisMonth: 178, thisWeek: 18, revenue: "$3950" },
      { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" },
    ],
    [ // [6] Yearly Cancelled Users
      { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
      { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
      { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
      { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
      { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
      { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
      { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
      { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
      { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
      { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
      { totalUsers: 970,  thisMonth: 170, thisWeek: 17, revenue: "$3400" },
      { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" },
    ],
  ];

  // ── Yearly Trial Users actual tableData (source of truth) ───────────────
  const yearlyTrialUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  // ── Yearly Subscribed Users actual tableData (source of truth) ───────────
  const yearlySubscribedUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
    { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
    { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
    { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
    { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
    { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
    { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  // ── Yearly Cancelled Users actual tableData (source of truth) ────────────
  const yearlyCancelledUsers = [
    {
      name: "Courtney Smith", balance: "$5000",
      tableData: [
        { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
        { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
        { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
        { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
        { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
        { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
        { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
      ],
    },
    { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
    { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
    { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
    { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
    { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
    { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
    { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const parseRevenue = (val) =>
    typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

  const getLeftPanelStats = (userIndex) => {
    const freeStats      = computeStats(referralFreeUsers[userIndex]);
    const monthlyPremium = userStats[0][userIndex];
    const yearlyPremium  = userStats[3][userIndex];
    const totalUsers =
      freeStats.totalUsers              +
      (monthlyPremium?.totalUsers || 0) +
      (yearlyPremium?.totalUsers  || 0);
    const totalRevenue =
      parseRevenue(freeStats.revenue)       +
      parseRevenue(monthlyPremium?.revenue) +
      parseRevenue(yearlyPremium?.revenue);
    return { totalUsers, totalRevenue };
  };

  const displayUsers = users.map((user, userIndex) => {
    const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
    return { ...user, userIndex, totalUsers, totalRevenue };
  });

  const filteredUsers = [...displayUsers]
    .sort((a, b) => b.earning - a.earning)
    .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const THIS_PAGE = "/premium-users";

  useEffect(() => {
    localStorage.setItem("currentSidebarPage", THIS_PAGE);
    if (location.state?.selectedUserName) {
      setSelectedUserName(location.state.selectedUserName);
      localStorage.setItem("selectedUserName", location.state.selectedUserName);
      window.history.replaceState({}, document.title);
    } else {
      const stored = localStorage.getItem("selectedUserName");
      if (stored && users.some((u) => u.name === stored)) {
        setSelectedUserName(stored);
      } else {
        setSelectedUserName(users[0].name);
        localStorage.setItem("selectedUserName", users[0].name);
      }
    }
  }, []);

  const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
  const safeIndex = Math.max(0, selectedIndex);
  const currentUser = users[safeIndex] || users[0];

  const janWeekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"];
  const febWeekDates = ["Feb 13 2025","Feb 14 2025","Feb 15 2025","Feb 16 2025","Feb 17 2025","Feb 18 2025","Feb 19 2025"];
  const currentFreeStats           = computeStats(referralFreeUsers[safeIndex]);
  const currentTrialStats          = computeStats(monthlyTrialUsers[safeIndex]);
  const currentSubscribedStats     = computeStats(monthlySubscribedUsers[safeIndex], "Feb", "2025", febWeekDates);
  const currentCancelledStats      = computeStats(monthlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlyTrialStats    = computeStats(yearlyTrialUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlySubStats      = computeStats(yearlySubscribedUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlyCancelStats   = computeStats(yearlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentStats = userStats.map((row) => row[safeIndex]);

  // ✅ Handler: navigate to Yearly Trial Users passing selected user name
  const handleYearlyTrialClick = (e) => {
    e.preventDefault();
    navigate("/premium-yearly-trial-users", {
      state: { selectedUserName: selectedUserName },
    });
  };

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
      {/* <Sidebar freeUsersCount={filteredUsers.length} isCurrentPageFreeAllUsers={true} /> */}
{/* <Sidebar premiumUsersCount={users.length} isCurrentPagePremiumUsers={true} /> */}
<Sidebar premiumUsersCount={users.length} isCurrentPagePremiumUsers={true} />
      {/* LEFT PANEL */}
      <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

        <div className="absolute top-5 right-2">
          <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
              <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
            </div>
          )}
        </div>
{/* 
        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => {
              const isSelected = selectedUserName === user.name;
              return (
                <div
                  key={user.id}
                  onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }}
                  className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
                      <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
                    </div>
                    <span className="text-xs text-[#055860] mt-3">{user.country}</span>
                  </div>
                  <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
                    <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
                    <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
          )}
        </div>
      </div> */}
<div className="flex-1 space-y-2 overflow-x-auto mt-[-15px] pr-1"
  style={{ maxHeight: filteredUsers.length > 10 ? '800px' : 'none' }}
>
  {filteredUsers.length > 0 ? (
    filteredUsers.map((user) => {
      const isSelected = selectedUserName === user.name;
      return (
        <div
          key={user.id}
          onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }}
          className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
              <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
            </div>
            <span className="text-xs text-[#055860] mt-3">{user.country}</span>
          </div>
          <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
            <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
            <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
          </div>
        </div>
      );
    })
  ) : (
    <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
  )}
</div>
</div>


      {/* RIGHT PANEL */}
      <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
          </div>
          <Link to="/user-detail-points-history" className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
            See Detail <ChevronRight size={24} />
          </Link>
        </div>


        <div className="w-[705px] space-y-0 ml-3">

          {/* Free Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <button onClick={() => navigate("/refferal-free-users", { state: { selectedUserName } })} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button>
              </div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.totalUsers}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.thisMonthUsers}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentFreeStats.thisWeekUsers}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">$0</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Premium Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Trial Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center">
                <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
                  <span className="block whitespace-nowrap">Monthly</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </Link>
              </div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Subscribed Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Monthly Cancelled Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Premium Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-[#055860] text-white">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>

          {/* ✅ Yearly Trial Users — navigate with selectedUserName state */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
                <button
                  onClick={handleYearlyTrialClick}
                  className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"
                >
                  <span className="block whitespace-nowrap">Yearly</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </button>
              </div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Subscribed Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-subscribed-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></button></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

          {/* Yearly Cancelled Users */}
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-cancelled-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></button></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>

        </div>
      </div>

<style jsx>{`
  .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
  }
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #055860;
    border-radius: 10px;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #044850;
  }
`}</style>
    </div>
  );
}



