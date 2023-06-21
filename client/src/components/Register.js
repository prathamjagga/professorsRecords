import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Make the API call with name, email, and password
    try {
      const response = await fetch(
        "http://localhost:3500/api/professors/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.status === 201) {
        // Show an alert for successful registration
        alert("Registration successful");

        // Navigate to the login page
        navigate("/");
      } else {
        // Handle other error cases
        console.error("Registration failed:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
      <p>
        <Link to="/">Admin Login</Link>
      </p>
    </div>
  );
};

export default Register;
