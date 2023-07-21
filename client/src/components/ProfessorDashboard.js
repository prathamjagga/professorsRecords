import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfessorNavbar from "./utils/ProfessorNavbar";
import Toolkit from "./utils/Toolkit";

function ProfessorDashboard() {
  // States
  const [professorDetails, setProfessorDetails] = useState({});

  return (
    <div>
      <ProfessorNavbar />
      <div className="flex">
        <ProfileCard />
        <div
          className="bg-white/100 p-4 m-4 shadow-lg "
          style={{ width: "60%" }}
        >
          <h2
            className="text-2xl text-center font-bold text-gray-700"
            style={{ width: "100%" }}
          >
            Utilities{" "}
          </h2>
          <Toolkit />
        </div>
      </div>
    </div>
  );
}

export default ProfessorDashboard;

// useEffect(() => {
//   fetchResearchPapers();
//   fetchPatents();
// }, []);

// const handleTabChange = (tab) => {
//   setActiveTab(tab);
// };

// const handleUploadFormSubmit = async (e, type) => {
//   e.preventDefault();
//   console.log({ name, authors, type, url });
//   // Make the API call to upload research paper
//   try {
//     const response = await fetch(
//       "http://localhost:3500/api/professors/upload-research-paper",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//         body: JSON.stringify({ name, authors, url, type }),
//       }
//     );

//     if (response.ok) {
//       // Show an alert for successful upload
//       alert("Research paper uploaded successfully");

//       // Clear the form fields
//       setName("");
//       setAuthors("");
//       setUrl("");

//       // Refresh the list of research papers
//       fetchResearchPapers();
//     } else {
//       // Handle error cases
//       console.error("Upload failed:", response.status);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// const fetchResearchPapers = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:3500/api/professors/research-papers",
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       const filteredPatents = data.researchPapers.filter((entity) => {
//         if (entity.type == "patent") return true;
//         else return false;
//       });
//       const filteredResearchPapers = data.researchPapers.filter((entity) => {
//         if (entity.type == "researchPaper") return true;
//         else return false;
//       });
//       setResearchPapers(filteredResearchPapers);
//       setPatents(filteredPatents);
//       console.log("Filtered RP", filteredResearchPapers);
//       console.log("Filtered Patents", filteredPatents);
//       console.log(data.researchPapers);
//     } else {
//       console.error("Failed to fetch research papers:", response.status);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
