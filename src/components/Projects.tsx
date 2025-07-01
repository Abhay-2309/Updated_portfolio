import React, { useState } from "react";
import { ExternalLink, Github, Calendar, Tag, Filter } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "UI/UX" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390543/Ecommerce-website_nwkloh.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abhay-2309/E-commerce-using-Tailwind",
      date: "2025",
      featured: true,
    },
    {
      title: "TrustLens",
      description: `Online trust is fragmented and platform-specific. A 5-star rating on one e-commerce site means nothing on another, and users are constantly forced to build their reputation from scratch. This creates friction for good users and opportunities for fraudsters who can easily create new accounts. TrustLens addresses this fundamental problem by creating a decentralized reputation protocol. It enables users to build a single, portable, and user-owned "Trust Passport" that securely records their positive online behavior (like genuine reviews or verified purchases) as tamper-proof credentials on a public blockchain. This allows any participating platform to instantly verify a new user's trustworthiness based on their entire cross-platform history, dramatically reducing fraud and creating frictionless experiences for legitimate users.`,
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390544/Trustlens_swlbgu.png",
      tags: ["MongoDB", "Express", "React", "Node.js", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Blockchain", "Smart Contracts", "Web3"],
      category: "web",
      liveUrl: "http://trust-lens-seven.vercel.app/",
      githubUrl: "https://github.com/Prizag/TrustLens",
      date: "2025",
      featured: true,
    },
    {
      title: "Agri-AI-Sprinkler-System-Simulator ",
      description:
        "The Agri-AI Smart Irrigation Simulator is a full-stack application designed to model and optimize agricultural watering schedules. Traditional irrigation systems often rely on fixed timers, leading to significant water waste and suboptimal crop health. This project tackles that problem by creating a virtual farm environment where an AI-driven engine analyzes simulated real-time data—such as weather forecasts, soil moisture, and crop type—to generate a highly efficient, dynamic watering plan. The simulator allows users to configure their farm, run what-if scenarios, and visualize the impact of an intelligent irrigation strategy versus a traditional one, demonstrating clear savings in water and potential increases in crop yield without any real-world risk.",
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390541/AI-driven-sprinkler-system_xrh1xf.png",
      tags: ["Random forest","Streamlit","Python"],
      category: "web",
      liveUrl: "https://agri-ai-sprinkler-system-simulator-hzbidxfdl7kffe4wxvq3jk.streamlit.app/",
      githubUrl: "https://github.com/Abhay-2309/Agri-AI-Sprinkler-System-Simulator",
      date: "2025",
      featured: true,
    },
    {
      title: "Job_fit_analyser",
      description:
        "The Job Fit Analyzer is a modern, API-driven application designed to bridge the gap between job seekers and employers. In today's competitive job market, tailoring a resume for every application is critical but time-consuming. Recruiters, on the other hand, are inundated with applications and need a way to screen candidates efficiently without bias.",
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390542/Job-fit-analyser_ar9kog.png",
      tags: ["Flask", "OpenAI API", "LLM", "NLP", "REST API", "Python", "Job Matching", "Resume Parsing", "AI", "Backend"],
      category: "Machine leaning",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abhay-2309/Job_fit_analyser",
      date: "2025",
      featured: false,
    },
    {
      title: "Chat_based_system",
      description:
        "A real-time chat application built in C++ using OOP and socket programming, implementing a client-server model over the TCP/IP protocol. The server handles multiple clients concurrently using multithreading, allowing full-duplex messaging. The project demonstrates strong understanding of networking fundamentals, including socket lifecycle, IP/port management, and system-level communication. Developed on Linux using POSIX sockets, the code is modular, scalable, and structured for future enhancements like authentication, encryption, or database integration. This project showcases expertise in system programming, concurrency, and clean software design.",
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390542/Chart_based_system_wudssr.jpg",
      tags: ["C++", "OOP", "Socket Programming", "TCP/IP", "Networking", "Multithreading", "Client-Server Model", "Chat Application", "Linux", "System Programming"],
      category: "OOP",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abhay-2309/Chat_based_system",
      date: "2025",
      featured: false,
    },
    {
      title: "OCT-Image-Classification",
      description:
        "This project leverages Convolutional Neural Networks (CNNs) to classify OCT (Optical Coherence Tomography) images for early detection of retinal diseases. Built using Python, TensorFlow, and Keras, the model is trained to distinguish between healthy and diseased retinal scans with high accuracy. A user-friendly Streamlit interface allows real-time image upload and prediction, making the tool accessible to non-technical users. The project demonstrates skills in medical image processing, deep learning, and AI in healthcare, with potential for clinical deployment to assist ophthalmologists in diagnosis.",
      image:
        "https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390543/OCT_image_classification_bzmqno.jpg",
     tags: ["Python", "CNN", "Deep Learning", "OCT Classification", "Medical Imaging", "TensorFlow", "Keras", "Streamlit", "Image Processing", "AI in Healthcare"],
      category: "Machine learning",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Abhay-2309/OCT-Image-Classification",
      date: "2022",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 text-pink-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-pink-500/50 group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-300 flex items-center border border-gray-600">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-pink-500/20 border border-pink-500/30 text-pink-300 px-3 py-1 rounded-full text-sm font-medium flex items-center backdrop-blur-sm"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-1 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-pink-500/50 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-300 flex items-center border border-gray-600">
                  <Calendar size={12} className="mr-1" />
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700/50 border border-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-700/50 border border-gray-600 text-gray-400 px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
