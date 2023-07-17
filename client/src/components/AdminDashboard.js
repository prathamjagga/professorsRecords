import React, { useState, useEffect } from "react";
import "./styles/admin-dashboard.css";

import { useNavigate } from "react-router-dom";
import Approval from "./utils/Approval";
import ProfileCard from "./ProfileCard";
import ProfessorNavbar from "./utils/ProfessorNavbar";
import NoticeBoard from "./utils/NoticeBoard";
import AdmToolkit from "./utils/AdmToolkit";

const AdminDashboard = () => {
  return (
    <div>
      <ProfessorNavbar />
      <div className="flex mt-28 ml-8">
        <ProfileCard />
        <div className="bg-white p-4 m-4 shadow-lg " style={{ width: "60%" }}>
          <h2
            className="text-2xl text-center font-bold text-gray-700 mb-4"
            style={{ width: "100%" }}
          >
            Papers and Patents{" "}
          </h2>
          <AdmToolkit />
          <NoticeBoard />
          <div className="pt-40 pb-20 text-2xl text-center text-gray-700 font-bold">
            More features on the way!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
