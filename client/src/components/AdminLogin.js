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
      <button onClick={handleAdminLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
