import React, { useState, useEffect } from "react";
import ProfessorInfo from "./ProfessorInfo";
import "./styles/professor-dashboard.css";
import { useNavigate } from "react-router-dom";

const ProfessorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("listRP");
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState([]);
  const [url, setUrl] = useState("");
  const [researchPapers, setResearchPapers] = useState([]);
  const [patents, setPatents] = useState([]);
  const token = localStorage.getItem("token");

  const fetchPatents = async () => {
    return;
  };

  useEffect(() => {
    fetchResearchPapers();
    fetchPatents();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleUploadFormSubmit = async (e, type) => {
    e.preventDefault();
    console.log({ name, authors, type, url });
    // Make the API call to upload research paper
    try {
      const response = await fetch(
        "http://localhost:3500/api/professors/upload-research-paper",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ name, authors, url, type }),
        }
      );

      if (response.ok) {
        // Show an alert for successful upload
        alert("Research paper uploaded successfully");

        // Clear the form fields
        setName("");
        setAuthors("");
        setUrl("");

        // Refresh the list of research papers
        fetchResearchPapers();
      } else {
        // Handle error cases
        console.error("Upload failed:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchResearchPapers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3500/api/professors/research-papers",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const filteredPatents = data.researchPapers.filter((entity) => {
          if (entity.type == "patent") return true;
          else return false;
        });
        const filteredResearchPapers = data.researchPapers.filter((entity) => {
          if (entity.type == "researchPaper") return true;
          else return false;
        });
        setResearchPapers(filteredResearchPapers);
        setPatents(filteredPatents);
        console.log("Filtered RP", filteredResearchPapers);
        console.log("Filtered Patents", filteredPatents);
        console.log(data.researchPapers);
      } else {
        console.error("Failed to fetch research papers:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Professor Dashboard</h2>
      <ProfessorInfo />{" "}
      <div>
        <button onClick={() => handleTabChange("uploadRP")}>
          Upload Research Paper
        </button>
        <button onClick={() => handleTabChange("listRP")}>
          View Research Papers
        </button>
        <button onClick={() => handleTabChange("uploadPT")}>
          Upload Patent
        </button>
        <button onClick={() => handleTabChange("listPT")}>View Patents</button>
      </div>
      {activeTab === "uploadRP" && (
        <div>
          <h3>Upload Research Paper</h3>
          <form
            onSubmit={(e) => {
              handleUploadFormSubmit(e, "researchPaper");
            }}
          >
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Authors:</label>
              <input
                type="text"
                value={authors}
                onChange={(e) => setAuthors([e.target.value])}
                required
              />
            </div>
            <div>
              <label>URL:</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button type="submit">Upload</button>
          </form>
        </div>
      )}
      {activeTab === "listRP" && (
        <div>
          <h3>Research Papers</h3>
          {researchPapers.length === 0 ? (
            <p>No research papers available</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Authors</th>
                  <th>URL</th>
                  <th>Claimed</th>
                </tr>
              </thead>
              <tbody>
                {researchPapers.map((paper) => (
                  <tr key={paper._id}>
                    <td>{paper.name}</td>
                    <td>{paper.authors.join(", ")}</td>
                    <td>
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td>{paper.claimed === true ? "Claimed" : "Unverified"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      {activeTab === "uploadPT" && (
        <div>
          <h3>Upload Patent</h3>
          <form
            onSubmit={(e) => {
              handleUploadFormSubmit(e, "patent");
            }}
          >
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Authors:</label>
              <input
                type="text"
                value={authors}
                onChange={(e) => setAuthors([e.target.value])}
                required
              />
            </div>
            <div>
              <label>URL:</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <button type="submit">Upload</button>
          </form>
        </div>
      )}
      {activeTab === "listPT" && (
        <div>
          <h3>Your Patents</h3>
          {patents.length === 0 ? (
            <p>No Patents available</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Authors</th>
                  <th>URL</th>
                  <th>Claimed</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((paper) => (
                  <tr key={paper._id}>
                    <td>{paper.name}</td>
                    <td>{paper.authors.join(", ")}</td>
                    <td>
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td>{paper.claimed === true ? "Claimed" : "Unverified"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
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

export default ProfessorDashboard;
