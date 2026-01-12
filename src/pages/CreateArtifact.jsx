import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

import { useAuth } from "../context/AuthProvider";

const CreateArtifact = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState("");
    const [file, setFile] = useState(null);

    const navigate = useNavigate();
    const { getAccessToken } = useAuth();

    const handleCreateArtifact = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("summary", summary);
        if (file) {
            formData.append("file", file);
        }

        try {
            const token = await getAccessToken();
            await axios.post("http://localhost:8000/api/create-artifact", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });
            toast.success("Artifact created successfully!");
            navigate("/");

        } catch (error) {
            toast.error("Failed to create artifact. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-6 transition-all relative overflow-hidden">

            {/* subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 dark:opacity-20 pointer-events-none"></div>

            <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow p-8 space-y-6">

                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center drop-shadow-md">
                    Create New Artifact
                </h1>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4">
                    Fill in the details below to create a new artifact.
                </p>

                <form className="flex flex-col gap-5" method="post">

                    {/* Title */}
                    <div className="relative flex flex-col gap-1 group">
                        <input
                            type="text"
                            id="id-title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="px-4 pt-5 pb-2 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition peer"
                            placeholder=" "
                        />
                        <label 
                            htmlFor="id-title"
                            className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
                        >
                            Title
                        </label>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col gap-1 group">
                        <textarea
                            id="id-content"
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="px-4 pt-5 pb-2 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none h-32 peer"
                            placeholder=" "
                        />
                        <label 
                            htmlFor="id-content"
                            className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
                        >
                            Content
                        </label>
                    </div>

                    {/* Summary */}
                    <div className="relative flex flex-col gap-1 group">
                        <input
                            type="text"
                            id="id-summary"
                            name="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            required
                            className="px-4 pt-5 pb-2 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition peer"
                            placeholder=" "
                        />
                        <label 
                            htmlFor="id-summary"
                            className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
                        >
                            Summary
                        </label>
                    </div>

                    {/* File Upload */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="id-file" className="text-gray-700 dark:text-gray-200 font-medium">
                            Attachment
                        </label>
                        <input 
                            type="file" 
                            id="id-file" 
                            name="file" 
                            onChange={(e) => setFile(e.target.files[0])} 
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white hover:border-indigo-500 transition"
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        onClick={handleCreateArtifact} 
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all"
                    >
                        Create Artifact
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreateArtifact;
