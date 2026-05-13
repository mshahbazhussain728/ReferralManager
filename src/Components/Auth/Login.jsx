

// // // // import React, { useState } from "react";
// // // // import { Eye } from "lucide-react";
// // // // import User from "../../assets/User.png";
// // // // import Lock from "../../assets/Lock.png";
// // // // import { Link } from "react-router-dom";
// // // // import FamocareLogo from "../../assets/FamocareLogo.png";

// // // // export default function Login() {
// // // //   const [showPassword, setShowPassword] = useState(false);

// // // //   return (
// // // //     <div className="flex items-center justify-center min-h-screen bg-white">
// // // //       <div className="w-full max-w-md px-6">
        
// // // //         {/* Logo + Brand */}
// // // //         <div className="flex flex-col items-center mb-4">
// // // //           <img
// // // //             src={FamocareLogo}
// // // //             alt="FamocareLogo"
// // // //             className="w-[150px]"
// // // //           />
// // // //           <h1 className="text-[35px] font-bold text-[#055860] leading-none">
// // // //             Famo<span className="text-[#691188]">care</span>
// // // //           </h1>
// // // //          </div>

// // // //         {/* Heading */}
// // // //         <h2 className="text-4xl font-semibold text-center text-black mb-2">
// // // //           Welcome Back!
// // // //         </h2>

// // // //         <p className="text-center font-small text-[16px] leading-[100%] text-[#8391A1] mb-8 whitespace-nowrap ml-[-60px]">
// // // //           Sign in to manage user and star chats and resolve supports issues efficiently.
// // // //         </p>

// // // //         {/* Form */}
// // // //         <form className="space-y-6">
          
// // // //           {/* User ID */}
// // // //           <div className="relative">
// // // //             <img
// // // //               src={User}
// // // //               alt="user icon"
// // // //               className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Enter user ID"
// // // //               className="w-full h-[48px] bg-[#E3E3E3] border border-gray-200 rounded-lg pl-10 pr-4 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
// // // //             />
// // // //           </div>

// // // //           {/* Password */}
// // // //           <div>
// // // //             <div className="relative">
// // // //               <img
// // // //                 src={Lock}
// // // //                 alt="lock icon"
// // // //                 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
// // // //               />

// // // //               <input
// // // //                 type={showPassword ? "text" : "password"}
// // // //                 placeholder="Enter password"
// // // //                 className="w-full h-[48px] bg-[#E3E3E3] border border-gray-200 rounded-lg pl-10 pr-10 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
// // // //               />

// // // //               {/* Eye Toggle */}
// // // //               <div
// // // //                 onClick={() => setShowPassword(!showPassword)}
// // // //                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
// // // //               >
// // // //                 {showPassword ? (
// // // //                   <Eye size={20} />
// // // //                 ) : (
// // // //                   <div className="relative">
// // // //                     <Eye size={20} />
// // // //                     <span className="absolute left-0 top-[9px] rotate-[-35deg] w-[22px] h-[2px] bg-gray-400"></span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* Forget Password */}
// // // //             <div className="mt-2 text-center">
// // // //               <a
// // // //                 href="forgot-password"
// // // //                 className="font-inter ml-[280px] font-semibold text-[14px] text-[#055860] hover:underline"
// // // //               >
// // // //                 Forget password?
// // // //               </a>
// // // //             </div>
// // // //           </div>

// // // //           {/* Login Button */}
// // // //           <div className="flex justify-center">
// // // //             <Link to="/marketing-agents">
// // // //               <button
// // // //                 type="submit"
// // // //                 className="
// // // //                   w-[309px]
// // // //                   h-[42px]
// // // //                   px-[100px]
// // // //                   py-[10px]
// // // //                   rounded-[6px]
// // // //                   bg-[#691188]
// // // //                   hover:bg-[#5a0f77]
// // // //                   text-white
// // // //                   font-semibold
// // // //                   transition
// // // //                   duration-300
// // // //                 "
// // // //               >
// // // //                 LOGIN
// // // //               </button>
// // // //             </Link>
// // // //           </div>

// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }






import React, { useState } from "react";
import { Eye } from "lucide-react";
import User from "../../assets/User.png";
import Lock from "../../assets/Lock.png";
import FamocareLogo from "../../assets/FamocareLogo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!userId.trim() || !password.trim()) {
      setError("Please enter both user ID and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        // "https://referralapis.appistan.co/api/referral-manager/login",
        "https://apis.famocare.com/api/referralsystem/referral-manager/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, password }),
        }
      );
      const json = await res.json();

      if (json.success) {
        localStorage.setItem("accessToken", json.data.accessToken);
        localStorage.setItem("adminId", json.data.id);
        localStorage.setItem("adminName", json.data.name);
        localStorage.setItem("adminUserId", json.data.userId);
        localStorage.setItem("refreshToken", json.data.accessToken);

        navigate("/marketing-agents");
      } else {
        setError(json.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md px-6">

        {/* Logo + Brand */}
        <div className="flex flex-col items-center mb-4">
          <img src={FamocareLogo} alt="FamocareLogo" className="w-[150px]" />
          <h1 className="text-[35px] font-bold text-[#055860] leading-none">
            Famo<span className="text-[#691188]">care</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-black mb-2">
          Welcome Back!
        </h2>

        <p className="text-center font-small text-[16px] leading-[100%] text-[#8391A1] mb-8 whitespace-nowrap ml-[-60px]">
          Sign in to manage user and star chats and resolve supports issues efficiently.
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>

          {/* User ID */}
          <div className="relative">
            <img
              src={User}
              alt="user icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Enter user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full h-[48px] bg-[#FBFBFB] border border-gray-200 rounded-lg pl-10 pr-4 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <img
                src={Lock}
                alt="lock icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] bg-[#FBFBFB] border border-gray-200 rounded-lg pl-10 pr-10 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />

              {/* Eye Toggle */}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showPassword ? (
                  <Eye size={20} />
                ) : (
                  <div className="relative">
                    <Eye size={20} />
                    <span className="absolute left-0 top-[9px] rotate-[-35deg] w-[22px] h-[2px] bg-gray-400"></span>
                  </div>
                )}
              </div>
            </div>

            {/* Forget Password */}
            <div className="mt-2 text-center">
              <a
                href="forgot-password"
                className="font-inter ml-[280px] font-semibold text-[14px] text-[#055860] hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-[309px] h-[42px] px-[100px] py-[10px] rounded-[6px] bg-[#691188] hover:bg-[#5a0f77] text-white font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}






