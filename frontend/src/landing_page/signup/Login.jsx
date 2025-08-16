import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import loginImg from "../../../public/media/images/account_open.svg";

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, { position: "bottom-left" });

    const handleSuccess = (msg) =>
        toast.success(msg, { position: "bottom-right" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3002/login",
                { ...inputValue },
                { withCredentials: true } // ensures cookies are sent if backend sets them
            );

            const { success, message } = data;

            if (success) {
                // Login successful → redirect to dashboard project
                handleSuccess(message);

                // Optional: pass token or user info via query param or localStorage
                // localStorage.setItem("authToken", data.token);
                setTimeout(() => {
                    window.location.href = "http://localhost:5173"; // dashboard project URL
                }, 1000);
            } else {
                // Login failed → redirect to signup project
                handleError(message);

                setTimeout(() => {
                    window.location.href = "http://localhost:5174/signup"; // signup project URL
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            // If the backend is down or network error
            handleError("Network error. Please try again later.");
        }

        setInputValue({ email: "", password: "" });
    };


    return (
        <div className="flex flex-col items-center px-4 py-8">
            <div className="text-center py-4 mb-6 hidden lg:block">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700">
                    Login to your account
                </h2>
                <p className="text-neutral-600 mt-2 text-xs md:text-base">
                    Access your trading and demat account and manage your investments easily
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-lg overflow-hidden py-4">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-2">
                    <img
                        src={loginImg}
                        alt="Login Illustration"
                        className="w-full max-w-lg object-contain"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
                    <div className="w-full max-w-md">
                        <h3 className="text-2xl font-semibold text-neutral-700 mb-6 text-center">
                            Welcome Back!
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387FD1] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter your password"
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387FD1] focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#387FD1] text-white py-2 rounded-lg font-semibold hover:bg-neutral-700 transition-colors"
                            >
                                Login
                            </button>
                        </form>

                        <p className="text-center mt-4 text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-[#387FD1] hover:underline">
                                Signup
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
