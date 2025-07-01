import React from "react";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Abhay Sharma
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate Full Stack Developer and Tech Enthusiast crafting
                impactful digital solutions across web, AI, and blockchain.
                Let’s connect and create something extraordinary together!
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Abhay-2309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-sharma-063322314/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Abhayrsha2309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:abhayrsharma1000@gmail.com"
                className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Machine leaning</li>
              <li className="text-gray-400">Web3</li>
              <li className="text-gray-400">Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                Made with <Heart className="text-red-500 mx-1" size={16} /> by
                Abhay Sharma
              </p>
              <p className="text-gray-500 text-sm mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/25"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
