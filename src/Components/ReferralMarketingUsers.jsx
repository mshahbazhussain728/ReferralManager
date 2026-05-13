
// // // // // import React, { useState, useEffect } from "react";
// // // // // import Sidebar from "./Sidebar.jsx";
// // // // // import Groups from "../assets/Groups.png";
// // // // // import BackArrow from "../assets/BackArrow.png";
// // // // // import { Search } from "lucide-react";
// // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // ── ALL 22 marketing agents with their referral free user table data ──────────
// // // // // const ALL_LEFT_USERS = [
// // // // //   {
// // // // //     name: "Courtney Smith",
// // // // //     balance: "$0",
// // // // //     country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/1.jpg",
// // // // //     earning: 5000,
// // // // //     tableData: [
// // // // //       { name: "Muhammad Junaid Khan", date: "May 15 2024", time: "11:35 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/10.jpg", revenue: 0 },
// // // // //       { name: "Sarah Johnson",        date: "May 16 2024", time: "10:20 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/11.jpg", revenue: 0 },
// // // // //       { name: "Ahmed Ali",            date: "Dec 17 2024", time: "02:45 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/12.jpg",   revenue: 0 },
// // // // //       { name: "Emily Davis",          date: "Dec 18 2024", time: "09:15 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/13.jpg", revenue: 0 },
// // // // //       { name: "Michael Brown",        date: "Dec 19 2024", time: "04:30 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/14.jpg",   revenue: 0 },
// // // // //       { name: "Jessica Wilson",       date: "Jan 14 2025", time: "01:50 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/15.jpg", revenue: 0 },
// // // // //       { name: "David Martinez",       date: "Jan 15 2025", time: "08:25 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/16.jpg",   revenue: 0 },
// // // // //       { name: "Lisa Anderson",        date: "Jan 16 2025", time: "03:40 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/17.jpg", revenue: 0 },
// // // // //       { name: "James Taylor",         date: "May 23 2024", time: "12:15 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/18.jpg",   revenue: 0 },
// // // // //       { name: "Maria Garcia",         date: "May 24 2024", time: "05:55 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/19.jpg", revenue: 0 },
// // // // //       { name: "Robert Thomas",        date: "May 25 2024", time: "07:30 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/20.jpg",   revenue: 0 },
// // // // //       { name: "Jennifer Moore",       date: "May 26 2024", time: "11:45 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/21.jpg", revenue: 0 },
// // // // //       { name: "William Clark",        date: "May 27 2024", time: "09:30 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/21.jpg",   revenue: 0 },
// // // // //       { name: "Patricia Lewis",       date: "May 28 2024", time: "02:15 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/22.jpg", revenue: 0 },
// // // // //       { name: "Richard Walker",       date: "May 29 2024", time: "10:45 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/22.jpg",   revenue: 0 },
// // // // //       { name: "Linda Hall",           date: "May 30 2024", time: "04:20 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/23.jpg", revenue: 0 },
// // // // //       { name: "Charles Allen",        date: "May 31 2024", time: "08:50 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/23.jpg",   revenue: 0 },
// // // // //       { name: "Barbara Young",        date: "Jun 01 2024", time: "01:35 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/24.jpg", revenue: 0 },
// // // // //       { name: "Joseph King",          date: "Jun 02 2024", time: "11:10 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/24.jpg",   revenue: 0 },
// // // // //       { name: "Susan Wright",         date: "Jun 03 2024", time: "03:25 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/25.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Arlene",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/2.jpg", earning: 4000,
// // // // //     tableData: [
// // // // //       { name: "Thomas Scott",   date: "Jun 04 2024", time: "09:40 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/25.jpg",   revenue: 0 },
// // // // //       { name: "Nancy Green",    date: "Jun 05 2024", time: "02:55 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/26.jpg", revenue: 0 },
// // // // //       { name: "Daniel Adams",   date: "Jun 06 2024", time: "10:05 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/26.jpg",   revenue: 0 },
// // // // //       { name: "Betty Baker",    date: "Jun 07 2024", time: "04:40 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/27.jpg", revenue: 0 },
// // // // //       { name: "Matthew Nelson", date: "Jun 08 2024", time: "08:15 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/27.jpg",   revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Aubrey",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/3.jpg", earning: 3000,
// // // // //     tableData: [
// // // // //       { name: "Eric Reed",   date: "Jun 24 2024", time: "10:25 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/35.jpg",   revenue: 0 },
// // // // //       { name: "Donna Cook",  date: "Jun 25 2024", time: "04:50 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/36.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Sohan",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/4.jpg", earning: 2000,
// // // // //     tableData: [
// // // // //       { name: "Frank Morgan", date: "Jul 01 2024", time: "07:35 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/36.jpg",   revenue: 0 },
// // // // //       { name: "Gloria Bell",  date: "Jul 02 2024", time: "01:55 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/37.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Eduardo",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/5.jpg", earning: 4500,
// // // // //     tableData: [
// // // // //       { name: "Henry Murphy", date: "Jul 05 2024", time: "09:30 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/37.jpg",   revenue: 0 },
// // // // //       { name: "Irene Bailey", date: "Jul 06 2024", time: "03:10 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/38.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Colleen",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/6.jpg", earning: 3500,
// // // // //     tableData: [
// // // // //       { name: "Jack Rivera",      date: "Jul 10 2024", time: "11:40 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/38.jpg",   revenue: 0 },
// // // // //       { name: "Kathleen Cooper",  date: "Jul 11 2024", time: "02:25 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/39.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Shane",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/7.jpg", earning: 4200,
// // // // //     tableData: [
// // // // //       { name: "Leonard Richardson", date: "Jul 15 2024", time: "08:05 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/39.jpg",   revenue: 0 },
// // // // //       { name: "Martha Cox",         date: "Jul 16 2024", time: "12:50 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/40.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Darrell",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/8.jpg", earning: 4800,
// // // // //     tableData: [
// // // // //       { name: "Nathan Howard", date: "Jul 20 2024", time: "05:20 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/40.jpg",   revenue: 0 },
// // // // //       { name: "Olivia Ward",   date: "Jul 21 2024", time: "10:15 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/41.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Marvin",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/9.jpg", earning: 3800,
// // // // //     tableData: [
// // // // //       { name: "Peter Torres",    date: "Jul 25 2024", time: "03:45 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/41.jpg", revenue: 0 },
// // // // //       { name: "Quincy Peterson", date: "Jul 26 2024", time: "09:00 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/42.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Jessica",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/10.jpg", earning: 4100,
// // // // //     tableData: [
// // // // //       { name: "Rachel Gray",    date: "Jan 01 2025", time: "01:30 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/42.jpg", revenue: 0 },
// // // // //       { name: "Samuel Ramirez", date: "Jan 19 2025", time: "07:15 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/43.jpg",   revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Marcus Brown",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/10.jpg", earning: 3200,
// // // // //     tableData: [
// // // // //       { name: "Alice Bennett",  date: "Aug 05 2024", time: "10:00 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/43.jpg", revenue: 0 },
// // // // //       { name: "Brian Foster",   date: "Aug 06 2024", time: "02:30 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/44.jpg",   revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Jessica Davis",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/11.jpg", earning: 4700,
// // // // //     tableData: [
// // // // //       { name: "Carl Hughes",   date: "Aug 10 2024", time: "09:15 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/45.jpg",   revenue: 0 },
// // // // //       { name: "Diana Price",   date: "Aug 11 2024", time: "03:45 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/44.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Test User",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/20.jpg", earning: 3000,
// // // // //     tableData: [
// // // // //       { name: "Evan Sanders",  date: "Sep 01 2024", time: "11:00 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/46.jpg",   revenue: 0 },
// // // // //       { name: "Fiona Bryant",  date: "Sep 02 2024", time: "04:20 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/45.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Anthony Miller",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/21.jpg", earning: 5200,
// // // // //     tableData: [
// // // // //       { name: "George Russell", date: "Sep 05 2024", time: "08:50 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/47.jpg",   revenue: 0 },
// // // // //       { name: "Hannah Simmons", date: "Sep 06 2024", time: "01:10 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/46.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Natalie Wilson",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/22.jpg", earning: 3600,
// // // // //     tableData: [
// // // // //       { name: "Ian Powell",   date: "Sep 10 2024", time: "10:30 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/48.jpg",   revenue: 0 },
// // // // //       { name: "Julia Flores", date: "Sep 11 2024", time: "03:00 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/47.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Kevin Anderson",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/23.jpg", earning: 4400,
// // // // //     tableData: [
// // // // //       { name: "Kyle Jenkins",  date: "Sep 15 2024", time: "09:00 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/49.jpg",   revenue: 0 },
// // // // //       { name: "Laura Hayes",   date: "Sep 16 2024", time: "02:40 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/48.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Samantha Lee",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/24.jpg", earning: 3900,
// // // // //     tableData: [
// // // // //       { name: "Mason Grant",   date: "Sep 20 2024", time: "11:20 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/50.jpg",   revenue: 0 },
// // // // //       { name: "Nina Tucker",   date: "Sep 21 2024", time: "04:50 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/49.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Daniel Carter",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/25.jpg", earning: 5300,
// // // // //     tableData: [
// // // // //       { name: "Oscar Burns",   date: "Oct 01 2024", time: "08:30 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/51.jpg",   revenue: 0 },
// // // // //       { name: "Paula Ross",    date: "Oct 02 2024", time: "01:00 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/50.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Olivia Martinez",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/26.jpg", earning: 4600,
// // // // //     tableData: [
// // // // //       { name: "Quinn Diaz",    date: "Oct 05 2024", time: "10:10 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/52.jpg",   revenue: 0 },
// // // // //       { name: "Rita Reyes",    date: "Oct 06 2024", time: "03:30 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/51.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Ryan Thompson",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/27.jpg", earning: 4100,
// // // // //     tableData: [
// // // // //       { name: "Steve Coleman", date: "Oct 10 2024", time: "09:45 AM", status: "Free", image: "https://randomuser.me/api/portraits/men/53.jpg",   revenue: 0 },
// // // // //       { name: "Tina Perry",    date: "Oct 11 2024", time: "02:15 PM", status: "Free", image: "https://randomuser.me/api/portraits/women/52.jpg", revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Emily Johnson",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/women/28.jpg", earning: 3700,
// // // // //     tableData: [
// // // // //       { name: "Uma Long",      date: "Oct 15 2024", time: "11:05 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/53.jpg", revenue: 0 },
// // // // //       { name: "Victor Medina", date: "Oct 16 2024", time: "04:35 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/54.jpg",   revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     name: "Jacob Williams",
// // // // //     balance: "$0", country: "USA",
// // // // //     image: "https://randomuser.me/api/portraits/men/29.jpg", earning: 4900,
// // // // //     tableData: [
// // // // //       { name: "Wendy Stone",   date: "Oct 20 2024", time: "08:20 AM", status: "Free", image: "https://randomuser.me/api/portraits/women/54.jpg", revenue: 0 },
// // // // //       { name: "Xavier Shaw",   date: "Oct 21 2024", time: "01:50 PM", status: "Free", image: "https://randomuser.me/api/portraits/men/55.jpg",   revenue: 0 },
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // export default function ReferralMarketingUsers() {
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // //   const [selectedUserName, setSelectedUserName] = useState("");
// // // // //   const itemsPerPage = 10;

// // // // //   // ── On mount: read selectedUserName from navigation state → localStorage → first user ──
// // // // //   useEffect(() => {
// // // // //     if (location.state?.selectedUserName) {
// // // // //       setSelectedUserName(location.state.selectedUserName);
// // // // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // // // //       window.history.replaceState({}, document.title);
// // // // //     } else {
// // // // //       const stored = localStorage.getItem("selectedUserName");
// // // // //       if (stored && ALL_LEFT_USERS.some((u) => u.name === stored)) {
// // // // //         setSelectedUserName(stored);
// // // // //       } else {
// // // // //         setSelectedUserName(ALL_LEFT_USERS[0].name);
// // // // //       }
// // // // //     }
// // // // //   }, []);

// // // // //   // ── Always resolve by name — never by index ───────────────────────────────
// // // // //   const currentUser =
// // // // //     ALL_LEFT_USERS.find((u) => u.name === selectedUserName) || ALL_LEFT_USERS[0];

// // // // //   // ── Filter table rows by search term ─────────────────────────────────────
// // // // //   const filteredTableData = currentUser.tableData.filter((row) =>
// // // // //     row.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   // ── Stats derived from the real tableData ─────────────────────────────────
// // // // //   const totalUsers     = currentUser.tableData.length;
// // // // //   const thisMonthUsers = currentUser.tableData.filter(
// // // // //     (u) => u.date.includes("Jan") && u.date.includes("2025")
// // // // //   ).length;
// // // // //   const thisWeekUsers = currentUser.tableData.filter((u) =>
// // // // //     ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025",
// // // // //      "Jan 18 2025","Jan 19 2025","Jan 20 2025"].includes(u.date)
// // // // //   ).length;
// // // // //   const totalRevenue = currentUser.balance;

// // // // //   // ── Pagination ────────────────────────────────────────────────────────────
// // // // //   const totalPages = Math.ceil(filteredTableData.length / itemsPerPage);
// // // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // // //   const endIndex   = startIndex + itemsPerPage;
// // // // //   const currentData = filteredTableData.slice(startIndex, endIndex);

// // // // //   useEffect(() => { setCurrentPage(1); }, [searchTerm]);
// // // // //   useEffect(() => {
// // // // //     if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
// // // // //   }, [currentPage, totalPages]);

// // // // //   const handlePrevPage  = () => { if (currentPage > 1)           setCurrentPage(currentPage - 1); };
// // // // //   const handleNextPage  = () => { if (currentPage < totalPages)  setCurrentPage(currentPage + 1); };
// // // // //   const handlePageClick = (n) => { if (n <= totalPages)          setCurrentPage(n); };

// // // // //   const pageNumbers = [];
// // // // //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// // // // //   return (
// // // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // // //       <Sidebar isCurrentPageFreeAllUsers={false} />

// // // // //       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
// // // // //       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search..."
// // // // //           value={searchTerm}
// // // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // // //           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// // // // //         />
// // // // //         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

// // // // //         <div className="absolute top-5 right-3">
// // // // //           <img
// // // // //             className="h-6 w-6 cursor-pointer"
// // // // //             src={Groups}
// // // // //             alt="Groups Icon"
// // // // //             onClick={() => setIsOpen(!isOpen)}
// // // // //           />
// // // // //           {isOpen && (
// // // // //             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
// // // // //               {["Active Users","Total Users","Monthly Users","Weekly Users",
// // // // //                 "Total Sales","Monthly Sales","Weekly Sales","Balance"].map((item) => (
// // // // //                 <button key={item} className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
// // // // //                   {item}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Shows ONLY the currently selected agent */}
// // // // //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// // // // //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// // // // //             <div className="flex items-center justify-between mb-2">
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <img
// // // // //                   src={currentUser.image}
// // // // //                   alt={currentUser.name}
// // // // //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// // // // //                 />
// // // // //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// // // // //                   {currentUser.name}
// // // // //                 </p>
// // // // //               </div>
// // // // //               <span className="text-xs text-[#055860] mt-3">{currentUser.country}</span>
// // // // //             </div>
// // // // //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// // // // //               <span className="text-gray-500">
// // // // //                 Users: <span className="text-[#055860]">{currentUser.tableData.length}</span>
// // // // //               </span>
// // // // //               <span className="text-gray-500">
// // // // //                 Balance: <span className="text-[#055860]">{currentUser.balance}</span>
// // // // //               </span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
// // // // //       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
// // // // //         {/* Header */}
// // // // //         <div className="flex items-center justify-between mb-6">
// // // // //           <div className="flex items-center gap-4">
// // // // //             <img
// // // // //               src={currentUser.image}
// // // // //               alt={currentUser.name}
// // // // //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// // // // //             />
// // // // //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// // // // //               {currentUser.name}
// // // // //             </h2>
// // // // //           </div>
// // // // //           <div className="relative w-full max-w-sm">
// // // // //             <Search
// // // // //               size={18}
// // // // //               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]"
// // // // //               strokeWidth={2}
// // // // //             />
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Search..."
// // // // //               value={searchTerm}
// // // // //               onChange={(e) => setSearchTerm(e.target.value)}
// // // // //               className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Stats bar */}
// // // // //         <div className="flex items-center gap-4 mb-4 mt-[-8px]">
// // // // //           <button
// // // // //             onClick={() => navigate(-1)}
// // // // //             className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
// // // // //           >
// // // // //             <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
// // // // //           </button>
// // // // //           <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
// // // // //             <div className="grid grid-cols-5">
// // // // //               <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
// // // // //                 <div className="text-md font-semibold leading-[200%]">
// // // // //                   <span className="block whitespace-nowrap">Free</span>
// // // // //                   <span className="block whitespace-nowrap">Users</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // // //                 <div className="text-lg font-bold mt-1">{totalUsers}</div>
// // // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white p-6 text-center">
// // // // //                 <div className="text-lg font-bold mt-1">{thisMonthUsers}</div>
// // // // //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold leading-[70%]">{thisWeekUsers}</div>
// // // // //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// // // // //               </div>
// // // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // // //                 <div className="text-lg font-bold leading-[70%]">{totalRevenue}</div>
// // // // //                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Table */}
// // // // //         <div className="flex-1 overflow-x-auto">
// // // // //           <table className="w-full border border-gray-200 rounded-md text-sm">
// // // // //             <thead className="h-[45px] bg-[#055860] text-white">
// // // // //               <tr>
// // // // //                 <th className="p-2 text-left">User</th>
// // // // //                 <th className="p-2 text-center">Installed</th>
// // // // //                 <th className="p-2 text-center">Subscribed</th>
// // // // //                 <th className="p-2 text-center">Clearance</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {currentData.length > 0 ? (
// // // // //                 currentData.map((row, idx) => (
// // // // //                   <tr key={idx} className="border-b">
// // // // //                     <td className="p-4">
// // // // //                       <div className="flex items-center gap-2">
// // // // //                         <img src={row.image} alt="User" className="w-8 h-8 rounded-full object-cover" />
// // // // //                         {row.name}
// // // // //                       </div>
// // // // //                     </td>
// // // // //                     <td className="p-2 text-center">
// // // // //                       {row.date}<br />
// // // // //                       <span className="text-xs text-gray-400">{row.time}</span>
// // // // //                     </td>
// // // // //                     <td className="p-2 text-center">
// // // // //                       {row.date}<br />
// // // // //                       <span className="text-xs text-gray-400">{row.time}</span>
// // // // //                     </td>
// // // // //                     <td className="p-2 text-center">
// // // // //                       {row.date}<br />
// // // // //                       <span className="text-xs text-gray-400">{row.time}</span>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 ))
// // // // //               ) : (
// // // // //                 <tr>
// // // // //                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
// // // // //                 </tr>
// // // // //               )}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>

// // // // //         {/* Pagination */}
// // // // //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// // // // //           <p className="text-sm text-gray-600 ml-[-13px]">
// // // // //             Showing {filteredTableData.length > 0 ? startIndex + 1 : 0} to{" "}
// // // // //             {Math.min(endIndex, filteredTableData.length)} of {filteredTableData.length} entries
// // // // //           </p>
// // // // //           <div className="flex items-center gap-2 mr-[-19px]">
// // // // //             <button
// // // // //               onClick={handlePrevPage}
// // // // //               disabled={currentPage === 1}
// // // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // // //                 currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // // //               }`}
// // // // //             >
// // // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
// // // // //             </button>
// // // // //             {pageNumbers.map((n) => (
// // // // //               <span
// // // // //                 key={n}
// // // // //                 onClick={() => handlePageClick(n)}
// // // // //                 className={`cursor-pointer ${
// // // // //                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
// // // // //                 }`}
// // // // //               >
// // // // //                 {n}
// // // // //               </span>
// // // // //             ))}
// // // // //             {totalPages > 4 && (
// // // // //               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
// // // // //                 <span className="text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
// // // // //               </button>
// // // // //             )}
// // // // //             <button
// // // // //               onClick={handleNextPage}
// // // // //               disabled={currentPage === totalPages}
// // // // //               className={`w-6 h-6 flex items-center justify-center rounded-full ${
// // // // //                 currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
// // // // //               }`}
// // // // //             >
// // // // //               <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }








// // import React, { useState, useEffect, useCallback } from "react";
// // import Sidebar from "./Sidebar.jsx";
// // import Groups from "../assets/Groups.png";
// // import BackArrow from "../assets/BackArrow.png";
// // import { Search } from "lucide-react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // const BASE_URL = "https://referralapis.appistan.co/api/admin";

// // const resolveImageUrl = (imageUrl) => {
// //   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
// //   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
// //   return `${BASE_URL.replace("/api/admin", "")}/uploads/${imageUrl}`;
// // };

// // export default function ReferralMarketingUsers() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [selectedUserName, setSelectedUserName] = useState("");
// //   const [selectedUserId, setSelectedUserId] = useState(null);
// //   const [storedAvatar, setStoredAvatar] = useState("");

// //   // ── API state ─────────────────────────────────────────────────────────────
// //   const [referralUser, setReferralUser] = useState(null);
// //   const [freeUsers, setFreeUsers] = useState([]);
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [loading, setLoading] = useState(false);

// //   // ── Stats state (from statistics API) ────────────────────────────────────
// //   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

// //   const itemsPerPage = 10;

// //   // ── Fetch free users from API ─────────────────────────────────────────────
// //   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setReferralUser(json.referralUser || null);
// //         setFreeUsers(json.freeUsers || []);
// //         setTotalCount(json.count || 0);
// //         const pages = Math.ceil((json.count || 0) / itemsPerPage);
// //         setTotalPages(pages > 0 ? pages : 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch free users:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   // ── Fetch statistics for the free users stat bar ──────────────────────────
// //   const fetchStatistics = useCallback(async (userId) => {
// //     if (!userId) return;
// //     try {
// //       const res = await fetch(`${BASE_URL}/referral-users/${userId}/statistics`);
// //       const json = await res.json();
// //       if (json.success && json.statistics?.freeUsers) {
// //         setFreeStats(json.statistics.freeUsers);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch statistics:", err);
// //     }
// //   }, []);

// //   // ── On mount: read selectedUserId + selectedUserName + avatar from state/localStorage ──
// //   useEffect(() => {
// //     let userId = null;
// //     let userName = "";
// //     let userAvatar = "";

// //     if (location.state?.selectedUserId) {
// //       userId     = location.state.selectedUserId;
// //       userName   = location.state.selectedUserName  || "";
// //       userAvatar = location.state.selectedUserAvatar || "";
// //       localStorage.setItem("selectedUserId",     userId);
// //       localStorage.setItem("selectedUserName",   userName);
// //       localStorage.setItem("selectedUserAvatar", userAvatar);
// //       window.history.replaceState({}, document.title);
// //     } else if (location.state?.selectedUserName) {
// //       userName   = location.state.selectedUserName;
// //       userAvatar = location.state.selectedUserAvatar || "";
// //       localStorage.setItem("selectedUserName",   userName);
// //       localStorage.setItem("selectedUserAvatar", userAvatar);
// //       window.history.replaceState({}, document.title);
// //     } else {
// //       userId     = localStorage.getItem("selectedUserId");
// //       userName   = localStorage.getItem("selectedUserName")   || "";
// //       userAvatar = localStorage.getItem("selectedUserAvatar") || "";
// //     }

// //     if (userId)     setSelectedUserId(parseInt(userId));
// //     if (userName)   setSelectedUserName(userName);
// //     if (userAvatar) setStoredAvatar(userAvatar);
// //   }, []);

// //   // ── Fetch data when selectedUserId is set ────────────────────────────────
// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchFreeUsers(selectedUserId, 1);
// //       fetchStatistics(selectedUserId);
// //     }
// //   }, [selectedUserId]);

// //   // ── Re-fetch when page changes ────────────────────────────────────────────
// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchFreeUsers(selectedUserId, currentPage);
// //     }
// //   }, [currentPage]);

// //   // ── Reset page on search (client-side filter on current page data) ────────
// //   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

// //   // ── Filter current page data by search term ───────────────────────────────
// //   const filteredData = freeUsers.filter((row) =>
// //     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // ── Pagination handlers ───────────────────────────────────────────────────
// //   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
// //   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
// //   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

// //   const pageNumbers = [];
// //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// //   // ── Display values ────────────────────────────────────────────────────────
// //   const displayName    = referralUser?.name || selectedUserName || "User";
// //   const displayAvatar  = storedAvatar || resolveImageUrl(referralUser?.imageUrl || referralUser?.image || null);
// //   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
// //   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex   = startIndex + itemsPerPage;

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       <Sidebar isCurrentPageFreeAllUsers={false} />

// //       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
// //       <div className="h-full w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// //         {/* Shows ONLY the currently selected agent */}
// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={displayAvatar}
// //                   alt={displayName}
// //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {displayName}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">
// //                 Users: <span className="text-[#055860]">{totalCount}</span>
// //               </span>
// //               <span className="text-gray-500">
// //                 Balance: <span className="text-[#055860]">{displayBalance}</span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
// //       {/* <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]"> */}
// //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={displayAvatar}
// //               alt={displayName}
// //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// //               {displayName}
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
// //                   <span className="block whitespace-nowrap">Free Users</span>
// //                   {/* <span className="block whitespace-nowrap">Users</span> */}
// //                 </div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
// //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
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
// //                 {/* <th className="p-2 text-left">User</th> */}
// //                 <th className="px-4 py-3 text-center">
// //   <div className="-ml-60">User</div>
// // </th>
// //                 <th className="p-2 text-center">Installed</th>
// //                 <th className="p-2 text-center">Subscribed</th>
// //                 <th className="p-2 text-center">Clearance</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {loading ? (
// //                 <tr>
// //                   <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
// //                 </tr>
// //               ) : filteredData.length > 0 ? (
// //                 filteredData.map((row, idx) => {
// //                   const userName    = row.name || row.userName || "Unknown";
// //                   const userAvatar  = resolveImageUrl(row.imageUrl || row.image || null);
// //                   const installedDate = row.createdAt
// //                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                     : "—";
// //                   const installedTime = row.createdAt
// //                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                     : "";
// //                   return (
// //                     <tr key={row.id || idx} className="border-b">
// //                       <td className="p-4">
// //                         <div className="flex items-center gap-2">
// //                           <img
// //                             src={userAvatar}
// //                             alt="User"
// //                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// //                             className="w-8 h-8 rounded-full object-cover"
// //                           />
// //                           {userName}
// //                         </div>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                     </tr>
// //                   );
// //                 })
// //               ) : (
// //                 <tr>
// //                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// //           <p className="text-sm text-gray-600 ml-[-13px]">
// //             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
// //             {Math.min(endIndex, totalCount)} of {totalCount} entries
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



// // // // //remove above code if it is not working



// // import React, { useState, useEffect, useCallback } from "react";
// // import Sidebar from "./Sidebar.jsx";
// // import Groups from "../assets/Groups.png";
// // import BackArrow from "../assets/BackArrow.png";
// // import { Search } from "lucide-react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";

// // const resolveImageUrl = (imageUrl) => {
// //   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
// //   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
// //   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// // };

// // export default function ReferralMarketingUsers() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [selectedUserName, setSelectedUserName] = useState("");
// //   const [selectedUserId, setSelectedUserId] = useState(null);
// //   const [storedAvatar, setStoredAvatar] = useState("");

// //   // ── API state ─────────────────────────────────────────────────────────────
// //   const [referralUser, setReferralUser] = useState(null);
// //   const [freeUsers, setFreeUsers] = useState([]);
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [loading, setLoading] = useState(false);

// //   // ── Stats state (from statistics API) ────────────────────────────────────
// //   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

// //   const itemsPerPage = 10;

// //   // ── Fetch free users from API ─────────────────────────────────────────────
// //   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
// //     if (!userId) return;
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`);
// //       const json = await res.json();
// //       if (json.success) {
// //         setReferralUser(json.referralUser || null);
// //         setFreeUsers(json.freeUsers || []);
// //         setTotalCount(json.count || 0);
// //         const pages = Math.ceil((json.count || 0) / itemsPerPage);
// //         setTotalPages(pages > 0 ? pages : 1);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch free users:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   // ── Fetch statistics for the free users stat bar ──────────────────────────
// //   const fetchStatistics = useCallback(async (userId) => {
// //     if (!userId) return;
// //     try {
// //       const res = await fetch(`${BASE_URL}/referral-users/${userId}/statistics`);
// //       const json = await res.json();
// //       if (json.success && json.statistics?.freeUsers) {
// //         setFreeStats(json.statistics.freeUsers);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch statistics:", err);
// //     }
// //   }, []);

// //   // ── On mount: read selectedUserId + selectedUserName + avatar from state/localStorage ──
// //   useEffect(() => {
// //     let userId = null;
// //     let userName = "";
// //     let userAvatar = "";

// //     if (location.state?.selectedUserId) {
// //       userId     = location.state.selectedUserId;
// //       userName   = location.state.selectedUserName  || "";
// //       userAvatar = location.state.selectedUserAvatar || "";
// //       localStorage.setItem("selectedUserId",     userId);
// //       localStorage.setItem("selectedUserName",   userName);
// //       localStorage.setItem("selectedUserAvatar", userAvatar);
// //       window.history.replaceState({}, document.title);
// //     } else if (location.state?.selectedUserName) {
// //       userName   = location.state.selectedUserName;
// //       userAvatar = location.state.selectedUserAvatar || "";
// //       localStorage.setItem("selectedUserName",   userName);
// //       localStorage.setItem("selectedUserAvatar", userAvatar);
// //       window.history.replaceState({}, document.title);
// //     } else {
// //       userId     = localStorage.getItem("selectedUserId");
// //       userName   = localStorage.getItem("selectedUserName")   || "";
// //       userAvatar = localStorage.getItem("selectedUserAvatar") || "";
// //     }

// //     if (userId)     setSelectedUserId(parseInt(userId));
// //     if (userName)   setSelectedUserName(userName);
// //     if (userAvatar) setStoredAvatar(userAvatar);
// //   }, []);

// //   // ── Fetch data when selectedUserId is set ────────────────────────────────
// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchFreeUsers(selectedUserId, 1);
// //       fetchStatistics(selectedUserId);
// //     }
// //   }, [selectedUserId]);

// //   // ── Re-fetch when page changes ────────────────────────────────────────────
// //   useEffect(() => {
// //     if (selectedUserId) {
// //       fetchFreeUsers(selectedUserId, currentPage);
// //     }
// //   }, [currentPage]);

// //   // ── Reset page on search ──────────────────────────────────────────────────
// //   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

// //   // ── Filter current page data by search term ───────────────────────────────
// //   const filteredData = freeUsers.filter((row) =>
// //     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // ── Pagination handlers ───────────────────────────────────────────────────
// //   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
// //   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
// //   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

// //   const pageNumbers = [];
// //   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

// //   // ── Display values ────────────────────────────────────────────────────────
// //   const displayName    = referralUser?.name || selectedUserName || "User";
// //   const displayAvatar  = storedAvatar || resolveImageUrl(referralUser?.imageUrl || referralUser?.image || null);
// //   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
// //   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex   = startIndex + itemsPerPage;

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       <Sidebar isCurrentPageFreeAllUsers={false} />

// //       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
// //       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
// //         />
// //         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

// //         {/* Shows ONLY the currently selected agent */}
// //         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
// //           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
// //             <div className="flex items-center justify-between mb-2">
// //               <div className="flex items-center gap-2">
// //                 <img
// //                   src={displayAvatar}
// //                   alt={displayName}
// //                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
// //                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
// //                 />
// //                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
// //                   {displayName}
// //                 </p>
// //               </div>
// //               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
// //             </div>
// //             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
// //               <span className="text-gray-500">
// //                 Users: <span className="text-[#055860]">{totalCount}</span>
// //               </span>
// //               <span className="text-gray-500">
// //                 Balance: <span className="text-[#055860]">{displayBalance}</span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
// //       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

// //         {/* Header */}
// //         <div className="flex items-center justify-between mb-6">
// //           <div className="flex items-center gap-4">
// //             <img
// //               src={displayAvatar}
// //               alt={displayName}
// //               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
// //               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
// //             />
// //             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
// //               {displayName}
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
// //                   <span className="block whitespace-nowrap">Free Users</span>
// //                 </div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
// //               </div>
// //               <div className="bg-[#055860] text-white p-6 text-center">
// //                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
// //                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
// //                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
// //               </div>
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
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
// //                 <th className="px-4 py-3 text-center">
// //                   <div className="-ml-5">User</div>
// //                 </th>
// //                 <th className="p-2 text-center">Installed</th>
// //                 <th className="p-2 text-center">Subscribed</th>
// //                 <th className="p-2 text-center">Clearance</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {loading ? (
// //                 <tr>
// //                   <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
// //                 </tr>
// //               ) : filteredData.length > 0 ? (
// //                 filteredData.map((row, idx) => {
// //                   const userName    = row.name || row.userName || "Unknown";
// //                   const userAvatar  = resolveImageUrl(row.imageUrl || row.image || null);
// //                   const installedDate = row.createdAt
// //                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
// //                     : "—";
// //                   const installedTime = row.createdAt
// //                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
// //                     : "";
// //                   return (
// //                     <tr key={row.id || idx} className="border-b">
// //                       <td className="p-4">
// //                         <div className="flex items-center gap-2">
// //                           <img
// //                             src={userAvatar}
// //                             alt="User"
// //                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
// //                             className="w-8 h-8 rounded-full object-cover"
// //                           />
// //                           {userName}
// //                         </div>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                       <td className="p-2 text-center">
// //                         {installedDate}<br />
// //                         <span className="text-xs text-gray-400">{installedTime}</span>
// //                       </td>
// //                     </tr>
// //                   );
// //                 })
// //               ) : (
// //                 <tr>
// //                   <td colSpan="4" className="p-4 text-center text-gray-500">No users found</td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
// //           <p className="text-sm text-gray-600 ml-[-13px]">
// //             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
// //             {Math.min(endIndex, totalCount)} of {totalCount} entries
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



// /////Free user counts


// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// };

// export default function ReferralMarketingUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [storedAvatar, setStoredAvatar] = useState("");

//   // ── API state ─────────────────────────────────────────────────────────────
//   const [referralUser, setReferralUser] = useState(null);
//   const [freeUsers, setFreeUsers] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

//   const itemsPerPage = 10;

//   // ── Fetch free users from API ─────────────────────────────────────────────
//   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`
//       );
//       const json = await res.json();
//       if (json.success) {
//         setReferralUser(json.referralUser || null);
//         setFreeUsers(json.freeUsers || []);
//         setTotalCount(json.count || 0);
//         const pages = Math.ceil((json.count || 0) / itemsPerPage);
//         setTotalPages(pages > 0 ? pages : 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch free users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // ── Fetch statistics using new POST API ───────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res = await fetch(DETAILS_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.freeUsers) {
//         setFreeStats({
//           total:     json.data.freeUsers.total,
//           thisMonth: json.data.freeUsers.thisMonth,
//           thisWeek:  json.data.freeUsers.thisWeek,
//           revenue:   json.data.freeUsers.revenue,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     }
//   }, []);

//   // ── On mount: read selectedUserId + selectedUserName + avatar ─────────────
//   useEffect(() => {
//     let userId = null;
//     let userName = "";
//     let userAvatar = "";

//     if (location.state?.selectedUserId) {
//       userId     = location.state.selectedUserId;
//       userName   = location.state.selectedUserName  || "";
//       userAvatar = location.state.selectedUserAvatar || "";
//       localStorage.setItem("selectedUserId",     userId);
//       localStorage.setItem("selectedUserName",   userName);
//       localStorage.setItem("selectedUserAvatar", userAvatar);
//       window.history.replaceState({}, document.title);
//     } else if (location.state?.selectedUserName) {
//       userName   = location.state.selectedUserName;
//       userAvatar = location.state.selectedUserAvatar || "";
//       localStorage.setItem("selectedUserName",   userName);
//       localStorage.setItem("selectedUserAvatar", userAvatar);
//       window.history.replaceState({}, document.title);
//     } else {
//       userId     = localStorage.getItem("selectedUserId");
//       userName   = localStorage.getItem("selectedUserName")   || "";
//       userAvatar = localStorage.getItem("selectedUserAvatar") || "";
//     }

//     if (userId)     setSelectedUserId(parseInt(userId));
//     if (userName)   setSelectedUserName(userName);
//     if (userAvatar) setStoredAvatar(userAvatar);
//   }, []);

//   // ── Fetch data when selectedUserId is set ────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, 1);
//       fetchStatistics(selectedUserId);
//     }
//   }, [selectedUserId]);

//   // ── Re-fetch when page changes ────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, currentPage);
//     }
//   }, [currentPage]);

//   // ── Reset page on search ──────────────────────────────────────────────────
//   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

//   // ── Filter current page data by search term ───────────────────────────────
//   const filteredData = freeUsers.filter((row) =>
//     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ── Pagination handlers ───────────────────────────────────────────────────
//   const handlePrevPage  = () => { if (currentPage > 1)           setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages)  setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   // ── Display values ────────────────────────────────────────────────────────
//   const displayName    = referralUser?.name || selectedUserName || "User";
//   const displayAvatar  = storedAvatar || resolveImageUrl(referralUser?.imageUrl || referralUser?.image || null);
//   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
//   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Shows ONLY the currently selected agent */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={displayAvatar}
//                   alt={displayName}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {displayName}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{freeStats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">{displayBalance}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={displayAvatar}
//               alt={displayName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {displayName}
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
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
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
//                   <span className="block whitespace-nowrap">Free Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
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
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Clearance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
//                 </tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName      = row.name || row.userName || "Unknown";
//                   const userAvatar    = resolveImageUrl(row.imageUrl || row.image || null);
//                   const installedDate = row.createdAt
//                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                     : "—";
//                   const installedTime = row.createdAt
//                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                     : "";
//                   return (
//                     <tr key={row.id || idx} className="border-b">
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
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">No free users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, totalCount)} of {totalCount} entries
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
//             {pageNumbers.map((n) => (
//               <span
//                 key={n}
//                 onClick={() => handlePageClick(n)}
//                 className={`cursor-pointer ${
//                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {n}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
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
//     </div>
//   );
// }



// /////localstoarge



// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// };

// export default function ReferralMarketingUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [storedAvatar, setStoredAvatar] = useState("");

//   // ── API state ─────────────────────────────────────────────────────────────
//   const [referralUser, setReferralUser] = useState(null);
//   const [freeUsers, setFreeUsers] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

//   const itemsPerPage = 10;

//   // ── Fetch free users from API ─────────────────────────────────────────────
//   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`
//       );
//       const json = await res.json();
//       if (json.success) {
//         setReferralUser(json.referralUser || null);
//         setFreeUsers(json.freeUsers || []);
//         setTotalCount(json.count || 0);
//         const pages = Math.ceil((json.count || 0) / itemsPerPage);
//         setTotalPages(pages > 0 ? pages : 1);
//       }
//     } catch (err) {
//       console.error("Failed to fetch free users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // ── Fetch statistics using POST API ──────────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res = await fetch(DETAILS_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.freeUsers) {
//         setFreeStats({
//           total:     json.data.freeUsers.total,
//           thisMonth: json.data.freeUsers.thisMonth,
//           thisWeek:  json.data.freeUsers.thisWeek,
//           revenue:   json.data.freeUsers.revenue,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     }
//   }, []);

//   // ── On mount: read selectedUserId + selectedUserName + avatar from location.state only ──
//   useEffect(() => {
//     const state = location.state || {};
//     const userId   = state.selectedUserId   ?? null;
//     const userName = state.selectedUserName  ?? "";
//     const userAvatar = state.selectedUserAvatar ?? "";

//     if (userId)     setSelectedUserId(parseInt(userId));
//     if (userName)   setSelectedUserName(userName);
//     if (userAvatar) setStoredAvatar(userAvatar);

//     // Clear navigation state from history so a refresh doesn't re-apply stale state
//     if (userId || userName) {
//       window.history.replaceState({}, document.title);
//     }
//   }, []);

//   // ── Fetch data when selectedUserId is set ────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, 1);
//       fetchStatistics(selectedUserId);
//     }
//   }, [selectedUserId]);

//   // ── Re-fetch when page changes ────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, currentPage);
//     }
//   }, [currentPage]);

//   // ── Reset page on search ──────────────────────────────────────────────────
//   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

//   // ── Filter current page data by search term ───────────────────────────────
//   const filteredData = freeUsers.filter((row) =>
//     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ── Pagination handlers ───────────────────────────────────────────────────
//   const handlePrevPage  = () => { if (currentPage > 1)           setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages)  setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.min(4, totalPages); i++) pageNumbers.push(i);

//   // ── Display values — driven entirely by API response ─────────────────────
//   const displayName    = referralUser?.name || selectedUserName || "User";
//   const apiImage       = referralUser?.imageUrl || referralUser?.image || null;
//   const displayAvatar  = apiImage ? resolveImageUrl(apiImage) : storedAvatar || resolveImageUrl(null);
//   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
//   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Shows ONLY the currently selected agent */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={displayAvatar}
//                   alt={displayName}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {displayName}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{freeStats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">{displayBalance}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={displayAvatar}
//               alt={displayName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {displayName}
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
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
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
//                   <span className="block whitespace-nowrap">Free Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
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
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Clearance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
//                 </tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName      = row.name || row.userName || "Unknown";
//                   const userAvatar    = resolveImageUrl(row.imageUrl || row.image || null);
//                   const installedDate = row.createdAt
//                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                     : "—";
//                   const installedTime = row.createdAt
//                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                     : "";
//                   return (
//                     <tr key={row.id || idx} className="border-b">
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
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">No free users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, totalCount)} of {totalCount} entries
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
//             {pageNumbers.map((n) => (
//               <span
//                 key={n}
//                 onClick={() => handlePageClick(n)}
//                 className={`cursor-pointer ${
//                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {n}
//               </span>
//             ))}
//             {totalPages > 4 && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
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
//     </div>
//   );
// }


// ////


// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// };

// export default function ReferralMarketingUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [storedAvatar, setStoredAvatar] = useState("");

//   // ── API state ─────────────────────────────────────────────────────────────
//   const [referralUser, setReferralUser] = useState(null);
//   const [freeUsers, setFreeUsers] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);   // total entries across ALL pages
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

//   const itemsPerPage = 10;

//   // ── Fetch free users from API ─────────────────────────────────────────────
//   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`
//       );
//       const json = await res.json();
//       if (json.success) {
//         setReferralUser(json.referralUser || null);
//         setFreeUsers(json.freeUsers || []);

//         // ── FIX: Accumulate the real total count across pages ──────────────
//         // The API returns count = items on THIS page (not total records).
//         // We track the running total: (page-1)*limit + items_on_this_page.
//         // If this page is full (count === limit) there may be more pages,
//         // so we set totalPages to at least page+1 so the Next button stays enabled.
//         const itemsOnPage = (json.freeUsers || []).length;
//         const knownTotal  = (page - 1) * itemsPerPage + itemsOnPage;
//         setTotalCount(knownTotal);

//         if (itemsOnPage === itemsPerPage) {
//           // Full page → there might be more; show at least one more page button
//           setTotalPages(page + 1);
//         } else {
//           // Partial / empty page → this is the last page
//           setTotalPages(page);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch free users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // ── Fetch statistics using POST API ──────────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res = await fetch(DETAILS_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.freeUsers) {
//         setFreeStats({
//           total:     json.data.freeUsers.total,
//           thisMonth: json.data.freeUsers.thisMonth,
//           thisWeek:  json.data.freeUsers.thisWeek,
//           revenue:   json.data.freeUsers.revenue,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     }
//   }, []);

//   // ── On mount: read from location.state (first visit) or sessionStorage (refresh) ──
//   useEffect(() => {
//     const state = location.state || {};
//     const SESSION_KEY = "referralMarketingUser";

//     let userId, userName, userAvatar;

//     if (state.selectedUserId) {
//       // Fresh navigation — read from router state and persist to sessionStorage
//       userId     = state.selectedUserId;
//       userName   = state.selectedUserName   ?? "";
//       userAvatar = state.selectedUserAvatar ?? "";

//       sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId, userName, userAvatar }));

//       // Clear router state so future refreshes fall through to sessionStorage
//       window.history.replaceState({}, document.title);
//     } else {
//       // Page was refreshed — restore from sessionStorage
//       try {
//         const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "{}");
//         userId     = saved.userId     ?? null;
//         userName   = saved.userName   ?? "";
//         userAvatar = saved.userAvatar ?? "";
//       } catch {
//         userId = null; userName = ""; userAvatar = "";
//       }
//     }

//     if (userId)     setSelectedUserId(parseInt(userId));
//     if (userName)   setSelectedUserName(userName);
//     if (userAvatar) setStoredAvatar(userAvatar);
//   }, []);

//   // ── Fetch data when selectedUserId is set ────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, 1);
//       fetchStatistics(selectedUserId);
//     }
//   }, [selectedUserId]);

//   // ── Re-fetch when page changes ────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, currentPage);
//     }
//   }, [currentPage]);

//   // ── Reset page on search ──────────────────────────────────────────────────
//   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

//   // ── Filter current page data by search term ───────────────────────────────
//   const filteredData = freeUsers.filter((row) =>
//     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ── Pagination handlers ───────────────────────────────────────────────────
//   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

//   // ── Build visible page numbers ────────────────────────────────────────────
//   // Always show up to 4 buttons centred around the current page
//   const pageNumbers = [];
//   const startPage = Math.max(1, currentPage - 1);
//   const endPage   = Math.min(totalPages, startPage + 3);
//   for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

//   // ── Display values — driven entirely by API response ─────────────────────
//   const displayName    = referralUser?.name || selectedUserName || "User";
//   const apiImage       = referralUser?.imageUrl || referralUser?.image || null;
//   const displayAvatar  = apiImage ? resolveImageUrl(apiImage) : storedAvatar || resolveImageUrl(null);
//   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
//   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Shows ONLY the currently selected agent */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={displayAvatar}
//                   alt={displayName}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {displayName}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{freeStats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">{displayBalance}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={displayAvatar}
//               alt={displayName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {displayName}
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
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
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
//                   <span className="block whitespace-nowrap">Free Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
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
//                 <th className="p-2 text-center">Subscribed</th>
//                 <th className="p-2 text-center">Clearance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td>
//                 </tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName      = row.name || row.userName || "Unknown";
//                   const userAvatar    = resolveImageUrl(row.imageUrl || row.image || null);
//                   const installedDate = row.createdAt
//                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                     : "—";
//                   const installedTime = row.createdAt
//                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                     : "";
//                   return (
//                     <tr key={row.id || idx} className="border-b">
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
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center text-gray-500">No free users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, totalCount)} of {totalCount} entries
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
//             {pageNumbers.map((n) => (
//               <span
//                 key={n}
//                 onClick={() => handlePageClick(n)}
//                 className={`cursor-pointer ${
//                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {n}
//               </span>
//             ))}
//             {totalPages > endPage && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
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
//     </div>
//   );
// }




// /////



// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// };

// export default function ReferralMarketingUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [storedAvatar, setStoredAvatar] = useState("");

//   // ── API state ─────────────────────────────────────────────────────────────
//   const [referralUser, setReferralUser] = useState(null);
//   const [freeUsers, setFreeUsers] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);   // total entries across ALL pages
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

//   const itemsPerPage = 10;

//   // ── Fetch free users from API ─────────────────────────────────────────────
//   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`
//       );
//       const json = await res.json();
//       if (json.success) {
//         setReferralUser(json.referralUser || null);
//         setFreeUsers(json.freeUsers || []);

//         const itemsOnPage = (json.freeUsers || []).length;
//         const knownTotal  = (page - 1) * itemsPerPage + itemsOnPage;
//         setTotalCount(knownTotal);

//         if (itemsOnPage === itemsPerPage) {
//           setTotalPages(page + 1);
//         } else {
//           setTotalPages(page);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch free users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // ── Fetch statistics using POST API ──────────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res = await fetch(DETAILS_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.freeUsers) {
//         setFreeStats({
//           total:     json.data.freeUsers.total,
//           thisMonth: json.data.freeUsers.thisMonth,
//           thisWeek:  json.data.freeUsers.thisWeek,
//           revenue:   json.data.freeUsers.revenue,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     }
//   }, []);

//   // ── On mount: read from location.state (first visit) or sessionStorage (refresh) ──
//   useEffect(() => {
//     const state = location.state || {};
//     const SESSION_KEY = "referralMarketingUser";

//     let userId, userName, userAvatar;

//     if (state.selectedUserId) {
//       // Fresh navigation — read from router state and persist to sessionStorage
//       userId     = state.selectedUserId;
//       userName   = state.selectedUserName   ?? "";
//       userAvatar = state.selectedUserAvatar ?? "";

//       sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId, userName, userAvatar }));

//       // Clear router state so future refreshes fall through to sessionStorage
//       window.history.replaceState({}, document.title);
//     } else {
//       // Page was refreshed — restore from sessionStorage
//       try {
//         const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "{}");
//         userId     = saved.userId     ?? null;
//         userName   = saved.userName   ?? "";
//         userAvatar = saved.userAvatar ?? "";
//       } catch {
//         userId = null; userName = ""; userAvatar = "";
//       }
//     }

//     if (userId)     setSelectedUserId(parseInt(userId));
//     if (userName)   setSelectedUserName(userName);
//     if (userAvatar) setStoredAvatar(userAvatar);
//   }, []);

//   // ── Fetch data when selectedUserId is set ────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, 1);
//       fetchStatistics(selectedUserId);
//     }
//   }, [selectedUserId]);

//   // ── Re-fetch when page changes ────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, currentPage);
//     }
//   }, [currentPage]);

//   // ── Reset page on search ──────────────────────────────────────────────────
//   useEffect(() => { setCurrentPage(1); }, [searchTerm]);

//   // ── Filter current page data by search term ───────────────────────────────
//   const filteredData = freeUsers.filter((row) =>
//     (row.name || row.userName || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ── Pagination handlers ───────────────────────────────────────────────────
//   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

//   // ── Build visible page numbers ────────────────────────────────────────────
//   // Always show up to 4 buttons centred around the current page
//   const pageNumbers = [];
//   const startPage = Math.max(1, currentPage - 1);
//   const endPage   = Math.min(totalPages, startPage + 3);
//   for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

//   // ── Display values — driven entirely by API response ─────────────────────
//   const displayName    = referralUser?.name || selectedUserName || "User";
//   const apiImage       = referralUser?.imageUrl || referralUser?.image || null;
//   const displayAvatar  = apiImage ? resolveImageUrl(apiImage) : storedAvatar || resolveImageUrl(null);
//   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
//   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Shows ONLY the currently selected agent */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={displayAvatar}
//                   alt={displayName}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {displayName}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{freeStats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">{displayBalance}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={displayAvatar}
//               alt={displayName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {displayName}
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
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
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
//                   <span className="block whitespace-nowrap">Free Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
//                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table — columns match API response: name/image, createdAt, status */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                 <th className="px-4 py-3 text-left">
//                   <div className="ml-[5px]">Installed</div>
//                 </th>

//                 {/* <th className="p-2 text-start">Installed</th> */}
//                 <th className="p-2 text-center">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td>
//                 </tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName      = row.name || row.userName || "Unknown";
//                   const userAvatar    = resolveImageUrl(row.image || row.imageUrl || null);
//                   const installedDate = row.createdAt
//                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                     : "—";
//                   const installedTime = row.createdAt
//                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                     : "";
//                   return (
//                     <tr key={row.id || idx} className="border-b">
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
//                       {/* <td className="p-2 text-start"> */}


// <td className="px-4 py-3 text-start">
//                   <div className="-ml-[-150px]"></div>
//                 {/* </td> */}


//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           row.status === "Free"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}>
//                           {row.status || "—"}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="p-4 text-center text-gray-500">No free users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//           <p className="text-sm text-gray-600 ml-[-13px]">
//             Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
//             {Math.min(endIndex, totalCount)} of {totalCount} entries
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
//             {pageNumbers.map((n) => (
//               <span
//                 key={n}
//                 onClick={() => handlePageClick(n)}
//                 className={`cursor-pointer ${
//                   currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//                 }`}
//               >
//                 {n}
//               </span>
//             ))}
//             {totalPages > endPage && (
//               <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
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
//     </div>
//   );
// }



////


// import React, { useState, useEffect, useCallback } from "react";
// import Sidebar from "./Sidebar.jsx";
// import Groups from "../assets/Groups.png";
// import BackArrow from "../assets/BackArrow.png";
// import { Search } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
// const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

// const resolveImageUrl = (imageUrl) => {
//   if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
//   if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
//   return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
// };

// export default function ReferralMarketingUsers() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [searchTerm, setSearchTerm] = useState("");       // left panel search (unused/future)
//   const [tableSearch, setTableSearch] = useState("");     // table search only
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedUserName, setSelectedUserName] = useState("");
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [storedAvatar, setStoredAvatar] = useState("");

//   // ── API state ─────────────────────────────────────────────────────────────
//   const [referralUser, setReferralUser] = useState(null);
//   const [freeUsers, setFreeUsers] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);   // total entries across ALL pages
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // ── Stats state ───────────────────────────────────────────────────────────
//   const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

//   const itemsPerPage = 10;

//   // ── Fetch free users from API ─────────────────────────────────────────────
//   const fetchFreeUsers = useCallback(async (userId, page = 1) => {
//     if (!userId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${BASE_URL}/referral-users/${userId}/free-users?page=${page}&limit=${itemsPerPage}&id=${userId}`
//       );
//       const json = await res.json();
//       if (json.success) {
//         setReferralUser(json.referralUser || null);
//         setFreeUsers(json.freeUsers || []);

//         const itemsOnPage = (json.freeUsers || []).length;
//         const knownTotal  = (page - 1) * itemsPerPage + itemsOnPage;
//         setTotalCount(knownTotal);

//         if (itemsOnPage === itemsPerPage) {
//           setTotalPages(page + 1);
//         } else {
//           setTotalPages(page);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch free users:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // ── Fetch statistics using POST API ──────────────────────────────────────
//   const fetchStatistics = useCallback(async (userId) => {
//     if (!userId) return;
//     try {
//       const res = await fetch(DETAILS_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ uid: userId }),
//       });
//       const json = await res.json();
//       if (json.success && json.data?.freeUsers) {
//         setFreeStats({
//           total:     json.data.freeUsers.total,
//           thisMonth: json.data.freeUsers.thisMonth,
//           thisWeek:  json.data.freeUsers.thisWeek,
//           revenue:   json.data.freeUsers.revenue,
//         });
//       }
//     } catch (err) {
//       console.error("Failed to fetch statistics:", err);
//     }
//   }, []);

//   // ── On mount: read from location.state (first visit) or sessionStorage (refresh) ──
//   useEffect(() => {
//     const state = location.state || {};
//     const SESSION_KEY = "referralMarketingUser";

//     let userId, userName, userAvatar;

//     if (state.selectedUserId) {
//       // Fresh navigation — read from router state and persist to sessionStorage
//       userId     = state.selectedUserId;
//       userName   = state.selectedUserName   ?? "";
//       userAvatar = state.selectedUserAvatar ?? "";

//       sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId, userName, userAvatar }));

//       // Clear router state so future refreshes fall through to sessionStorage
//       window.history.replaceState({}, document.title);
//     } else {
//       // Page was refreshed — restore from sessionStorage
//       try {
//         const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "{}");
//         userId     = saved.userId     ?? null;
//         userName   = saved.userName   ?? "";
//         userAvatar = saved.userAvatar ?? "";
//       } catch {
//         userId = null; userName = ""; userAvatar = "";
//       }
//     }

//     if (userId)     setSelectedUserId(parseInt(userId));
//     if (userName)   setSelectedUserName(userName);
//     if (userAvatar) setStoredAvatar(userAvatar);
//   }, []);

//   // ── Fetch data when selectedUserId is set ────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, 1);
//       fetchStatistics(selectedUserId);
//     }
//   }, [selectedUserId]);

//   // ── Re-fetch when page changes ────────────────────────────────────────────
//   useEffect(() => {
//     if (selectedUserId) {
//       fetchFreeUsers(selectedUserId, currentPage);
//     }
//   }, [currentPage]);

//   // ── Reset page on search ──────────────────────────────────────────────────
//   useEffect(() => { setCurrentPage(1); }, [tableSearch]);

//   // ── Filter current page data by search term ───────────────────────────────
//   const filteredData = freeUsers.filter((row) =>
//     (row.name || row.userName || "").toLowerCase().includes(tableSearch.toLowerCase())
//   );

//   // ── Pagination handlers ───────────────────────────────────────────────────
//   const handlePrevPage  = () => { if (currentPage > 1)          setCurrentPage(currentPage - 1); };
//   const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
//   const handlePageClick = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

//   // ── Build visible page numbers ────────────────────────────────────────────
//   // Always show up to 4 buttons centred around the current page
//   const pageNumbers = [];
//   const startPage = Math.max(1, currentPage - 1);
//   const endPage   = Math.min(totalPages, startPage + 3);
//   for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

//   // ── Display values — driven entirely by API response ─────────────────────
//   const displayName    = referralUser?.name || selectedUserName || "User";
//   const apiImage       = referralUser?.imageUrl || referralUser?.image || null;
//   const displayAvatar  = apiImage ? resolveImageUrl(apiImage) : storedAvatar || resolveImageUrl(null);
//   const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
//   const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex   = startIndex + itemsPerPage;

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       <Sidebar isCurrentPageFreeAllUsers={false} />

//       {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
//       <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

//         {/* Shows ONLY the currently selected agent */}
//         <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
//           <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
//             <div className="flex items-center justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={displayAvatar}
//                   alt={displayName}
//                   onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//                   className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
//                 />
//                 <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">
//                   {displayName}
//                 </p>
//               </div>
//               <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
//             </div>
//             <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
//               <span className="text-gray-500">
//                 Users: <span className="text-[#055860]">{freeStats.total}</span>
//               </span>
//               <span className="text-gray-500">
//                 Balance: <span className="text-[#055860]">{displayBalance}</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
//       <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={displayAvatar}
//               alt={displayName}
//               onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
//               className="w-12 h-12 rounded-full object-cover mt-[-17px]"
//             />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
//               {displayName}
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
//                   <span className="block whitespace-nowrap">Free Users</span>
//                 </div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.total}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
//               </div>
//               <div className="bg-[#055860] text-white p-6 text-center">
//                 <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
//                 <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
//                 <div className="text-md opacity-90 mt-[14px]">This Week</div>
//               </div>
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
//                 <div className="text-md opacity-90 mt-[14px]">Revenue</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Table — columns match API response: name/image, createdAt, status */}
//         <div className="flex-1 overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-md text-sm">
//             <thead className="h-[45px] bg-[#055860] text-white">
//               <tr>
//                 <th className="px-4 py-3 text-start">
//                   <div className="ml-1">User</div>
//                 </th>
//                    <th className="px-4 py-3 text-left">
//                   <div className="ml-[5px]">Installed</div>
//                 </th>
//                 <th className="p-2 text-center">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td>
//                 </tr>
//               ) : filteredData.length > 0 ? (
//                 filteredData.map((row, idx) => {
//                   const userName      = row.name || row.userName || "Unknown";
//                   const userAvatar    = resolveImageUrl(row.image || row.imageUrl || null);
//                   const installedDate = row.createdAt
//                     ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//                     : "—";
//                   const installedTime = row.createdAt
//                     ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
//                     : "";
//                   return (
//                     <tr key={row.id || idx} className="border-b">
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
//                       {/* <td className="p-2 text-center"> */}


//  <td className="px-4 py-3 text-start">
//                    <div className="-ml-[-150px]"></div>

//                         {installedDate}<br />
//                         <span className="text-xs text-gray-400">{installedTime}</span>
//                       </td>
//                       <td className="p-2 text-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           row.status === "Free"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}>
//                           {row.status || "—"}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="p-4 text-center text-gray-500">No free users found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>


// {/* Pagination */}
// <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
//   <p className="text-sm text-gray-600 ml-[-13px]">
//     Showing {totalCount > 0 ? startIndex + 1 : 0} to{" "}
//     {Math.min(endIndex, totalCount)} of {totalCount} entries
//   </p>
//   <div className="flex items-center gap-2 mr-[-19px]">
//     <button
//       onClick={handlePrevPage}
//       disabled={currentPage === 1}
//       className={`w-6 h-6 flex items-center justify-center rounded-full ${
//         currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//       }`}
//     >
//       <span className="text-white text-[25px] leading-none mt-[-7px]">‹</span>
//     </button>

//     {/* Leading ellipsis */}
//     {startPage > 1 && (
//       <>
//         <span
//           onClick={() => handlePageClick(1)}
//           className="cursor-pointer text-gray-500 hover:text-[#691188]"
//         >
//           1
//         </span>
//         {startPage > 2 && (
//           <span className="text-gray-400 text-[20px] leading-none mt-[-4px]">···</span>
//         )}
//       </>
//     )}

//     {pageNumbers.map((n) => (
//       <span
//         key={n}
//         onClick={() => handlePageClick(n)}
//         className={`cursor-pointer ${
//           currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"
//         }`}
//       >
//         {n}
//       </span>
//     ))}

//     {/* Trailing ellipsis */}
//     {endPage < totalPages && (
//       <>
//         {endPage < totalPages - 1 && (
//           <span className="text-gray-400 text-[20px] leading-none mt-[-4px]">···</span>
//         )}
//         <span
//           onClick={() => handlePageClick(totalPages)}
//           className="cursor-pointer text-gray-500 hover:text-[#691188]"
//         >
//           {totalPages}
//         </span>
//       </>
//     )}

//     <button
//       onClick={handleNextPage}
//       disabled={currentPage === totalPages}
//       className={`w-6 h-6 flex items-center justify-center rounded-full ${
//         currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] cursor-pointer"
//       }`}
//     >
//       <span className="text-white text-[25px] leading-none mt-[-7px]">›</span>
//     </button>
//   </div>
// </div>



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

const BASE_URL = "https://apis.famocare.com/api/referralsystem/admin";
const DETAILS_URL = "https://apis.famocare.com/api/referralsystem/referrals/details/get";

const resolveImageUrl = (imageUrl) => {
  if (!imageUrl) return `https://ui-avatars.com/api/?name=User&background=055860&color=fff`;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  return `${BASE_URL.replace("/api/referralsystem/admin", "")}/uploads/${imageUrl}`;
};

const ITEMS_PER_PAGE = 10;

export default function ReferralMarketingUsers() {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm]             = useState(""); // left panel (future)
  const [tableSearch, setTableSearch]           = useState(""); // client-side filter
  const [currentPage, setCurrentPage]           = useState(1);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUserId, setSelectedUserId]     = useState(null);
  const [storedAvatar, setStoredAvatar]         = useState("");

  // ── API state ─────────────────────────────────────────────────────────────
  const [referralUser, setReferralUser] = useState(null);
  const [allUsers, setAllUsers]         = useState([]); // ALL users, fetched once
  const [loading, setLoading]           = useState(false);

  // ── Stats state ───────────────────────────────────────────────────────────
  const [freeStats, setFreeStats] = useState({ total: 0, thisMonth: 0, thisWeek: 0, revenue: 0 });

  // ── Fetch ALL users once (large limit) ───────────────────────────────────
  const fetchAllUsers = useCallback(async (userId) => {
    if (!userId) return;
    setLoading(true);
    try {
      const res  = await fetch(
        `${BASE_URL}/referral-users/${userId}/free-users?page=1&limit=10000&id=${userId}`
      );
      const json = await res.json();
      if (json.success) {
        setReferralUser(json.referralUser || null);
        setAllUsers(json.freeUsers || []);
      }
    } catch (err) {
      console.error("Failed to fetch free users:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Fetch statistics ──────────────────────────────────────────────────────
  const fetchStatistics = useCallback(async (userId) => {
    if (!userId) return;
    try {
      const res  = await fetch(DETAILS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: userId }),
      });
      const json = await res.json();
      if (json.success && json.data?.freeUsers) {
        setFreeStats({
          total:     json.data.freeUsers.total,
          thisMonth: json.data.freeUsers.thisMonth,
          thisWeek:  json.data.freeUsers.thisWeek,
          revenue:   json.data.freeUsers.revenue,
        });
      }
    } catch (err) {
      console.error("Failed to fetch statistics:", err);
    }
  }, []);

  // ── On mount: restore from router state or sessionStorage ────────────────
  useEffect(() => {
    const state       = location.state || {};
    const SESSION_KEY = "referralMarketingUser";
    let userId, userName, userAvatar;

    if (state.selectedUserId) {
      userId     = state.selectedUserId;
      userName   = state.selectedUserName   ?? "";
      userAvatar = state.selectedUserAvatar ?? "";
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId, userName, userAvatar }));
      window.history.replaceState({}, document.title);
    } else {
      try {
        const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "{}");
        userId      = saved.userId     ?? null;
        userName    = saved.userName   ?? "";
        userAvatar  = saved.userAvatar ?? "";
      } catch {
        userId = null; userName = ""; userAvatar = "";
      }
    }

    if (userId)     setSelectedUserId(parseInt(userId));
    if (userName)   setSelectedUserName(userName);
    if (userAvatar) setStoredAvatar(userAvatar);
  }, []);

  // ── Fetch once when user ID is ready ─────────────────────────────────────
  useEffect(() => {
    if (selectedUserId) {
      fetchAllUsers(selectedUserId);
      fetchStatistics(selectedUserId);
    }
  }, [selectedUserId]);

  // ── Client-side filter over ALL users ────────────────────────────────────
  const filteredUsers = allUsers.filter((row) =>
    (row.name || row.userName || "").toLowerCase().includes(tableSearch.toLowerCase())
  );

  // ── Reset to page 1 on every search change ────────────────────────────────
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSearch]);

  // ── Slice filtered list for current page ─────────────────────────────────
  const totalCount = filteredUsers.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex   = startIndex + ITEMS_PER_PAGE;
  const pageData   = filteredUsers.slice(startIndex, endIndex);

  // ── Pagination handlers ───────────────────────────────────────────────────
  const handlePrevPage  = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNextPage  = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const handlePageClick = (n) => setCurrentPage(n);

  // ── Visible page numbers ──────────────────────────────────────────────────
  const startPage   = Math.max(1, currentPage - 1);
  const endPage     = Math.min(totalPages, startPage + 3);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  // ── Display values ────────────────────────────────────────────────────────
  const displayName    = referralUser?.name || selectedUserName || "User";
  const apiImage       = referralUser?.imageUrl || referralUser?.image || null;
  const displayAvatar  = apiImage ? resolveImageUrl(apiImage) : storedAvatar || resolveImageUrl(null);
  const displayCountry = referralUser?.country && referralUser.country !== "N/A" ? referralUser.country : "USA";
  const displayBalance = `$${parseFloat(freeStats.revenue || 0).toFixed(0)}`;

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar isCurrentPageFreeAllUsers={false} />

      {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
      <div className="min-h-screen h-[969px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[40px] w-[273px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[240px] text-[#055860]" strokeWidth={2} />

        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          <div className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={displayAvatar}
                  alt={displayName}
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
                  className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                />
                <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{displayName}</p>
              </div>
              <span className="text-xs text-[#055860] mt-3">{displayCountry}</span>
            </div>
            <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
              <span className="text-gray-500">
                Users: <span className="text-[#055860]">{freeStats.total}</span>
              </span>
              <span className="text-gray-500">
                Balance: <span className="text-[#055860]">{displayBalance}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
      <div className="flex-1 min-h-screen w-full max-w-[3700px] p-6 border rounded-md mt-2 bg-white mb-5 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={displayAvatar}
              alt={displayName}
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=055860&color=fff`; }}
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{displayName}</h2>
          </div>
          <div className="relative w-full max-w-sm">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
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
                  <span className="block whitespace-nowrap">Free Users</span>
                </div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">{freeStats.total}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">{freeStats.thisMonth}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">{freeStats.thisWeek}</div>
                <div className="text-md opacity-90 mt-[14px]">This Week</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">{displayBalance}</div>
                <div className="text-md opacity-90 mt-[14px]">Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
         {/* <table className="w-full border border-gray-200 rounded-md text-sm"> */}
            {/* <thead className="h-[45px] bg-[#055860] text-white"> */}
              {/* <tr> */}
                {/* <th className="px-4 py-3 text-start"><div className="ml-1">User</div></th> */}
                {/* <th className="px-4 py-3 text-left"><div className="ml-[2px]">Installed</div></th> */}
                {/* <th className="p-2 text-center">Status</th> */}
              {/* </tr> */}
            {/* </thead> */}

<table className="w-full border border-gray-200 rounded-md text-sm table-fixed">
  <colgroup>
    <col className="w-[40%]" />
    <col className="w-[35%]" />
    <col className="w-[25%]" />
  </colgroup>
  <thead className="h-[45px] bg-[#055860] text-white">
    <tr>
     
<th className="px-4 py-3 text-left w-[40%]">
  <span className="ml-2">User</span>
</th>
<th className="px-4 py-3 text-left w-[35%]">
  <span className="ml-2">Installed</span>
</th>
<th className="px-4 py-3 text-center w-[25%]">Status</th>

    </tr>
  </thead>


            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">Loading...</td>
                </tr>
              ) : pageData.length > 0 ? (
                pageData.map((row, idx) => {
                  const userName      = row.name || row.userName || "Unknown";
                  const userAvatar    = resolveImageUrl(row.image || row.imageUrl || null);
                  const installedDate = row.createdAt
                    ? new Date(row.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
                    : "—";
                  const installedTime = row.createdAt
                    ? new Date(row.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                    : "";
                  return (
                    <tr key={row.id || idx} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={userAvatar}
                            alt="User"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=055860&color=fff`; }}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {userName}
                        </div>
                      </td>

 <td className="px-4 py-3 text-start">
                   <div className="-ml-[-150px]"></div>

                        {installedDate}<br />
                        <span className="text-xs text-gray-400 text-start ml-4">{installedTime}</span>
                      </td>
                      <td className="p-2 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === "Free" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}>
                          {row.status || "—"}
                        </span>
                      </td> 



                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    {tableSearch ? `No results for "${tableSearch}"` : "No free users found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
          <p className="text-sm text-gray-600 ml-[-13px]">
            Showing {totalCount > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, totalCount)} of {totalCount} entries
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

            {startPage > 1 && (
              <>
                <span onClick={() => handlePageClick(1)} className="cursor-pointer text-gray-500 hover:text-[#691188]">1</span>
                {startPage > 2 && <span className="text-gray-400 text-[20px] leading-none mt-[-4px]">···</span>}
              </>
            )}

            {pageNumbers.map((n) => (
              <span
                key={n}
                onClick={() => handlePageClick(n)}
                className={`cursor-pointer ${currentPage === n ? "text-[#691188] font-semibold" : "text-gray-500"}`}
              >
                {n}
              </span>
            ))}

            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && <span className="text-gray-400 text-[20px] leading-none mt-[-4px]">···</span>}
                <span onClick={() => handlePageClick(totalPages)} className="cursor-pointer text-gray-500 hover:text-[#691188]">{totalPages}</span>
              </>
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