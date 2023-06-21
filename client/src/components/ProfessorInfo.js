import React, { useState, useEffect } from "react";
import "./styles/professor-info.css";

const ProfessorInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coins, setCoins] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProfessorInfo = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/api/professors/info",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch professor information");
        }

        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setCoins(data.coins);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProfessorInfo();
  }, []);

  return (
    <div>
      <h2>Professor Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Coins: {coins}</p>
    </div>
  );
};

export default ProfessorInfo;
