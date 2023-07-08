import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/admin-login.css";
// import Logo from "../assets/logo.png";
// import IMSLogo from "../assets/ims-logo.png";

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
    <div  style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>

    {/* <img src={Logo} className="w-3/12 mb-8" />
      
      <img src={IMSLogo} className="w-1/12 mb-12" /> */}


      <h2 className="text-lg block mb-6 text-lg font-bold text-black-800 dark:text-black">Admin Login</h2>
      <div>
        <label className="mx-4 text-md font-medium text-black-900 dark:text-black">Admin Key:</label>
        <div className="mb-2" style={{ display: "flex", flexDirection: "row" }}>
        <input
          className=" text-center w-12 bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500"
          type="password"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
        />
        </div>
      </div>
      <button onClick={handleAdminLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
