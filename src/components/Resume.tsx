import React, { useState } from 'react';
import { Download, Calendar, MapPin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
  ];

  const experience = [
  {
    title: 'Machine Learning Intern',
    company: 'IEEE Winter Internship, NIT Silchar',
    period: 'Dec 2024 - Jan 2025',
    location: 'Silchar, India',
    description: 'Worked on real-world machine learning problems under the guidance of faculty and research scholars. Gained hands-on experience in building and evaluating ML models using Python and popular frameworks.',
    achievements: [
      'Built and evaluated classification and regression models',
      'Worked with real-world datasets for model training and validation',
      'Explored supervised and unsupervised learning techniques',
      'Collaborated in a team of interns for a capstone ML project'
    ]
  }
];


  const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'National Institute of Technology, Silchar',
    period: '2022 - Present',
    location: 'Silchar, Assam',
    description: 'Currently pursuing third year of undergraduate studies in Computer Science with a strong focus on data structures, algorithms, system programming, and emerging technologies like AI and blockchain.',
    achievements: [
      'Current CGPA: 9.57',
      'Active participant in coding contests and hackathons',
      'Machine Learning Intern at IEEE Winter Internship, NIT Silchar',
      'Core team member in technical clubs and events'
    ]
  },
  {
    degree: 'Senior Secondary (Class 12)',
    school: 'Kendriya Vidyalaya No. 1, Kota (Raj.)',
    period: '2020 - 2022',
    location: 'Kota, Rajasthan',
    description: 'Completed CBSE curriculum with a focus on Physics, Chemistry, Mathematics, and Computer Science.',
    achievements: [
      'Percentage: 94.5%',
      'School Topper in Computer Science',
      'Participated in science exhibitions and coding competitions'
    ]
  },
  {
    degree: 'Secondary Education (Class 10)',
    school: 'Kendriya Vidyalaya No. 1, Kota (Raj.)',
    period: '2018 - 2020',
    location: 'Kota, Rajasthan',
    description: 'Completed Class 10 under CBSE board with distinction.',
    achievements: [
      'Percentage: 89.4%',
      'Certificate of Merit in Mathematics and Science',
      'Participated in national-level science olympiads'
    ]
  }
];


  const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'SQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'REST API', level: 80 }
    ]
  },
  {
    title: 'Other Skills & Domains',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Blockchain', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'Problem Solving (DSA)', level: 88 }
    ]
  }
];


  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Professional
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my experience, education, and skills in software development.
          </p>
          <a
            href="https://console.cloudinary.com/app/c-833b6d35fb2fba6fe5dc170a03807d/assets/media_library/search/asset/12f51adb4583d43f361feb05d529f56e/manage/summary?sortDirection=desc&sortField=uploaded_at&q=%7B%22uploadedTimeOption%22%3A%22today%22%2C%22createdTimeOption%22%3A%22today%22%2C%22createdByUsers%22%3A%5B%22416c7a909748d64a2eccd129b3be45%22%5D%7D&view_mode=mosaic&context=manage"
            download
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                <Mail className="text-blue-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">abhayrsharma1000@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                <Phone className="text-green-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">+91-8824631483</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
                <MapPin className="text-purple-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">Silchar, Assam</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-500/20 border border-pink-500/30 rounded-full flex items-center justify-center">
                <ExternalLink className="text-pink-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">website</p>
                <p className="font-medium text-white">abhaysharma.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-1 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-blue-400 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:border-green-500/50">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg text-green-400 font-semibold mb-2">{edu.school}</p>
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;