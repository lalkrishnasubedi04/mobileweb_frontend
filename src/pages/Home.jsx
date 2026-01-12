const Home = () => {
    return (
        <div className="flex-1 min-h-[90vh] p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
        dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-all">

            {/* HERO CARD */}
            <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 text-center">

                {/* Badge */}
                <span className="inline-block mb-4 px-5 py-1 text-sm rounded-full 
                bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                    Digital Knowledge Network
                </span>

                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
                    Welcome to DKN
                </h1>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                    A centralized platform to manage digital artifacts, track requests, and build 
                    your personalized collection with confidence.
                </p>

                {/* Hero Image */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2983/2983806.png"
                    alt="Knowledge Hub"
                    className="mx-auto w-44 md:w-56 mb-10 drop-shadow-2xl"
                />

                {/* Primary Actions */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-14">
                    <a
                        href="/artifacts"
                        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
                    >
                        📂 Explore Artifacts
                    </a>

                    <a
                        href="/create-artifact"
                        className="px-8 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
                    >
                        ➕ Add New Artifact
                    </a>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div>
                        <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">1,200+</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Artifacts Archived</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">650+</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Registered Users</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-pink-600 dark:text-pink-400">99.9%</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">System Availability</p>
                    </div>
                </div>

                {/* HOW IT WORKS */}
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    How DKN Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

                    <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                            1️⃣ Upload
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Create and submit artifacts with relevant metadata and documentation.
                        </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                            2️⃣ Review
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Requests are reviewed to ensure accuracy and quality standards.
                        </p>
                    </div>

                    <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                            3️⃣ Manage
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Access, update, and organize your artifacts anytime.
                        </p>
                    </div>

                </div>

                {/* FEATURES */}
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    Why Choose DKN?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                            🔐 Secure Access
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Role-based authentication ensures data integrity and privacy.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                            🚀 High Performance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Fast loading and optimized workflows for smooth user experience.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                            🎨 Modern UI
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Clean, accessible, and responsive design across all devices.
                        </p>
                    </div>

                </div>

                {/* FINAL CTA */}
                <div className="bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Start Managing Your Knowledge Today
                    </h2>
                    <p className="mb-6 text-sm opacity-90">
                        Join DKN and take control of your digital artifacts with confidence.
                    </p>
                    <a
                        href="/artifacts"
                        className="inline-block px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Home;
