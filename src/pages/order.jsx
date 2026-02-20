import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const orders = [
  {
    id: "#1234",
    customer: "Arjun Sharma",
    total: "₹249.99",
    status: "Completed",
    date: "Apr 25, 2026",
  },
  {
    id: "#1233",
    customer: "Priya Verma",
    total: "₹79.98",
    status: "Pending",
    date: "Apr 24, 2026",
  },
  {
    id: "#1232",
    customer: "Rahul Mehta",
    total: "₹149.49",
    status: "Processing",
    date: "Apr 24, 2026",
  },
  {
    id: "#1231",
    customer: "Sneha Kapoor",
    total: "₹39.99",
    status: "Completed",
    date: "Apr 24, 2026",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-orange-100 text-orange-700",
};

export default function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState(null);

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
              Order Table
            </h1>

            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                    <th className="py-3"># ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-4 text-blue-600 font-medium">
                        {order.id}
                      </td>
                      <td>{order.customer}</td>
                      <td className="font-semibold">{order.total}</td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            statusColors[order.status]
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td>{order.date}</td>
                      <td className="text-right">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <p>Showing 1 to 5 of 200 products</p>
              <button className="text-blue-600 font-medium hover:underline">
                Next →
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Popup Card (No Black Background) */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 border pointer-events-auto">
            
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Order Details
            </h2>

            <div className="space-y-2 text-sm">
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Total:</strong> {selectedOrder.total}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    statusColors[selectedOrder.status]
                  }`}
                >
                  {selectedOrder.status}
                </span>
              </p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>

        </div>
      )}

    </div>
  );
}