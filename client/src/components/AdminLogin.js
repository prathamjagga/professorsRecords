import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import IMSLogo from "../assets/ims-logo.png";
import "./styles/admin-login.css";

const AdminLogin = () => {
	const [adminKey, setAdminKey] = useState("");
	const navigate = useNavigate();

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
				Admin Login
			</h2>

			<form className="mb-6">
				<div className="mb-6">
					<label
						for="otp"
						className="block mb-2 text-sm font-medium text-black-900 dark:text-black"
					>
						Enter Key
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
				<Link to="/">Professor Login</Link>
			</p>
		</div>
	);
};

export default AdminLogin;
