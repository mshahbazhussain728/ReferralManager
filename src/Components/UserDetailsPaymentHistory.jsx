
import React, { useState, useEffect } from "react";
import Groups from "../assets/Groups.png";
import Sidebar from "./Sidebar.jsx";
import UserBackArrow from "../assets/UserBackArrow.png";
import Coupon from "../assets/Coupon.png";
import { Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PointsHistory() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("points");
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const leftUsers = [];

  const paymentUserDummyData = {
    "Ali Khan": {
      country: "USA", totalBalance: "$320",
      pointHistory: [
        { user: "Hassan Ali",    installed: "May 10 2024", subscribed: "May 11 2024", point: 10 },
        { user: "Ayesha Noor",   installed: "May 11 2024", subscribed: "May 12 2024", point: 8  },
        { user: "Usman Tariq",   installed: "May 12 2024", subscribed: "May 13 2024", point: 12 },
        { user: "Fatima Sheikh", installed: "May 13 2024", subscribed: "May 14 2024", point: 9  },
      ],
      couponHistory: [
        { date: "May 14 2024", status: "Redeemed" }, { date: "May 15 2024", status: "Expired"  },
        { date: "May 16 2024", status: "Redeemed" }, { date: "May 17 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 18 2024", point: 39, status: "Successful" },
        { date: "May 19 2024", point: 20, status: "Pending"    },
        { date: "May 20 2024", point: 30, status: "Cancelled"  },
      ],
    },
    "Sarah Johnson": {
      country: "USA", totalBalance: "$410",
      pointHistory: [
        { user: "Tom Harris",   installed: "May 11 2024", subscribed: "May 12 2024", point: 12 },
        { user: "Lucy Evans",   installed: "May 12 2024", subscribed: "May 13 2024", point: 15 },
        { user: "Mark Davis",   installed: "May 13 2024", subscribed: "May 14 2024", point: 10 },
        { user: "Grace Miller", installed: "May 14 2024", subscribed: "May 15 2024", point: 11 },
      ],
      couponHistory: [
        { date: "May 15 2024", status: "Redeemed" }, { date: "May 16 2024", status: "Redeemed" },
        { date: "May 17 2024", status: "Expired"  }, { date: "May 18 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 19 2024", point: 48, status: "Successful" },
        { date: "May 20 2024", point: 30, status: "Pending"    },
        { date: "May 21 2024", point: 22, status: "Successful" },
      ],
    },
    "Ahmed Ali": {
      country: "USA", totalBalance: "$280",
      pointHistory: [
        { user: "Zara Khan",   installed: "May 12 2024", subscribed: "May 13 2024", point: 14 },
        { user: "Omar Farooq", installed: "May 13 2024", subscribed: "May 14 2024", point: 11 },
        { user: "Nadia Malik", installed: "May 14 2024", subscribed: "May 15 2024", point: 9  },
        { user: "Bilal Ahmed", installed: "May 15 2024", subscribed: "May 16 2024", point: 13 },
      ],
      couponHistory: [
        { date: "May 16 2024", status: "Expired"  }, { date: "May 17 2024", status: "Redeemed" },
        { date: "May 18 2024", status: "Redeemed" }, { date: "May 19 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "May 20 2024", point: 47, status: "Successful" },
        { date: "May 21 2024", point: 25, status: "Cancelled"  },
        { date: "May 22 2024", point: 18, status: "Successful" },
      ],
    },
    "Emily Davis": {
      country: "USA", totalBalance: "$360",
      pointHistory: [
        { user: "Jake Wilson", installed: "May 13 2024", subscribed: "May 14 2024", point: 10 },
        { user: "Mia Turner",  installed: "May 14 2024", subscribed: "May 15 2024", point: 8  },
        { user: "Liam Brown",  installed: "May 15 2024", subscribed: "May 16 2024", point: 12 },
        { user: "Ella Clark",  installed: "May 16 2024", subscribed: "May 17 2024", point: 7  },
      ],
      couponHistory: [
        { date: "May 17 2024", status: "Redeemed" }, { date: "May 18 2024", status: "Expired"  },
        { date: "May 19 2024", status: "Redeemed" }, { date: "May 20 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 21 2024", point: 37, status: "Successful" },
        { date: "May 22 2024", point: 20, status: "Pending"    },
        { date: "May 23 2024", point: 15, status: "Successful" },
      ],
    },
    "Michael Brown": {
      country: "USA", totalBalance: "$290",
      pointHistory: [
        { user: "Anna White", installed: "May 14 2024", subscribed: "May 15 2024", point: 8  },
        { user: "Sam Green",  installed: "May 15 2024", subscribed: "May 16 2024", point: 6  },
        { user: "Rita Scott", installed: "May 16 2024", subscribed: "May 17 2024", point: 10 },
        { user: "Ben Adams",  installed: "May 17 2024", subscribed: "May 18 2024", point: 7  },
      ],
      couponHistory: [
        { date: "May 18 2024", status: "Expired"  }, { date: "May 19 2024", status: "Redeemed" },
        { date: "May 20 2024", status: "Redeemed" }, { date: "May 21 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "May 22 2024", point: 31, status: "Successful" },
        { date: "May 23 2024", point: 18, status: "Pending"    },
        { date: "May 24 2024", point: 22, status: "Cancelled"  },
      ],
    },
    "Jessica Wilson": {
      country: "USA", totalBalance: "$340",
      pointHistory: [
        { user: "Chris Park", installed: "May 15 2024", subscribed: "May 16 2024", point: 10 },
        { user: "Nina Ford",  installed: "May 16 2024", subscribed: "May 17 2024", point: 9  },
        { user: "Leo Hill",   installed: "May 17 2024", subscribed: "May 18 2024", point: 11 },
        { user: "Sara Reed",  installed: "May 18 2024", subscribed: "May 19 2024", point: 8  },
      ],
      couponHistory: [
        { date: "May 19 2024", status: "Redeemed" }, { date: "May 20 2024", status: "Redeemed" },
        { date: "May 21 2024", status: "Expired"  }, { date: "May 22 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 23 2024", point: 38, status: "Successful" },
        { date: "May 24 2024", point: 22, status: "Successful" },
        { date: "May 25 2024", point: 15, status: "Pending"    },
      ],
    },
    "David Martinez": {
      country: "USA", totalBalance: "$190",
      pointHistory: [
        { user: "Pablo Cruz",  installed: "May 16 2024", subscribed: "May 17 2024", point: 6 },
        { user: "Rosa Diaz",   installed: "May 17 2024", subscribed: "May 18 2024", point: 5 },
        { user: "Carlos Vega", installed: "May 18 2024", subscribed: "May 19 2024", point: 7 },
        { user: "Ana Lopez",   installed: "May 19 2024", subscribed: "May 20 2024", point: 4 },
      ],
      couponHistory: [
        { date: "May 20 2024", status: "Expired"  }, { date: "May 21 2024", status: "Redeemed" },
        { date: "May 22 2024", status: "Redeemed" }, { date: "May 23 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "May 24 2024", point: 22, status: "Successful" },
        { date: "May 25 2024", point: 10, status: "Cancelled"  },
        { date: "May 26 2024", point: 14, status: "Successful" },
      ],
    },
    "Lisa Anderson": {
      country: "USA", totalBalance: "$155",
      pointHistory: [
        { user: "Kevin Moore", installed: "May 17 2024", subscribed: "May 18 2024", point: 4 },
        { user: "Diane Bell",  installed: "May 18 2024", subscribed: "May 19 2024", point: 5 },
        { user: "Frank Hall",  installed: "May 19 2024", subscribed: "May 20 2024", point: 3 },
        { user: "Jenny Cole",  installed: "May 20 2024", subscribed: "May 21 2024", point: 6 },
      ],
      couponHistory: [
        { date: "May 21 2024", status: "Redeemed" }, { date: "May 22 2024", status: "Expired"  },
        { date: "May 23 2024", status: "Redeemed" }, { date: "May 24 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 25 2024", point: 18, status: "Successful" },
        { date: "May 26 2024", point: 12, status: "Pending"    },
        { date: "May 27 2024", point: 8,  status: "Successful" },
      ],
    },
    "John Smith": {
      country: "USA", totalBalance: "$490",
      pointHistory: [
        { user: "Alice Brown", installed: "May 18 2024", subscribed: "May 19 2024", point: 15 },
        { user: "Bob Turner",  installed: "May 19 2024", subscribed: "May 20 2024", point: 12 },
        { user: "Carol Evans", installed: "May 20 2024", subscribed: "May 21 2024", point: 14 },
        { user: "Dave Scott",  installed: "May 21 2024", subscribed: "May 22 2024", point: 11 },
      ],
      couponHistory: [
        { date: "May 22 2024", status: "Redeemed" }, { date: "May 23 2024", status: "Redeemed" },
        { date: "May 24 2024", status: "Expired"  }, { date: "May 25 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 26 2024", point: 52, status: "Successful" },
        { date: "May 27 2024", point: 38, status: "Pending"    },
        { date: "May 28 2024", point: 44, status: "Successful" },
      ],
    },
    "Emma Wilson": {
      country: "USA", totalBalance: "$300",
      pointHistory: [
        { user: "Noah King", installed: "May 19 2024", subscribed: "May 20 2024", point: 9  },
        { user: "Ava Lane",  installed: "May 20 2024", subscribed: "May 21 2024", point: 8  },
        { user: "Owen Fox",  installed: "May 21 2024", subscribed: "May 22 2024", point: 11 },
        { user: "Mila Ross", installed: "May 22 2024", subscribed: "May 23 2024", point: 7  },
      ],
      couponHistory: [
        { date: "May 23 2024", status: "Expired"  }, { date: "May 24 2024", status: "Redeemed" },
        { date: "May 25 2024", status: "Redeemed" }, { date: "May 26 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "May 27 2024", point: 35, status: "Successful" },
        { date: "May 28 2024", point: 20, status: "Cancelled"  },
        { date: "May 29 2024", point: 28, status: "Successful" },
      ],
    },
    "Daniel Brown": {
      country: "USA", totalBalance: "$375",
      pointHistory: [
        { user: "Sophie Ward", installed: "May 20 2024", subscribed: "May 21 2024", point: 11 },
        { user: "Jack Dean",   installed: "May 21 2024", subscribed: "May 22 2024", point: 9  },
        { user: "Ruby Nash",   installed: "May 22 2024", subscribed: "May 23 2024", point: 13 },
        { user: "Harry Cox",   installed: "May 23 2024", subscribed: "May 24 2024", point: 8  },
      ],
      couponHistory: [
        { date: "May 24 2024", status: "Redeemed" }, { date: "May 25 2024", status: "Expired"  },
        { date: "May 26 2024", status: "Redeemed" }, { date: "May 27 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 28 2024", point: 41, status: "Successful" },
        { date: "May 29 2024", point: 27, status: "Pending"    },
        { date: "May 30 2024", point: 33, status: "Successful" },
      ],
    },
    "Olivia Davis": {
      country: "USA", totalBalance: "$245",
      pointHistory: [
        { user: "Ellie Stone", installed: "May 21 2024", subscribed: "May 22 2024", point: 7 },
        { user: "Finn Gray",   installed: "May 22 2024", subscribed: "May 23 2024", point: 9 },
        { user: "Isla Hart",   installed: "May 23 2024", subscribed: "May 24 2024", point: 6 },
        { user: "Oscar Page",  installed: "May 24 2024", subscribed: "May 25 2024", point: 8 },
      ],
      couponHistory: [
        { date: "May 25 2024", status: "Expired"  }, { date: "May 26 2024", status: "Redeemed" },
        { date: "May 27 2024", status: "Redeemed" }, { date: "May 28 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "May 29 2024", point: 30, status: "Successful" },
        { date: "May 30 2024", point: 16, status: "Cancelled"  },
        { date: "May 31 2024", point: 20, status: "Successful" },
      ],
    },
    "James Miller": {
      country: "USA", totalBalance: "$430",
      pointHistory: [
        { user: "Cora Bell",  installed: "May 22 2024", subscribed: "May 23 2024", point: 13 },
        { user: "Rex Hunt",   installed: "May 23 2024", subscribed: "May 24 2024", point: 10 },
        { user: "Vera Wood",  installed: "May 24 2024", subscribed: "May 25 2024", point: 12 },
        { user: "Walt Burns", installed: "May 25 2024", subscribed: "May 26 2024", point: 9  },
      ],
      couponHistory: [
        { date: "May 26 2024", status: "Redeemed" }, { date: "May 27 2024", status: "Redeemed" },
        { date: "May 28 2024", status: "Expired"  }, { date: "May 29 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 30 2024", point: 44, status: "Successful" },
        { date: "May 31 2024", point: 32, status: "Pending"    },
        { date: "June 1 2024", point: 38, status: "Successful" },
      ],
    },
    "Sophia Garcia": {
      country: "USA", totalBalance: "$270",
      pointHistory: [
        { user: "Diego Ruiz",   installed: "May 23 2024", subscribed: "May 24 2024", point: 8 },
        { user: "Lucia Reyes",  installed: "May 24 2024", subscribed: "May 25 2024", point: 7 },
        { user: "Marco Silva",  installed: "May 25 2024", subscribed: "May 26 2024", point: 9 },
        { user: "Elena Torres", installed: "May 26 2024", subscribed: "May 27 2024", point: 6 },
      ],
      couponHistory: [
        { date: "May 27 2024", status: "Redeemed" }, { date: "May 28 2024", status: "Expired"  },
        { date: "May 29 2024", status: "Redeemed" }, { date: "May 30 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "May 31 2024", point: 30, status: "Successful" },
        { date: "June 1 2024", point: 18, status: "Pending"    },
        { date: "June 2 2024", point: 24, status: "Successful" },
      ],
    },
    "William Taylor": {
      country: "USA", totalBalance: "$395",
      pointHistory: [
        { user: "Ethan Price", installed: "May 24 2024", subscribed: "May 25 2024", point: 12 },
        { user: "Grace Wells", installed: "May 25 2024", subscribed: "May 26 2024", point: 10 },
        { user: "Felix Carr",  installed: "May 26 2024", subscribed: "May 27 2024", point: 14 },
        { user: "Holly Day",   installed: "May 27 2024", subscribed: "May 28 2024", point: 9  },
      ],
      couponHistory: [
        { date: "May 28 2024", status: "Expired"  }, { date: "May 29 2024", status: "Redeemed" },
        { date: "May 30 2024", status: "Redeemed" }, { date: "May 31 2024", status: "Expired"  },
      ],
      redeemHistory: [
        { date: "June 1 2024", point: 45, status: "Successful" },
        { date: "June 2 2024", point: 28, status: "Cancelled"  },
        { date: "June 3 2024", point: 36, status: "Successful" },
      ],
    },
    "Ava Martinez": {
      country: "USA", totalBalance: "$340",
      pointHistory: [
        { user: "Ivan Cruz",   installed: "May 25 2024", subscribed: "May 26 2024", point: 10 },
        { user: "Luna Vega",   installed: "May 26 2024", subscribed: "May 27 2024", point: 8  },
        { user: "Niko Flores", installed: "May 27 2024", subscribed: "May 28 2024", point: 11 },
        { user: "Tara Reyes",  installed: "May 28 2024", subscribed: "May 29 2024", point: 9  },
      ],
      couponHistory: [
        { date: "May 29 2024", status: "Redeemed" }, { date: "May 30 2024", status: "Redeemed" },
        { date: "May 31 2024", status: "Expired"  }, { date: "June 1 2024", status: "Redeemed" },
      ],
      redeemHistory: [
        { date: "June 2 2024", point: 38, status: "Successful" },
        { date: "June 3 2024", point: 24, status: "Pending"    },
        { date: "June 4 2024", point: 30, status: "Successful" },
      ],
    },
  };

  const fromPayment  = location.state?.fromPaymentRequests;
  const paymentName  = location.state?.selectedUserName;
  const paymentImage = location.state?.selectedUserImage;

  const sortedLeftUsers = [...leftUsers].sort((a, b) => b.earning - a.earning);

  useEffect(() => {
    if (fromPayment && paymentName) {
      setSelectedUserName(paymentName);
      localStorage.setItem("selectedUserName", paymentName);
      window.history.replaceState({}, document.title);
    } else {
      const nameFromState   = location.state?.selectedUserName;
      const nameFromStorage = localStorage.getItem("selectedUserName");
      const nameToUse       = nameFromState || nameFromStorage;
      if (nameToUse) {
        const found = leftUsers.find(u => u.name.toLowerCase() === nameToUse.toLowerCase());
        setSelectedUserName(found ? found.name : (sortedLeftUsers[0]?.name || ""));
        if (nameFromState) {
          localStorage.setItem("selectedUserName", nameFromState);
          window.history.replaceState({}, document.title);
        }
      } else {
        setSelectedUserName(sortedLeftUsers[0]?.name || "");
      }
    }
  }, []);

  const buildPaymentUser = () => {
    const dummy = paymentUserDummyData[paymentName] || {
      country: "USA", totalBalance: "$250",
      pointHistory:  [{ user: "User A", installed: "May 15 2024", subscribed: "May 16 2024", point: 10 }],
      couponHistory: [{ date: "May 17 2024", status: "Redeemed" }],
      redeemHistory: [{ date: "May 19 2024", point: 18, status: "Successful" }],
    };
    const totalIncome   = dummy.pointHistory.reduce((sum, r) => sum + r.point, 0);
    const totalRedeem   = dummy.redeemHistory.reduce((sum, r) => sum + r.point, 0);
    const totalRequests = dummy.redeemHistory.length;
    return {
      id: 9999,
      name:    paymentName,
      image:   paymentImage || "https://randomuser.me/api/portraits/lego/1.jpg",
      earning: 0,
      country: dummy.country,
      users:          dummy.pointHistory.length,
      balance:        dummy.totalBalance,
      totalBalance:   dummy.totalBalance,
      totalIncome:    `$${totalIncome}`,
      totalRedeem:    `$${totalRedeem}`,
      totalRequests:  totalRequests,
      pointHistory:   dummy.pointHistory,
      couponHistory:  dummy.couponHistory,
      redeemHistory:  dummy.redeemHistory,
    };
  };

  const enrichUser = (user) => {
    const totalIncome   = user.pointHistory.reduce((sum, r) => sum + r.point, 0);
    const totalRedeem   = user.redeemHistory.reduce((sum, r) => sum + r.point, 0);
    const totalRequests = user.redeemHistory.length;
    return {
      ...user,
      users:         user.pointHistory.length,
      totalIncome:   `$${totalIncome}`,
      totalRedeem:   `$${totalRedeem}`,
      totalRequests: totalRequests,
    };
  };

  const isPaymentUser      = fromPayment && paymentName && selectedUserName === paymentName;
  const currentDisplayUser = isPaymentUser && !leftUsers.find(u => u.name.toLowerCase() === paymentName.toLowerCase())
    ? buildPaymentUser()
    : enrichUser(leftUsers.find(u => u.name === selectedUserName) || sortedLeftUsers[0] || {
        id: 0, name: "", image: "", earning: 0, country: "", balance: "", totalBalance: "",
        pointHistory: [], couponHistory: [], redeemHistory: [],
      });

  const paymentUserInList = isPaymentUser
    ? leftUsers.find(u => u.name.toLowerCase() === paymentName.toLowerCase())
    : null;

  const baseList = isPaymentUser && !paymentUserInList
    ? [buildPaymentUser(), ...sortedLeftUsers.map(enrichUser)]
    : sortedLeftUsers.map(enrichUser);

  const panelUsers = baseList.filter(u =>
    u.name.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  const handleBackClick = () => {
    localStorage.setItem("selectedUserName", currentDisplayUser.name);
    const returnPage = localStorage.getItem("currentSidebarPage") || "/payment-requests";
    navigate(returnPage, { state: { selectedUserName: currentDisplayUser.name } });
  };

  return (
    <div className="h-[1000px] min-h-screen flex bg-[#F5F6FA] overflow-hidden">
      {/* ✅ FIX: No count props passed — Sidebar reads all counts from localStorage */}
      <Sidebar />

      {/* LEFT PANEL */}
      <div className="h-[980px] w-[330px] bg-white rounded-md shadow-sm p-2 flex flex-col relative ml-[16px] mt-[10px]">
        <input
          type="text"
          placeholder="Search"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
          className="h-[40px] w-[270px] mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm outline-none mt-[3px]"
        />
        <Search size={18} className="absolute left-3 mt-[15px] ml-[230px] text-[#055860]" strokeWidth={2} />
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

        <div className="flex-1 space-y-2 overflow-y-auto mt-[-15px]">
          {panelUsers.length > 0 ? (
            panelUsers.map((user) => {
              const isSelected = currentDisplayUser?.id === user.id;
              return (
                <div
                  key={user.id}
                  onClick={() => setSelectedUserName(user.name)}
                  className={`flex flex-col p-2 mt-4 rounded-md transition-colors cursor-pointer ${
                    isSelected ? "bg-[#E8F0F6] border border-[#055860]" : "hover:bg-[#F5F6FA]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={user.image} alt={user.name} className="w-9 h-9 rounded-full object-cover mt-[13px] mr-[-5px]" />
                      <p className="text-sm font-semibold mt-[-10px] ml-2">{user.name}</p>
                    </div>
                    <span className="text-xs text-[#055860] mt-3">{user.country}</span>
                  </div>
                  <div className="flex items-center justify-start gap-2 text-xs ml-[48px] mt-[-22px]">
                    <span className="text-gray-500">Users: <span className="text-[#055860]">{user.users}</span></span>
                    <span className="text-gray-500">Balance: <span className="text-[#055860]">{user.balance}</span></span>
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
      <div className="flex-1 h-[980px] max-w-[880px] p-6 border rounded-md mt-[10px] bg-white mb-[20px] mr-[16px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={currentDisplayUser.image} alt={currentDisplayUser.name} className="w-12 h-12 rounded-full object-cover mt-[-17px]" />
            <h2 className="text-xl font-semibold text-[#055860] hover:underline mt-[-15px]">{currentDisplayUser.name}</h2>
          </div>
          <button onClick={handleBackClick} className="flex items-center gap-1 text-[#055860] font-medium hover:underline mt-[-15px] cursor-pointer bg-none border-none">
            Back to Payment Requests
            <img className="h-6 w-6" src={UserBackArrow} alt="back" />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <img src={currentDisplayUser.image} alt="large" className="w-[160px] h-[165px] rounded-md object-cover shadow-sm" />
          <div className="w-[620px] space-y-2">
            <div className="bg-gray-200 px-4 py-2 flex justify-between text-sm font-medium">
              <span>Balance</span><span className="text-[#055860]">{currentDisplayUser.totalBalance}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
              <span>Total Income</span><span className="text-[#055860]">{currentDisplayUser.totalIncome}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
              <span>Total Redeem</span><span className="text-[#055860]">{currentDisplayUser.totalRedeem}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
              <span>Total Requests</span><span className="text-[#055860]">{currentDisplayUser.totalRequests}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 border-b mb-4 font-bold">
          <button onClick={() => setActiveTab("points")} className={`pb-2 ${activeTab === "points" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}>Point History</button>
          <button onClick={() => setActiveTab("coupon")} className={`pb-2 ${activeTab === "coupon" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}>Coupon History</button>
          <button onClick={() => setActiveTab("redeem")} className={`pb-2 ${activeTab === "redeem" ? "border-b-2 border-[#055860] text-[#055860]" : "text-gray-500"}`}>Redeem History</button>
        </div>

        <div className="overflow-x-hidden h-[600px]">
          {activeTab === "points" && (
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-[#055860] text-white">
                <tr>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-center">Installed</th>
                  <th className="p-3 text-center">Subscribed</th>
                  <th className="p-3 text-center">Point</th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayUser.pointHistory.length > 0 ? (
                  currentDisplayUser.pointHistory.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-6 flex items-center gap-2">
                        <img src={`https://randomuser.me/api/portraits/men/${10 + index}.jpg`} className="w-8 h-8 rounded-full" alt="user" />
                        {item.user}
                      </td>
                      <td className="p-3 text-center">{item.installed}<div className="text-xs text-gray-400">11:35 PM</div></td>
                      <td className="p-3 text-center">{item.subscribed}<div className="text-xs text-gray-400">11:35 PM</div></td>
                      <td className="p-3 text-center">{item.point}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" className="p-6 text-center text-gray-500">No point history available</td></tr>
                )}
              </tbody>
            </table>
          )}

          {activeTab === "coupon" && (
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-[#055860] text-white">
                <tr>
                  <th className="p-3 text-center">Coupon</th>
                  <th className="p-3 text-center">Date</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayUser.couponHistory.length > 0 ? (
                  currentDisplayUser.couponHistory.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-6"><div className="flex flex-col items-center justify-center gap-2"><img src={Coupon} className="w-8 h-8" alt="coupon" /></div></td>
                      <td className="p-3 text-center">{item.date}<div className="text-xs text-gray-400">11:35 PM</div></td>
                      <td className="p-3 text-center">
                        <span className={`px-8 py-2 text-xs font-medium ${item.status === "Redeemed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700 px-[40px] py-2"}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="3" className="p-6 text-center text-gray-500">No coupon history available</td></tr>
                )}
              </tbody>
            </table>
          )}

          {activeTab === "redeem" && (
            <table className="h-[60px] w-full border border-gray-200 text-sm">
              <thead className="bg-[#055860] text-white">
                <tr>
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-center">Date</th>
                  <th className="p-3 text-center">Point</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentDisplayUser.redeemHistory.length > 0 ? (
                  currentDisplayUser.redeemHistory.map((item, index) => {
                    const statusColors = {
                      Successful: "bg-green-100 text-green-700",
                      Pending:    "bg-yellow-100 text-yellow-700 px-[40px] py-1",
                      Cancelled:  "bg-red-100 text-red-700 px-[35px] py-1",
                    };
                    return (
                      <tr key={index} className="border-b">
                        <td className="p-6 text-left font-semibold">{index + 1}</td>
                        <td className="p-3 text-center">{item.date}<div className="text-xs text-gray-400">11:35 PM</div></td>
                        <td className="p-3 text-center font-semibold">{item.point}</td>
                        <td className="p-3 text-center">
                          <span className={`px-8 py-2 text-xs font-medium ${statusColors[item.status]}`}>{item.status}</span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr><td colSpan="4" className="p-6 text-center text-gray-500">No redeem history available</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}