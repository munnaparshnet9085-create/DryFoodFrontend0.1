import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-600 to-green-500 text-white flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <div className="p-6 text-xl font-bold border-b border-white/30">
          Admin Dashboard
        </div>

        <nav className="p-4 space-y-2">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin"
                className="block px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                to="/users"
                className="block px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                User
              </Link>
            </li>

            <li>
              <Link
                to="/payment"
                className="block px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Payments
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                className="block px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to="/reports"
                className="block px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Report
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section - Logout */}
      <div className="p-4 border-t border-white/30">
        <button
          className="w-full bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg font-medium"
          onClick={() => {
            // Add your logout logic here
            alert("Logged out successfully!");
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}