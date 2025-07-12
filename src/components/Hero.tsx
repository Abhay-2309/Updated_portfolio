import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  Code,
  Palette,
} from "lucide-react";
// import myimage from "../src/Assets/Project.jpg";
// import myresume from "./Assets/MyResume.pdf"

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Code size={16} className="mr-2" />
                Learner & Sports Enthusiast
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Abhay Sharma
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                🚀 Third-year CSE student at NIT Silchar, passionate about
                turning ideas into real-world tech solutions.<br></br>
                💻 Skilled in full-stack development, machine learning, and
                blockchain technology.<br></br>
                🌱 Always learning, building, and pushing the boundaries of
                what’s possible with code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-blue-500/25"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <a
                href="https://drive.google.com/file/d/1EgG36g6O2CbQEw1TQrwZplGotlUxfyv9/view?usp=sharing"
                download
                target="_black"
                className="group border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 backdrop-blur-sm"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex space-x-4">
              <SocialLink
                href="https://github.com/Abhay-2309"
                icon={<Github size={20} />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/abhay-sharma-063322314/"
                icon={<Linkedin size={20} />}
              />
              <SocialLink
                href="https://x.com/Abhayrsha2309"
                icon={<Twitter size={20} />}
              />
              <SocialLink
                href="mailto:abhayrsharma1000@gmail.com"
                icon={<Mail size={20} />}
              />
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-blue-500/25">
                {/* Updated Image Layout */}
                <img
                  src="https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390543/Project_fibceo.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg">
                💡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl animate-pulse shadow-lg">
                🚀
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-lg animate-ping">
                <Palette size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SocialLink helper component
type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gray-800/50 hover:bg-blue-600 hover:text-white text-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700 hover:border-blue-500"
  >
    {icon}
  </a>
);

export default Hero;
