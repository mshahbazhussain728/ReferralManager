

// // import React, { useState } from "react";
// // import { Eye } from "lucide-react";
// // import Lock from "../../assets/Lock.png";
// // import FamocareLogo from "../../assets/FamocareLogo.png";
// // import { useNavigate } from "react-router-dom";

// // export default function NewPassword() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirm, setShowConfirm] = useState(false);
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async () => {
// //     setError("");

// //     if (!password || !confirmPassword) {
// //       setError("Please fill in both password fields.");
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError("Passwords do not match.");
// //       return;
// //     }

// //     if (password.length < 6) {
// //       setError("Password must be at least 6 characters.");
// //       return;
// //     }

// //     const email = localStorage.getItem("reset_email");
// //     if (!email) {
// //       setError("Session expired. Please start over.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         "https://referralapis.appistan.co/api/referral-manager/reset-password",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ email, password }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         localStorage.removeItem("reset_email");
// //         navigate("/");
// //       } else {
// //         setError(data.message || "Something went wrong. Please try again.");
// //       }
// //     } catch {
// //       setError("Network error. Please check your connection and try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-white">
// //       <div className="flex flex-col items-center mb-4">
// //         <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
// //         <h1 className="text-[35px] font-bold text-[#055860] leading-none">
// //           Famo<span className="text-[#691188]">care</span>
// //         </h1>
// //       </div>

// //       <h1 className="text-[35px] font-semibold text-black mb-1">
// //         New Password
// //       </h1>
// //       <p className="text-[#8391A1] font-semibold text-sm mb-8">
// //         Please create a new password.
// //       </p>

// //       {/* New Password Field */}
// //       <div className="relative mb-5 w-[370px]">
// //         <div className="relative">
// //           <img
// //             src={Lock}
// //             alt="Lock"
// //             className="absolute left-3 top-3 w-4 h-4 text-purple-700"
// //           />
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             placeholder="New Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-[#DEDEDE] placeholder:pt-[2px] placeholder:relative"
// //           />
// //           <div
// //             className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
// //             onClick={() => setShowPassword(!showPassword)}
// //           >
// //             {showPassword ? (
// //               <Eye size={20} />
// //             ) : (
// //               <div className="relative">
// //                 <Eye size={20} className="text-gray-400" />
// //                 <div className="absolute left-[1px] top-[9px] rotate-[-25deg] w-[20px] h-[2px] bg-gray-400"></div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Confirm Password Field */}
// //       <div className="relative mb-5 w-[370px]">
// //         <div className="relative">
// //           <img
// //             src={Lock}
// //             alt="Lock"
// //             className="absolute left-3 top-3 w-4 h-4 text-purple-700"
// //           />
// //           <input
// //             type={showConfirm ? "text" : "password"}
// //             placeholder="Confirm password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-[#DEDEDE] placeholder:pt-[2px] placeholder:relative"
// //           />
// //           <div
// //             className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
// //             onClick={() => setShowConfirm(!showConfirm)}
// //           >
// //             {showConfirm ? (
// //               <Eye size={20} />
// //             ) : (
// //               <div className="relative">
// //                 <Eye size={20} className="text-gray-400" />
// //                 <div className="absolute left-[1px] top-[9px] rotate-[-25deg] w-[20px] h-[2px] bg-gray-400"></div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Error Message */}
// //       {error && (
// //         <p className="text-red-500 text-xs mb-3">{error}</p>
// //       )}

// //       {/* Confirm Button */}
// //       <button
// //         onClick={handleSubmit}
// //         disabled={loading}
// //         className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-4"
// //       >
// //         {loading ? "CONFIRMING..." : "Confirm"}
// //       </button>
// //     </div>
// //   );
// // }



import React, { useState } from "react";
import { Eye } from "lucide-react";
import Lock from "../../assets/Lock.png";
import FamocareLogo from "../../assets/FamocareLogo.png";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("reset_email");
  const token = localStorage.getItem("reset_token");

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Session expired. Please start over.");
      return;
    }

    if (!password && !confirmPassword) {
      setError("Email, new password, and confirm password are required.");
      return;
    }

    if (!password) {
      setError("New password is required.");
      return;
    }

    if (!confirmPassword) {
      setError("Confirm password is required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        // "https://referralapis.appistan.co/api/referral-manager/reset-password",
        "https://apis.famocare.com/api/referralsystem/referral-manager/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({
            email,
            newPassword: password,
            confirmPassword,
            ...(token && { token }),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess("Password reset successfully! Redirecting to login...");
        localStorage.removeItem("reset_email");
        localStorage.removeItem("reset_token");
        setTimeout(() => navigate("/"), 1500);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Logo */}
      <div className="flex flex-col items-center mb-4">
        <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
        <h1 className="text-[35px] font-bold text-[#055860] leading-none">
          Famo<span className="text-[#691188]">care</span>
        </h1>
      </div>

      <h1 className="text-[35px] font-semibold text-black mb-1">
        New Password
      </h1>
      <p className="text-[#8391A1] font-semibold text-sm mb-8">
        Please create a new password.
      </p>

      {/* New Password Field */}
      <div className="relative mb-5 w-[370px]">
        <div className="relative">
          <img
            src={Lock}
            alt="Lock"
            className="absolute left-3 top-3 w-4 h-4 text-purple-700"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-[#FBFBFB] placeholder:pt-[2px] placeholder:relative"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye size={20} />
            ) : (
              <div className="relative">
                <Eye size={20} className="text-gray-400" />
                <div className="absolute left-[1px] top-[9px] rotate-[-25deg] w-[20px] h-[2px] bg-gray-400"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="relative mb-5 w-[370px]">
        <div className="relative">
          <img
            src={Lock}
            alt="Lock"
            className="absolute left-3 top-3 w-4 h-4 text-purple-700"
          />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-[#FBFBFB] placeholder:pt-[2px] placeholder:relative"
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <Eye size={20} />
            ) : (
              <div className="relative">
                <Eye size={20} className="text-gray-400" />
                <div className="absolute left-[1px] top-[9px] rotate-[-25deg] w-[20px] h-[2px] bg-gray-400"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs mb-3">{error}</p>
      )}

      {/* Success Message */}
      {success && (
        <p className="text-green-500 text-xs mb-3">{success}</p>
      )}

      {/* Confirm Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-4"
      >
        {loading ? "CONFIRMING..." : "Confirm"}
      </button>
    </div>
  );
}

