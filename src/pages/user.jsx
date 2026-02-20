import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const users = [
  {
    id: "#U1001",
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 12, 2026",
  },
  {
    id: "#U1002",
    name: "Priya Verma",
    email: "priya@gmail.com",
    role: "Manager",
    status: "Active",
    joined: "Feb 05, 2026",
  },
  {
    id: "#U1003",
    name: "Rohan Mehta",
    email: "rohan@gmail.com",
    role: "Customer",
    status: "Inactive",
    joined: "Mar 18, 2026",
  },
  {
    id: "#U1004",
    name: "Sneha Kapoor",
    email: "sneha@gmail.com",
    role: "Customer",
    status: "Active",
    joined: "Apr 02, 2026",
  },
];

const roleColors = {
  Admin: "bg-purple-100 text-purple-700",
  Manager: "bg-blue-100 text-blue-700",
  Customer: "bg-gray-100 text-gray-700",
};

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Users Management
            </h1>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search users..."
                className="w-64 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                + Add User
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <div className="bg-white rounded-xl shadow-md p-6">

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-sm border-b">
                    <th className="py-3">User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Joined</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-4 text-blue-600 font-medium">
                        {user.id}
                      </td>

                      <td className="font-medium">{user.name}</td>

                      <td className="text-gray-600">{user.email}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            roleColors[user.role]
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            statusColors[user.status]
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="text-gray-600">{user.joined}</td>

                      <td className="text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedUser(user)}
                            className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition"
                          >
                            View
                          </button>

                          <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md text-sm hover:bg-gray-300 transition">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <p>Showing 1 to 4 of 120 users</p>
              <div className="flex gap-2">
                <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                  Previous
                </button>
                <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                  Next →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Popup Card (NO black background) */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">

          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 border pointer-events-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              User Details
            </h2>

            <div className="space-y-2 text-sm">
              <p><strong>User ID:</strong> {selectedUser.id}</p>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p>
                <strong>Role:</strong>{" "}
                <span className={`px-2 py-1 rounded text-xs ${roleColors[selectedUser.role]}`}>
                  {selectedUser.role}
                </span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`px-2 py-1 rounded text-xs ${statusColors[selectedUser.status]}`}>
                  {selectedUser.status}
                </span>
              </p>
              <p><strong>Joined:</strong> {selectedUser.joined}</p>
            </div>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </div>
  );
}