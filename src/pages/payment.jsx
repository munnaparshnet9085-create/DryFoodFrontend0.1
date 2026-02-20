import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const payments = [
  { id: "#5005", order: "#1234", name: "Mary Johnson", amount: 249.98, method: "Credit Card" },
  { id: "#5004", order: "#1234", name: "David Smith", amount: 79.98, method: "Credit Card" },
  { id: "#5003", order: "#1233", name: "Emily White", amount: 149.49, method: "PayPal" },
  { id: "#5002", order: "#1232", name: "John Doe", amount: 99.99, method: "PayPal" },
  { id: "#5001", order: "#1230", name: "John Doe", amount: 99.99, method: "PayPal" },
];

export default function PaymentsTable() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Payment Table
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
          <div className="bg-white rounded-xl shadow-md w-full p-6">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500 text-sm border-b">
                    <th className="py-3"># ID</th>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((p, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-blue-600 font-medium">{p.id}</td>
                      <td className="text-blue-600">{p.order}</td>
                      <td className="font-medium">{p.name}</td>
                      <td className="font-semibold">
                        ₹{p.amount.toLocaleString("en-IN")}
                      </td>
                      <td>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
                          {p.method}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => setSelectedPayment(p)}
                          className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <span>Showing 1 to 5 of 980 payments</span>
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                Next →
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Popup Card (No Black Background) */}
      {selectedPayment && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 border pointer-events-auto">
            
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Payment Details
            </h2>

            <div className="space-y-2 text-sm">
              <p><strong>Payment ID:</strong> {selectedPayment.id}</p>
              <p><strong>Order ID:</strong> {selectedPayment.order}</p>
              <p><strong>Customer:</strong> {selectedPayment.name}</p>
              <p>
                <strong>Amount:</strong> ₹
                {selectedPayment.amount.toLocaleString("en-IN")}
              </p>
              <p><strong>Method:</strong> {selectedPayment.method}</p>
            </div>

            <button
              onClick={() => setSelectedPayment(null)}
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