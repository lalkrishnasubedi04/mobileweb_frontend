import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full mt-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white">
            
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h1 className="text-3xl font-extrabold tracking-wide mb-3 drop-shadow-md">
                        DKN
                    </h1>
                    <p className="text-sm text-white/80 leading-relaxed">
                        Digital Knowledge Network is a modern platform designed to 
                        manage, review, and preserve digital artifacts efficiently.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>
                            <a href="/" className="hover:text-white transition">Home</a>
                        </li>
                        <li>
                            <a href="/artifacts" className="hover:text-white transition">Artifacts</a>
                        </li>
                        <li>
                            <a href="/create-artifact" className="hover:text-white transition">Create Artifact</a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>
                            <a href="#" className="hover:text-white transition">Documentation</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">User Guide</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Support</a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaTwitter size={16} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
                    <p>
                        © {new Date().getFullYear()} DKN. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Built with ❤️ by DKN Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
