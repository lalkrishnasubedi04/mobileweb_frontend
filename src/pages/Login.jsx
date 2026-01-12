import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/AuthProvider";

const Login = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { getAccessToken } = useAuth();

    const handleUserLogin = async (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/login", {
            'email': email,
            'password': password
        })
        .then((response) => {
            const { access_token, refresh_token } = response.data;
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("refreshToken", refresh_token);
            toast.success("Login successful!");
            window.location.href = "/";
        })
        .catch((error) => {
            console.error("Login failed:", error);
            toast.error("Login failed. Please check your credentials and try again.");
        });
        
    }

    // Redirect to home if already logged in
    useEffect(() => {
        const fetchToken = async () => {
            const token = await getAccessToken();
            setAccessToken(token);
        };
        fetchToken();
        if (accessToken) {
            toast.info("You are already logged in.");   
        }
    }, [accessToken, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-all">

            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
                
                <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-md">
                    Login to DKN
                </h1>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4">
                    Enter your credentials to access your account
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
                        <label htmlFor="id-password" className="text-gray-700 dark:text-gray-200 font-medium">
                            Password
                        </label>
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

                    <button 
                        onClick={handleUserLogin} 
                        className="mt-4 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>

                    <div className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2">
                        Need an account? 
                        <Link to="/register" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
                            Register here
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Login;
