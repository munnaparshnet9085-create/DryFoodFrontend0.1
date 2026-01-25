import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234") {
      navigate("/admin");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      {/* The "Card" */}
      <div className="w-full max-w-[400px] bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 p-10 border border-white/20">
        
        {/* Logo/Icon Area */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-4 rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-3xl text-white">📦</span>
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">DryFood Admin</h1>
          <p className="text-slate-400 text-sm font-medium">Secure Access Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
              Username
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
              placeholder="••••••••"
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-300 text-slate-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:shadow-indigo-200 transition-all duration-300 active:scale-95 mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Footer Hint */}
        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-xs font-medium">
            Demo Mode? Use password <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md">1234</span>
          </p>
        </div>
      </div>
    </div>
  );
}