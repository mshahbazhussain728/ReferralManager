
// // // // import React, { useState, useEffect } from "react";
// // // // import Groups from "../assets/Groups.png";
// // // // import Sidebar from "./Sidebar.jsx";
// // // // import { ChevronRight } from "lucide-react";
// // // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // // import { Search } from "lucide-react";

// // // // export default function FreeAllUsers() {
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [selectedUserName, setSelectedUserName] = useState("");

// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   // ── Referral Free Users actual tableData (source of truth) ──────────────
// // // //   const referralFreeUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$0",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",      balance: "$0", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// // // //     { name: "Aubrey",      balance: "$0", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// // // //     { name: "Sohan",       balance: "$0", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// // // //     { name: "Eduardo",     balance: "$0", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// // // //     { name: "Colleen",     balance: "$0", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// // // //     { name: "Shane",       balance: "$0", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Darrell",     balance: "$0", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Marvin",      balance: "$0", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// // // //     { name: "Jessica",     balance: "$0", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
// // // //     { name: "Marcus Brown",  balance: "$0",  tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0",  tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   // ── Monthly Trial Users actual tableData (source of truth) ───────────────
// // // //   const monthlyTrialUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// // // //     { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// // // //     { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// // // //     { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// // // //     { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// // // //     { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// // // //     { name: "Jessica",       balance: "$4100", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
// // // //     { name: "Marcus Brown",  balance: "$3200", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$4700", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   // ── Monthly Subscribed Users actual tableData (source of truth) ─────────
// // // //   const monthlySubscribedUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 10 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 20 2025" }, { date: "Feb 01 2025" },
// // // //         { date: "Feb 03 2025" }, { date: "Feb 07 2025" }, { date: "Feb 10 2025" },
// // // //         { date: "Feb 13 2025" }, { date: "Feb 14 2025" }, { date: "Feb 15 2025" },
// // // //         { date: "Feb 16 2025" }, { date: "Feb 17 2025" }, { date: "Feb 18 2025" },
// // // //         { date: "Feb 19 2025" }, { date: "Feb 19 2025" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jan 05 2025" }, { date: "Jan 20 2025" }, { date: "Feb 05 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
// // // //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jan 10 2025" }, { date: "Feb 10 2025" }, { date: "Feb 15 2025" }, { date: "Feb 18 2025" }] },
// // // //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jan 12 2025" }, { date: "Feb 14 2025" }, { date: "Feb 17 2025" }] },
// // // //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jan 08 2025" }, { date: "Feb 04 2025" }, { date: "Feb 13 2025" }, { date: "Feb 19 2025" }] },
// // // //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jan 11 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }] },
// // // //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jan 13 2025" }, { date: "Feb 13 2025" }, { date: "Feb 17 2025" }, { date: "Feb 19 2025" }] },
// // // //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jan 09 2025" }, { date: "Feb 14 2025" }, { date: "Feb 18 2025" }] },
// // // //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jan 07 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
// // // //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Jan 06 2025" }, { date: "Feb 05 2025" }, { date: "Feb 15 2025" }, { date: "Feb 19 2025" }] },
// // // //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   const computeStats = (userData, monthKey = "Jan", year = "2025", weekDates = [
// // // //     "Jan 14 2025", "Jan 15 2025", "Jan 16 2025", "Jan 17 2025",
// // // //     "Jan 18 2025", "Jan 19 2025", "Jan 20 2025",
// // // //   ]) => {
// // // //     const tableData = userData?.tableData || [];
// // // //     const totalUsers = tableData.length;
// // // //     const thisMonthUsers = tableData.filter(
// // // //       (u) => u.date.includes(monthKey) && u.date.includes(year)
// // // //     ).length;
// // // //     const thisWeekUsers = tableData.filter((u) => weekDates.includes(u.date)).length;
// // // //     const revenue = userData?.balance || "$0";
// // // //     return { totalUsers, thisMonthUsers, thisWeekUsers, revenue };
// // // //   };

// // // //   // ── Monthly Cancelled Users actual tableData (source of truth) ──────────
// // // //   const monthlyCancelledUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// // // //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// // // //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// // // //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// // // //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// // // //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// // // //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
// // // //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   const users = [
// // // //     { id: 1,  name: "Courtney Smith", earning: 5000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
// // // //     { id: 2,  name: "Arlene",         earning: 4000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
// // // //     { id: 3,  name: "Aubrey",         earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
// // // //     { id: 4,  name: "Sohan",          earning: 2000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
// // // //     { id: 5,  name: "Eduardo",        earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
// // // //     { id: 6,  name: "Colleen",        earning: 3500, country: "USA", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
// // // //     { id: 7,  name: "Shane",          earning: 4200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
// // // //     { id: 8,  name: "Darrell",        earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
// // // //     { id: 9,  name: "Marvin",         earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
// // // //     { id: 10, name: "Jessica",        earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
// // // //     { id: 11, name: "Marcus Brown",   earning: 3200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
// // // //     { id: 12, name: "Jessica Davis",  earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
// // // //   ];

// // // //   const userStats = [
// // // //     [ // [0] Monthly Premium Users
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
// // // //       { totalUsers: 920,  thisMonth: 165, thisWeek: 16, revenue: "$3750" },
// // // //       { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" },
// // // //     ],
// // // //     [ // [1] Monthly Subscribed Users
// // // //       { totalUsers: 650, thisMonth: 130, thisWeek: 13, revenue: "$2000" },
// // // //       { totalUsers: 700, thisMonth: 140, thisWeek: 14, revenue: "$2100" },
// // // //       { totalUsers: 680, thisMonth: 135, thisWeek: 13, revenue: "$2050" },
// // // //       { totalUsers: 720, thisMonth: 145, thisWeek: 14, revenue: "$2150" },
// // // //       { totalUsers: 690, thisMonth: 138, thisWeek: 13, revenue: "$2080" },
// // // //       { totalUsers: 710, thisMonth: 142, thisWeek: 14, revenue: "$2120" },
// // // //       { totalUsers: 730, thisMonth: 146, thisWeek: 14, revenue: "$2180" },
// // // //       { totalUsers: 670, thisMonth: 134, thisWeek: 13, revenue: "$2020" },
// // // //       { totalUsers: 740, thisMonth: 148, thisWeek: 15, revenue: "$2200" },
// // // //       { totalUsers: 705, thisMonth: 141, thisWeek: 14, revenue: "$2110" },
// // // //       { totalUsers: 640, thisMonth: 128, thisWeek: 12, revenue: "$1950" },
// // // //       { totalUsers: 755, thisMonth: 150, thisWeek: 15, revenue: "$2250" },
// // // //     ],
// // // //     [ // [2] Monthly Cancelled Users
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
// // // //       { totalUsers: 980,  thisMonth: 176, thisWeek: 18, revenue: "$3850" },
// // // //       { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" },
// // // //     ],
// // // //     [ // [3] Yearly Premium Users
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
// // // //       { totalUsers: 920,  thisMonth: 164, thisWeek: 16, revenue: "$3200" },
// // // //       { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" },
// // // //     ],
// // // //     [ // [4] Yearly Trial Users
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
// // // //       { totalUsers: 960,  thisMonth: 172, thisWeek: 17, revenue: "$3750" },
// // // //       { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" },
// // // //     ],
// // // //     [ // [5] Yearly Subscribed Users
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
// // // //       { totalUsers: 990,  thisMonth: 178, thisWeek: 18, revenue: "$3950" },
// // // //       { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" },
// // // //     ],
// // // //     [ // [6] Yearly Cancelled Users
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
// // // //       { totalUsers: 970,  thisMonth: 170, thisWeek: 17, revenue: "$3400" },
// // // //       { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" },
// // // //     ],
// // // //   ];

// // // //   // ── Yearly Trial Users actual tableData (source of truth) ───────────────
// // // //   const yearlyTrialUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// // // //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// // // //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// // // //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// // // //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// // // //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// // // //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
// // // //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   // ── Yearly Subscribed Users actual tableData (source of truth) ───────────
// // // //   const yearlySubscribedUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
// // // //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
// // // //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
// // // //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
// // // //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
// // // //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
// // // //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   // ── Yearly Cancelled Users actual tableData (source of truth) ────────────
// // // //   const yearlyCancelledUsers = [
// // // //     {
// // // //       name: "Courtney Smith", balance: "$5000",
// // // //       tableData: [
// // // //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// // // //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// // // //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// // // //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// // // //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// // // //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// // // //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// // // //       ],
// // // //     },
// // // //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
// // // //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
// // // //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
// // // //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// // // //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
// // // //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// // // //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
// // // //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
// // // //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// // // //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// // // //   ];

// // // //   const parseRevenue = (val) =>
// // // //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// // // //   const getLeftPanelStats = (userIndex) => {
// // // //     const freeStats      = computeStats(referralFreeUsers[userIndex]);
// // // //     const monthlyPremium = userStats[0][userIndex];
// // // //     const yearlyPremium  = userStats[3][userIndex];
// // // //     const totalUsers =
// // // //       freeStats.totalUsers              +
// // // //       (monthlyPremium?.totalUsers || 0) +
// // // //       (yearlyPremium?.totalUsers  || 0);
// // // //     const totalRevenue =
// // // //       parseRevenue(freeStats.revenue)       +
// // // //       parseRevenue(monthlyPremium?.revenue) +
// // // //       parseRevenue(yearlyPremium?.revenue);
// // // //     return { totalUsers, totalRevenue };
// // // //   };

// // // //   const displayUsers = users.map((user, userIndex) => {
// // // //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// // // //     return { ...user, userIndex, totalUsers, totalRevenue };
// // // //   });

// // // //   const filteredUsers = [...displayUsers]
// // // //     .sort((a, b) => b.earning - a.earning)
// // // //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// // // //   const THIS_PAGE = "/free-all-users";

// // // //   useEffect(() => {
// // // //     localStorage.setItem("currentSidebarPage", THIS_PAGE);
// // // //     if (location.state?.selectedUserName) {
// // // //       setSelectedUserName(location.state.selectedUserName);
// // // //       localStorage.setItem("selectedUserName", location.state.selectedUserName);
// // // //       window.history.replaceState({}, document.title);
// // // //     } else {
// // // //       const stored = localStorage.getItem("selectedUserName");
// // // //       if (stored && users.some((u) => u.name === stored)) {
// // // //         setSelectedUserName(stored);
// // // //       } else {
// // // //         setSelectedUserName(users[0].name);
// // // //         localStorage.setItem("selectedUserName", users[0].name);
// // // //       }
// // // //     }
// // // //   }, []);

// // // //   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
// // // //   const safeIndex = Math.max(0, selectedIndex);
// // // //   const currentUser = users[safeIndex] || users[0];

// // // //   const janWeekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"];
// // // //   const febWeekDates = ["Feb 13 2025","Feb 14 2025","Feb 15 2025","Feb 16 2025","Feb 17 2025","Feb 18 2025","Feb 19 2025"];
// // // //   const currentFreeStats           = computeStats(referralFreeUsers[safeIndex]);
// // // //   const currentTrialStats          = computeStats(monthlyTrialUsers[safeIndex]);
// // // //   const currentSubscribedStats     = computeStats(monthlySubscribedUsers[safeIndex], "Feb", "2025", febWeekDates);
// // // //   const currentCancelledStats      = computeStats(monthlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
// // // //   const currentYearlyTrialStats    = computeStats(yearlyTrialUsers[safeIndex], "Jan", "2025", janWeekDates);
// // // //   const currentYearlySubStats      = computeStats(yearlySubscribedUsers[safeIndex], "Jan", "2025", janWeekDates);
// // // //   const currentYearlyCancelStats   = computeStats(yearlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
// // // //   const currentStats = userStats.map((row) => row[safeIndex]);

// // // //   // ✅ Handler: navigate to Yearly Trial Users passing selected user name
// // // //   const handleYearlyTrialClick = (e) => {
// // // //     e.preventDefault();
// // // //     navigate("/premium-yearly-trial-users", {
// // // //       state: { selectedUserName: selectedUserName },
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// // // //       <Sidebar freeUsersCount={filteredUsers.length} isCurrentPageFreeAllUsers={true} />

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
// // // //                   onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }}
// // // //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}
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
// // // //           <Link to="/user-detail-points-history" className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// // // //             See Detail <ChevronRight size={24} />
// // // //           </Link>
// // // //         </div>

// // // //         <div className="w-[705px] space-y-0 ml-3">

// // // //           {/* Free Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// // // //                 <Link to="/refferal-free-users" className="text-md font-semibold">Free Users</Link>
// // // //               </div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.totalUsers}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.thisMonthUsers}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentFreeStats.thisWeekUsers}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">$0</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Monthly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Monthly Trial Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center">
// // // //                 <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// // // //                   <span className="block whitespace-nowrap">Monthly</span>
// // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // //                 </Link>
// // // //               </div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Monthly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Monthly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Yearly Premium Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// // // //             <div className="grid grid-cols-5 bg-[#055860] text-white">
// // // //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// // // //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* ✅ Yearly Trial Users — navigate with selectedUserName state */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// // // //                 <button
// // // //                   onClick={handleYearlyTrialClick}
// // // //                   className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"
// // // //                 >
// // // //                   <span className="block whitespace-nowrap">Yearly</span>
// // // //                   <span className="block whitespace-nowrap">Trial Users</span>
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Yearly Subscribed Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Yearly Cancelled Users */}
// // // //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// // // //             <div className="grid grid-cols-5">
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-yearly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// // // //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }







// // import React, { useState, useEffect } from "react";
// // import Groups from "../assets/Groups.png";
// // import Sidebar from "./Sidebar.jsx";
// // import { ChevronRight } from "lucide-react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { Search } from "lucide-react";

// // export default function FreeAllUsers() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedUserName, setSelectedUserName] = useState("");

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // ── Referral Free Users actual tableData (source of truth) ──────────────
// //   const referralFreeUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$0",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",      balance: "$0", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// //     { name: "Aubrey",      balance: "$0", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// //     { name: "Sohan",       balance: "$0", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// //     { name: "Eduardo",     balance: "$0", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// //     { name: "Colleen",     balance: "$0", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// //     { name: "Shane",       balance: "$0", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Darrell",     balance: "$0", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Marvin",      balance: "$0", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// //     { name: "Jessica",     balance: "$0", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
// //     { name: "Marcus Brown",  balance: "$0",  tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0",  tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   // ── Monthly Trial Users actual tableData (source of truth) ───────────────
// //   const monthlyTrialUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// //     { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// //     { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// //     { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// //     { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// //     { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// //     { name: "Jessica",       balance: "$4100", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
// //     { name: "Marcus Brown",  balance: "$3200", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$4700", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   // ── Monthly Subscribed Users actual tableData (source of truth) ─────────
// //   const monthlySubscribedUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 10 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 20 2025" }, { date: "Feb 01 2025" },
// //         { date: "Feb 03 2025" }, { date: "Feb 07 2025" }, { date: "Feb 10 2025" },
// //         { date: "Feb 13 2025" }, { date: "Feb 14 2025" }, { date: "Feb 15 2025" },
// //         { date: "Feb 16 2025" }, { date: "Feb 17 2025" }, { date: "Feb 18 2025" },
// //         { date: "Feb 19 2025" }, { date: "Feb 19 2025" },
// //       ],
// //     },
// //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jan 05 2025" }, { date: "Jan 20 2025" }, { date: "Feb 05 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
// //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jan 10 2025" }, { date: "Feb 10 2025" }, { date: "Feb 15 2025" }, { date: "Feb 18 2025" }] },
// //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jan 12 2025" }, { date: "Feb 14 2025" }, { date: "Feb 17 2025" }] },
// //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jan 08 2025" }, { date: "Feb 04 2025" }, { date: "Feb 13 2025" }, { date: "Feb 19 2025" }] },
// //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jan 11 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }] },
// //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jan 13 2025" }, { date: "Feb 13 2025" }, { date: "Feb 17 2025" }, { date: "Feb 19 2025" }] },
// //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jan 09 2025" }, { date: "Feb 14 2025" }, { date: "Feb 18 2025" }] },
// //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jan 07 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
// //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Jan 06 2025" }, { date: "Feb 05 2025" }, { date: "Feb 15 2025" }, { date: "Feb 19 2025" }] },
// //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   const computeStats = (userData, monthKey = "Jan", year = "2025", weekDates = [
// //     "Jan 14 2025", "Jan 15 2025", "Jan 16 2025", "Jan 17 2025",
// //     "Jan 18 2025", "Jan 19 2025", "Jan 20 2025",
// //   ]) => {
// //     const tableData = userData?.tableData || [];
// //     const totalUsers = tableData.length;
// //     const thisMonthUsers = tableData.filter(
// //       (u) => u.date.includes(monthKey) && u.date.includes(year)
// //     ).length;
// //     const thisWeekUsers = tableData.filter((u) => weekDates.includes(u.date)).length;
// //     const revenue = userData?.balance || "$0";
// //     return { totalUsers, thisMonthUsers, thisWeekUsers, revenue };
// //   };

// //   // ── Monthly Cancelled Users actual tableData (source of truth) ──────────
// //   const monthlyCancelledUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
// //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   const users = [
// //     { id: 1,  name: "Courtney Smith", earning: 5000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
// //     { id: 2,  name: "Arlene",         earning: 4000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
// //     { id: 3,  name: "Aubrey",         earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
// //     { id: 4,  name: "Sohan",          earning: 2000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
// //     { id: 5,  name: "Eduardo",        earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
// //     { id: 6,  name: "Colleen",        earning: 3500, country: "USA", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
// //     { id: 7,  name: "Shane",          earning: 4200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
// //     { id: 8,  name: "Darrell",        earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
// //     { id: 9,  name: "Marvin",         earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
// //     { id: 10, name: "Jessica",        earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
// //     { id: 11, name: "Marcus Brown",   earning: 3200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
// //     { id: 12, name: "Jessica Davis",  earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
// //   ];

// //   const userStats = [
// //     [ // [0] Monthly Premium Users
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
// //       { totalUsers: 920,  thisMonth: 165, thisWeek: 16, revenue: "$3750" },
// //       { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" },
// //     ],
// //     [ // [1] Monthly Subscribed Users
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
// //     [ // [2] Monthly Cancelled Users
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
// //       { totalUsers: 980,  thisMonth: 176, thisWeek: 18, revenue: "$3850" },
// //       { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" },
// //     ],
// //     [ // [3] Yearly Premium Users
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
// //       { totalUsers: 920,  thisMonth: 164, thisWeek: 16, revenue: "$3200" },
// //       { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" },
// //     ],
// //     [ // [4] Yearly Trial Users
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
// //       { totalUsers: 960,  thisMonth: 172, thisWeek: 17, revenue: "$3750" },
// //       { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" },
// //     ],
// //     [ // [5] Yearly Subscribed Users
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
// //       { totalUsers: 990,  thisMonth: 178, thisWeek: 18, revenue: "$3950" },
// //       { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" },
// //     ],
// //     [ // [6] Yearly Cancelled Users
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
// //       { totalUsers: 970,  thisMonth: 170, thisWeek: 17, revenue: "$3400" },
// //       { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" },
// //     ],
// //   ];

// //   // ── Yearly Trial Users actual tableData (source of truth) ───────────────
// //   const yearlyTrialUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
// //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
// //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
// //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
// //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
// //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
// //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
// //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   // ── Yearly Subscribed Users actual tableData (source of truth) ───────────
// //   const yearlySubscribedUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
// //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
// //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
// //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
// //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
// //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
// //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   // ── Yearly Cancelled Users actual tableData (source of truth) ────────────
// //   const yearlyCancelledUsers = [
// //     {
// //       name: "Courtney Smith", balance: "$5000",
// //       tableData: [
// //         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
// //         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
// //         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
// //         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
// //         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
// //         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
// //         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
// //       ],
// //     },
// //     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
// //     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
// //     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
// //     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
// //     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
// //     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
// //     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
// //     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
// //     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
// //     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
// //   ];

// //   const parseRevenue = (val) =>
// //     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

// //   const getLeftPanelStats = (userIndex) => {
// //     const freeStats      = computeStats(referralFreeUsers[userIndex]);
// //     const monthlyPremium = userStats[0][userIndex];
// //     const yearlyPremium  = userStats[3][userIndex];
// //     const totalUsers =
// //       freeStats.totalUsers              +
// //       (monthlyPremium?.totalUsers || 0) +
// //       (yearlyPremium?.totalUsers  || 0);
// //     const totalRevenue =
// //       parseRevenue(freeStats.revenue)       +
// //       parseRevenue(monthlyPremium?.revenue) +
// //       parseRevenue(yearlyPremium?.revenue);
// //     return { totalUsers, totalRevenue };
// //   };

// //   const displayUsers = users.map((user, userIndex) => {
// //     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
// //     return { ...user, userIndex, totalUsers, totalRevenue };
// //   });

// //   const filteredUsers = [...displayUsers]
// //     .sort((a, b) => b.earning - a.earning)
// //     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

// //   const THIS_PAGE = "/free-all-users";

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

// //   const janWeekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"];
// //   const febWeekDates = ["Feb 13 2025","Feb 14 2025","Feb 15 2025","Feb 16 2025","Feb 17 2025","Feb 18 2025","Feb 19 2025"];
// //   const currentFreeStats           = computeStats(referralFreeUsers[safeIndex]);
// //   const currentTrialStats          = computeStats(monthlyTrialUsers[safeIndex]);
// //   const currentSubscribedStats     = computeStats(monthlySubscribedUsers[safeIndex], "Feb", "2025", febWeekDates);
// //   const currentCancelledStats      = computeStats(monthlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
// //   const currentYearlyTrialStats    = computeStats(yearlyTrialUsers[safeIndex], "Jan", "2025", janWeekDates);
// //   const currentYearlySubStats      = computeStats(yearlySubscribedUsers[safeIndex], "Jan", "2025", janWeekDates);
// //   const currentYearlyCancelStats   = computeStats(yearlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
// //   const currentStats = userStats.map((row) => row[safeIndex]);

// //   // ✅ Handler: navigate to Yearly Trial Users passing selected user name
// //   const handleYearlyTrialClick = (e) => {
// //     e.preventDefault();
// //     navigate("/premium-yearly-trial-users", {
// //       state: { selectedUserName: selectedUserName },
// //     });
// //   };

// //   return (
// //     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
// //       <Sidebar freeUsersCount={filteredUsers.length} isCurrentPageFreeAllUsers={true} />

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
// //                   onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }}
// //                   className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}
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
// //           <Link to="/user-detail-points-history" className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
// //             See Detail <ChevronRight size={24} />
// //           </Link>
// //         </div>


// //         <div className="w-[705px] space-y-0 ml-3">

// //           {/* Free Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
// //                 <button onClick={() => navigate("/refferal-free-users", { state: { selectedUserName } })} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button>
// //               </div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.totalUsers}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.thisMonthUsers}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentFreeStats.thisWeekUsers}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">$0</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Monthly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Monthly Trial Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center">
// //                 <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
// //                   <span className="block whitespace-nowrap">Monthly</span>
// //                   <span className="block whitespace-nowrap">Trial Users</span>
// //                 </Link>
// //               </div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Monthly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Monthly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Yearly Premium Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden">
// //             <div className="grid grid-cols-5 bg-[#055860] text-white">
// //               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
// //               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* ✅ Yearly Trial Users — navigate with selectedUserName state */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
// //                 <button
// //                   onClick={handleYearlyTrialClick}
// //                   className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"
// //                 >
// //                   <span className="block whitespace-nowrap">Yearly</span>
// //                   <span className="block whitespace-nowrap">Trial Users</span>
// //                 </button>
// //               </div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Yearly Subscribed Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-subscribed-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></button></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //           {/* Yearly Cancelled Users */}
// //           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
// //             <div className="grid grid-cols-5">
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-cancelled-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></button></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
// //               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }






// import React, { useState, useEffect } from "react";
// import Groups from "../assets/Groups.png";
// import Sidebar from "./Sidebar.jsx";
// import { ChevronRight } from "lucide-react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Search } from "lucide-react";

// export default function FreeAllUsers() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedUserName, setSelectedUserName] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   // ── Referral Free Users actual tableData (source of truth) ──────────────
//   const referralFreeUsers = [
//     {
//       name: "Courtney Smith", balance: "$0",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",      balance: "$0", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
//     { name: "Aubrey",      balance: "$0", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
//     { name: "Sohan",       balance: "$0", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
//     { name: "Eduardo",     balance: "$0", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
//     { name: "Colleen",     balance: "$0", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
//     { name: "Shane",       balance: "$0", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Darrell",     balance: "$0", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Marvin",      balance: "$0", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
//     { name: "Jessica",     balance: "$0", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
//     { name: "Marcus Brown",  balance: "$0",  tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0",  tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   // ── Monthly Trial Users actual tableData (source of truth) ───────────────
//   const monthlyTrialUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
//     { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
//     { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
//     { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
//     { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
//     { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
//     { name: "Jessica",       balance: "$4100", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
//     { name: "Marcus Brown",  balance: "$3200", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$4700", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   // ── Monthly Subscribed Users actual tableData (source of truth) ─────────
//   const monthlySubscribedUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 10 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 20 2025" }, { date: "Feb 01 2025" },
//         { date: "Feb 03 2025" }, { date: "Feb 07 2025" }, { date: "Feb 10 2025" },
//         { date: "Feb 13 2025" }, { date: "Feb 14 2025" }, { date: "Feb 15 2025" },
//         { date: "Feb 16 2025" }, { date: "Feb 17 2025" }, { date: "Feb 18 2025" },
//         { date: "Feb 19 2025" }, { date: "Feb 19 2025" },
//       ],
//     },
//     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jan 05 2025" }, { date: "Jan 20 2025" }, { date: "Feb 05 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
//     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jan 10 2025" }, { date: "Feb 10 2025" }, { date: "Feb 15 2025" }, { date: "Feb 18 2025" }] },
//     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jan 12 2025" }, { date: "Feb 14 2025" }, { date: "Feb 17 2025" }] },
//     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jan 08 2025" }, { date: "Feb 04 2025" }, { date: "Feb 13 2025" }, { date: "Feb 19 2025" }] },
//     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jan 11 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }] },
//     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jan 13 2025" }, { date: "Feb 13 2025" }, { date: "Feb 17 2025" }, { date: "Feb 19 2025" }] },
//     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jan 09 2025" }, { date: "Feb 14 2025" }, { date: "Feb 18 2025" }] },
//     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jan 07 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
//     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Jan 06 2025" }, { date: "Feb 05 2025" }, { date: "Feb 15 2025" }, { date: "Feb 19 2025" }] },
//     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   const computeStats = (userData, monthKey = "Jan", year = "2025", weekDates = [
//     "Jan 14 2025", "Jan 15 2025", "Jan 16 2025", "Jan 17 2025",
//     "Jan 18 2025", "Jan 19 2025", "Jan 20 2025",
//   ]) => {
//     const tableData = userData?.tableData || [];
//     const totalUsers = tableData.length;
//     const thisMonthUsers = tableData.filter(
//       (u) => u.date.includes(monthKey) && u.date.includes(year)
//     ).length;
//     const thisWeekUsers = tableData.filter((u) => weekDates.includes(u.date)).length;
//     const revenue = userData?.balance || "$0";
//     return { totalUsers, thisMonthUsers, thisWeekUsers, revenue };
//   };

//   // ── Monthly Cancelled Users actual tableData (source of truth) ──────────
//   const monthlyCancelledUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
//     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
//     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
//     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
//     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
//     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
//     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
//     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   const users = [
//     { id: 1,  name: "Courtney Smith", earning: 5000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
//     { id: 2,  name: "Arlene",         earning: 4000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
//     { id: 3,  name: "Aubrey",         earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
//     { id: 4,  name: "Sohan",          earning: 2000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
//     { id: 5,  name: "Eduardo",        earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
//     { id: 6,  name: "Colleen",        earning: 3500, country: "USA", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
//     { id: 7,  name: "Shane",          earning: 4200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
//     { id: 8,  name: "Darrell",        earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
//     { id: 9,  name: "Marvin",         earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
//     { id: 10, name: "Jessica",        earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
//     { id: 11, name: "Marcus Brown",   earning: 3200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
//     { id: 12, name: "Jessica Davis",  earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
//     { id: 13, name: "Test User", earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/20.jpg" }, // ← add this

//   ];

//   const userStats = [
//     [ // [0] Monthly Premium Users
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
//       { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" },
//       { totalUsers: 920,  thisMonth: 165, thisWeek: 16, revenue: "$3750" },
//       { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" },
//     ],
//     [ // [1] Monthly Subscribed Users
//       { totalUsers: 650, thisMonth: 130, thisWeek: 13, revenue: "$2000" },
//       { totalUsers: 700, thisMonth: 140, thisWeek: 14, revenue: "$2100" },
//       { totalUsers: 680, thisMonth: 135, thisWeek: 13, revenue: "$2050" },
//       { totalUsers: 720, thisMonth: 145, thisWeek: 14, revenue: "$2150" },
//       { totalUsers: 690, thisMonth: 138, thisWeek: 13, revenue: "$2080" },
//       { totalUsers: 710, thisMonth: 142, thisWeek: 14, revenue: "$2120" },
//       { totalUsers: 730, thisMonth: 146, thisWeek: 14, revenue: "$2180" },
//       { totalUsers: 670, thisMonth: 134, thisWeek: 13, revenue: "$2020" },
//       { totalUsers: 740, thisMonth: 148, thisWeek: 15, revenue: "$2200" },
//       { totalUsers: 705, thisMonth: 141, thisWeek: 14, revenue: "$2110" },
//       { totalUsers: 640, thisMonth: 128, thisWeek: 12, revenue: "$1950" },
//       { totalUsers: 755, thisMonth: 150, thisWeek: 15, revenue: "$2250" },
//     ],
//     [ // [2] Monthly Cancelled Users
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
//       { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" },
//       { totalUsers: 980,  thisMonth: 176, thisWeek: 18, revenue: "$3850" },
//       { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" },
//     ],
//     [ // [3] Yearly Premium Users
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" },
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" },
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3400" },
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" },
//       { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" },
//       { totalUsers: 920,  thisMonth: 164, thisWeek: 16, revenue: "$3200" },
//       { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" },
//     ],
//     [ // [4] Yearly Trial Users
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" },
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" },
//       { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" },
//       { totalUsers: 960,  thisMonth: 172, thisWeek: 17, revenue: "$3750" },
//       { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" },
//     ],
//     [ // [5] Yearly Subscribed Users
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" },
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$4000" },
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" },
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" },
//       { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" },
//       { totalUsers: 990,  thisMonth: 178, thisWeek: 18, revenue: "$3950" },
//       { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" },
//     ],
//     [ // [6] Yearly Cancelled Users
//       { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" },
//       { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" },
//       { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" },
//       { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" },
//       { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" },
//       { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" },
//       { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" },
//       { totalUsers: 950,  thisMonth: 180, thisWeek: 18, revenue: "$3600" },
//       { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" },
//       { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" },
//       { totalUsers: 970,  thisMonth: 170, thisWeek: 17, revenue: "$3400" },
//       { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" },
//     ],
//   ];

//   // ── Yearly Trial Users actual tableData (source of truth) ───────────────
//   const yearlyTrialUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
//     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
//     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
//     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
//     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
//     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
//     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
//     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   // ── Yearly Subscribed Users actual tableData (source of truth) ───────────
//   const yearlySubscribedUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
//     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
//     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
//     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
//     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
//     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
//     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   // ── Yearly Cancelled Users actual tableData (source of truth) ────────────
//   const yearlyCancelledUsers = [
//     {
//       name: "Courtney Smith", balance: "$5000",
//       tableData: [
//         { date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" },
//         { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" },
//         { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" },
//         { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" },
//         { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" },
//         { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" },
//         { date: "Jun 02 2024" }, { date: "Jun 03 2024" },
//       ],
//     },
//     { name: "Arlene",   balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
//     { name: "Aubrey",   balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
//     { name: "Sohan",    balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
//     { name: "Eduardo",  balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
//     { name: "Colleen",  balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
//     { name: "Shane",    balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
//     { name: "Darrell",  balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
//     { name: "Marvin",   balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
//     { name: "Jessica",  balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//     { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
//     { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
//   ];

//   const parseRevenue = (val) =>
//     typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

//   const getLeftPanelStats = (userIndex) => {
//     const freeStats      = computeStats(referralFreeUsers[userIndex]);
//     const monthlyPremium = userStats[0][userIndex];
//     const yearlyPremium  = userStats[3][userIndex];
//     const totalUsers =
//       freeStats.totalUsers              +
//       (monthlyPremium?.totalUsers || 0) +
//       (yearlyPremium?.totalUsers  || 0);
//     const totalRevenue =
//       parseRevenue(freeStats.revenue)       +
//       parseRevenue(monthlyPremium?.revenue) +
//       parseRevenue(yearlyPremium?.revenue);
//     return { totalUsers, totalRevenue };
//   };

//   const displayUsers = users.map((user, userIndex) => {
//     const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
//     return { ...user, userIndex, totalUsers, totalRevenue };
//   });

//   const filteredUsers = [...displayUsers]
//     .sort((a, b) => b.earning - a.earning)
//     .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   const THIS_PAGE = "/free-all-users";

//   useEffect(() => {
//     localStorage.setItem("currentSidebarPage", THIS_PAGE);
//     if (location.state?.selectedUserName) {
//       setSelectedUserName(location.state.selectedUserName);
//       localStorage.setItem("selectedUserName", location.state.selectedUserName);
//       window.history.replaceState({}, document.title);
//     } else {
//       const stored = localStorage.getItem("selectedUserName");
//       if (stored && users.some((u) => u.name === stored)) {
//         setSelectedUserName(stored);
//       } else {
//         setSelectedUserName(users[0].name);
//         localStorage.setItem("selectedUserName", users[0].name);
//       }
//     }
//   }, []);

//   const selectedIndex = users.findIndex((u) => u.name === selectedUserName);
//   const safeIndex = Math.max(0, selectedIndex);
//   const currentUser = users[safeIndex] || users[0];

//   const janWeekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"];
//   const febWeekDates = ["Feb 13 2025","Feb 14 2025","Feb 15 2025","Feb 16 2025","Feb 17 2025","Feb 18 2025","Feb 19 2025"];
//   const currentFreeStats           = computeStats(referralFreeUsers[safeIndex]);
//   const currentTrialStats          = computeStats(monthlyTrialUsers[safeIndex]);
//   const currentSubscribedStats     = computeStats(monthlySubscribedUsers[safeIndex], "Feb", "2025", febWeekDates);
//   const currentCancelledStats      = computeStats(monthlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
//   const currentYearlyTrialStats    = computeStats(yearlyTrialUsers[safeIndex], "Jan", "2025", janWeekDates);
//   const currentYearlySubStats      = computeStats(yearlySubscribedUsers[safeIndex], "Jan", "2025", janWeekDates);
//   const currentYearlyCancelStats   = computeStats(yearlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
//   const currentStats = userStats.map((row) => row[safeIndex]);

//   const handleYearlyTrialClick = (e) => {
//     e.preventDefault();
//     navigate("/premium-yearly-trial-users", {
//       state: { selectedUserName: selectedUserName },
//     });
//   };

//   return (
//     <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
//       {/* ✅ FIX: Pass users.length (total real count) — NOT filteredUsers.length
//           filteredUsers.length changes with search input and would cause incorrect sidebar count.
//           users.length always reflects the true number of users in the system. */}
//       <Sidebar freeUsersCount={users.length} isCurrentPageFreeAllUsers={true} />

//       {/* LEFT PANEL */}
//       <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
//         />
//         <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

//         <div className="absolute top-5 right-2">
//           <img className="h-6 w-6 cursor-pointer" src={Groups} alt="Groups Icon" onClick={() => setIsOpen(!isOpen)} />
//           {isOpen && (
//             <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Active Users</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Users</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Users</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Users</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Total Sales</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Monthly Sales</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Weekly Sales</button>
//               <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">Balance</button>
//             </div>
//           )}
//         </div>

// {/* <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px] max-h-[860px] pr-1"> */}
// <div className="flex-1 space-y-2 overflow-x-auto mt-[-15px] pr-1"
//   style={{ maxHeight: filteredUsers.length > 10 ? '800px' : 'none' }}
// >
//   {filteredUsers.length > 0 ? (
//     filteredUsers.map((user) => {
//       const isSelected = selectedUserName === user.name;
//       return (
//         <div
//           key={user.id}
//           onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }}
//           className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}
//         >
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center gap-2">
//               <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[10px] mr-[-5px]" />
//               <p className={`text-sm font-semibold mt-[-10px] ml-2 ${isSelected ? "text-[#055860]" : ""}`}>{user.name}</p>
//             </div>
//             <span className="text-xs text-[#055860] mt-3">{user.country}</span>
//           </div>
//           <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-20px]">
//             <span className="text-gray-500">Users: <span className="text-[#055860]">{user.totalUsers.toLocaleString()}</span></span>
//             <span className="text-gray-500">Balance: <span className="text-[#055860]">${user.totalRevenue.toLocaleString()}</span></span>
//           </div>
//         </div>
//       );
//     })
//   ) : (
//     <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
//   )}
// </div>
// </div>
//       {/* RIGHT PANEL */}
//       <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-4">
//             <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
//             <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
//           </div>
//           <Link to="/user-detail-points-history" className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
//             See Detail <ChevronRight size={24} />
//           </Link>
//         </div>

//         <div className="w-[705px] space-y-0 ml-3">

//           {/* Free Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
//                 <button onClick={() => navigate("/refferal-free-users", { state: { selectedUserName } })} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button>
//               </div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.totalUsers}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.thisMonthUsers}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentFreeStats.thisWeekUsers}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">$0</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Premium Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Trial Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center">
//                 <Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]">
//                   <span className="block whitespace-nowrap">Monthly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </Link>
//               </div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Subscribed Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Monthly Cancelled Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Premium Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden">
//             <div className="grid grid-cols-5 bg-[#055860] text-white">
//               <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
//               <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Trial Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center">
//                 <button
//                   onClick={handleYearlyTrialClick}
//                   className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"
//                 >
//                   <span className="block whitespace-nowrap">Yearly</span>
//                   <span className="block whitespace-nowrap">Trial Users</span>
//                 </button>
//               </div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Subscribed Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-subscribed-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></button></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//           {/* Yearly Cancelled Users */}
//           <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
//             <div className="grid grid-cols-5">
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-cancelled-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Cancelled Users</span></button></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
//               <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyCancelStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
//             </div>
//           </div>

//         </div>
//       </div>
// <style jsx>{`
//   .overflow-y-auto::-webkit-scrollbar {
//     width: 4px;
//   }
//   .overflow-y-auto::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 10px;
//   }
//   .overflow-y-auto::-webkit-scrollbar-thumb {
//     background: #055860;
//     border-radius: 10px;
//   }
//   .overflow-y-auto::-webkit-scrollbar-thumb:hover {
//     background: #044850;
//   }
// `}</style>
//     </div>
//   );
// }






import React, { useState, useEffect, useRef } from "react";
import Groups from "../assets/Groups.png";
import Sidebar from "./Sidebar.jsx";
import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function FreeAllUsers() {
  const [searchTerm, setSearchTerm]             = useState("");
  const [isOpen, setIsOpen]                     = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const listRef  = useRef(null);

  const referralFreeUsers = [
    { name: "Courtney Smith", balance: "$0", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
    { name: "Arlene",        balance: "$0", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",        balance: "$0", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",         balance: "$0", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",       balance: "$0", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",       balance: "$0", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",         balance: "$0", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",       balance: "$0", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",        balance: "$0", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",       balance: "$0", tableData: [{ date: "Jan 01 2025" }, { date: "Jan 19 2025" }] },
    { name: "Marcus Brown",  balance: "$0", tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0", tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const monthlyTrialUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
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

  const monthlySubscribedUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 10 2025" }, { date: "Jan 15 2025" }, { date: "Jan 20 2025" }, { date: "Feb 01 2025" }, { date: "Feb 03 2025" }, { date: "Feb 07 2025" }, { date: "Feb 10 2025" }, { date: "Feb 13 2025" }, { date: "Feb 14 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }, { date: "Feb 17 2025" }, { date: "Feb 18 2025" }, { date: "Feb 19 2025" }, { date: "Feb 19 2025" }] },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jan 05 2025" }, { date: "Jan 20 2025" }, { date: "Feb 05 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jan 10 2025" }, { date: "Feb 10 2025" }, { date: "Feb 15 2025" }, { date: "Feb 18 2025" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jan 12 2025" }, { date: "Feb 14 2025" }, { date: "Feb 17 2025" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jan 08 2025" }, { date: "Feb 04 2025" }, { date: "Feb 13 2025" }, { date: "Feb 19 2025" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jan 11 2025" }, { date: "Feb 15 2025" }, { date: "Feb 16 2025" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jan 13 2025" }, { date: "Feb 13 2025" }, { date: "Feb 17 2025" }, { date: "Feb 19 2025" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jan 09 2025" }, { date: "Feb 14 2025" }, { date: "Feb 18 2025" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jan 07 2025" }, { date: "Feb 13 2025" }, { date: "Feb 16 2025" }, { date: "Feb 19 2025" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Jan 06 2025" }, { date: "Feb 05 2025" }, { date: "Feb 15 2025" }, { date: "Feb 19 2025" }] },
    { name: "Marcus Brown",  balance: "$0",    tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",    tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const monthlyCancelledUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
    { name: "Marcus Brown",  balance: "$0",    tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",    tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const yearlyTrialUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }] },
    { name: "Marcus Brown",  balance: "$0",    tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",    tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const yearlySubscribedUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
    { name: "Marcus Brown",  balance: "$0",    tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",    tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const yearlyCancelledUsers = [
    { name: "Courtney Smith", balance: "$5000", tableData: [{ date: "May 15 2024" }, { date: "May 16 2024" }, { date: "Dec 17 2024" }, { date: "Dec 18 2024" }, { date: "Dec 19 2024" }, { date: "Jan 14 2025" }, { date: "Jan 15 2025" }, { date: "Jan 16 2025" }, { date: "May 23 2024" }, { date: "May 24 2024" }, { date: "May 25 2024" }, { date: "May 26 2024" }, { date: "May 27 2024" }, { date: "May 28 2024" }, { date: "May 29 2024" }, { date: "May 30 2024" }, { date: "May 31 2024" }, { date: "Jun 01 2024" }, { date: "Jun 02 2024" }, { date: "Jun 03 2024" }] },
    { name: "Arlene",        balance: "$4000", tableData: [{ date: "Jun 04 2024" }, { date: "Jun 05 2024" }, { date: "Jun 06 2024" }, { date: "Jun 07 2024" }, { date: "Jun 08 2024" }, { date: "Jun 09 2024" }, { date: "Jun 10 2024" }, { date: "Jun 11 2024" }] },
    { name: "Aubrey",        balance: "$3000", tableData: [{ date: "Jun 24 2024" }, { date: "Jun 25 2024" }, { date: "Jun 26 2024" }, { date: "Jun 27 2024" }, { date: "Jun 28 2024" }, { date: "Jun 29 2024" }] },
    { name: "Sohan",         balance: "$2000", tableData: [{ date: "Jul 01 2024" }, { date: "Jul 02 2024" }, { date: "Jul 03 2024" }] },
    { name: "Eduardo",       balance: "$4500", tableData: [{ date: "Jul 05 2024" }, { date: "Jul 06 2024" }, { date: "Jul 07 2024" }, { date: "Jul 08 2024" }, { date: "Jul 09 2024" }, { date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }] },
    { name: "Colleen",       balance: "$3500", tableData: [{ date: "Jul 10 2024" }, { date: "Jul 11 2024" }, { date: "Jul 12 2024" }, { date: "Jul 13 2024" }, { date: "Jul 14 2024" }, { date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }] },
    { name: "Shane",         balance: "$4200", tableData: [{ date: "Jul 15 2024" }, { date: "Jul 16 2024" }, { date: "Jul 17 2024" }, { date: "Jul 18 2024" }, { date: "Jul 19 2024" }, { date: "Jul 20 2024" }, { date: "Jul 21 2024" }] },
    { name: "Darrell",       balance: "$4800", tableData: [{ date: "Jul 20 2024" }, { date: "Jul 21 2024" }, { date: "Jul 22 2024" }, { date: "Jul 23 2024" }, { date: "Jul 24 2024" }, { date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }, { date: "Jul 29 2024" }, { date: "Jul 30 2024" }, { date: "Jul 31 2024" }, { date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }] },
    { name: "Marvin",        balance: "$3800", tableData: [{ date: "Jul 25 2024" }, { date: "Jul 26 2024" }, { date: "Jul 27 2024" }, { date: "Jul 28 2024" }] },
    { name: "Jessica",       balance: "$4100", tableData: [{ date: "Aug 01 2024" }, { date: "Aug 02 2024" }, { date: "Aug 03 2024" }, { date: "Aug 04 2024" }, { date: "Aug 05 2024" }, { date: "Aug 06 2024" }, { date: "Aug 07 2024" }, { date: "Aug 08 2024" }, { date: "Aug 09 2024" }, { date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
    { name: "Marcus Brown",  balance: "$0",    tableData: [{ date: "Aug 05 2024" }, { date: "Aug 06 2024" }] },
    { name: "Jessica Davis", balance: "$0",    tableData: [{ date: "Aug 10 2024" }, { date: "Aug 11 2024" }] },
  ];

  const computeStats = (userData, monthKey = "Jan", year = "2025", weekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"]) => {
    const tableData      = userData?.tableData || [];
    const totalUsers     = tableData.length;
    const thisMonthUsers = tableData.filter((u) => u.date.includes(monthKey) && u.date.includes(year)).length;
    const thisWeekUsers  = tableData.filter((u) => weekDates.includes(u.date)).length;
    const revenue        = userData?.balance || "$0";
    return { totalUsers, thisMonthUsers, thisWeekUsers, revenue };
  };

  // const users = [
  //   { id: 1,  name: "Courtney Smith", earning: 5000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/1.jpg"  },
  //   { id: 2,  name: "Arlene",         earning: 4000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/2.jpg"  },
  //   { id: 3,  name: "Aubrey",         earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/women/3.jpg"  },
  //   { id: 4,  name: "Sohan",          earning: 2000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/4.jpg"    },
  //   { id: 5,  name: "Eduardo",        earning: 4500, country: "USA", avatar: "https://randomuser.me/api/portraits/men/5.jpg"    },
  //   { id: 6,  name: "Colleen",        earning: 3500, country: "USA", avatar: "https://randomuser.me/api/portraits/women/6.jpg"  },
  //   { id: 7,  name: "Shane",          earning: 4200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/7.jpg"    },
  //   { id: 8,  name: "Darrell",        earning: 4800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/8.jpg"    },
  //   { id: 9,  name: "Marvin",         earning: 3800, country: "USA", avatar: "https://randomuser.me/api/portraits/men/9.jpg"    },
  //   { id: 10, name: "Jessica",        earning: 4100, country: "USA", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
  //   { id: 11, name: "Marcus Brown",   earning: 3200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/10.jpg"   },
  //   { id: 12, name: "Jessica Davis",  earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
  // ];



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
  { id: 12, name: "Jessica Davis",  earning: 4700, country: "USA", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
  { id: 13, name: "Test User",      earning: 3000, country: "USA", avatar: "https://randomuser.me/api/portraits/men/20.jpg" },

  // ✅ Newly Added
  { id: 14, name: "Anthony Miller", earning: 5200, country: "USA", avatar: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: 15, name: "Natalie Wilson", earning: 3600, country: "USA", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 16, name: "Kevin Anderson", earning: 4400, country: "USA", avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 17, name: "Samantha Lee",   earning: 3900, country: "USA", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
];












  const userStats = [
    [{ totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" }, { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" }, { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" }, { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" }, { totalUsers: 1070, thisMonth: 185, thisWeek: 20, revenue: "$4250" }, { totalUsers: 920, thisMonth: 165, thisWeek: 16, revenue: "$3750" }, { totalUsers: 1140, thisMonth: 205, thisWeek: 22, revenue: "$4600" }],
    [{ totalUsers: 650, thisMonth: 130, thisWeek: 13, revenue: "$2000" }, { totalUsers: 700, thisMonth: 140, thisWeek: 14, revenue: "$2100" }, { totalUsers: 680, thisMonth: 135, thisWeek: 13, revenue: "$2050" }, { totalUsers: 720, thisMonth: 145, thisWeek: 14, revenue: "$2150" }, { totalUsers: 690, thisMonth: 138, thisWeek: 13, revenue: "$2080" }, { totalUsers: 710, thisMonth: 142, thisWeek: 14, revenue: "$2120" }, { totalUsers: 730, thisMonth: 146, thisWeek: 14, revenue: "$2180" }, { totalUsers: 670, thisMonth: 134, thisWeek: 13, revenue: "$2020" }, { totalUsers: 740, thisMonth: 148, thisWeek: 15, revenue: "$2200" }, { totalUsers: 705, thisMonth: 141, thisWeek: 14, revenue: "$2110" }, { totalUsers: 640, thisMonth: 128, thisWeek: 12, revenue: "$1950" }, { totalUsers: 755, thisMonth: 150, thisWeek: 15, revenue: "$2250" }],
    [{ totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" }, { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" }, { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" }, { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" }, { totalUsers: 1090, thisMonth: 192, thisWeek: 20, revenue: "$4350" }, { totalUsers: 980, thisMonth: 176, thisWeek: 18, revenue: "$3850" }, { totalUsers: 1160, thisMonth: 208, thisWeek: 22, revenue: "$4650" }],
    [{ totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3500" }, { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$3800" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3300" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3700" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4000" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3600" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4200" }, { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$3400" }, { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$3900" }, { totalUsers: 1070, thisMonth: 188, thisWeek: 20, revenue: "$3650" }, { totalUsers: 920, thisMonth: 164, thisWeek: 16, revenue: "$3200" }, { totalUsers: 1140, thisMonth: 202, thisWeek: 21, revenue: "$3850" }],
    [{ totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4200" }, { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4500" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" }, { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" }, { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4300" }, { totalUsers: 1095, thisMonth: 198, thisWeek: 21, revenue: "$4150" }, { totalUsers: 960, thisMonth: 172, thisWeek: 17, revenue: "$3750" }, { totalUsers: 1170, thisMonth: 212, thisWeek: 23, revenue: "$4550" }],
    [{ totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4800" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3900" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$4400" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4700" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$4100" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4900" }, { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$4000" }, { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4500" }, { totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$4200" }, { totalUsers: 1115, thisMonth: 206, thisWeek: 22, revenue: "$4600" }, { totalUsers: 990, thisMonth: 178, thisWeek: 18, revenue: "$3950" }, { totalUsers: 1190, thisMonth: 218, thisWeek: 24, revenue: "$4850" }],
    [{ totalUsers: 1050, thisMonth: 195, thisWeek: 19, revenue: "$3800" }, { totalUsers: 1200, thisMonth: 200, thisWeek: 20, revenue: "$4100" }, { totalUsers: 1000, thisMonth: 175, thisWeek: 17, revenue: "$3500" }, { totalUsers: 1150, thisMonth: 205, thisWeek: 21, revenue: "$3900" }, { totalUsers: 1250, thisMonth: 215, thisWeek: 24, revenue: "$4200" }, { totalUsers: 1080, thisMonth: 190, thisWeek: 19, revenue: "$3700" }, { totalUsers: 1300, thisMonth: 220, thisWeek: 25, revenue: "$4400" }, { totalUsers: 950, thisMonth: 180, thisWeek: 18, revenue: "$3600" }, { totalUsers: 1100, thisMonth: 210, thisWeek: 22, revenue: "$4000" }, { totalUsers: 1085, thisMonth: 194, thisWeek: 20, revenue: "$3850" }, { totalUsers: 970, thisMonth: 170, thisWeek: 17, revenue: "$3400" }, { totalUsers: 1155, thisMonth: 209, thisWeek: 23, revenue: "$4050" }],
  ];

  const parseRevenue = (val) => typeof val === "string" ? parseInt(val.replace("$", "")) || 0 : val || 0;

  const getLeftPanelStats = (userIndex) => {
    const freeStats      = computeStats(referralFreeUsers[userIndex]);
    const monthlyPremium = userStats[0][userIndex];
    const yearlyPremium  = userStats[3][userIndex];
    const totalUsers   = freeStats.totalUsers + (monthlyPremium?.totalUsers || 0) + (yearlyPremium?.totalUsers || 0);
    const totalRevenue = parseRevenue(freeStats.revenue) + parseRevenue(monthlyPremium?.revenue) + parseRevenue(yearlyPremium?.revenue);
    return { totalUsers, totalRevenue };
  };

  const displayUsers = users.map((user, userIndex) => {
    const { totalUsers, totalRevenue } = getLeftPanelStats(userIndex);
    return { ...user, userIndex, totalUsers, totalRevenue };
  });

  const filteredUsers = [...displayUsers]
    .sort((a, b) => b.earning - a.earning)
    .filter((u) => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const THIS_PAGE = "/free-all-users";

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
  const safeIndex     = Math.max(0, selectedIndex);
  const currentUser   = users[safeIndex] || users[0];

  const janWeekDates = ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025","Jan 18 2025","Jan 19 2025","Jan 20 2025"];
  const febWeekDates = ["Feb 13 2025","Feb 14 2025","Feb 15 2025","Feb 16 2025","Feb 17 2025","Feb 18 2025","Feb 19 2025"];

  const currentFreeStats         = computeStats(referralFreeUsers[safeIndex]);
  const currentTrialStats        = computeStats(monthlyTrialUsers[safeIndex]);
  const currentSubscribedStats   = computeStats(monthlySubscribedUsers[safeIndex], "Feb", "2025", febWeekDates);
  const currentCancelledStats    = computeStats(monthlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlyTrialStats  = computeStats(yearlyTrialUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlySubStats    = computeStats(yearlySubscribedUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentYearlyCancelStats = computeStats(yearlyCancelledUsers[safeIndex], "Jan", "2025", janWeekDates);
  const currentStats             = userStats.map((row) => row[safeIndex]);

  const handleYearlyTrialClick = (e) => {
    e.preventDefault();
    navigate("/premium-yearly-trial-users", { state: { selectedUserName } });
  };

  const scrollUp   = () => listRef.current?.scrollBy({ top: -80, behavior: "smooth" });
  const scrollDown = () => listRef.current?.scrollBy({ top:  80, behavior: "smooth" });

  // ✅ KEY FIX: Pass full user data to PointsHistory
  const handleSeeDetail = () => {
    const displayUser = displayUsers.find((u) => u.name === currentUser.name) || displayUsers[0];
    navigate("/user-detail-points-history", {
      state: {
        selectedUserName:    currentUser.name,
        selectedUserAvatar:  currentUser.avatar,
        selectedUserEarning: currentUser.earning,
        selectedUserCountry: currentUser.country,
        selectedUserTotal:   displayUser.totalUsers,
        selectedUserBalance: displayUser.totalRevenue,
        fromPage:            THIS_PAGE,
      },
    });
  };

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar freeUsersCount={users.length} isCurrentPageFreeAllUsers={true} />

      {/* LEFT PANEL */}
      <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]" />
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

        {filteredUsers.length > 10 && (
          <button onClick={scrollUp} className="w-full flex items-center justify-center py-1 bg-[#f1f1f1] hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition rounded-t-md border border-gray-200">
            <ChevronUp size={16} className="text-[#055860]" strokeWidth={2.5} />
          </button>
        )}

        {/* ✅ FIXED: overflow-y-auto via inline style (was overflow-x-auto) */}
        <div
          ref={listRef}
          className="user-list flex-1 space-y-2 mt-[-15px] pr-1"
          style={{ maxHeight: filteredUsers.length > 10 ? "800px" : "none", overflowY: filteredUsers.length > 10 ? "scroll" : "visible", overflowX: "hidden" }}
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => {
              const isSelected = selectedUserName === user.name;
              return (
                <div key={user.id} onClick={() => { setSelectedUserName(user.name); localStorage.setItem("selectedUserName", user.name); }} className={`flex flex-col p-2 mt-3 rounded-md cursor-pointer transition-all ${isSelected ? "bg-[#E8F0F5] border-[#055860] border" : "hover:bg-[#F5F6FA]"}`}>
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

        {filteredUsers.length > 10 && (
          <button onClick={scrollDown} className="w-full flex items-center justify-center py-1 bg-[#f1f1f1] hover:bg-[#e0e0e0] active:bg-[#d0d0d0] transition rounded-b-md border border-gray-200">
            <ChevronDown size={16} className="text-[#055860]" strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={currentUser?.avatar} alt={currentUser?.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser?.name}</h2>
          </div>
          {/* ✅ KEY FIX: button instead of Link, passes full user data */}
          <button onClick={handleSeeDetail} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-transparent border-none">
            See Detail <ChevronRight size={24} />
          </button>
        </div>

        <div className="w-[705px] space-y-0 ml-3">
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-8px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300"><button onClick={() => navigate("/referral-marketing-users", { state: { selectedUserName } })} className="text-md font-semibold text-white bg-transparent border-none cursor-pointer">Free Users</button></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.totalUsers}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentFreeStats.thisMonthUsers}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentFreeStats.thisWeekUsers}</div><div className="text-md mt-1 opacity-90">This Week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">$0</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[170%] text-white"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[0]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[0]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-5 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-trial-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Trial Users</span></Link></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-subscribed-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Subscribed Users</span></Link></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentSubscribedStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><Link to="/premium-monthly-cancelled-users" className="text-md font-semibold leading-[170%] text-[#055860]"><span className="block whitespace-nowrap">Monthly</span><span className="block whitespace-nowrap">Cancelled Users</span></Link></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentCancelledStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-[#055860] text-white">
              <div className="bg-[#055860] p-4 text-center border-r border-white flex items-center justify-center"><div className="text-md font-semibold leading-[180%] text-white"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Premium Users</span></div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.totalUsers ?? 0}</div><div className="text-md mt-1 opacity-90">Total Users</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.thisMonth ?? 0}</div><div className="text-md mt-1 opacity-90">This Month</div></div>
              <div className="bg-[#055860] text-white p-4 text-center border-r border-gray-300"><div className="text-lg font-bold">{currentStats[3]?.thisWeek ?? 0}</div><div className="text-md mt-1 opacity-90">This week</div></div>
              <div className="bg-[#055860] text-white p-4 text-center"><div className="text-lg font-bold">{currentStats[3]?.revenue ?? "$0"}</div><div className="text-md mt-1 opacity-90">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={handleYearlyTrialClick} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Trial Users</span></button></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlyTrialStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden mt-[-15px]">
            <div className="grid grid-cols-5">
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-white flex items-center justify-center"><button onClick={() => navigate("/premium-yearly-subscribed-users", { state: { selectedUserName } })} className="text-md font-semibold leading-[170%] text-[#055860] bg-transparent border-none cursor-pointer"><span className="block whitespace-nowrap">Yearly</span><span className="block whitespace-nowrap">Subscribed Users</span></button></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.totalUsers}</div><div className="text-md mt-1 text-gray-500">Total Users</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisMonthUsers}</div><div className="text-md mt-1 text-gray-500">This Month</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center border-r border-gray-300"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.thisWeekUsers}</div><div className="text-md mt-1 text-gray-500">This week</div></div>
              <div className="bg-[#E0E0E0] p-4 text-center"><div className="text-lg font-bold text-[#055860]">{currentYearlySubStats.revenue}</div><div className="text-md mt-1 text-gray-500">Revenue</div></div>
            </div>
          </div>
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
        .user-list::-webkit-scrollbar { width: 4px; }
        .user-list::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .user-list::-webkit-scrollbar-thumb { background: #055860; border-radius: 10px; }
        .user-list::-webkit-scrollbar-thumb:hover { background: #044850; }
      `}</style>
    </div>
  );
}