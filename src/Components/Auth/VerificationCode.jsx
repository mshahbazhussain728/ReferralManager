// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import FamocareLogo from "../../assets/FamocareLogo.png";

// // // export default function VerificationCode() {
// // //   const [code, setCode] = useState(["", "", "", ""]);

// // //   const handleChange = (value, index) => {
// // //     if (/^\d?$/.test(value)) {
// // //       const newCode = [...code];
// // //       newCode[index] = value;
// // //       setCode(newCode);

// // //       // Move to next input automatically
// // //       if (value && index < 3) {
// // //         document.getElementById(`code-${index + 1}`).focus();
// // //       }
// // //     }
// // //   };

// // //   const handleKeyDown = (e, index) => {
// // //     if (e.key === "Backspace" && !code[index] && index > 0) {
// // //       document.getElementById(`code-${index - 1}`).focus();
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center h-screen bg-white">
// // //           <div className="flex flex-col items-center mb-4">
// // //                           <img
// // //                             src={FamocareLogo}
// // //                             alt="FamocareLogo"
// // //                             className="w-[150px]"
// // //                           />
// // //                           <h1 className="text-[35px] font-bold text-[#055860] leading-none">
// // //                             Famo<span className="text-[#691188]">care</span>
// // //                           </h1>
// // //                         </div>
// // //       {/* Title */}
// // //       <h1 className="text-[40px] font-semibold text-black mb-1">
// // //         Verification Code
// // //       </h1>

// // //       {/* Subtitle */}
// // //       <p className="text-[#8391A1] font-semibold text-sm mb-6">
// // //         Please enter the code send to your email.
// // //       </p>

// // //       {/* Code Inputs */}
// // //       <div className="flex space-x-3 mb-6 mt-[12px]">
// // //         {code.map((digit, index) => (
// // //           <input
// // //             key={index}
// // //             id={`code-${index}`}
// // //             type="text"
// // //             maxLength="1"
// // //             value={digit}
// // //             onChange={(e) => handleChange(e.target.value, index)}
// // //             onKeyDown={(e) => handleKeyDown(e, index)}
// // //             className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Send Button */}
// // //       <Link to="/new-password">
// // //       <button
// // //         type="submit"
// // //         className="w-[290px] bg-[#691188] hover:bg-[#691188] text-white font-semibold py-2 rounded-md transition duration-300 mt-[50px]"
// // //       >
// // //         SEND
// // //       </button>
// // //       </Link>

// // //       {/* Resend Code */}
// // //       <Link to="/forgot-password">
// // //       <p className="text-sm text-[#828282] font-bold mt-2 cursor-pointer hover:underline ml-[-5px]">
// // //         Resend
// // //       </p>
// // //       </Link>
// // //     </div>
// // //   );
// // // }





// // // import React, { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import FamocareLogo from "../../assets/FamocareLogo.png";

// // // export default function VerificationCode() {
// // //   const [code, setCode] = useState(["", "", "", ""]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleChange = (value, index) => {
// // //     if (/^\d?$/.test(value)) {
// // //       const newCode = [...code];
// // //       newCode[index] = value;
// // //       setCode(newCode);

// // //       if (value && index < 3) {
// // //         document.getElementById(`code-${index + 1}`).focus();
// // //       }
// // //     }
// // //   };

// // //   const handleKeyDown = (e, index) => {
// // //     if (e.key === "Backspace" && !code[index] && index > 0) {
// // //       document.getElementById(`code-${index - 1}`).focus();
// // //     }
// // //   };

// // //   const handleSubmit = async () => {
// // //     setError("");
// // //     const otp = code.join("");

// // //     if (otp.length < 4) {
// // //       setError("Please enter the complete 4-digit code.");
// // //       return;
// // //     }

// // //     const email = localStorage.getItem("reset_email");
// // //     if (!email) {
// // //       setError("Session expired. Please go back and try again.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const response = await fetch(
// // //         "https://referralapis.appistan.co/api/referral-manager/verify-otp",
// // //         {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //           body: JSON.stringify({ email, otp }),
// // //         }
// // //       );

// // //       const data = await response.json();

// // //       if (data.success) {
// // //         // Save token if returned by API
// // //         if (data.token) {
// // //           localStorage.setItem("reset_token", data.token);
// // //         }
// // //         if (data.data?.token) {
// // //           localStorage.setItem("reset_token", data.data.token);
// // //         }
// // //         navigate("/new-password");
// // //       } else {
// // //         setError(data.message || "Invalid OTP. Please try again.");
// // //       }
// // //     } catch {
// // //       setError("Network error. Please check your connection and try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center h-screen bg-white">
// // //       <div className="flex flex-col items-center mb-4">
// // //         <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
// // //         <h1 className="text-[35px] font-bold text-[#055860] leading-none">
// // //           Famo<span className="text-[#691188]">care</span>
// // //         </h1>
// // //       </div>

// // //       <h1 className="text-[40px] font-semibold text-black mb-1">
// // //         Verification Code
// // //       </h1>

// // //       <p className="text-[#8391A1] font-semibold text-sm mb-6">
// // //         Please enter the code sent to your email.
// // //       </p>

// // //       {/* Code Inputs */}
// // //       <div className="flex space-x-3 mb-6 mt-[12px]">
// // //         {code.map((digit, index) => (
// // //           <input
// // //             key={index}
// // //             id={`code-${index}`}
// // //             type="text"
// // //             maxLength="1"
// // //             value={digit}
// // //             onChange={(e) => handleChange(e.target.value, index)}
// // //             onKeyDown={(e) => handleKeyDown(e, index)}
// // //             className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Error Message */}
// // //       {error && (
// // //         <p className="text-red-500 text-xs mb-2">{error}</p>
// // //       )}

// // //       {/* Verify Button */}
// // //       <button
// // //         onClick={handleSubmit}
// // //         disabled={loading}
// // //         className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-[50px]"
// // //       >
// // //         {loading ? "VERIFYING..." : "VERIFY"}
// // //       </button>

// // //       {/* Resend Code */}
// // //       <Link to="/forgot-password">
// // //         <p className="text-sm text-[#828282] font-bold mt-2 cursor-pointer hover:underline ml-[-5px]">
// // //           Resend
// // //         </p>
// // //       </Link>
// // //     </div>
// // //   );
// // // }





// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import FamocareLogo from "../../assets/FamocareLogo.png";

// // const RESEND_COUNTDOWN = 60; // seconds

// // export default function VerificationCode() {
// //   const [code, setCode] = useState(["", "", "", ""]);
// //   const [loading, setLoading] = useState(false);
// //   const [resendLoading, setResendLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [successMsg, setSuccessMsg] = useState("");
// //   const [timer, setTimer] = useState(RESEND_COUNTDOWN);
// //   const [canResend, setCanResend] = useState(false);
// //   const intervalRef = useRef(null);
// //   const navigate = useNavigate();

// //   // Start countdown on mount
// //   useEffect(() => {
// //     startTimer();
// //     return () => clearInterval(intervalRef.current);
// //   }, []);

// //   const startTimer = () => {
// //     setTimer(RESEND_COUNTDOWN);
// //     setCanResend(false);
// //     clearInterval(intervalRef.current);
// //     intervalRef.current = setInterval(() => {
// //       setTimer((prev) => {
// //         if (prev <= 1) {
// //           clearInterval(intervalRef.current);
// //           setCanResend(true);
// //           return 0;
// //         }
// //         return prev - 1;
// //       });
// //     }, 1000);
// //   };

// //   const handleChange = (value, index) => {
// //     if (/^\d?$/.test(value)) {
// //       const newCode = [...code];
// //       newCode[index] = value;
// //       setCode(newCode);
// //       if (value && index < 3) {
// //         document.getElementById(`code-${index + 1}`).focus();
// //       }
// //     }
// //   };

// //   const handleKeyDown = (e, index) => {
// //     if (e.key === "Backspace" && !code[index] && index > 0) {
// //       document.getElementById(`code-${index - 1}`).focus();
// //     }
// //   };

// //   const handleSubmit = async () => {
// //     setError("");
// //     setSuccessMsg("");
// //     const otp = code.join("");

// //     if (otp.length < 4) {
// //       setError("Please enter the complete 4-digit code.");
// //       return;
// //     }

// //     const email = localStorage.getItem("reset_email");
// //     if (!email) {
// //       setError("Session expired. Please go back and try again.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         "https://referralapis.appistan.co/api/referral-manager/verify-otp",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ email, otp }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         if (data.token) localStorage.setItem("reset_token", data.token);
// //         if (data.data?.token) localStorage.setItem("reset_token", data.data.token);
// //         navigate("/new-password");
// //       } else {
// //         setError(data.message || "Invalid OTP. Please try again.");
// //       }
// //     } catch {
// //       setError("Network error. Please check your connection and try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleResend = async () => {
// //     if (!canResend || resendLoading) return;

// //     const email = localStorage.getItem("reset_email");
// //     if (!email) {
// //       setError("Session expired. Please go back and try again.");
// //       return;
// //     }

// //     setError("");
// //     setSuccessMsg("");
// //     setResendLoading(true);

// //     try {
// //       const response = await fetch(
// //         "https://referralapis.appistan.co/api/referral-manager/forgot-password",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ email }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         setCode(["", "", "", ""]);
// //         setSuccessMsg("A new code has been sent to your email.");
// //         startTimer();
// //         document.getElementById("code-0")?.focus();
// //       } else {
// //         setError(data.message || "Failed to resend code. Please try again.");
// //       }
// //     } catch {
// //       setError("Network error. Please check your connection and try again.");
// //     } finally {
// //       setResendLoading(false);
// //     }
// //   };

// //   // Format timer as 0:SS
// //   const formatTimer = (secs) => {
// //     const m = Math.floor(secs / 60);
// //     const s = secs % 60;
// //     return `${m}:${s.toString().padStart(2, "0")}`;
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-white">
// //       <div className="flex flex-col items-center mb-4">
// //         <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
// //         <h1 className="text-[35px] font-bold text-[#055860] leading-none">
// //           Famo<span className="text-[#691188]">care</span>
// //         </h1>
// //       </div>

// //       <h1 className="text-[40px] font-semibold text-black mb-1">
// //         Verification Code
// //       </h1>

// //       <p className="text-[#8391A1] font-semibold text-sm mb-6">
// //         Please enter the code sent to your email.
// //       </p>

// //       {/* Code Inputs */}
// //       <div className="flex space-x-3 mb-6 mt-[12px]">
// //         {code.map((digit, index) => (
// //           <input
// //             key={index}
// //             id={`code-${index}`}
// //             type="text"
// //             maxLength="1"
// //             value={digit}
// //             onChange={(e) => handleChange(e.target.value, index)}
// //             onKeyDown={(e) => handleKeyDown(e, index)}
// //             className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
// //           />
// //         ))}
// //       </div>

// //       {/* Error / Success Messages */}
// //       {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
// //       {successMsg && <p className="text-green-500 text-xs mb-2">{successMsg}</p>}

// //       {/* Verify Button */}
// //       <button
// //         onClick={handleSubmit}
// //         disabled={loading}
// //         className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-[50px]"
// //       >
// //         {loading ? "VERIFYING..." : "SEND"}
// //       </button>

// //       {/* Resend + Timer */}
// //       <div className="flex items-center gap-2 mt-3">
// //         <button
// //           onClick={handleResend}
// //           disabled={!canResend || resendLoading}
// //           className={`text-sm font-bold transition-colors ${
// //             canResend && !resendLoading
// //               ? "text-[#691188] hover:underline cursor-pointer"
// //               : "text-[#828282] cursor-not-allowed"
// //           }`}
// //         >
// //           {resendLoading ? "Sending..." : "Resend"}
// //         </button>

// //         {!canResend && (
// //           <span className="text-sm text-[#828282] font-semibold">
// //             {formatTimer(timer)}
// //           </span>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import FamocareLogo from "../../assets/FamocareLogo.png";

// const RESEND_COUNTDOWN = 60; // seconds

// export default function VerificationCode() {
//   const [code, setCode] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const [timer, setTimer] = useState(RESEND_COUNTDOWN);
//   const [canResend, setCanResend] = useState(false);
//   const intervalRef = useRef(null);
//   const navigate = useNavigate();

//   // Start countdown on mount
//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startTimer = () => {
//     setTimer(RESEND_COUNTDOWN);
//     setCanResend(false);
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(intervalRef.current);
//           setCanResend(true);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const handleChange = (value, index) => {
//     if (/^\d?$/.test(value)) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);
//       if (value && index < 3) {
//         document.getElementById(`code-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       document.getElementById(`code-${index - 1}`).focus();
//     }
//   };

//   const handleSubmit = async () => {
//     setError("");
//     setSuccessMsg("");
//     const otp = code.join("");

//     if (otp.length < 4) {
//       setError("Please enter the complete 4-digit code.");
//       return;
//     }

//     const email = localStorage.getItem("reset_email");
//     if (!email) {
//       setError("Session expired. Please go back and try again.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         // "https://referralapis.appistan.co/api/referral-manager/verify-otp",
//                 "https://apis.famocare.com/api/referralsystem/referral-manager/verify-otp",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, otp }),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         if (data.token) localStorage.setItem("reset_token", data.token);
//         if (data.data?.token) localStorage.setItem("reset_token", data.data.token);
//         navigate("/new-password");
//       } else {
//         setError(data.message || "Invalid OTP. Please try again.");
//       }
//     } catch {
//       setError("Network error. Please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     if (!canResend || resendLoading) return;

//     const email = localStorage.getItem("reset_email");
//     if (!email) {
//       setError("Session expired. Please go back and try again.");
//       return;
//     }

//     setError("");
//     setSuccessMsg("");
//     setResendLoading(true);

//     try {
//       const response = await fetch(
//         // "https://referralapis.appistan.co/api/referral-manager/forgot-password",\
//         "https://apis.famocare.com/api/referralsystem/referral-manager/verify-otp",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         setCode(["", "", "", ""]);
//         setSuccessMsg("A new code has been sent to your email.");
//         startTimer();
//         document.getElementById("code-0")?.focus();
//       } else {
//         setError(data.message || "Failed to resend code. Please try again.");
//       }
//     } catch {
//       setError("Network error. Please check your connection and try again.");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   // Format timer as 0:SS
//   const formatTimer = (secs) => {
//     return `${secs}s`;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-white">
//       <div className="flex flex-col items-center mb-4">
//         <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
//         <h1 className="text-[35px] font-bold text-[#055860] leading-none">
//           Famo<span className="text-[#691188]">care</span>
//         </h1>
//       </div>

//       <h1 className="text-[40px] font-semibold text-black mb-1">
//         Verification Code
//       </h1>

//       <p className="text-[#8391A1] font-semibold text-sm mb-6">
//         Please enter the code sent to your email.
//       </p>

//       {/* Code Inputs */}
//       <div className="flex space-x-3 mb-6 mt-[12px]">
//         {code.map((digit, index) => (
//           <input
//             key={index}
//             id={`code-${index}`}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleChange(e.target.value, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#FBFBFB] shadow-sm"
//           />
//         ))}
//       </div>

//       {/* Error / Success Messages */}
//       {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
//       {successMsg && <p className="text-green-500 text-xs mb-2">{successMsg}</p>}

//       {/* Verify Button */}
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-[50px]"
//       >
//         {loading ? "Sending..." : "SEND"}
//       </button>

//       {/* Resend + Timer */}
//       <div className="flex items-center gap-2 mt-3">
//         <button
//           onClick={handleResend}
//           disabled={!canResend || resendLoading}
//           className={`text-sm font-bold transition-colors ${
//             canResend && !resendLoading
//               ? "text-[#691188] hover:underline cursor-pointer"
//               : "text-[#828282] cursor-not-allowed"
//           }`}
//         >
//           {resendLoading ? "ReSending..." : "Resend"}
//         </button>

//         {!canResend && (
//           <span className="text-sm text-[#055860] font-semibold">
//             {formatTimer(timer)}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FamocareLogo from "../../assets/FamocareLogo.png";

const RESEND_COUNTDOWN = 60;

export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [timer, setTimer] = useState(RESEND_COUNTDOWN);
  const [canResend, setCanResend] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    setTimer(RESEND_COUNTDOWN);
    setCanResend(false);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    setError("");
    setSuccessMsg("");
    const otp = code.join("");

    if (otp.length < 4) {
      setError("Please enter the complete 4-digit code.");
      return;
    }

    const email = localStorage.getItem("reset_email");
    if (!email) {
      setError("Session expired. Please go back and try again.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        // ✅ Verify OTP endpoint
        "https://apis.famocare.com/api/referralsystem/referral-manager/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();

      if (data.success) {
        if (data.token) localStorage.setItem("reset_token", data.token);
        if (data.data?.token) localStorage.setItem("reset_token", data.data.token);
        navigate("/new-password");
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend || resendLoading) return;

    const email = localStorage.getItem("reset_email");
    if (!email) {
      setError("Session expired. Please go back and try again.");
      return;
    }

    setError("");
    setSuccessMsg("");
    setResendLoading(true);

    try {
      const response = await fetch(
        // ✅ Fixed: use forgot-password to resend OTP, not verify-otp
        // "https://apis.famocare.com/api/referralsystem/referral-manager/forgot-password",
                "https://apis.famocare.com/api/referralsystem/referral-manager/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setCode(["", "", "", ""]);
        setSuccessMsg("A new code has been sent to your email.");
        startTimer();
        document.getElementById("code-0")?.focus();
      } else {
        setError(data.message || "Failed to resend code. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setResendLoading(false);
    }
  };

  const formatTimer = (secs) => `${secs}s`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center mb-4">
        <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
        <h1 className="text-[35px] font-bold text-[#055860] leading-none">
          Famo<span className="text-[#691188]">care</span>
        </h1>
      </div>

      <h1 className="text-[40px] font-semibold text-black mb-1">
        Verification Code
      </h1>

      <p className="text-[#8391A1] font-semibold text-sm mb-6">
        Please enter the code sent to your email.
      </p>

      <div className="flex space-x-3 mb-6 mt-[12px]">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#FBFBFB] shadow-sm"
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      {successMsg && <p className="text-green-500 text-xs mb-2">{successMsg}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-[290px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition duration-300 mt-[50px]"
      >
        {loading ? "Verifying..." : "VERIFY"}
      </button>

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={handleResend}
          disabled={!canResend || resendLoading}
          className={`text-sm font-bold transition-colors ${
            canResend && !resendLoading
              ? "text-[#691188] hover:underline cursor-pointer"
              : "text-[#828282] cursor-not-allowed"
          }`}
        >
          {resendLoading ? "Resending..." : "Resend"}
        </button>

        {!canResend && (
          <span className="text-sm text-[#055860] font-semibold">
            {formatTimer(timer)}
          </span>
        )}
      </div>
    </div>
  );
}