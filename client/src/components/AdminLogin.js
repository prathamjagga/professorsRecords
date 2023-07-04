import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/admin-login.css";

const AdminLogin = () => {
  const [adminKey, setAdminKey] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (adminKey === "1390734fkjdhsdfhls") {
      // Save admin key to local storage
      localStorage.setItem("adminKey", adminKey);

      // Redirect to admin dashboard
      navigate("/admin-dashboard");
    } else {
      // Show alert for wrong key
      alert("Wrong key");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <label>Admin Key:</label>
        <input
          type="password"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
        />
      </div>
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleAdminLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
