import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSun, BiMoon, BiMenu, BiCross } from "react-icons/bi";
import { toast } from "react-toastify";

import { useTheme } from "../context/ThemeProvider";
import { useAuth } from "../context/AuthProvider";
import { useUser } from "../context/UserProvider";
import { SystemRole } from "../types";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { theme, toggleTheme } = useTheme();
    const { clearTokens, isAuthenticated } = useAuth();
    const { user } = useUser();

    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        toast.info("You have been logged out.");
        clearTokens();
        navigate("/logout");
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const baseLink =
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";

    const inactive =
        "text-gray-700 dark:text-gray-200 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800";

    const active =
        "bg-indigo-600 text-white shadow-md";

    return (
        <header
            className={`
                fixed top-0 w-full z-50 transition-all duration-300
                ${scrolled
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-xl"
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400"}
            `}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl font-bold tracking-wide text-white drop-shadow-md"
                >
                    DKN
                </NavLink>

                {/* Desktop */}
                <nav className="hidden md:flex items-center space-x-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? active : inactive}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/artifacts"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? active : inactive}`
                        }
                    >
                        Database
                    </NavLink>

                    {isAuthenticated() && (
                        <>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? active : inactive}`
                                }
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/create-artifact"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? active : inactive}`
                                }
                            >
                                Create Artifact
                            </NavLink>

                            <NavLink
                                to="/personal-artifacts"
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? active : inactive}`
                                }
                            >
                                My Artifacts
                            </NavLink>
                        </>
                    )}

                    {user && user.role === SystemRole.ADMIN && (
                        <NavLink
                            to="/artifact-review-requests"
                            className={({ isActive }) =>
                                `${baseLink} ${isActive ? active : inactive}`
                            }
                        >
                            Review Requests
                        </NavLink>
                    )}

                    {isAuthenticated() ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-red-500 hover:bg-red-600 shadow-md transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${baseLink} ${isActive ? active : inactive}`
                            }
                        >
                            Login
                        </NavLink>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
                    >
                        {theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
                    </button>
                </nav>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-3 text-white">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                        {theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                        {isOpen ? <BiCross size={24} /> : <BiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pt-3">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 space-y-3">
                        <NavLink to="/" className={baseLink + " block text-gray-800"}>Home</NavLink>

                        {isAuthenticated() && (
                            <>
                                <NavLink to="/create-artifact" className={baseLink + " block text-gray-800"}>
                                    Create Artifact
                                </NavLink>
                                <NavLink to="/personal-artifacts" className={baseLink + " block text-gray-800"}>
                                    My Artifacts
                                </NavLink>
                            </>
                        )}

                        {user && user.role === SystemRole.ADMIN && (
                            <NavLink to="/artifact-review-requests" className={baseLink + " block text-gray-800"}>
                                Review Requests
                            </NavLink>
                        )}

                        {isAuthenticated() ? (
                            <button
                                onClick={handleLogout}
                                className="w-full py-2 rounded-full bg-red-500 text-white font-medium"
                            >
                                Logout
                            </button>
                        ) : (
                            <NavLink to="/login" className={baseLink + " block text-gray-800"}>
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
