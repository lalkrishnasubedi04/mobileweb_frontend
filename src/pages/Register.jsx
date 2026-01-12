import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

import { SystemRole, Region } from "../types";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [region, setRegion] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({
        name: "",
        email: "",
        role: "",
        region: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();
    const {accessToken, setAccessToken, getAccessToken} = useAuth();

    const handleUserRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError((prevError) => ({
                ...prevError,
                confirmPassword: "Passwords do not match"
            }));
            return;
        }

        axios.post("http://localhost:8000/api/register", {
            'name': name,
            'email': email,
            'role': role,
            'region': region,
            'password': password
        })
        .then((response) => {
            toast.success("Registration successful! Please login.");
            navigate("/login");
        })
        .catch((error) => {
            console.error("Registration failed:", error);
            toast.error("Registration failed. Please try again.");
        });
    };

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getAccessToken();
            setAccessToken(token);
        };
        fetchToken();
        if (accessToken) {
            toast.info("You are already logged in. Redirecting to home.");
            navigate("/");
        }
    }, [accessToken, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-all p-4">

            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
                
                <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-md">
                    Create your account
                </h1>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4">
                    Fill in your details to register and join DKN
                </p>

                <form className="flex flex-col gap-4" method="post">

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-email" className="text-gray-700 dark:text-gray-200 font-medium">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="id-email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        />
                        {error.email && <span className="text-sm text-red-600">{error.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-name" className="text-gray-700 dark:text-gray-200 font-medium">
                            Name
                        </label>
                        <input 
                            type="text" 
                            id="id-name" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        />
                        {error.name && <span className="text-sm text-red-600">{error.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-role" className="text-gray-700 dark:text-gray-200 font-medium">Role</label>
                        <select 
                            id="id-role" 
                            name="role" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        >
                            <option value="">Select a role</option>
                            {Object.values(SystemRole).map((role) => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                        {error.role && <span className="text-sm text-red-600">{error.role}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-region" className="text-gray-700 dark:text-gray-200 font-medium">Region</label>
                        <select 
                            id="id-region" 
                            name="region" 
                            value={region} 
                            onChange={(e) => setRegion(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        >
                            <option value="">Select a region</option>
                            {Object.values(Region).map((region) => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                        {error.region && <span className="text-sm text-red-600">{error.region}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-password" className="text-gray-700 dark:text-gray-200 font-medium">Password</label>
                        <input 
                            type="password" 
                            id="id-password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        />
                        {error.password && <span className="text-sm text-red-600">{error.password}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-confirm-password" className="text-gray-700 dark:text-gray-200 font-medium">Confirm Password</label>
                        <input 
                            type="password" 
                            id="id-confirm-password" 
                            name="confirm_password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required
                            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                        />
                        {error.confirmPassword && <span className="text-sm text-red-600">{error.confirmPassword}</span>}
                    </div>

                    <button 
                        onClick={handleUserRegister} 
                        className="mt-4 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
                    >
                        Register
                    </button>

                    <div className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2">
                        Already have an account? 
                        <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
                            Login here
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;
