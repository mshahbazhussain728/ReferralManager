
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Search,
//   Send,
//   Paperclip,
//   Menu,
//   MoreVertical,
//   Download,
//   X,
//   CheckCheck,
//   Check,
//   WifiOff,
//   RefreshCw,
// } from "lucide-react";
// import Sidebar from "./Sidebar.jsx";
// import { useLocation } from "react-router-dom";
// import io from "socket.io-client";

// const SOCKET_URL = "https://apis.famocare.com";

// // ─── Scroll To Bottom Icon ─────────────────────────────────────────────────
// const ScrollToBottomIcon = ({ iconClassName = "#9E9E9E" }) => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M3 6L10 14L17 6"
//       stroke={iconClassName}
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// // ─── Helpers ──────────────────────────────────────────────────────────────────
// const formatTime = (dateStr) =>
//   new Date(dateStr || Date.now()).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

// const mapApiMessage = (m, myUserId) => ({
//   id: m.id || m._id || Date.now(),
//   text: m.message || m.text || "",
//   createdAt: m.createdAt,
//   time: formatTime(m.createdAt),
//   sender: String(m.senderId) === String(myUserId) ? "me" : "other",
//   messageType:
//     m.messageType || (m.message?.startsWith("http") ? "image" : "text"),
//   imageUrl: m.messageType === "image" ? m.message : null,
//   file: m.file || null,
//   status: m.status || "sent",
//   optimistic: false,
// });

// // ─── Component ────────────────────────────────────────────────────────────────
// const PaymentRequestChat = () => {
//   const location = useLocation();
//   const userData = location.state || {};

//   const [myUserId, setMyUserId] = useState(null);
//   const [isLoadingManager, setIsLoadingManager] = useState(true);

//   const redeemId = userData.redeemId;
//   const userIdFromState = userData.userId;
//   const isUserScrollingRef = useRef(false);

//   useEffect(() => {
//     if (!redeemId) {
//       setIsLoadingManager(false);
//       return;
//     }

//     const fetchManagerId = async () => {
//       try {
//         const token =
//           localStorage.getItem("accessToken") ||
//           localStorage.getItem("token") ||
//           "";
//         const res = await fetch(
//           `https://apis.famocare.com/api/referralsystem/referrals/redeem/history?uid=${userIdFromState}&sort=createdAt&order=desc&page=1&size=10`,
//           {
//             headers: token ? { Authorization: `Bearer ${token}` } : {},
//           },
//         );

//         const json = await res.json();

//         if (json.success && json.data && json.data.length > 0) {
//           const matchingItem = json.data.find((item) => item.id === redeemId);
//           const managerIdFromApi =
//             matchingItem?.managerId ||
//             (matchingItem?.manager && matchingItem.manager.id);

//           if (managerIdFromApi) {
//             setMyUserId(managerIdFromApi);
//           } else {
//             setMyUserId(null);
//           }
//         }
//       } catch (err) {
//         setMyUserId(null);
//       } finally {
//         setIsLoadingManager(false);
//       }
//     };

//     fetchManagerId();
//   }, [redeemId, userIdFromState]);

//   const getAvatarUrl = (img) => {
//     if (!img) return "";
//     if (typeof img !== "string") return "";
//     if (img.startsWith("http://") || img.startsWith("https://")) return img;
//     return `https://apis.famocare.com/uploads/${img}`;
//   };

//   const chatUser = {
//     name: userData.userName || userData.name || "Unknown User",
//     avatar: getAvatarUrl(userData.userImage || userData.imageUrl),
//     points: userData.points || 0,
//     date: userData.createdAt || "N/A",
//     redeemId: redeemId,
//     userId: userIdFromState,
//   };

//   // ── State ──────────────────────────────────────────────────────────────────
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [messageInput, setMessageInput] = useState("");
//   const [chatMessages, setChatMessages] = useState([]);
//   const [showOptions, setShowOptions] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [actionLoading, setActionLoading] = useState(false);
//   const [actionError, setActionError] = useState("");
//   const [isChatClosed, setIsChatClosed] = useState(false);
//   const [tempStatusMsg, setTempStatusMsg] = useState("");
//   const [isLoadingHistory, setIsLoadingHistory] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isUserOnline, setIsUserOnline] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showScrollToTop, setShowScrollToTop] = useState(false);
//   const [userLastSeen, setUserLastSeen] = useState(null);

//   const fileInputRef = useRef(null);
//   const [showScrollToBottom, setShowScrollToBottom] = useState(false);
//   const [hasInitialScrollDone, setHasInitialScrollDone] = useState(false);
//   const [chatStatus, setChatStatus] = useState(
//     userData.status === "active"
//       ? "inProgress"
//       : userData.status || "inProgress",
//   );

//   // ── Refs ───────────────────────────────────────────────────────────────────
//   const messagesEndRef = useRef(null);
//   const tempStatusTimeoutRef = useRef(null);
//   const chatClosedTimeoutRef = useRef(null);
//   const inputRef = useRef(null);
//   const socketRef = useRef(null);
//   const typingTimeoutRef = useRef(null);
//   const scrollContainerRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   };

//   const getLastSeenText = (lastSeen) => {
//     if (!lastSeen) return "Last seen recently";
//     const date = new Date(lastSeen);
//     const now = new Date();
//     const isToday = date.toDateString() === now.toDateString();
//     const yesterday = new Date();
//     yesterday.setDate(now.getDate() - 1);
//     const isYesterday = date.toDateString() === yesterday.toDateString();
//     const time = date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//     if (isToday) return `Last seen today at ${time}`;
//     if (isYesterday) return `Last seen yesterday at ${time}`;
//     const datePart = date.toLocaleDateString([], {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//     return `Last seen on ${datePart} at ${time}`;
//   };

//   // ── Socket Setup ───────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (!myUserId || !chatUser.userId || !redeemId || isLoadingManager) {
//       return;
//     }

//     if (socketRef.current) socketRef.current.disconnect();

//     const socket = io(SOCKET_URL, {
//       auth: { userId: myUserId },
//       transports: ["websocket", "polling"],
//       reconnection: true,
//       reconnectionAttempts: 10,
//       reconnectionDelay: 1000,
//     });

//     socketRef.current = socket;

//     const payload = {
//       senderId: myUserId,
//       receiverId: chatUser.userId,
//       redeemId: redeemId,
//     };

//     socket.emit("joinChat", payload);
//     socket.emit("fetchMessages", payload);
//     socket.emit("userOnline", { userId: myUserId, senderType: "manager" });
//     socket.emit("getUserStatus", { userId: chatUser.userId, senderType: "user" });

//     socket.on("connect", () => {});
//     socket.on("disconnect", () => {});

//     socket.on("previousMessages", (messages) => {
//       const formatted = (messages || []).map((msg) =>
//         mapApiMessage(msg, myUserId),
//       );
//       setChatMessages(formatted);
//       setIsLoadingHistory(false);
//     });

//     socket.on("receiveMessage", (msg) => {
//       const formatted = mapApiMessage(msg, myUserId);
//       setChatMessages((prev) => {
//         const tempIndex = prev.findIndex(
//           (m) => m.optimistic && m.text === formatted.text,
//         );
//         if (tempIndex !== -1) {
//           const updated = [...prev];
//           updated[tempIndex] = { ...formatted, status: "sent" };
//           return updated;
//         }
//         if (!prev.some((m) => m.id === formatted.id)) {
//           return [...prev, formatted];
//         }
//         return prev;
//       });
//     });

//     socket.on("chatStatusUpdated", (data) => {
//       if (String(data.redeemId) === String(redeemId)) {
//         setChatStatus(data.status);
//         if (data.status === "resolved") {
//           setIsChatClosed(true);
//         }
//       }
//     });

//     socket.on("userTyping", ({ senderId }) => {
//       if (String(senderId) === String(chatUser.userId)) setIsTyping(true);
//     });

//     socket.on("userStoppedTyping", ({ senderId }) => {
//       if (String(senderId) === String(chatUser.userId)) setIsTyping(false);
//     });

//     socket.on("userStatusChanged", (data) => {
//       if (String(data?.userId) === String(chatUser.userId)) {
//         setIsUserOnline(data.status === "online");
//         if (data.lastSeen) {
//           setUserLastSeen(data.lastSeen);
//         }
//       }
//     });

//     socket.on("userOnline", (data) => {
//       if (String(data?.userId) === String(chatUser.userId))
//         setIsUserOnline(true);
//     });

//     socket.on("userOffline", (data) => {
//       if (String(data?.userId) === String(chatUser.userId))
//         setIsUserOnline(false);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [myUserId, chatUser.userId, redeemId, isLoadingManager]);

//   const handleStatusChange = async (action) => {
//     setShowOptions(false);
//     setActionError("");
//     if (chatStatus !== "inProgress") {
//       setActionError("Only in-progress requests can be resolved.");
//       return;
//     }
//     if (!chatUser.redeemId) {
//       setActionError("Payment ID not found.");
//       return;
//     }
//     setActionLoading(true);
//     try {
//       const token = localStorage.getItem("accessToken") || "";
//       const res = await fetch(
//         "https://apis.famocare.com/api/referralsystem/payments/payment-action",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             ...(token && { Authorization: `Bearer ${token}` }),
//           },
//           body: JSON.stringify({ id: chatUser.redeemId, action }),
//         },
//       );
//       const data = await res.json();
//       if (data.success) {
//         setChatStatus("resolved");
//         socketRef.current?.emit("updateChatStatus", {
//           redeemId: chatUser.redeemId,
//           status: "resolved",
//           senderId: myUserId,
//           receiverId: chatUser.userId,
//         });
//         setTempStatusMsg(`Chat has been marked as ${action}`);
//         if (tempStatusTimeoutRef.current)
//           clearTimeout(tempStatusTimeoutRef.current);
//         if (chatClosedTimeoutRef.current)
//           clearTimeout(chatClosedTimeoutRef.current);
//         tempStatusTimeoutRef.current = setTimeout(
//           () => setTempStatusMsg(""),
//           3000,
//         );
//         chatClosedTimeoutRef.current = setTimeout(
//           () => setIsChatClosed(true),
//           3000,
//         );
//       } else {
//         setActionError(data.message || "Failed to update status.");
//       }
//     } catch {
//       setActionError("Network error.");
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setUploadedFile(file);
//       setMessageInput("");
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const removeUploadedFile = () => {
//     setUploadedFile(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async () => {
//     if (isChatClosed || isSending) return;
//     if (uploadedFile) {
//       await uploadAndSendFile(uploadedFile, messageInput.trim());
//     } else if (messageInput.trim()) {
//       const text = messageInput.trim();
//       socketRef.current?.emit("sendMessage", {
//         senderId: myUserId,
//         receiverId: chatUser.userId,
//         redeemId: redeemId,
//         message: text,
//         senderType: "manager",
//         messageType: "text",
//         managerId: myUserId,
//       });
//     }
//     setMessageInput("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const formatTopDate = (dateStr) => {
//     if (!dateStr) return "N/A";
//     const date = new Date(dateStr.replace(" ", "T"));
//     const today = new Date();
//     const yesterday = new Date();
//     yesterday.setDate(today.getDate() - 1);
//     if (date.toDateString() === today.toDateString()) return "Today";
//     if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
//     return date.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   useEffect(() => {
//     if (chatStatus === "resolved") {
//       setIsChatClosed(true);
//     } else {
//       setIsChatClosed(false);
//     }
//   }, [chatStatus]);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
//       const hasScroll = scrollHeight > clientHeight;
//       isUserScrollingRef.current = distanceFromBottom > 150;
//       if (hasScroll) {
//         setShowScrollToBottom(distanceFromBottom > 100);
//         setShowScrollToTop(scrollTop > 150);
//       } else {
//         setShowScrollToBottom(chatMessages.length > 8);
//         setShowScrollToTop(chatMessages.length > 15);
//       }
//     };
//     container.addEventListener("scroll", handleScroll, { passive: true });
//     setTimeout(handleScroll, 200);
//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, [chatMessages.length]);

//   const handleInputChange = (e) => {
//     if (uploadedFile || isUploading) return;
//     setMessageInput(e.target.value);
//     if (socketRef.current && redeemId) {
//       socketRef.current.emit("typing", {
//         senderId: myUserId,
//         receiverId: chatUser.userId,
//         redeemId: redeemId,
//       });
//       if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
//       typingTimeoutRef.current = setTimeout(() => {
//         if (socketRef.current && redeemId) {
//           socketRef.current.emit("stopTyping", {
//             senderId: myUserId,
//             receiverId: chatUser.userId,
//             redeemId: redeemId,
//           });
//         }
//       }, 1800);
//     }
//   };

//   const statusStyles = (() => {
//     switch (chatStatus) {
//       case "resolved":
//         return {
//           bgColor: "bg-green-100",
//           textColor: "text-green-600",
//           displayText: "RESOLVED",
//         };
//       default:
//         return {
//           bgColor: "bg-[#E0E0E0]",
//           textColor: "text-[#3887FD]",
//           displayText: "IN PROGRESS",
//         };
//     }
//   })();

//   const displayedMessages = searchQuery.trim()
//     ? chatMessages.filter((m) =>
//         m.text?.toLowerCase().includes(searchQuery.toLowerCase()),
//       )
//     : chatMessages;

//   const MessageStatusIcon = ({ status }) => {
//     if (status === "sending")
//       return <span className="text-[9px] text-gray-300 ml-1">●</span>;
//     if (status === "failed")
//       return <X size={10} className="text-red-400 ml-1" />;
//     if (status === "read")
//       return <CheckCheck size={10} className="text-blue-400 ml-1" />;
//     if (status === "delivered")
//       return <CheckCheck size={10} className="text-gray-300 ml-1" />;
//     return <Check size={10} className="text-gray-300 ml-1" />;
//   };

//   const uploadAndSendFile = async (file, accompanyingText = "") => {
//     if (!file || isUploading) return;
//     setIsUploading(true);
//     const formData = new FormData();
//     formData.append("image", file);
//     try {
//       const res = await fetch("https://apis.famocare.com/api/upload/image", {
//         method: "POST",
//         body: formData,
//       });
//       const result = await res.json();
//       if (result.success && result.data?.imageUrl) {
//         const imageUrl = result.data.imageUrl;
//         socketRef.current?.emit("sendMessage", {
//           senderId: myUserId,
//           receiverId: chatUser.userId,
//           redeemId: redeemId,
//           message: imageUrl,
//           senderType: "manager",
//           messageType: "image",
//           managerId: myUserId,
//         });
//       } else {
//         alert("Failed to upload image");
//       }
//     } catch (error) {
//       alert("Error uploading image");
//     } finally {
//       setIsUploading(false);
//       setUploadedFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container || chatMessages.length === 0) return;
//     const scrollNow = () => {
//       messagesEndRef.current?.scrollIntoView({
//         behavior: "auto",
//         block: "end",
//       });
//     };
//     if (!hasInitialScrollDone) {
//       setTimeout(() => {
//         scrollNow();
//         setHasInitialScrollDone(true);
//       }, 200);
//       return;
//     }
//     requestAnimationFrame(() => {
//       scrollToBottom();
//     });
//   }, [chatMessages.length, hasInitialScrollDone]);

//   // ─── RENDER ─────────────────────────────────────────────────────────────────
//   return (
//     <div className="h-screen flex bg-[#F5F6FA] overflow-hidden">
//       {/* Sidebar overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 min-[768px]:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* ✅ Responsive Sidebar — h-screen + sticky */}
//       <div className="hidden min-[768px]:block h-screen sticky top-0 flex-shrink-0">
//         <Sidebar isDrawer={false} />
//       </div>

//       <div
//         className={`fixed min-[768px]:hidden inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <Sidebar isDrawer={true} handleDrawer={() => setIsSidebarOpen(false)} />
//       </div>

//       {/* ✅ h-screen + overflow-hidden on content area */}
//       <div className="flex-1 flex flex-col h-screen overflow-hidden w-full min-w-0">

//         {/* Mobile Header */}
//         <div className="min-[768px]:hidden bg-[#055860] px-4 py-3 flex items-center justify-between flex-shrink-0">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
//             >
//               <Menu size={18} className="text-[#055860]" />
//             </button>
//             <h1 className="text-base sm:text-lg font-semibold text-white truncate">
//               Payment Request Chat
//             </h1>
//           </div>
//           <img
//             src={chatUser.avatar}
//             className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0 object-cover"
//             alt={chatUser.name}
//             onError={(e) =>
//               (e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff`)
//             }
//           />
//         </div>

//         {/* ✅ flex-1 + min-h-0 allows inner scroll without growing */}
//         <div className="flex-1 flex items-stretch p-3 sm:p-4 md:p-6 min-h-0 overflow-hidden">
//           <div className="w-full max-w-full lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col bg-white rounded-xl shadow overflow-hidden mx-auto min-h-0">

//             {/* Chat Header — always side by side, fully responsive */}
//             <div className="border-b flex-shrink-0">
//               <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-3 md:py-4">
//                 <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
//                   <div className="relative flex-shrink-0">
//                     <img
//                       src={chatUser.avatar}
//                       className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
//                       alt={chatUser.name}
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff`;
//                       }}
//                     />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <p className="text-start font-semibold text-xs md:text-sm truncate">
//                       {chatUser.name}
//                     </p>
//                     <p className="text-[10px] md:text-xs flex items-center gap-1.5 text-gray-500">
//                       {isTyping ? (
//                         <span className="text-blue-500 font-medium">typing...</span>
//                       ) : isUserOnline ? (
//                         <span className="flex items-center gap-1.5 text-green-600 font-medium">
//                           <span className="relative flex h-2 w-2">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
//                           </span>
//                           Online
//                         </span>
//                       ) : (
//                         <span className="text-gray-400">
//                           {userLastSeen ? getLastSeenText(userLastSeen) : "Last seen recently"}
//                         </span>
//                       )}
//                     </p>
//                   </div>
//                 </div>

//                 {/* ✅ Search — always side by side, responsive width */}
//                 <div className="flex items-center gap-2 relative flex-shrink-0">
//                   <div className="flex items-center gap-1.5 border border-gray-300 rounded-lg px-2 py-1.5 hover:border-gray-400 focus-within:border-[#055860] transition-colors">
//                     <Search size={14} className="text-gray-500 flex-shrink-0" />
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-[80px] sm:w-[120px] md:w-[160px] outline-none text-xs bg-transparent placeholder-gray-400"
//                     />
//                     {searchQuery && (
//                       <button onClick={() => setSearchQuery("")}>
//                         <X size={12} className="text-gray-400 hover:text-gray-600" />
//                       </button>
//                     )}
//                   </div>

//                   <div className="relative">
//                     {actionLoading ? (
//                       <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
//                     ) : (
//                       <MoreVertical
//                         size={16}
//                         className="text-gray-500 flex-shrink-0 cursor-pointer hover:text-gray-700"
//                         onClick={() =>
//                           !isChatClosed && setShowOptions(!showOptions)
//                         }
//                       />
//                     )}

//                     {showOptions && (
//                       <div className="absolute right-0 top-6 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//                         <ul className="py-1">
//                           {chatStatus === "inProgress" ? (
//                             <li
//                               onClick={() => handleStatusChange("resolved")}
//                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-green-600 font-medium"
//                             >
//                               Mark as Resolved
//                             </li>
//                           ) : (
//                             <li className="px-4 py-2 text-xs text-gray-400 cursor-not-allowed">
//                               Already resolved
//                             </li>
//                           )}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {actionError && (
//                 <div className="px-3 sm:px-4 md:px-5 py-2 bg-red-50 border-t border-red-100 flex items-center justify-between">
//                   <p className="text-xs text-red-500">{actionError}</p>
//                   <button onClick={() => setActionError("")}>
//                     <X size={12} className="text-red-400" />
//                   </button>
//                 </div>
//               )}

//               <div className="px-3 sm:px-4 md:px-5 py-2 md:py-2.5 border-t border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="space-y-0.5">
//                     <p className="text-start text-[10px] md:text-xs text-[#055860] font-bold">
//                       Status
//                     </p>
//                     <p className="text-[10px] md:text-xs text-gray-500">
//                       Your status is {chatStatus}
//                     </p>
//                   </div>
//                   <p
//                     className={`inline-block text-[10px] md:text-xs font-medium ${statusStyles.textColor} border ${statusStyles.bgColor} px-2 py-[5px] rounded`}
//                   >
//                     {statusStyles.displayText}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* ✅ flex-1 + min-h-0 + overflow-y-auto = messages scroll */}
//             <div
//               ref={scrollContainerRef}
//               className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-4 md:px-5 py-3 md:py-4 space-y-3 md:space-y-4 bg-[#F7F8FA]"
//             >
//               <div className="text-center text-[10px] md:text-xs text-gray-400">
//                 {chatMessages.length > 0
//                   ? formatTopDate(chatMessages[0].createdAt)
//                   : "No messages"}
//               </div>

//               {isLoadingHistory && (
//                 <div className="flex flex-col items-center justify-center py-12 gap-2">
//                   <div className="w-6 h-6 border-2 border-[#055860] border-t-transparent rounded-full animate-spin" />
//                   <p className="text-xs text-gray-400">Loading chat history</p>
//                 </div>
//               )}

//               {!isLoadingHistory && displayedMessages.length === 0 && (
//                 <div className="flex flex-col items-center justify-center py-12 gap-2">
//                   <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
//                     <Send size={20} className="text-gray-300" />
//                   </div>
//                   <p className="text-xs text-gray-400">
//                     {searchQuery
//                       ? "No messages match your search."
//                       : "No messages yet. Start the conversation!"}
//                   </p>
//                 </div>
//               )}

//               {!isLoadingHistory &&
//                 displayedMessages.map((msg) => (
//                   <div
//                     key={msg.id}
//                     className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
//                   >
//                     {msg.sender === "other" && (
//                       <img
//                         src={chatUser.avatar}
//                         className="w-6 h-6 rounded-full object-cover flex-shrink-0 mr-2 mt-auto mb-1"
//                         alt={chatUser.name}
//                         onError={(e) => {
//                           e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff&size=32`;
//                         }}
//                       />
//                     )}

//                     <div
//                       className={`max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%] rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm transition-all text-left ${
//                         msg.sender === "me"
//                           ? "bg-[#0F5D63] text-white rounded-br-none"
//                           : "bg-[#F4F4F4] text-[#000000] rounded-bl-none shadow"
//                       }`}
//                     >
//                       {msg.messageType === "image" ||
//                       (msg.text &&
//                         (msg.text.startsWith("http") ||
//                           msg.text.includes("/uploads/"))) ? (
//                         <div className="mb-2 rounded-lg overflow-hidden">
//                           <img
//                             src={msg.text || msg.imageUrl}
//                             alt="Sent image"
//                             className="max-w-full max-h-[320px] object-contain rounded-lg"
//                             onClick={() =>
//                               window.open(msg.text || msg.imageUrl, "_blank")
//                             }
//                             onError={(e) => {
//                               e.target.style.display = "none";
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         msg.text && (
//                           <p className="break-words leading-relaxed text-left">
//                             {searchQuery
//                               ? msg.text
//                                   .split(new RegExp(`(${searchQuery})`, "gi"))
//                                   .map((part, i) =>
//                                     part.toLowerCase() ===
//                                     searchQuery.toLowerCase() ? (
//                                       <span
//                                         key={i}
//                                         className="bg-yellow-200 text-black px-1 rounded"
//                                       >
//                                         {part}
//                                       </span>
//                                     ) : (
//                                       part
//                                     ),
//                                   )
//                               : msg.text}
//                           </p>
//                         )
//                       )}

//                       <p
//                         className={`text-[9px] md:text-[10px] mt-1 text-right ${
//                           msg.sender === "me" ? "text-gray-200" : "text-[#A3A3A3]"
//                         }`}
//                       >
//                         {msg.time}
//                       </p>
//                     </div>
//                   </div>
//                 ))}

//               {tempStatusMsg && (
//                 <div className="text-center my-4 animate-fadeInOut">
//                   <div className="inline-block bg-blue-100 rounded-full px-4 py-2">
//                     <p className="text-xs text-blue-700 font-medium">
//                       {tempStatusMsg}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>

//             {/* ✅ Scroll to Bottom Button — inline SVG */}
//             {showScrollToBottom && (
//               <button
//                 onClick={scrollToBottom}
//                 className="fixed bottom-[90px] md:bottom-[110px] right-6 sm:right-8 xl:right-12 z-[100]
//                   bg-[#F4F4F4] hover:bg-[#c6c9c9]
//                   p-2 rounded-full
//                   shadow-[0_8px_30px_rgba(0,0,0,0.35)]
//                   transition-all duration-300
//                   flex items-center justify-center border border-white/80"
//               >
//                 <ScrollToBottomIcon iconClassName="#9E9E9E" />
//               </button>
//             )}

//             {/* File Upload Preview */}
//             {uploadedFile && (
//               <div className="border-t border-gray-200 px-3 sm:px-4 md:px-5 py-2 bg-gray-50 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="p-1.5 bg-blue-100 rounded">
//                     <Download size={14} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-medium truncate max-w-[150px] sm:max-w-[250px]">
//                       {uploadedFile.name}
//                     </p>
//                     <p className="text-[10px] text-gray-500">
//                       {uploadedFile.size}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={removeUploadedFile}
//                   className="p-1 hover:bg-gray-200 rounded-full transition-colors"
//                 >
//                   <X size={14} className="text-gray-500" />
//                 </button>
//               </div>
//             )}

//             {/* Message Input */}
//             <div className="border-t px-3 sm:px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-2 bg-white flex-shrink-0">
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileUpload}
//                 accept="image/*"
//                 className="hidden"
//               />

//               <button
//                 onClick={triggerFileInput}
//                 disabled={isChatClosed || isUploading}
//                 className={`p-2 rounded-full transition-colors flex-shrink-0 ${
//                   isChatClosed || isUploading
//                     ? "opacity-40 cursor-not-allowed"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 <Paperclip size={18} className="text-gray-500" />
//               </button>

//               <input
//                 ref={inputRef}
//                 placeholder={
//                   uploadedFile
//                     ? "Image selected - Send or remove image"
//                     : isChatClosed
//                       ? "Chat is closed"
//                       : "Type a message…"
//                 }
//                 value={messageInput}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 disabled={isChatClosed || isUploading || !!uploadedFile}
//                 className={`flex-1 outline-none text-sm px-4 py-2.5 bg-gray-100 rounded-full min-w-0 transition-all focus:bg-gray-50 ${
//                   isChatClosed || uploadedFile
//                     ? "cursor-not-allowed opacity-60"
//                     : ""
//                 }`}
//               />

//               <button
//                 onClick={handleSendMessage}
//                 disabled={
//                   (!messageInput.trim() && !uploadedFile) ||
//                   isChatClosed ||
//                   isSending ||
//                   isUploading
//                 }
//                 className={`p-3 rounded-full transition-all flex-shrink-0 ${
//                   (messageInput.trim() || uploadedFile) &&
//                   !isChatClosed &&
//                   !isUploading
//                     ? "bg-[#6C2BD9] hover:bg-[#5a24b5] text-white"
//                     : "bg-gray-300 cursor-not-allowed"
//                 }`}
//               >
//                 {isSending || isUploading ? (
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 ) : (
//                   <Send size={18} />
//                 )}
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {showOptions && (
//         <div
//           className="fixed inset-0 z-30"
//           onClick={() => setShowOptions(false)}
//         />
//       )}

//       <style>{`
//         @keyframes fadeInOut {
//           0% { opacity: 0; transform: translateY(4px); }
//           10% { opacity: 1; transform: translateY(0); }
//           90% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-4px); }
//         }
//         .animate-fadeInOut { animation: fadeInOut 3s ease-in-out forwards; }
//       `}</style>
//     </div>
//   );
// };

// export default PaymentRequestChat;




// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   Search,
// //   Send,
// //   Paperclip,
// //   Menu,
// //   MoreVertical,
// //   Download,
// //   X,
// //   CheckCheck,
// //   Check,
// //   WifiOff,
// //   RefreshCw,
// // } from "lucide-react";
// // import Sidebar from "./Sidebar.jsx";
// // import { useLocation } from "react-router-dom";
// // import io from "socket.io-client";

// // const SOCKET_URL = "https://apis.famocare.com";

// // const formatTime = (dateStr) =>
// //   new Date(dateStr || Date.now()).toLocaleTimeString([], {
// //     hour: "2-digit",
// //     minute: "2-digit",
// //   });

// // const mapApiMessage = (m, myUserId) => ({
// //   id:          m.id || m._id || Date.now(),
// //   text:        m.message || m.text || "",
// //   createdAt:   m.createdAt,
// //   time:        formatTime(m.createdAt),
// //   sender:      String(m.senderId) === String(myUserId) ? "me" : "other",
// //   messageType: m.messageType || (m.message?.startsWith("http") ? "image" : "text"),
// //   imageUrl:    m.messageType === "image" ? m.message : null,
// //   file:        m.file || null,
// //   status:      m.status || "sent",
// //   optimistic:  false,
// // });

// // const PaymentRequestChat = () => {
// //   const location = useLocation();
// //   const userData = location.state || {};

// //   const [myUserId,         setMyUserId]         = useState(null);
// //   const [isLoadingManager, setIsLoadingManager] = useState(true);

// //   const redeemId        = userData.redeemId;
// //   const userIdFromState = userData.userId;
// //   const isUserScrollingRef = useRef(false);

// //   useEffect(() => {
// //     if (!redeemId) { setIsLoadingManager(false); return; }
// //     const fetchManagerId = async () => {
// //       try {
// //         const token = localStorage.getItem("accessToken") || localStorage.getItem("token") || "";
// //         const res   = await fetch(
// //           `https://apis.famocare.com/api/referralsystem/referrals/redeem/history?uid=${userIdFromState}&sort=createdAt&order=desc&page=1&size=10`,
// //           { headers: token ? { Authorization: `Bearer ${token}` } : {} },
// //         );
// //         const json = await res.json();
// //         if (json.success && json.data?.length > 0) {
// //           const matchingItem     = json.data.find((item) => item.id === redeemId);
// //           const managerIdFromApi = matchingItem?.managerId || (matchingItem?.manager && matchingItem.manager.id);
// //           setMyUserId(managerIdFromApi || null);
// //         }
// //       } catch (err) { console.error("Failed to fetch manager ID:", err); setMyUserId(null); }
// //       finally       { setIsLoadingManager(false); }
// //     };
// //     fetchManagerId();
// //   }, [redeemId, userIdFromState]);

// //   const getAvatarUrl = (img) => {
// //     if (!img || typeof img !== "string") return "";
// //     if (img.startsWith("http://") || img.startsWith("https://")) return img;
// //     return `https://apis.famocare.com/uploads/${img}`;
// //   };

// //   const chatUser = {
// //     name:     userData.userName || userData.name || "Unknown User",
// //     avatar:   getAvatarUrl(userData.userImage || userData.imageUrl),
// //     points:   userData.points   || 0,
// //     date:     userData.createdAt || "N/A",
// //     redeemId: redeemId,
// //     userId:   userIdFromState,
// //   };

// //   const [isSidebarOpen,      setIsSidebarOpen]      = useState(false);
// //   const [messageInput,       setMessageInput]       = useState("");
// //   const [chatMessages,       setChatMessages]       = useState([]);
// //   const [showOptions,        setShowOptions]        = useState(false);
// //   const [uploadedFile,       setUploadedFile]       = useState(null);
// //   const [actionLoading,      setActionLoading]      = useState(false);
// //   const [actionError,        setActionError]        = useState("");
// //   const [isChatClosed,       setIsChatClosed]       = useState(false);
// //   const [tempStatusMsg,      setTempStatusMsg]      = useState("");
// //   const [isLoadingHistory,   setIsLoadingHistory]   = useState(true);
// //   const [searchQuery,        setSearchQuery]        = useState("");
// //   const [isSending,          setIsSending]          = useState(false);
// //   const [isTyping,           setIsTyping]           = useState(false);
// //   const [isUserOnline,       setIsUserOnline]       = useState(false);
// //   const [isUploading,        setIsUploading]        = useState(false);
// //   const [showScrollToBottom, setShowScrollToBottom] = useState(false);
// //   const [showScrollToTop,    setShowScrollToTop]    = useState(false);
// //   const [userLastSeen,       setUserLastSeen]       = useState(null);
// //   const [hasInitialScrollDone, setHasInitialScrollDone] = useState(false);
// //   const [chatStatus, setChatStatus] = useState(
// //     userData.status === "active" ? "inProgress" : userData.status || "inProgress",
// //   );

// //   const fileInputRef         = useRef(null);
// //   const messagesEndRef       = useRef(null);
// //   const tempStatusTimeoutRef = useRef(null);
// //   const chatClosedTimeoutRef = useRef(null);
// //   const inputRef             = useRef(null);
// //   const socketRef            = useRef(null);
// //   const typingTimeoutRef     = useRef(null);
// //   const scrollContainerRef   = useRef(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
// //   };

// //   const getLastSeenText = (lastSeen) => {
// //     if (!lastSeen) return "Last seen recently";
// //     const date      = new Date(lastSeen);
// //     const now       = new Date();
// //     const yesterday = new Date();
// //     yesterday.setDate(now.getDate() - 1);
// //     const isToday     = date.toDateString() === now.toDateString();
// //     const isYesterday = date.toDateString() === yesterday.toDateString();
// //     const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
// //     if (isToday)     return `Last seen today at ${time}`;
// //     if (isYesterday) return `Last seen yesterday at ${time}`;
// //     const datePart = date.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" });
// //     return `Last seen on ${datePart} at ${time}`;
// //   };

// //   useEffect(() => {
// //     if (!myUserId || !chatUser.userId || !redeemId || isLoadingManager) return;
// //     if (socketRef.current) socketRef.current.disconnect();

// //     const socket = io(SOCKET_URL, {
// //       auth:                 { userId: myUserId },
// //       transports:           ["websocket", "polling"],
// //       reconnection:         true,
// //       reconnectionAttempts: 10,
// //       reconnectionDelay:    1000,
// //     });
// //     socketRef.current = socket;

// //     const payload = { senderId: myUserId, receiverId: chatUser.userId, redeemId };
// //     socket.emit("joinChat",      payload);
// //     socket.emit("fetchMessages", payload);
// //     socket.emit("userOnline",    { userId: myUserId,        senderType: "manager" });
// //     socket.emit("getUserStatus", { userId: chatUser.userId, senderType: "user"    });

// //     socket.on("connect",    () => console.log("✅ Socket Connected"));
// //     socket.on("disconnect", () => console.log("❌ Socket Disconnected"));

// //     socket.on("previousMessages", (messages) => {
// //       setChatMessages((messages || []).map((msg) => mapApiMessage(msg, myUserId)));
// //       setIsLoadingHistory(false);
// //     });

// //     socket.on("receiveMessage", (msg) => {
// //       const formatted = mapApiMessage(msg, myUserId);
// //       setChatMessages((prev) => {
// //         const tempIndex = prev.findIndex((m) => m.optimistic && m.text === formatted.text);
// //         if (tempIndex !== -1) { const updated = [...prev]; updated[tempIndex] = { ...formatted, status: "sent" }; return updated; }
// //         if (!prev.some((m) => m.id === formatted.id)) return [...prev, formatted];
// //         return prev;
// //       });
// //     });

// //     socket.on("userTyping",        ({ senderId }) => { if (String(senderId) === String(chatUser.userId)) setIsTyping(true);  });
// //     socket.on("userStoppedTyping", ({ senderId }) => { if (String(senderId) === String(chatUser.userId)) setIsTyping(false); });
// //     socket.on("userStatusChanged", (data) => {
// //       if (String(data?.userId) === String(chatUser.userId)) {
// //         setIsUserOnline(data.status === "online");
// //         if (data.lastSeen) setUserLastSeen(data.lastSeen);
// //       }
// //     });
// //     socket.on("userOnline",  (data) => { if (String(data?.userId) === String(chatUser.userId)) setIsUserOnline(true);  });
// //     socket.on("userOffline", (data) => { if (String(data?.userId) === String(chatUser.userId)) setIsUserOnline(false); });

// //     return () => { socket.disconnect(); };
// //   }, [myUserId, chatUser.userId, redeemId, isLoadingManager]);

// //   const handleStatusChange = async (action) => {
// //     setShowOptions(false);
// //     setActionError("");
// //     if (chatStatus !== "inProgress") { setActionError("Only in-progress requests can be resolved."); return; }
// //     if (!chatUser.redeemId)          { setActionError("Payment ID not found.");                      return; }
// //     setActionLoading(true);
// //     try {
// //       const token = localStorage.getItem("accessToken") || "";
// //       const res   = await fetch(
// //         "https://apis.famocare.com/api/referralsystem/payments/payment-action",
// //         {
// //           method:  "POST",
// //           headers: { "Content-Type": "application/json", ...(token && { Authorization: `Bearer ${token}` }) },
// //           body:    JSON.stringify({ id: chatUser.redeemId, action }),
// //         },
// //       );
// //       const data = await res.json();
// //       if (data.success) {
// //         setChatStatus("resolved");
// //         setTempStatusMsg(`Chat has been marked as ${action}`);
// //         if (tempStatusTimeoutRef.current) clearTimeout(tempStatusTimeoutRef.current);
// //         if (chatClosedTimeoutRef.current) clearTimeout(chatClosedTimeoutRef.current);
// //         tempStatusTimeoutRef.current = setTimeout(() => setTempStatusMsg(""),  3000);
// //         chatClosedTimeoutRef.current = setTimeout(() => setIsChatClosed(true), 3000);
// //       } else { setActionError(data.message || "Failed to update status."); }
// //     } catch { setActionError("Network error."); }
// //     finally  { setActionLoading(false); }
// //   };

// //   const handleFileUpload   = (e) => { const file = e.target.files?.[0]; if (file) { setUploadedFile(file); setMessageInput(""); } };
// //   const triggerFileInput   = () => { fileInputRef.current?.click(); };
// //   const removeUploadedFile = () => { setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; };

// //   const handleSendMessage = async () => {
// //     if (isChatClosed || isSending) return;
// //     if (uploadedFile) {
// //       await uploadAndSendFile(uploadedFile, messageInput.trim());
// //     } else if (messageInput.trim()) {
// //       socketRef.current?.emit("sendMessage", {
// //         senderId: myUserId, receiverId: chatUser.userId, redeemId,
// //         message: messageInput.trim(), senderType: "manager", messageType: "text", managerId: myUserId,
// //       });
// //     }
// //     setMessageInput("");
// //   };

// //   const handleKeyPress = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } };

// //   const formatTopDate = (dateStr) => {
// //     if (!dateStr) return "N/A";
// //     const date      = new Date(dateStr.replace(" ", "T"));
// //     const today     = new Date();
// //     const yesterday = new Date();
// //     yesterday.setDate(today.getDate() - 1);
// //     if (date.toDateString() === today.toDateString())     return "Today";
// //     if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
// //     return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
// //   };

// //   useEffect(() => {
// //     const container = scrollContainerRef.current;
// //     if (!container) return;
// //     const handleScroll = () => {
// //       const { scrollTop, scrollHeight, clientHeight } = container;
// //       const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
// //       isUserScrollingRef.current = distanceFromBottom > 150;
// //       setShowScrollToBottom(distanceFromBottom > 100);
// //       setShowScrollToTop(scrollTop > 150);
// //     };
// //     container.addEventListener("scroll", handleScroll, { passive: true });
// //     setTimeout(handleScroll, 200);
// //     return () => { container.removeEventListener("scroll", handleScroll); };
// //   }, [chatMessages.length]);

// //   const handleInputChange = (e) => {
// //     if (uploadedFile || isUploading) return;
// //     setMessageInput(e.target.value);
// //     if (socketRef.current && redeemId) {
// //       socketRef.current.emit("typing", { senderId: myUserId, receiverId: chatUser.userId, redeemId });
// //       if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
// //       typingTimeoutRef.current = setTimeout(() => {
// //         if (socketRef.current && redeemId)
// //           socketRef.current.emit("stopTyping", { senderId: myUserId, receiverId: chatUser.userId, redeemId });
// //       }, 1800);
// //     }
// //   };

// //   const statusStyles = (() => {
// //     switch (chatStatus) {
// //       case "resolved": return { bgColor: "bg-green-100", textColor: "text-green-600", displayText: "RESOLVED"    };
// //       default:         return { bgColor: "bg-[#E0E0E0]", textColor: "text-[#3887FD]", displayText: "IN PROGRESS" };
// //     }
// //   })();

// //   const displayedMessages = searchQuery.trim()
// //     ? chatMessages.filter((m) => m.text?.toLowerCase().includes(searchQuery.toLowerCase()))
// //     : chatMessages;

// //   const MessageStatusIcon = ({ status }) => {
// //     if (status === "sending")   return <span className="text-[9px] text-gray-300 ml-1">●</span>;
// //     if (status === "failed")    return <X size={10} className="text-red-400 ml-1" />;
// //     if (status === "read")      return <CheckCheck size={10} className="text-blue-400 ml-1" />;
// //     if (status === "delivered") return <CheckCheck size={10} className="text-gray-300 ml-1" />;
// //     return <Check size={10} className="text-gray-300 ml-1" />;
// //   };

// //   const uploadAndSendFile = async (file) => {
// //     if (!file || isUploading) return;
// //     setIsUploading(true);
// //     const formData = new FormData();
// //     formData.append("image", file);
// //     try {
// //       const res    = await fetch("https://apis.famocare.com/api/upload/image", { method: "POST", body: formData });
// //       const result = await res.json();
// //       if (result.success && result.data?.imageUrl) {
// //         socketRef.current?.emit("sendMessage", {
// //           senderId: myUserId, receiverId: chatUser.userId, redeemId,
// //           message: result.data.imageUrl, senderType: "manager", messageType: "image", managerId: myUserId,
// //         });
// //       } else { alert("Failed to upload image"); }
// //     } catch (error) { console.error("Upload error:", error); alert("Error uploading image"); }
// //     finally {
// //       setIsUploading(false);
// //       setUploadedFile(null);
// //       if (fileInputRef.current) fileInputRef.current.value = "";
// //     }
// //   };

// //   useEffect(() => {
// //     const container = scrollContainerRef.current;
// //     if (!container || chatMessages.length === 0) return;
// //     if (!hasInitialScrollDone) {
// //       setTimeout(() => {
// //         messagesEndRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
// //         setHasInitialScrollDone(true);
// //       }, 200);
// //       return;
// //     }
// //     requestAnimationFrame(() => { scrollToBottom(); });
// //   }, [chatMessages.length, hasInitialScrollDone]);

// //   return (
// //     // ✅ KEY FIX — h-screen + overflow-hidden stops sidebar from stretching
// //     <div className="h-screen flex bg-[#F5F6FA] overflow-hidden">

// //       {/* Sidebar overlay mobile */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 z-40 min-[768px]:hidden"
// //           onClick={() => setIsSidebarOpen(false)}
// //         />
// //       )}

// //       {/* ✅ KEY FIX — h-screen + sticky so sidebar never grows */}
// //       <div className="hidden min-[768px]:block h-screen sticky top-0 flex-shrink-0">
// //         <Sidebar isDrawer={false} />
// //       </div>

// //       {/* Mobile sidebar */}
// //       <div className={`fixed min-[768px]:hidden inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
// //         <Sidebar isDrawer={true} handleDrawer={() => setIsSidebarOpen(false)} />
// //       </div>

// //       {/* ✅ KEY FIX — h-screen + overflow-hidden on content area */}
// //       <div className="flex-1 flex flex-col h-screen overflow-hidden w-full min-w-0">

// //         {/* Mobile Header */}
// //         <div className="min-[768px]:hidden bg-[#055860] px-4 py-3 flex items-center justify-between flex-shrink-0">
// //           <div className="flex items-center gap-3">
// //             <button
// //               onClick={() => setIsSidebarOpen(true)}
// //               className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
// //             >
// //               <Menu size={18} className="text-[#055860]" />
// //             </button>
// //             <h1 className="text-base sm:text-lg font-semibold text-white truncate">
// //               Payment Request Chat
// //             </h1>
// //           </div>
// //           <img
// //             src={chatUser.avatar}
// //             className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0 object-cover"
// //             alt={chatUser.name}
// //             onError={(e) => (e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff`)}
// //           />
// //         </div>

// //         {/* ✅ KEY FIX — flex-1 + min-h-0 allows inner scroll without growing */}
// //         <div className="flex-1 flex items-stretch p-3 sm:p-4 md:p-6 min-h-0 overflow-hidden">
// //           <div className="w-full max-w-full lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col bg-white rounded-xl shadow overflow-hidden mx-auto min-h-0">

// //             {/* Chat Header — fixed, never scrolls */}
// //             <div className="border-b flex-shrink-0">
// //               <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-3 md:py-4">
// //                 <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
// //                   <div className="relative flex-shrink-0">
// //                     <img
// //                       src={chatUser.avatar}
// //                       className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
// //                       alt={chatUser.name}
// //                       onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff`; }}
// //                     />
// //                     <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${isUserOnline ? "bg-green-400" : "bg-gray-300"}`} />
// //                   </div>
// //                   <div className="min-w-0">
// //                     <p className="text-start font-semibold text-xs md:text-sm truncate">{chatUser.name}</p>
// //                     <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1">
// //                       {isUserOnline ? (
// //                         <span className="text-green-500">Online</span>
// //                       ) : (
// //                         <span className="flex items-center gap-1 text-gray-400">
// //                           <WifiOff size={9} />
// //                           {userLastSeen ? getLastSeenText(userLastSeen) : "Last seen recently"}
// //                         </span>
// //                       )}
// //                       {isTyping && <span className="text-blue-500 ml-1">typing...</span>}
// //                     </p>
// //                   </div>
// //                   {isChatClosed && (
// //                     <span className="ml-[190px] text-xs text-gray-500 font-medium whitespace-nowrap">· Chat Closed</span>
// //                   )}
// //                 </div>

// //                 <div className="flex items-center gap-2 relative flex-shrink-0">
// //                   <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400 focus-within:border-[#055860] transition-colors">
// //                     <Search size={16} className="text-gray-500 flex-shrink-0" />
// //                     <input
// //                       type="text"
// //                       placeholder="Search..."
// //                       value={searchQuery}
// //                       onChange={(e) => setSearchQuery(e.target.value)}
// //                       className="w-[90px] min-w-[100px] md:min-w-[160px] outline-none text-sm bg-transparent placeholder-gray-400"
// //                     />
// //                     {searchQuery && (
// //                       <button onClick={() => setSearchQuery("")}>
// //                         <X size={12} className="text-gray-400 hover:text-gray-600" />
// //                       </button>
// //                     )}
// //                   </div>
// //                   <div className="relative">
// //                     {actionLoading ? (
// //                       <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
// //                     ) : (
// //                       <MoreVertical
// //                         size={16}
// //                         className="text-gray-500 flex-shrink-0 cursor-pointer hover:text-gray-700"
// //                         onClick={() => !isChatClosed && setShowOptions(!showOptions)}
// //                       />
// //                     )}
// //                     {showOptions && (
// //                       <div className="absolute right-0 top-6 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
// //                         <ul className="py-1">
// //                           {chatStatus === "inProgress" ? (
// //                             <li onClick={() => handleStatusChange("resolved")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-green-600 font-medium">
// //                               Mark as Resolved
// //                             </li>
// //                           ) : (
// //                             <li className="px-4 py-2 text-xs text-gray-400 cursor-not-allowed">Already resolved</li>
// //                           )}
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>

// //               {actionError && (
// //                 <div className="px-3 sm:px-4 md:px-5 py-2 bg-red-50 border-t border-red-100 flex items-center justify-between">
// //                   <p className="text-xs text-red-500">{actionError}</p>
// //                   <button onClick={() => setActionError("")}><X size={12} className="text-red-400" /></button>
// //                 </div>
// //               )}

// //               <div className="px-3 sm:px-4 md:px-5 py-2 md:py-2.5 border-t border-gray-200">
// //                 <div className="flex items-center justify-between">
// //                   <div className="space-y-0.5">
// //                     <p className="text-start text-[10px] md:text-xs text-[#055860] font-bold">Status</p>
// //                     <p className="text-[10px] md:text-xs text-gray-500">Your status is {chatStatus}</p>
// //                   </div>
// //                   <p className={`inline-block text-[10px] md:text-xs font-medium ${statusStyles.textColor} border ${statusStyles.bgColor} px-2 py-[5px] rounded`}>
// //                     {statusStyles.displayText}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ✅ KEY FIX — flex-1 + min-h-0 + overflow-y-auto = messages scroll, nothing else grows */}
// //             <div
// //               ref={scrollContainerRef}
// //               className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-4 md:px-5 py-3 md:py-4 space-y-3 md:space-y-4 bg-[#F7F8FA]"
// //             >
// //               <div className="text-center text-[10px] md:text-xs text-gray-400">
// //                 {chatMessages.length > 0 ? formatTopDate(chatMessages[0].createdAt) : "No messages"}
// //               </div>

// //               {isLoadingHistory && (
// //                 <div className="flex flex-col items-center justify-center py-12 gap-2">
// //                   <div className="w-6 h-6 border-2 border-[#055860] border-t-transparent rounded-full animate-spin" />
// //                   <p className="text-xs text-gray-400">Loading messages…</p>
// //                 </div>
// //               )}

// //               {!isLoadingHistory && displayedMessages.length === 0 && (
// //                 <div className="flex flex-col items-center justify-center py-12 gap-2">
// //                   <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
// //                     <Send size={20} className="text-gray-300" />
// //                   </div>
// //                   <p className="text-xs text-gray-400">
// //                     {searchQuery ? "No messages match your search." : "No messages yet. Start the conversation!"}
// //                   </p>
// //                 </div>
// //               )}

// //               {searchQuery && displayedMessages.length > 0 && (
// //                 <div className="text-center">
// //                   <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
// //                     {displayedMessages.length} result{displayedMessages.length !== 1 ? "s" : ""} for "{searchQuery}"
// //                   </span>
// //                 </div>
// //               )}

// //               {!isLoadingHistory && displayedMessages.map((msg) => (
// //                 <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
// //                   {msg.sender === "other" && (
// //                     <img
// //                       src={chatUser.avatar}
// //                       className="w-6 h-6 rounded-full object-cover flex-shrink-0 mr-2 mt-auto mb-1"
// //                       alt={chatUser.name}
// //                       onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chatUser.name)}&background=055860&color=fff&size=32`; }}
// //                     />
// //                   )}
// //                   <div className="flex flex-col gap-0.5 max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%]">
// //                     <div className={`rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm ${
// //                       msg.sender === "me"
// //                         ? `bg-[#0F5D63] text-white rounded-br-none ${msg.status === "failed" ? "opacity-60" : ""}`
// //                         : "bg-white text-gray-700 rounded-bl-none shadow-sm"
// //                     } ${searchQuery && msg.text?.toLowerCase().includes(searchQuery.toLowerCase()) ? "ring-2 ring-yellow-300" : ""}`}>
// //                       {msg.messageType === "image" || (msg.text && (msg.text.startsWith("http") || msg.text.includes("/uploads/"))) ? (
// //                         <div className="mb-2 rounded-lg overflow-hidden">
// //                           <img
// //                             src={msg.text || msg.imageUrl}
// //                             alt="Sent image"
// //                             className="max-w-full max-h-[320px] object-contain rounded-lg cursor-pointer"
// //                             onClick={() => window.open(msg.text || msg.imageUrl, "_blank")}
// //                             onError={(e) => { e.target.style.display = "none"; }}
// //                           />
// //                         </div>
// //                       ) : (
// //                         msg.text && (
// //                           <p className="break-words leading-relaxed text-left">
// //                             {searchQuery
// //                               ? msg.text.split(new RegExp(`(${searchQuery})`, "gi")).map((part, i) =>
// //                                   part.toLowerCase() === searchQuery.toLowerCase()
// //                                     ? <mark key={i} className="bg-yellow-200 text-gray-800 rounded px-0.5">{part}</mark>
// //                                     : part
// //                                 )
// //                               : msg.text}
// //                           </p>
// //                         )
// //                       )}
// //                       <div className={`flex items-center justify-end gap-0.5 mt-1 ${msg.sender === "me" ? "text-gray-200" : "text-gray-400"}`}>
// //                         <p className="text-[9px] md:text-[10px]">{msg.time}</p>
// //                         {msg.sender === "me" && <MessageStatusIcon status={msg.status} />}
// //                       </div>
// //                     </div>
// //                     {msg.status === "failed" && msg.sender === "me" && (
// //                       <button
// //                         onClick={() => { setChatMessages((prev) => prev.filter((m) => m.id !== msg.id)); setMessageInput(msg.text); inputRef.current?.focus(); }}
// //                         className="text-[10px] text-red-500 hover:text-red-600 self-end flex items-center gap-1"
// //                       >
// //                         <RefreshCw size={9} /> Tap to retry
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               ))}

// //               {tempStatusMsg && (
// //                 <div className="text-center my-4 animate-fadeInOut">
// //                   <div className="inline-block bg-blue-100 rounded-full px-4 py-2">
// //                     <p className="text-xs text-blue-700 font-medium">{tempStatusMsg}</p>
// //                   </div>
// //                 </div>
// //               )}
// //               <div ref={messagesEndRef} />
// //             </div>

// //             {/* Scroll to bottom button */}
// //             {showScrollToBottom && (
// //               <button
// //                 onClick={scrollToBottom}
// //                 className="fixed bottom-[90px] md:bottom-[110px] right-6 sm:right-8 xl:right-12 z-[100] bg-[#F4F4F4] hover:bg-[#c6c9c9] p-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex items-center justify-center border border-white/80"
// //               >
// //                 <img src="/scroll-icon.svg" alt="scroll down" className="w-5 h-5 rotate-180" />
// //               </button>
// //             )}

// //             {/* File Upload Preview — fixed above input */}
// //             {uploadedFile && (
// //               <div className="border-t border-gray-200 px-3 sm:px-4 md:px-5 py-2 bg-gray-50 flex items-center justify-between flex-shrink-0">
// //                 <div className="flex items-center gap-2">
// //                   <div className="p-1.5 bg-blue-100 rounded"><Download size={14} className="text-blue-600" /></div>
// //                   <div>
// //                     <p className="text-xs font-medium truncate max-w-[150px] sm:max-w-[250px]">{uploadedFile.name}</p>
// //                     <p className="text-[10px] text-gray-500">{uploadedFile.size}</p>
// //                   </div>
// //                 </div>
// //                 <button onClick={removeUploadedFile} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
// //                   <X size={14} className="text-gray-500" />
// //                 </button>
// //               </div>
// //             )}

// //             {/* Message Input — always at bottom */}
// //             <div className="border-t px-3 sm:px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-2 bg-white flex-shrink-0">
// //               <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
// //               <button
// //                 onClick={triggerFileInput}
// //                 disabled={isChatClosed || isUploading}
// //                 className={`p-2 rounded-full transition-colors flex-shrink-0 ${isChatClosed || isUploading ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
// //               >
// //                 <Paperclip size={16} className="text-gray-500 md:w-[18px] md:h-[18px]" />
// //               </button>
// //               <input
// //                 ref={inputRef}
// //                 placeholder={uploadedFile ? "Image selected - Send or remove image" : isChatClosed ? "Chat is closed" : "Type a message…"}
// //                 value={messageInput}
// //                 onChange={handleInputChange}
// //                 onKeyPress={handleKeyPress}
// //                 disabled={isChatClosed || isUploading || !!uploadedFile}
// //                 className={`flex-1 outline-none text-xs sm:text-sm px-3 py-2 bg-gray-100 rounded-full min-w-0 transition-colors focus:bg-gray-50 ${isChatClosed || uploadedFile ? "cursor-not-allowed opacity-50" : ""}`}
// //               />
// //               <button
// //                 onClick={handleSendMessage}
// //                 disabled={(!messageInput.trim() && !uploadedFile) || isChatClosed || isSending || isUploading}
// //                 className={`p-2 md:p-2.5 rounded-full transition-all flex-shrink-0 ${
// //                   (messageInput.trim() || uploadedFile) && !isChatClosed && !isUploading
// //                     ? "bg-[#6C2BD9] hover:bg-[#5a24b5] active:scale-95 cursor-pointer"
// //                     : "bg-gray-300 cursor-not-allowed"
// //                 }`}
// //               >
// //                 {isSending || isUploading
// //                   ? <div className="w-[14px] h-[14px] border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                   : <Send size={14} className="text-white md:w-[16px] md:h-[16px]" />
// //                 }
// //               </button>
// //             </div>

// //           </div>
// //         </div>
// //       </div>

// //       {showOptions && <div className="fixed inset-0 z-30" onClick={() => setShowOptions(false)} />}

// //       <style>{`
// //         @keyframes fadeInOut {
// //           0%   { opacity: 0; transform: translateY(4px);  }
// //           10%  { opacity: 1; transform: translateY(0);    }
// //           90%  { opacity: 1; transform: translateY(0);    }
// //           100% { opacity: 0; transform: translateY(-4px); }
// //         }
// //         .animate-fadeInOut { animation: fadeInOut 3s ease-in-out forwards; }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default PaymentRequestChat;


/////use first


import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Send,
  Paperclip,
  Menu,
  MoreVertical,
  Download,
  X,
  CheckCheck,
  Check,
  WifiOff,
  RefreshCw,
} from "lucide-react";
import Sidebar from "./Sidebar.jsx";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const SOCKET_URL = "https://apis.famocare.com";

// ─── Scroll To Bottom Icon ─────────────────────────────────────────────────
const ScrollToBottomIcon = ({ iconClassName = "#9E9E9E" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6L10 14L17 6"
      stroke={iconClassName}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatTime = (dateStr) =>
  new Date(dateStr || Date.now()).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const mapApiMessage = (m, myUserId) => ({
  id: m.id || m._id || Date.now(),
  text: m.message || m.text || "",
  createdAt: m.createdAt,
  time: formatTime(m.createdAt),
  sender: String(m.senderId) === String(myUserId) ? "me" : "other",
  messageType:
    m.messageType || (m.message?.startsWith("http") ? "image" : "text"),
  imageUrl: m.messageType === "image" ? m.message : null,
  file: m.file || null,
  status: m.status || "sent",
  optimistic: false,
});

// ─── Component ────────────────────────────────────────────────────────────────
const PaymentRequestChat = () => {
  const location = useLocation();

  // ── Save location.state to sessionStorage whenever it has valid data ───────
  useEffect(() => {
    if (location.state?.redeemId) {
      sessionStorage.setItem("paymentRequestChat", JSON.stringify(location.state));
    }
  }, [location.state]);

  // ── Read from sessionStorage as fallback when location.state is lost ───────
  const savedState = (() => {
    try {
      const raw = sessionStorage.getItem("paymentRequestChat");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  })();

  // ── Merge: prefer live location.state, fallback to sessionStorage ──────────
  const userData = location.state?.redeemId ? location.state : savedState;

  const [myUserId, setMyUserId] = useState(null);
  const [isLoadingManager, setIsLoadingManager] = useState(true);

  const redeemId = userData.redeemId;
  const userIdFromState = userData.userId;
  const isUserScrollingRef = useRef(false);

  useEffect(() => {
    if (!redeemId) {
      setIsLoadingManager(false);
      return;
    }

    const fetchManagerId = async () => {
      try {
        const token =
          localStorage.getItem("accessToken") ||
          localStorage.getItem("token") ||
          "";
        const res = await fetch(
          `https://apis.famocare.com/api/referralsystem/referrals/redeem/history?uid=${userIdFromState}&sort=createdAt&order=desc&page=1&size=10`,
          {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          }
        );

        const json = await res.json();

        if (json.success && json.data && json.data.length > 0) {
          const matchingItem = json.data.find((item) => item.id === redeemId);
          const managerIdFromApi =
            matchingItem?.managerId ||
            (matchingItem?.manager && matchingItem.manager.id);

          if (managerIdFromApi) {
            setMyUserId(managerIdFromApi);
          } else {
            setMyUserId(null);
          }
        }
      } catch (err) {
        setMyUserId(null);
      } finally {
        setIsLoadingManager(false);
      }
    };

    fetchManagerId();
  }, [redeemId, userIdFromState]);

  const getAvatarUrl = (img) => {
    if (!img) return "";
    if (typeof img !== "string") return "";
    if (img.startsWith("http://") || img.startsWith("https://")) return img;
    return `https://apis.famocare.com/uploads/${img}`;
  };

  const chatUser = {
    name: userData.userName || userData.name || "Unknown User",
    avatar: getAvatarUrl(userData.userImage || userData.imageUrl),
    points: userData.points || 0,
    date: userData.createdAt || "N/A",
    redeemId: redeemId,
    userId: userIdFromState,
  };

  // ── State ──────────────────────────────────────────────────────────────────
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState("");
  const [isChatClosed, setIsChatClosed] = useState(false);
  const [tempStatusMsg, setTempStatusMsg] = useState("");
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isUserOnline, setIsUserOnline] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [userLastSeen, setUserLastSeen] = useState(null);

  const fileInputRef = useRef(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [hasInitialScrollDone, setHasInitialScrollDone] = useState(false);
  const [chatStatus, setChatStatus] = useState(
    userData.status === "active"
      ? "inProgress"
      : userData.status || "inProgress"
  );

  // ── Refs ───────────────────────────────────────────────────────────────────
  const messagesEndRef = useRef(null);
  const tempStatusTimeoutRef = useRef(null);
  const chatClosedTimeoutRef = useRef(null);
  const inputRef = useRef(null);
  const socketRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const getLastSeenText = (lastSeen) => {
    if (!lastSeen) return "Last seen recently";
    const date = new Date(lastSeen);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    if (isToday) return `Last seen today at ${time}`;
    if (isYesterday) return `Last seen yesterday at ${time}`;
    const datePart = date.toLocaleDateString([], {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return `Last seen on ${datePart} at ${time}`;
  };

  // ── Socket Setup ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!myUserId || !chatUser.userId || !redeemId || isLoadingManager) {
      return;
    }

    if (socketRef.current) socketRef.current.disconnect();

    const socket = io(SOCKET_URL, {
      auth: { userId: myUserId },
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    const payload = {
      senderId: myUserId,
      receiverId: chatUser.userId,
      redeemId: redeemId,
    };

    socket.emit("joinChat", payload);
    socket.emit("fetchMessages", payload);
    socket.emit("userOnline", { userId: myUserId, senderType: "manager" });
    socket.emit("getUserStatus", { userId: chatUser.userId, senderType: "user" });

    socket.on("connect", () => {});
    socket.on("disconnect", () => {});

    socket.on("previousMessages", (messages) => {
      const formatted = (messages || []).map((msg) =>
        mapApiMessage(msg, myUserId)
      );
      setChatMessages(formatted);
      setIsLoadingHistory(false);
    });

    socket.on("receiveMessage", (msg) => {
      const formatted = mapApiMessage(msg, myUserId);
      setChatMessages((prev) => {
        const tempIndex = prev.findIndex(
          (m) => m.optimistic && m.text === formatted.text
        );
        if (tempIndex !== -1) {
          const updated = [...prev];
          updated[tempIndex] = { ...formatted, status: "sent" };
          return updated;
        }
        if (!prev.some((m) => m.id === formatted.id)) {
          return [...prev, formatted];
        }
        return prev;
      });
    });

    socket.on("chatStatusUpdated", (data) => {
      if (String(data.redeemId) === String(redeemId)) {
        setChatStatus(data.status);
        if (data.status === "resolved") {
          setIsChatClosed(true);
        }
      }
    });

    socket.on("userTyping", ({ senderId }) => {
      if (String(senderId) === String(chatUser.userId)) setIsTyping(true);
    });

    socket.on("userStoppedTyping", ({ senderId }) => {
      if (String(senderId) === String(chatUser.userId)) setIsTyping(false);
    });

    socket.on("userStatusChanged", (data) => {
      if (String(data?.userId) === String(chatUser.userId)) {
        setIsUserOnline(data.status === "online");
        if (data.lastSeen) {
          setUserLastSeen(data.lastSeen);
        }
      }
    });

    socket.on("userOnline", (data) => {
      if (String(data?.userId) === String(chatUser.userId))
        setIsUserOnline(true);
    });

    socket.on("userOffline", (data) => {
      if (String(data?.userId) === String(chatUser.userId))
        setIsUserOnline(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [myUserId, chatUser.userId, redeemId, isLoadingManager]);

  const handleStatusChange = async (action) => {
    setShowOptions(false);
    setActionError("");
    if (chatStatus !== "inProgress") {
      setActionError("Only in-progress requests can be resolved.");
      return;
    }
    if (!chatUser.redeemId) {
      setActionError("Payment ID not found.");
      return;
    }
    setActionLoading(true);
    try {
      const token = localStorage.getItem("accessToken") || "";
      const res = await fetch(
        "https://apis.famocare.com/api/referralsystem/payments/payment-action",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({ id: chatUser.redeemId, action }),
        }
      );
      const data = await res.json();
      if (data.success) {
        setChatStatus("resolved");
        socketRef.current?.emit("updateChatStatus", {
          redeemId: chatUser.redeemId,
          status: "resolved",
          senderId: myUserId,
          receiverId: chatUser.userId,
        });
        setTempStatusMsg(`Chat has been marked as ${action}`);
        if (tempStatusTimeoutRef.current)
          clearTimeout(tempStatusTimeoutRef.current);
        if (chatClosedTimeoutRef.current)
          clearTimeout(chatClosedTimeoutRef.current);
        tempStatusTimeoutRef.current = setTimeout(
          () => setTempStatusMsg(""),
          3000
        );
        chatClosedTimeoutRef.current = setTimeout(
          () => setIsChatClosed(true),
          3000
        );
      } else {
        setActionError(data.message || "Failed to update status.");
      }
    } catch {
      setActionError("Network error.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setMessageInput("");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async () => {
    if (isChatClosed || isSending) return;
    if (uploadedFile) {
      await uploadAndSendFile(uploadedFile, messageInput.trim());
    } else if (messageInput.trim()) {
      const text = messageInput.trim();
      socketRef.current?.emit("sendMessage", {
        senderId: myUserId,
        receiverId: chatUser.userId,
        redeemId: redeemId,
        message: text,
        senderType: "manager",
        messageType: "text",
        managerId: myUserId,
      });
    }
    setMessageInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTopDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr.replace(" ", "T"));
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (chatStatus === "resolved") {
      setIsChatClosed(true);
    } else {
      setIsChatClosed(false);
    }
  }, [chatStatus]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      const hasScroll = scrollHeight > clientHeight;
      isUserScrollingRef.current = distanceFromBottom > 150;
      if (hasScroll) {
        setShowScrollToBottom(distanceFromBottom > 100);
        setShowScrollToTop(scrollTop > 150);
      } else {
        setShowScrollToBottom(chatMessages.length > 8);
        setShowScrollToTop(chatMessages.length > 15);
      }
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 200);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [chatMessages.length]);

  const handleInputChange = (e) => {
    if (uploadedFile || isUploading) return;
    setMessageInput(e.target.value);
    if (socketRef.current && redeemId) {
      socketRef.current.emit("typing", {
        senderId: myUserId,
        receiverId: chatUser.userId,
        redeemId: redeemId,
      });
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        if (socketRef.current && redeemId) {
          socketRef.current.emit("stopTyping", {
            senderId: myUserId,
            receiverId: chatUser.userId,
            redeemId: redeemId,
          });
        }
      }, 1800);
    }
  };

  const statusStyles = (() => {
    switch (chatStatus) {
      case "resolved":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-600",
          displayText: "RESOLVED",
        };
      default:
        return {
          bgColor: "bg-[#E0E0E0]",
          textColor: "text-[#3887FD]",
          displayText: "IN PROGRESS",
        };
    }
  })();

  const displayedMessages = searchQuery.trim()
    ? chatMessages.filter((m) =>
        m.text?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : chatMessages;

  const MessageStatusIcon = ({ status }) => {
    if (status === "sending")
      return <span className="text-[9px] text-gray-300 ml-1">●</span>;
    if (status === "failed")
      return <X size={10} className="text-red-400 ml-1" />;
    if (status === "read")
      return <CheckCheck size={10} className="text-blue-400 ml-1" />;
    if (status === "delivered")
      return <CheckCheck size={10} className="text-gray-300 ml-1" />;
    return <Check size={10} className="text-gray-300 ml-1" />;
  };

  const uploadAndSendFile = async (file, accompanyingText = "") => {
    if (!file || isUploading) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch("https://apis.famocare.com/api/upload/image", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success && result.data?.imageUrl) {
        const imageUrl = result.data.imageUrl;
        socketRef.current?.emit("sendMessage", {
          senderId: myUserId,
          receiverId: chatUser.userId,
          redeemId: redeemId,
          message: imageUrl,
          senderType: "manager",
          messageType: "image",
          managerId: myUserId,
        });
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      alert("Error uploading image");
    } finally {
      setIsUploading(false);
      setUploadedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || chatMessages.length === 0) return;
    const scrollNow = () => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "auto",
        block: "end",
      });
    };
    if (!hasInitialScrollDone) {
      setTimeout(() => {
        scrollNow();
        setHasInitialScrollDone(true);
      }, 200);
      return;
    }
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [chatMessages.length, hasInitialScrollDone]);

  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div className="h-screen flex bg-[#F5F6FA] overflow-hidden">
      {/* Sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 min-[768px]:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="hidden min-[768px]:block h-screen sticky top-0 flex-shrink-0">
        <Sidebar isDrawer={false} />
      </div>

      <div
        className={`fixed min-[768px]:hidden inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isDrawer={true} handleDrawer={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden w-full min-w-0">

        {/* Mobile Header */}
        <div className="min-[768px]:hidden bg-[#055860] px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <Menu size={18} className="text-[#055860]" />
            </button>
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">
              Payment Request Chat
            </h1>
          </div>
          <img
            src={chatUser.avatar}
            className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0 object-cover"
            alt={chatUser.name}
            onError={(e) =>
              (e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                chatUser.name
              )}&background=055860&color=fff`)
            }
          />
        </div>

        <div className="flex-1 flex items-stretch p-3 sm:p-4 md:p-6 min-h-0 overflow-hidden">
          <div className="w-full max-w-full lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col bg-white rounded-xl shadow overflow-hidden mx-auto min-h-0">

            {/* Chat Header */}
            <div className="border-b flex-shrink-0">
              <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src={chatUser.avatar}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                      alt={chatUser.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          chatUser.name
                        )}&background=055860&color=fff`;
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-start font-semibold text-xs md:text-sm truncate">
                      {chatUser.name}
                    </p>
                    <p className="text-[10px] md:text-xs flex items-center gap-1.5 text-gray-500">
                      {isTyping ? (
                        <span className="text-blue-500 font-medium">
                          typing...
                        </span>
                      ) : isUserOnline ? (
                        <span className="flex items-center gap-1.5 text-green-600 font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                          </span>
                          Online
                        </span>
                      ) : (
                        <span className="text-gray-400">
                          {userLastSeen
                            ? getLastSeenText(userLastSeen)
                            : "Last seen recently"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Search + Options */}
                <div className="flex items-center gap-2 relative flex-shrink-0">
                  <div className="flex items-center gap-1.5 border border-gray-300 rounded-lg px-2 py-1.5 hover:border-gray-400 focus-within:border-[#055860] transition-colors">
                    <Search size={14} className="text-gray-500 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-[80px] sm:w-[120px] md:w-[160px] outline-none text-xs bg-transparent placeholder-gray-400"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")}>
                        <X
                          size={12}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    {actionLoading ? (
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <MoreVertical
                        size={16}
                        className="text-gray-500 flex-shrink-0 cursor-pointer hover:text-gray-700"
                        onClick={() =>
                          !isChatClosed && setShowOptions(!showOptions)
                        }
                      />
                    )}

                    {showOptions && (
                      <div className="absolute right-0 top-6 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <ul className="py-1">
                          {chatStatus === "inProgress" ? (
                            <li
                              onClick={() => handleStatusChange("resolved")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs text-green-600 font-medium"
                            >
                              Mark as Resolved
                            </li>
                          ) : (
                            <li className="px-4 py-2 text-xs text-gray-400 cursor-not-allowed">
                              Already resolved
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {actionError && (
                <div className="px-3 sm:px-4 md:px-5 py-2 bg-red-50 border-t border-red-100 flex items-center justify-between">
                  <p className="text-xs text-red-500">{actionError}</p>
                  <button onClick={() => setActionError("")}>
                    <X size={12} className="text-red-400" />
                  </button>
                </div>
              )}

              <div className="px-3 sm:px-4 md:px-5 py-2 md:py-2.5 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-start text-[10px] md:text-xs text-[#055860] font-bold">
                      Status
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500">
                      Your status is {chatStatus}
                    </p>
                  </div>
                  <p
                    className={`inline-block text-[10px] md:text-xs font-medium ${statusStyles.textColor} border ${statusStyles.bgColor} px-2 py-[5px] rounded`}
                  >
                    {statusStyles.displayText}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollContainerRef}
              className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-4 md:px-5 py-3 md:py-4 space-y-3 md:space-y-4 bg-[#F7F8FA]"
            >
              <div className="text-center text-[10px] md:text-xs text-gray-400">
                {chatMessages.length > 0
                  ? formatTopDate(chatMessages[0].createdAt)
                  : "No messages"}
              </div>

              {isLoadingHistory && (
                <div className="flex flex-col items-center justify-center py-12 gap-2">
                  <div className="w-6 h-6 border-2 border-[#055860] border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs text-gray-400">Loading chat history</p>
                </div>
              )}

              {!isLoadingHistory && displayedMessages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 gap-2">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Send size={20} className="text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-400">
                    {searchQuery
                      ? "No messages match your search."
                      : "No messages yet. Start the conversation!"}
                  </p>
                </div>
              )}

              {!isLoadingHistory &&
                displayedMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "other" && (
                      <img
                        src={chatUser.avatar}
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0 mr-2 mt-auto mb-1"
                        alt={chatUser.name}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            chatUser.name
                          )}&background=055860&color=fff&size=32`;
                        }}
                      />
                    )}

                    <div
                      className={`max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%] rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm transition-all text-left ${
                        msg.sender === "me"
                          ? "bg-[#0F5D63] text-white rounded-br-none"
                          : "bg-[#F4F4F4] text-[#000000] rounded-bl-none shadow"
                      }`}
                    >
                      {msg.messageType === "image" ||
                      (msg.text &&
                        (msg.text.startsWith("http") ||
                          msg.text.includes("/uploads/"))) ? (
                        <div className="mb-2 rounded-lg overflow-hidden">
                          <img
                            src={msg.text || msg.imageUrl}
                            alt="Sent image"
                            className="max-w-full max-h-[320px] object-contain rounded-lg"
                            onClick={() =>
                              window.open(msg.text || msg.imageUrl, "_blank")
                            }
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        msg.text && (
                          <p className="break-words leading-relaxed text-left">
                            {searchQuery
                              ? msg.text
                                  .split(
                                    new RegExp(`(${searchQuery})`, "gi")
                                  )
                                  .map((part, i) =>
                                    part.toLowerCase() ===
                                    searchQuery.toLowerCase() ? (
                                      <span
                                        key={i}
                                        className="bg-yellow-200 text-black px-1 rounded"
                                      >
                                        {part}
                                      </span>
                                    ) : (
                                      part
                                    )
                                  )
                              : msg.text}
                          </p>
                        )
                      )}

                      <p
                        className={`text-[9px] md:text-[10px] mt-1 text-right ${
                          msg.sender === "me"
                            ? "text-gray-200"
                            : "text-[#A3A3A3]"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}

              {tempStatusMsg && (
                <div className="text-center my-4 animate-fadeInOut">
                  <div className="inline-block bg-blue-100 rounded-full px-4 py-2">
                    <p className="text-xs text-blue-700 font-medium">
                      {tempStatusMsg}
                    </p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to Bottom Button */}
            {showScrollToBottom && (
              <button
                onClick={scrollToBottom}
                className="fixed bottom-[90px] md:bottom-[110px] right-6 sm:right-8 xl:right-12 z-[100]
                  bg-[#F4F4F4] hover:bg-[#c6c9c9]
                  p-2 rounded-full
                  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  flex items-center justify-center border border-white/80"
              >
                <ScrollToBottomIcon iconClassName="#9E9E9E" />
              </button>
            )}

            {/* File Upload Preview */}
            {uploadedFile && (
              <div className="border-t border-gray-200 px-3 sm:px-4 md:px-5 py-2 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-100 rounded">
                    <Download size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium truncate max-w-[150px] sm:max-w-[250px]">
                      {uploadedFile.name}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {uploadedFile.size}
                    </p>
                  </div>
                </div>
                <button
                  onClick={removeUploadedFile}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
              </div>
            )}

            {/* Message Input */}
            <div className="border-t px-3 sm:px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-2 bg-white flex-shrink-0">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />

              <button
                onClick={triggerFileInput}
                disabled={isChatClosed || isUploading}
                className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                  isChatClosed || isUploading
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <Paperclip size={18} className="text-gray-500" />
              </button>

              <input
                ref={inputRef}
                placeholder={
                  uploadedFile
                    ? "Image selected - Send or remove image"
                    : isChatClosed
                    ? "Chat is closed"
                    : "Type a message…"
                }
                value={messageInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isChatClosed || isUploading || !!uploadedFile}
                className={`flex-1 outline-none text-sm px-4 py-2.5 bg-gray-100 rounded-full min-w-0 transition-all focus:bg-gray-50 ${
                  isChatClosed || uploadedFile
                    ? "cursor-not-allowed opacity-60"
                    : ""
                }`}
              />

              <button
                onClick={handleSendMessage}
                disabled={
                  (!messageInput.trim() && !uploadedFile) ||
                  isChatClosed ||
                  isSending ||
                  isUploading
                }
                className={`p-3 rounded-full transition-all flex-shrink-0 ${
                  (messageInput.trim() || uploadedFile) &&
                  !isChatClosed &&
                  !isUploading
                    ? "bg-[#6C2BD9] hover:bg-[#5a24b5] text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isSending || isUploading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {showOptions && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowOptions(false)}
        />
      )}

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(4px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        .animate-fadeInOut { animation: fadeInOut 3s ease-in-out forwards; }
      `}</style>
    </div>
  );
};

export default PaymentRequestChat;