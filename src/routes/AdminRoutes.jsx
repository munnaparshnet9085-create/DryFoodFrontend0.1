import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRegister from "../pages/admin/Register";
import PaymentsTable from "../pages/payment";
import OrdersTable  from "../pages/order";
import UsersPage from "../pages/user";
import ReportsPage from "../pages/Report";



export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
      <Route path ="/payment" element={<PaymentsTable />} />
            <Route path ="/orders" element={<OrdersTable />} />
            <Route path ="/users" element={<UsersPage />} />
            <Route path ="/" element={<ReportsPage />} />

    </Routes>
  );
}
//todo
//public protected format