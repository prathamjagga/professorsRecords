import React, { useState, useEffect } from "react";
import "./styles/admin-dashboard.css";

import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const checkToken = () => {
    if (localStorage.getItem("adminKey") === "1390734fkjdhsdfhls") return;
    else navigate("/");
    return;
  };
  const [researchPapers, setResearchPapers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    checkToken();
    fetchResearchPapers();
  }, []);

  const handleClaimPaper = async (paperId) => {
    const confirmed = window.confirm(
      "Are you sure you want to pass this research paper?"
    );
    if (confirmed) {
      try {
        const response = await fetch(
          "http://localhost:3500/api/professors/claim",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paperId }),
          }
        );

        if (response.ok) {
          // Show success message
          alert("Research paper claimed successfully");

          // Refresh the list of research papers
          fetchResearchPapers();
        } else {
          // Handle error cases
          console.error("Claiming paper failed:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const fetchResearchPapers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3500/api/professors/all-research-papers"
      );

      if (response.ok) {
        const data = await response.json();
        setResearchPapers(data.researchPapers);
      } else {
        console.error("Failed to fetch research papers:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Papers and Patents</h3>
      {researchPapers.length === 0 ? (
        <p>No Entities available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Actions</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {researchPapers.map((paper) => (
              <tr key={paper._id}>
                <td>{paper.name}</td>
                <td>{paper.authors.join(", ")}</td>
                <td>
                  {!paper.claimed ? (
                    <button onClick={() => handleClaimPaper(paper._id)}>
                      Claim
                    </button>
                  ) : (
                    <button disabled>Claimed</button>
                  )}
                </td>
                <td>{paper.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
