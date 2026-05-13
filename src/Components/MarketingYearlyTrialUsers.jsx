

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Groups from "../assets/Groups.png";
import BackArrow from "../assets/BackArrow.png";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function YearlyTrialUsers() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [tableSearchTerm, setTableSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserName, setSelectedUserName] = useState("");
  const itemsPerPage = 10;

  const allLeftUsers = [
    {
      name: "Courtney Smith",
      balance: "$5000",
      country: "USA",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      earning: 5000,
      tableData: [
        { name: "Muhammad Junaid Khan", date: "May 15 2024", time: "11:35 PM", image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { name: "Sarah Johnson",        date: "May 16 2024", time: "10:20 AM", image: "https://randomuser.me/api/portraits/women/11.jpg" },
        { name: "Ahmed Ali",            date: "Dec 17 2024", time: "02:45 PM", image: "https://randomuser.me/api/portraits/men/12.jpg" },
        { name: "Emily Davis",          date: "Dec 18 2024", time: "09:15 AM", image: "https://randomuser.me/api/portraits/women/13.jpg" },
        { name: "Michael Brown",        date: "Dec 19 2024", time: "04:30 PM", image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { name: "Jessica Wilson",       date: "Jan 14 2025", time: "01:50 PM", image: "https://randomuser.me/api/portraits/women/15.jpg" },
        { name: "David Martinez",       date: "Jan 15 2025", time: "08:25 AM", image: "https://randomuser.me/api/portraits/men/16.jpg" },
        { name: "Lisa Anderson",        date: "Jan 16 2025", time: "03:40 PM", image: "https://randomuser.me/api/portraits/women/17.jpg" },
        { name: "James Taylor",         date: "May 23 2024", time: "12:15 PM", image: "https://randomuser.me/api/portraits/men/18.jpg" },
        { name: "Maria Garcia",         date: "May 24 2024", time: "05:55 PM", image: "https://randomuser.me/api/portraits/women/19.jpg" },
        { name: "Robert Thomas",        date: "May 25 2024", time: "07:30 AM", image: "https://randomuser.me/api/portraits/men/20.jpg" },
        { name: "Jennifer Moore",       date: "May 26 2024", time: "11:45 AM", image: "https://randomuser.me/api/portraits/women/21.jpg" },
        { name: "William Clark",        date: "May 27 2024", time: "09:30 AM", image: "https://randomuser.me/api/portraits/men/21.jpg" },
        { name: "Patricia Lewis",       date: "May 28 2024", time: "02:15 PM", image: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Richard Walker",       date: "May 29 2024", time: "10:45 AM", image: "https://randomuser.me/api/portraits/men/22.jpg" },
        { name: "Linda Hall",           date: "May 30 2024", time: "04:20 PM", image: "https://randomuser.me/api/portraits/women/23.jpg" },
        { name: "Charles Allen",        date: "May 31 2024", time: "08:50 AM", image: "https://randomuser.me/api/portraits/men/23.jpg" },
        { name: "Barbara Young",        date: "Jun 01 2024", time: "01:35 PM", image: "https://randomuser.me/api/portraits/women/24.jpg" },
        { name: "Joseph King",          date: "Jun 02 2024", time: "11:10 AM", image: "https://randomuser.me/api/portraits/men/24.jpg" },
        { name: "Susan Wright",         date: "Jun 03 2024", time: "03:25 PM", image: "https://randomuser.me/api/portraits/women/25.jpg" },
      ]
    },
    {
      name: "Arlene", balance: "$4000", country: "USA",
      image: "https://randomuser.me/api/portraits/women/2.jpg", earning: 4000,
      tableData: [
        { name: "Thomas Scott",   date: "Jun 04 2024", time: "09:40 AM", image: "https://randomuser.me/api/portraits/men/25.jpg" },
        { name: "Nancy Green",    date: "Jun 05 2024", time: "02:55 PM", image: "https://randomuser.me/api/portraits/women/26.jpg" },
        { name: "Daniel Adams",   date: "Jun 06 2024", time: "10:05 AM", image: "https://randomuser.me/api/portraits/men/26.jpg" },
        { name: "Betty Baker",    date: "Jun 07 2024", time: "04:40 PM", image: "https://randomuser.me/api/portraits/women/27.jpg" },
        { name: "Matthew Nelson", date: "Jun 08 2024", time: "08:15 AM", image: "https://randomuser.me/api/portraits/men/27.jpg" },
      ]
    },
    {
      name: "Aubrey", balance: "$3000", country: "USA",
      image: "https://randomuser.me/api/portraits/women/3.jpg", earning: 3000,
      tableData: [
        { name: "Eric Reed",  date: "Jun 24 2024", time: "10:25 AM", image: "https://randomuser.me/api/portraits/men/35.jpg" },
        { name: "Donna Cook", date: "Jun 25 2024", time: "04:50 PM", image: "https://randomuser.me/api/portraits/women/36.jpg" },
      ]
    },
    {
      name: "Sohan", balance: "$2000", country: "USA",
      image: "https://randomuser.me/api/portraits/men/4.jpg", earning: 2000,
      tableData: [
        { name: "Frank Morgan", date: "Jul 01 2024", time: "07:35 AM", image: "https://randomuser.me/api/portraits/men/36.jpg" },
        { name: "Gloria Bell",  date: "Jul 02 2024", time: "01:55 PM", image: "https://randomuser.me/api/portraits/women/37.jpg" },
      ]
    },
    {
      name: "Eduardo", balance: "$4500", country: "USA",
      image: "https://randomuser.me/api/portraits/men/5.jpg", earning: 4500,
      tableData: [
        { name: "Henry Murphy", date: "Jul 05 2024", time: "09:30 AM", image: "https://randomuser.me/api/portraits/men/37.jpg" },
        { name: "Irene Bailey", date: "Jul 06 2024", time: "03:10 PM", image: "https://randomuser.me/api/portraits/women/38.jpg" },
      ]
    },
    {
      name: "Colleen", balance: "$3500", country: "USA",
      image: "https://randomuser.me/api/portraits/women/6.jpg", earning: 3500,
      tableData: [
        { name: "Jack Rivera",     date: "Jul 10 2024", time: "11:40 AM", image: "https://randomuser.me/api/portraits/men/38.jpg" },
        { name: "Kathleen Cooper", date: "Jul 11 2024", time: "02:25 PM", image: "https://randomuser.me/api/portraits/women/39.jpg" },
      ]
    },
    {
      name: "Shane", balance: "$4200", country: "USA",
      image: "https://randomuser.me/api/portraits/men/7.jpg", earning: 4200,
      tableData: [
        { name: "Leonard Richardson", date: "Jul 15 2024", time: "08:05 AM", image: "https://randomuser.me/api/portraits/men/39.jpg" },
        { name: "Martha Cox",         date: "Jul 16 2024", time: "12:50 PM", image: "https://randomuser.me/api/portraits/women/40.jpg" },
      ]
    },
    {
      name: "Darrell", balance: "$4800", country: "USA",
      image: "https://randomuser.me/api/portraits/men/8.jpg", earning: 4800,
      tableData: [
        { name: "Nathan Howard", date: "Jul 20 2024", time: "05:20 PM", image: "https://randomuser.me/api/portraits/men/40.jpg" },
        { name: "Olivia Ward",   date: "Jul 21 2024", time: "10:15 AM", image: "https://randomuser.me/api/portraits/women/41.jpg" },
      ]
    },
    {
      name: "Marvin", balance: "$3800", country: "USA",
      image: "https://randomuser.me/api/portraits/men/9.jpg", earning: 3800,
      tableData: [
        { name: "Peter Torres",    date: "Jul 25 2024", time: "03:45 PM", image: "https://randomuser.me/api/portraits/men/41.jpg" },
        { name: "Quincy Peterson", date: "Jul 26 2024", time: "09:00 AM", image: "https://randomuser.me/api/portraits/men/42.jpg" },
      ]
    },
    {
      name: "Jessica", balance: "$4100", country: "USA",
      image: "https://randomuser.me/api/portraits/women/10.jpg", earning: 4100,
      tableData: [
        { name: "Rachel Gray",    date: "Aug 01 2024", time: "01:30 PM", image: "https://randomuser.me/api/portraits/women/42.jpg" },
        { name: "Samuel Ramirez", date: "Aug 02 2024", time: "07:15 AM", image: "https://randomuser.me/api/portraits/men/43.jpg" },
      ]
    },
  ];

  // ✅ On mount: read selectedUserName from router state or localStorage
  useEffect(() => {
    if (location.state?.selectedUserName) {
      setSelectedUserName(location.state.selectedUserName);
      localStorage.setItem("selectedUserName", location.state.selectedUserName);
      window.history.replaceState({}, document.title);
    } else {
      const stored = localStorage.getItem("selectedUserName");
      if (stored && allLeftUsers.some((u) => u.name === stored)) {
        setSelectedUserName(stored);
      } else {
        setSelectedUserName(allLeftUsers[0].name);
      }
    }
  }, []);

  // ✅ Resolve selected user by name
  const selectedUser = allLeftUsers.find((u) => u.name === selectedUserName) || allLeftUsers[0];
  const currentUser = selectedUser;

  // ✅ Left panel: ONLY show the selected user (filtered by search within that one user)
  const leftPanelUsers = allLeftUsers
    .filter(u => u.name === selectedUser.name)
    .filter(u => u.name.toLowerCase().includes(userSearchTerm.toLowerCase()));

  const filteredTableData = currentUser.tableData.filter(user =>
    user.name.toLowerCase().includes(tableSearchTerm.toLowerCase())
  );

  const totalUsers = currentUser.tableData.length;
  const thisMonthUsers = filteredTableData.filter(u =>
    u.date.includes("Jan") && u.date.includes("2025")
  ).length;
  const thisWeekUsers = filteredTableData.filter(u =>
    ["Jan 14 2025","Jan 15 2025","Jan 16 2025","Jan 17 2025",
     "Jan 18 2025","Jan 19 2025","Jan 20 2025"].includes(u.date)
  ).length;
  const totalRevenue = currentUser.balance;

  const totalFreeUsers       = allLeftUsers.length;
  const totalPremiumUsers    = 13;
  const totalMarketingAgents = 10;
  const totalPaymentRequests = 16;

  const totalPages  = Math.ceil(filteredTableData.length / itemsPerPage);
  const startIndex  = (currentPage - 1) * itemsPerPage;
  const endIndex    = startIndex + itemsPerPage;
  const currentData = filteredTableData.slice(startIndex, endIndex);

  useEffect(() => { setCurrentPage(1); }, [tableSearchTerm]);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const handlePrevPage  = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
  const handleNextPage  = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
  const handlePageClick = (p) => { if (p <= totalPages) setCurrentPage(p); };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(4, totalPages); i++) pages.push(i);
    return pages;
  };
  const pageNumbers = getPageNumbers();

  return (
    <div className="h-[1010px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar
        freeUsersCount={totalFreeUsers}
        premiumUsersCount={totalPremiumUsers}
        marketingAgentsCount={totalMarketingAgents}
        paymentRequestsCount={totalPaymentRequests}
      />

      {/* LEFT PANEL */}
      <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
          className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]" strokeWidth={2} />

        <div className="absolute top-5 right-3">
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

        {/* ✅ Only the selected user is shown in the left panel */}
        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {leftPanelUsers.length > 0 ? (
            leftPanelUsers.map((user, index) => (
              <div
                key={index}
                className="flex flex-col p-2 mt-3 rounded-md bg-[#E8F0F6] border border-[#055860]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img src={user.image} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]" />
                    <p className="text-sm font-semibold mt-[-10px] ml-2 text-[#055860]">{user.name}</p>
                  </div>
                  <span className="text-xs text-[#055860] mt-3">{user.country}</span>
                </div>
                <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
                  <span className="text-gray-500">Users: <span className="text-[#055860]">{user.tableData.length}</span></span>
                  <span className="text-gray-500">Balance: <span className="text-[#055860]">{user.balance}</span></span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">No users found</div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={currentUser.image} alt={currentUser.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentUser.name}</h2>
          </div>
          <div className="relative w-full max-w-sm">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#055860] ml-[160px]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search..."
              value={tableSearchTerm}
              onChange={(e) => setTableSearchTerm(e.target.value)}
              className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 mt-[-8px]">
          <button
            onClick={() => navigate(-1)}
            className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#044a52] transition-colors"
          >
            <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
          </button>

          <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              <div className="h-[115px] w-[160px] bg-[#055860] text-white text-center flex items-center justify-center">
                <div className="text-md font-semibold leading-[200%]">
                  <span className="block whitespace-nowrap">Yearly</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center ml-6">
                <div className="text-lg font-semibold mt-1">{totalUsers}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap ml-[-7px]">Total Users</div>
              </div>
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-semibold mt-1">{thisMonthUsers}</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-semibold leading-[70%]">{thisWeekUsers}</div>
                <div className="text-md opacity-90 mt-[14px]">This Week</div>
              </div>
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-semibold leading-[70%]">{totalRevenue}</div>
                <div className="text-md opacity-90 mt-[14px]">Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="h-[45px] bg-[#055860] text-white font-md">
              <tr>
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-center">Installed</th>
                <th className="p-2 text-center">Subscribed</th>
                <th className="p-2 text-center">Cancelled</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((user, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img src={user.image} alt="User" className="w-8 h-8 rounded-full object-cover" />
                        {user.name}
                      </div>
                    </td>
                    <td className="p-2 text-center">{user.date}<br /><span className="text-xs text-gray-400">{user.time}</span></td>
                    <td className="p-2 text-center">{user.date}<br /><span className="text-xs text-gray-400">{user.time}</span></td>
                    <td className="p-2 text-center">{user.date}<br /><span className="text-xs text-gray-400">{user.time}</span></td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">No users found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t mt-[-7px]">
          <p className="text-sm text-gray-600 ml-[-13px]">
            Showing {filteredTableData.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredTableData.length)} of {filteredTableData.length} entries
          </p>
          <div className="flex items-center gap-2 mr-[-19px]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] hover:bg-[#691188] cursor-pointer"}`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">‹</span>
            </button>
            {pageNumbers.map((pageNum) => (
              <span key={pageNum} onClick={() => handlePageClick(pageNum)}
                className={`cursor-pointer ${currentPage === pageNum ? "text-[#691188] font-semibold" : "text-gray-500"}`}>
                {pageNum}
              </span>
            ))}
            {totalPages > 4 && (
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 leading-none">
                <span className="dots text-gray-700 text-[25px] leading-none mt-[-5px]">···</span>
              </button>
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#691188] hover:bg-[#691188] cursor-pointer"}`}
            >
              <span className="arrow text-white text-[25px] leading-none mt-[-7px]">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}