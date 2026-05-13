
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Groups from "../assets/Groups.png";
import BackArrow from "../assets/BackArrow.png";
import { Search } from "lucide-react";

export default function FreeUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [tableSearchTerm, setTableSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const leftUsers = [
    { name: "Courtney Smith", users: "2.2M", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Arlene", users: "1.5M", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Aubrey", users: "52k", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Sohan", users: "500", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Eduardo", users: "68", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Colleen", users: "74", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { name: "Shane", users: "52", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Darrell", users: "38", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/8.jpg" },
    { name: "Marjorie", users: "20", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/9.jpg" },
    { name: "Alice", users: "8", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Bob", users: "8", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Charlie", users: "8", balance: "5$", country: "USA", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  ];

  const tableData = [
    { name: "Muhammad Junaid Khan", installed: "May 15 2024", installedTime: "11:35 PM", subscribed: "May 15 2024", subscribedTime: "11:35 PM", clearance: "May 15 2024", clearanceTime: "11:35 PM", image: "https://randomuser.me/api/portraits/men/10.jpg" },
    { name: "Sarah Johnson", installed: "May 16 2024", installedTime: "10:20 AM", subscribed: "May 16 2024", subscribedTime: "10:20 AM", clearance: "May 16 2024", clearanceTime: "10:20 AM", image: "https://randomuser.me/api/portraits/women/11.jpg" },
    { name: "Ahmed Ali", installed: "May 17 2024", installedTime: "02:45 PM", subscribed: "May 17 2024", subscribedTime: "02:45 PM", clearance: "May 17 2024", clearanceTime: "02:45 PM", image: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Emily Davis", installed: "May 18 2024", installedTime: "09:15 AM", subscribed: "May 18 2024", subscribedTime: "09:15 AM", clearance: "May 18 2024", clearanceTime: "09:15 AM", image: "https://randomuser.me/api/portraits/women/13.jpg" },
    { name: "Michael Brown", installed: "May 19 2024", installedTime: "04:30 PM", subscribed: "May 19 2024", subscribedTime: "04:30 PM", clearance: "May 19 2024", clearanceTime: "04:30 PM", image: "https://randomuser.me/api/portraits/men/14.jpg" },
    { name: "Jessica Wilson", installed: "May 20 2024", installedTime: "01:50 PM", subscribed: "May 20 2024", subscribedTime: "01:50 PM", clearance: "May 20 2024", clearanceTime: "01:50 PM", image: "https://randomuser.me/api/portraits/women/15.jpg" },
    { name: "David Martinez", installed: "May 21 2024", installedTime: "08:25 AM", subscribed: "May 21 2024", subscribedTime: "08:25 AM", clearance: "May 21 2024", clearanceTime: "08:25 AM", image: "https://randomuser.me/api/portraits/men/16.jpg" },
    { name: "Lisa Anderson", installed: "May 22 2024", installedTime: "03:40 PM", subscribed: "May 22 2024", subscribedTime: "03:40 PM", clearance: "May 22 2024", clearanceTime: "03:40 PM", image: "https://randomuser.me/api/portraits/women/17.jpg" },
    { name: "James Taylor", installed: "May 23 2024", installedTime: "12:15 PM", subscribed: "May 23 2024", subscribedTime: "12:15 PM", clearance: "May 23 2024", clearanceTime: "12:15 PM", image: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: "Maria Garcia", installed: "May 24 2024", installedTime: "05:55 PM", subscribed: "May 24 2024", subscribedTime: "05:55 PM", clearance: "May 24 2024", clearanceTime: "05:55 PM", image: "https://randomuser.me/api/portraits/women/19.jpg" },
    { name: "Robert Thomas", installed: "May 25 2024", installedTime: "07:30 AM", subscribed: "May 25 2024", subscribedTime: "07:30 AM", clearance: "May 25 2024", clearanceTime: "07:30 AM", image: "https://randomuser.me/api/portraits/men/20.jpg" },
    { name: "Jennifer Moore", installed: "May 26 2024", installedTime: "11:45 AM", subscribed: "May 26 2024", subscribedTime: "11:45 AM", clearance: "May 26 2024", clearanceTime: "11:45 AM", image: "https://randomuser.me/api/portraits/women/21.jpg" },
    { name: "William Clark", installed: "May 27 2024", installedTime: "09:30 AM", subscribed: "May 27 2024", subscribedTime: "09:30 AM", clearance: "May 27 2024", clearanceTime: "09:30 AM", image: "https://randomuser.me/api/portraits/men/21.jpg" },
    { name: "Patricia Lewis", installed: "May 28 2024", installedTime: "02:15 PM", subscribed: "May 28 2024", subscribedTime: "02:15 PM", clearance: "May 28 2024", clearanceTime: "02:15 PM", image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { name: "Richard Walker", installed: "May 29 2024", installedTime: "10:45 AM", subscribed: "May 29 2024", subscribedTime: "10:45 AM", clearance: "May 29 2024", clearanceTime: "10:45 AM", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Linda Hall", installed: "May 30 2024", installedTime: "04:20 PM", subscribed: "May 30 2024", subscribedTime: "04:20 PM", clearance: "May 30 2024", clearanceTime: "04:20 PM", image: "https://randomuser.me/api/portraits/women/23.jpg" },
    { name: "Charles Allen", installed: "May 31 2024", installedTime: "08:50 AM", subscribed: "May 31 2024", subscribedTime: "08:50 AM", clearance: "May 31 2024", clearanceTime: "08:50 AM", image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { name: "Barbara Young", installed: "Jun 01 2024", installedTime: "01:35 PM", subscribed: "Jun 01 2024", subscribedTime: "01:35 PM", clearance: "Jun 01 2024", clearanceTime: "01:35 PM", image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { name: "Joseph King", installed: "Jun 02 2024", installedTime: "11:10 AM", subscribed: "Jun 02 2024", subscribedTime: "11:10 AM", clearance: "Jun 02 2024", clearanceTime: "11:10 AM", image: "https://randomuser.me/api/portraits/men/24.jpg" },
    { name: "Susan Wright", installed: "Jun 03 2024", installedTime: "03:25 PM", subscribed: "Jun 03 2024", subscribedTime: "03:25 PM", clearance: "Jun 03 2024", clearanceTime: "03:25 PM", image: "https://randomuser.me/api/portraits/women/25.jpg" },
    { name: "Thomas Scott", installed: "Jun 04 2024", installedTime: "09:40 AM", subscribed: "Jun 04 2024", subscribedTime: "09:40 AM", clearance: "Jun 04 2024", clearanceTime: "09:40 AM", image: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: "Nancy Green", installed: "Jun 05 2024", installedTime: "02:55 PM", subscribed: "Jun 05 2024", subscribedTime: "02:55 PM", clearance: "Jun 05 2024", clearanceTime: "02:55 PM", image: "https://randomuser.me/api/portraits/women/26.jpg" },
    { name: "Daniel Adams", installed: "Jun 06 2024", installedTime: "10:05 AM", subscribed: "Jun 06 2024", subscribedTime: "10:05 AM", clearance: "Jun 06 2024", clearanceTime: "10:05 AM", image: "https://randomuser.me/api/portraits/men/26.jpg" },
    { name: "Betty Baker", installed: "Jun 07 2024", installedTime: "04:40 PM", subscribed: "Jun 07 2024", subscribedTime: "04:40 PM", clearance: "Jun 07 2024", clearanceTime: "04:40 PM", image: "https://randomuser.me/api/portraits/women/27.jpg" },
    { name: "Matthew Nelson", installed: "Jun 08 2024", installedTime: "08:15 AM", subscribed: "Jun 08 2024", subscribedTime: "08:15 AM", clearance: "Jun 08 2024", clearanceTime: "08:15 AM", image: "https://randomuser.me/api/portraits/men/27.jpg" },
    { name: "Dorothy Carter", installed: "Jun 09 2024", installedTime: "01:20 PM", subscribed: "Jun 09 2024", subscribedTime: "01:20 PM", clearance: "Jun 09 2024", clearanceTime: "01:20 PM", image: "https://randomuser.me/api/portraits/women/28.jpg" },
    { name: "Anthony Mitchell", installed: "Jun 10 2024", installedTime: "11:50 AM", subscribed: "Jun 10 2024", subscribedTime: "11:50 AM", clearance: "Jun 10 2024", clearanceTime: "11:50 AM", image: "https://randomuser.me/api/portraits/men/28.jpg" },
    { name: "Sandra Perez", installed: "Jun 11 2024", installedTime: "03:35 PM", subscribed: "Jun 11 2024", subscribedTime: "03:35 PM", clearance: "Jun 11 2024", clearanceTime: "03:35 PM", image: "https://randomuser.me/api/portraits/women/29.jpg" },
    { name: "Mark Roberts", installed: "Jun 12 2024", installedTime: "09:25 AM", subscribed: "Jun 12 2024", subscribedTime: "09:25 AM", clearance: "Jun 12 2024", clearanceTime: "09:25 AM", image: "https://randomuser.me/api/portraits/men/29.jpg" },
    { name: "Ashley Turner", installed: "Jun 13 2024", installedTime: "02:10 PM", subscribed: "Jun 13 2024", subscribedTime: "02:10 PM", clearance: "Jun 13 2024", clearanceTime: "02:10 PM", image: "https://randomuser.me/api/portraits/women/30.jpg" },
    { name: "Steven Phillips", installed: "Jun 14 2024", installedTime: "10:30 AM", subscribed: "Jun 14 2024", subscribedTime: "10:30 AM", clearance: "Jun 14 2024", clearanceTime: "10:30 AM", image: "https://randomuser.me/api/portraits/men/30.jpg" },
    { name: "Kimberly Campbell", installed: "Jun 15 2024", installedTime: "04:45 PM", subscribed: "Jun 15 2024", subscribedTime: "04:45 PM", clearance: "Jun 15 2024", clearanceTime: "04:45 PM", image: "https://randomuser.me/api/portraits/women/31.jpg" },
    { name: "Paul Parker", installed: "Jun 16 2024", installedTime: "08:55 AM", subscribed: "Jun 16 2024", subscribedTime: "08:55 AM", clearance: "Jun 16 2024", clearanceTime: "08:55 AM", image: "https://randomuser.me/api/portraits/men/31.jpg" },
  ];

  // Filter users in left panel
  const filteredLeftUsers = leftUsers.filter(user =>
    user.name.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  // Filter table data
  const filteredTableData = tableData.filter(user =>
    user.name.toLowerCase().includes(tableSearchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredTableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredTableData.slice(startIndex, endIndex);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tableSearchTerm]);

  // If current page exceeds total pages (after filtering), reset to last valid page
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    if (pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 4;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than or equal to max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 3 pages
      for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const Star = () => <span style={{ color: "#691188" }}>★</span>;

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA]">
      <Sidebar />

      {/* ================= LEFT PANEL ================= */}
      <div className="h-[980px] w-[290px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
          className="h-[40px] w-[230px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search
          size={18}
          className="absolute left-3 mt-[15px] ml-[190px] text-[#055860]"
          strokeWidth={2}
        />
        {/* Groups Icon with Dropdown */}
        <div className="absolute top-5 right-3">
          <img
            className="h-6 w-6 cursor-pointer"
            src={Groups}
            alt="Groups Icon"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
          <div className="absolute right-1/2 translate-x-1/2 mt-2 w-[140px] bg-white shadow-lg rounded-md border border-gray-200 z-50">
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Active Users
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Total Users
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Monthly Users
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Weekly Users
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Total Sales
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Monthly Sales
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Weekly Sales
  </button>
  <button className="w-full text-center px-4 py-2 text-sm hover:bg-gray-100">
    Balance
  </button>
</div>
          )}
          </div>

        {/* Users List */}
        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {filteredLeftUsers.length > 0 ? (
            filteredLeftUsers.map((user, index) => (
              <div
                key={index}
                className="flex flex-col p-2 rounded-md hover:bg-[#F5F6FA] cursor-pointer"
              >
                {/* Top row: image + name + stars + country */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]"
                    />
                    <p className="text-sm font-semibold mt-[-10px] ml-2">{user.name}</p>
                    <div className="flex gap-[2px] ml-1 mt-[-10px]">
                      <Star /><Star /><Star /><Star /><Star />
                    </div>
                  </div>
                  <span className="text-xs text-[#055860] mt-3">{user.country}</span>
                </div>

                {/* Bottom row: users number and balance */}
                <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
                  <span className="text-gray-500">
                    Users: <span className="text-[#055860]">{user.users}</span>
                  </span>
                  <span className="text-gray-500">
                    Balance: <span className="text-[#055860]">{user.balance}</span>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
              No users found
            </div>
          )}
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex-1 h-[980px] max-w-[780px] p-6 border rounded-md mt-[10px] bg-white mb-[20px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Courtney Smith"
              className="w-12 h-12 rounded-full object-cover mt-[-17px]"
            />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">
              Courtney Smith
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
              className="w-[220px] pl-10 ml-[160px] pr-3 py-2 text-sm border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-1 focus:ring-[#055860] focus:border-[#055860]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 mt-[-8px]">
          {/* First box - Back Arrow */}
          <div className="w-[110px] h-[115px] bg-[#055860] text-white rounded-md flex items-center justify-center">
            <img className="h-11 w-11" src={BackArrow} alt="Back Arrow" />
          </div>

          {/* Stats Grid with single border */}
          <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5">
              {/* Monthly Trial Users */}
              <div className="h-[115px] bg-[#055860] text-white pt-1 text-center border-r border-gray-300 flex items-center justify-center">
                <div className="text-md font-semibold leading-[160%]">
                  <span className="block whitespace-nowrap">Marketing</span>
                  <span className="block whitespace-nowrap">Trial Users</span>
                </div>
              </div>
              {/* Total Users */}
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">1200</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">Total Users</div>
              </div>

              {/* This Month */}
              <div className="bg-[#055860] text-white p-6 text-center">
                <div className="text-lg font-bold mt-1">200</div>
                <div className="text-md mt-2 opacity-90 whitespace-nowrap">This Month</div>
              </div>

              {/* This Week */}
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">20</div>
                <div className="text-md opacity-90 mt-[14px]">This Week</div>
              </div>
              {/* Revenue */}
              <div className="bg-[#055860] text-white pt-9 text-center border-r border-gray-300">
                <div className="text-lg font-bold leading-[70%]">0$</div>
                <div className="text-md opacity-90 mt-[14px]">Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-md text-sm">
            <thead className="h-[45px] bg-[#055860] text-white text-[17px]">
              <tr>
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-center">Installed</th>
                <th className="p-2 text-center">Subscribed</th>
                <th className="p-2 text-center">Clearance</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((user, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={user.image}
                          alt="User"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        {user.name}
                      </div>
                    </td>
                    <td className="p-2 text-center">
                      {user.installed}
                      <br />
                      <span className="text-xs text-gray-400">{user.installedTime}</span>
                    </td>
                    <td className="p-2 text-center">
                      {user.subscribed}
                      <br />
                      <span className="text-xs text-gray-400">{user.subscribedTime}</span>
                    </td>
                    <td className="p-2 text-center">
                      {user.clearance}
                      <br />
                      <span className="text-xs text-gray-400">{user.clearanceTime}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
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
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#691188] hover:bg-[#691188] cursor-pointer'
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
                className={`cursor-pointer ${currentPage === pageNum ? 'text-[#691188] font-semibold' : 'text-gray-500'}`}
              >
                {pageNum}
              </span>
            ))}
            
            {totalPages > 3 && (
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
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#691188] hover:bg-[#691188] cursor-pointer'
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