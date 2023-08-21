import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import IMSLogo from "../assets/ims-logo.png";
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
		<div
			style={{
				display: "flex",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<img src={Logo} className="w-3/12 mb-8" />
			<img src={IMSLogo} className="w-1/12 mb-12" />
			<h2 className="text-lg block mb-8 text-sm font-medium text-black-900 dark:text-black">
				Registeration for ProfessorIMS Portal 🙏
			</h2>

			<form className="mb-6">
				<div className="">
					<label
						for="phone"
						className="block mb-2 text-sm font-medium text-black-900 dark:text-black"
					>
						Enter Phone Number
					</label>
				</div>
				<div className="mb-2" style={{ display: "flex", flexDirection: "row" }}>
					<input
						readOnly
						type="text"
						id="otp"
						className=" text-center mr-2 w-12 bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500"
						value="+91"
						required
					/>
					<input
						type="text"
						id="otp"
						className="bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500"
						placeholder="9782161905"
						required
					/>
				</div>
				<div className="mb-4 text-sm" style={{ color: "blue" }}>
					<a>Send OTP</a>
				</div>
				<div className="mb-6">
					<label
						for="otp"
						className="block mb-2 text-sm font-medium text-black-900 dark:text-black"
					>
						Enter OTP
					</label>
					<input
						type="text"
						id="password"
						className="bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500"
						required
					/>
				</div>
				<div className="flex justify-center items-center">
					{" "}
					<button
						type="submit"
						className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Submit
					</button>
				</div>
			</form>

			<p>
				Don't have an account? <Link to="/register">Register</Link>
			</p>
			<p>
				<Link to="/admin-login">Admin Login</Link>
			</p>
		</div>
	);
};

export default Register;
