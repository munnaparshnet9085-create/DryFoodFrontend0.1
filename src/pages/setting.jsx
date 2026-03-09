import React, { useState } from "react";

const SettingPage = () => {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={profile.password}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
            <button
              type="button"
              className="ml-2 text-blue-600 hover:underline"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
        >
          Save Changes
        </button>
        {message && <div className="text-green-600 mt-2">{message}</div>}
      </form>
    </div>
  );
};

export default SettingPage;
