import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // In production, this would call an API to register
    alert("Registration successful! Redirecting to login...");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="w-full max-w-[400px] bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 p-10 border border-white/20">
        
        {/* Logo/Icon Area */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-4 rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-3xl text-white"></span>
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">DryFood Admin</h1>
          <p className="text-slate-400 text-sm font-medium">Create Account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@dryfood.com"
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-300 text-slate-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-300 text-slate-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-300 text-slate-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:shadow-indigo-200 transition-all duration-300 active:scale-95 mt-4"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-slate-600 text-sm">
            Already have an account?{" "}
            <span
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/admin/login")}
            >
              Sign In
            </span>
          </p>
        </form>

        {/* Footer Hint */}
        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-xs font-medium">
            Secure admin registration portal
          </p>
        </div>
      </div>
    </div>
  );
}
