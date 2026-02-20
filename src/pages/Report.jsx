import React from "react";
import Sidebar from "../components/Sidebar";

const reports = [
  {
    id: "#R1001",
    title: "Monthly Sales Report",
    type: "Sales",
    generated: "Apr 01, 2026",
    status: "Completed",
  },
  {
    id: "#R1002",
    title: "User Activity Report",
    type: "Users",
    generated: "Apr 05, 2026",
    status: "Completed",
  },
  {
    id: "#R1003",
    title: "Revenue Summary",
    type: "Finance",
    generated: "Apr 08, 2026",
    status: "Pending",
  },
  {
    id: "#R1004",
    title: "Inventory Status",
    type: "Inventory",
    generated: "Apr 10, 2026",
    status: "Completed",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function ReportsPage() {
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
              Reports Dashboard
            </h1>

            <div className="flex items-center gap-4">
              <select className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-gray-500 text-sm">Total Reports</h2>
              <p className="text-2xl font-semibold mt-2">120</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-gray-500 text-sm">Completed</h2>
              <p className="text-2xl font-semibold mt-2 text-green-600">98</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-gray-500 text-sm">Pending</h2>
              <p className="text-2xl font-semibold mt-2 text-yellow-600">12</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-gray-500 text-sm">Revenue (₹)</h2>
              <p className="text-2xl font-semibold mt-2">₹2,45,000</p>
            </div>
          </div>

          {/* Reports Table */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-sm border-b">
                    <th className="py-3">Report ID</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Generated Date</th>
                    <th>Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {reports.map((report, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-4 text-blue-600 font-medium">
                        {report.id}
                      </td>

                      <td className="font-medium">{report.title}</td>

                      <td>{report.type}</td>

                      <td className="text-gray-600">
                        {report.generated}
                      </td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            statusColors[report.status]
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>

                      <td className="text-right">
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <p>Showing 1 to 4 of 120 reports</p>
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
    </div>
  );
}