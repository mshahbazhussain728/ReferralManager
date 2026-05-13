// import React from "react";
// import Email from "../../assets/Email.png"; // use your email icon
// import { Link } from "react-router-dom";
// import FamocareLogo from "../../assets/FamocareLogo.png";
 
// export default function ForgotPassword() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="w-full max-w-md p-8">
//           <div className="flex flex-col items-center mb-4">
//                   <img
//                     src={FamocareLogo}
//                     alt="FamocareLogo"
//                     className="w-[150px]"
//                   />
//                   <h1 className="text-[35px] font-bold text-[#055860] leading-none">
//                     Famo<span className="text-[#691188]">care</span>
//                   </h1>
//                 </div>
//         {/* Heading */}
//         <h1 className="text-[35px] font-semibold text-center text-[#000000] mb-2">
//           Forgot Password?
//         </h1>
//         <p className="text-center text-[#8391A1] font-semibold mb-8 text-sm whitespace-nowrap ml-[-130px]">
//        No worries! it happens! please provide your email address for Famocare to send you a password reset link.
//         </p>

//         {/* Form */}
//         <form className="space-y-20">
//           {/* Email Field */}
//           <div>
//             <div className="relative">
//               <img
//                 src={Email}
//                 alt="email icon"
//                 className="absolute left-3 top-3 w-5 h-5 ml-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="w-[370px] mt-[-1px] border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-gray-700 bg-[#DEDEDE] focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder:relative placeholder:top-[2px]"
//               />
//             </div>
//           </div>

//           {/* Send Button */}
//           <Link to="/verification-code">
//           <button
//             type="submit"
//             className="w-[250px] bg-[#691188] hover:bg-[#5a0f77] text-white font-semibold py-2 rounded-md mt-6 transition duration-300"
//           >
//             SEND
//           </button>
//           </Link>
//         </form>
//         <div className="flex items-center justify-between mt-4">
//   {/* Left side */}
//   <h5 className="text-sm font-medium text-[#323232] ml-[100px]">
//     Remember Password?
//   </h5>
//          <Link to="/">
//     <button
//       className="text-[#055860] mr-[100px] font-semibold"
//     >
//       Login
//     </button>
//               </Link>      

//   </div>
// </div>

//       </div>
//   );
// }






import React, { useState } from "react";
import Email from "../../assets/Email.png";
import { Link, useNavigate } from "react-router-dom";
import FamocareLogo from "../../assets/FamocareLogo.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        // "https://referralapis.appistan.co/api/referral-manager/forgot-password",
        "https://apis.famocare.com/api/referralsystem/referral-manager/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Only store email — OTP is sent to the user's email, not returned in response
        localStorage.setItem("reset_email", email);
        navigate("/verification-code");
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
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-4">
          <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
          <h1 className="text-[35px] font-bold text-[#055860] leading-none">
            Famo<span className="text-[#691188]">care</span>
          </h1>
        </div>

        <h1 className="text-[35px] font-semibold text-center text-[#000000] mb-2">
          Forgot Password?
        </h1>
        <p className="text-center text-[#8391A1] font-semibold mb-8 text-sm whitespace-nowrap ml-[-130px]">
          No worries! it happens! please provide your email address for Famocare to send you a password reset link.
        </p>

        <form className="space-y-20" onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <img
                src={Email}
                alt="email icon"
                className="absolute left-3 top-3 w-5 h-5 ml-2"
              />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[370px] mt-[-1px] border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-gray-700 bg-[#FBFBFB] focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder:relative placeholder:top-[2px]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-[250px] bg-[#691188] hover:bg-[#5a0f77] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md mt-6 transition duration-300"
          >
            {loading ? "SENDING..." : "SEND"}
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <h5 className="text-sm font-medium text-[#323232] ml-[100px]">
            Remember Password?
          </h5>
          <Link to="/">
            <button className="text-[#055860] mr-[100px] font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}