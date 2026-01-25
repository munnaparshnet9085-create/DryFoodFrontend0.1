import { createContext, useContext, useState, useEffect } from "react";
import { setAdmin, getAdmin, removeAdmin } from "../utils/storage";

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [admin, setAdminState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAdmin = getAdmin();
    setAdminState(storedAdmin);
    setLoading(false);
  }, []);

  const loginAdmin = (adminData) => {
    setAdmin(adminData);
    setAdminState(adminData);
  };

  const logoutAdmin = () => {
    removeAdmin();
    setAdminState(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, loginAdmin, logoutAdmin, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}