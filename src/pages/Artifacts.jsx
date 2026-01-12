import { useEffect, useState } from "react";
import axios from "axios";

import ArtifactDetail from "../components/ArtifactDetail";
import Modal from "../components/Modal";

const Artifacts = () => {

    const [artifacts, setArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchArtifacts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/artifacts", {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                setArtifacts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching artifacts:", error);
                setLoading(false);
            }
        };

        fetchArtifacts();
    }, []);

    const normalizedTerm = searchTerm.trim().toLowerCase();
    const filteredArtifacts = artifacts.filter((artifact) => {
        if (!normalizedTerm) return true;
        const haystack = `${artifact.title || ""} ${artifact.summary || ""} ${artifact.content || ""}`.toLowerCase();
        return haystack.includes(normalizedTerm);
    });

    return (
        <div className="p-8 flex flex-1 flex-col items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen transition-all">

            {/* Search Bar */}
            <form
                className="mb-4 w-full max-w-2xl flex flex-col md:flex-row justify-center gap-4"
                onSubmit={(event) => event.preventDefault()}
            >
                <input
                    className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
                    name="q"
                    type="search"
                    placeholder="Search artifacts..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button 
                    type="submit" 
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Search
                </button>
            </form>

<p className="mb-6 max-w-xl text-center text-sm text-blue-700 dark:text-blue-400">
  "Fetching artifacts from the South America region may experience delays due to network instability."
</p>


            {loading ? (
                <p className="text-gray-700 dark:text-gray-300">Loading...</p>
            ) : (
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArtifacts.length > 0 ? filteredArtifacts.map((artifact) => (
                        <div key={artifact.id} className="relative group">
                            <div
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-2xl transition cursor-pointer bg-white dark:bg-gray-800"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        {artifact.title}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${artifact.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-teal-100 text-teal-800 border-teal-300'}`}>
                                        {artifact.status}
                                    </span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                                    {artifact.summary}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                                    <div className="flex items-center gap-1">
                                        <span>Created: {new Date(artifact.created_on).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>Updated: {new Date(artifact.last_updated).toLocaleDateString()}</span>
                                    </div>
                                    {artifact.file && (
                                        <div className="flex items-center gap-1">
                                            <span className="truncate max-w-xs">Files: {artifact.file}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                <ArtifactDetail
                                    key={artifact.id}
                                    id={artifact.id}
                                    title={artifact.title}
                                    content={artifact.content}
                                    summary={artifact.summary}
                                    fileUrl={artifact.file_url}
                                    status={artifact.status}
                                    createdBy={artifact.created_by}
                                    review={artifact.review}
                                    reviewRequested={artifact.review_requested}
                                />
                            </Modal>
                        </div>
                    )) : (
                        <p className="text-center col-span-full text-gray-600 dark:text-gray-400">No artifacts found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Artifacts;
