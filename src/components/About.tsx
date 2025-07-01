import React from 'react';
import { Code, Palette, Zap, Users, Award, Coffee, Target, Heart } from 'lucide-react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years of Learning', icon: Code },
    { number: '10+', label: 'Hackathons & Competitions', icon: Users },
    { number: '95%', label: 'Average Grade', icon: GraduationCap },
  ];


  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices and modern standards.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences that users love to interact with.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and excellent user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and maintaining clear communication with stakeholders.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate third-year computer science student and enthusiastic developer, always eager to explore new technologies and build meaningful digital solutions. With hands-on experience in various personal and academic projects, I specialize in developing modern web applications and enjoy diving into fields like AI, cloud computing, blockchain, and system programming. I’m a fast learner, actively involved in hackathons, coding competitions, and collaborative development. My goal is to continuously grow by experimenting with real-world applications and contributing to impactful projects.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <stat.icon className="text-blue-400" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 group hover:border-blue-500/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Personal Story */}
        <div className="mt-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Target className="text-blue-400 mr-3" size={32} />
                My Journey in Tech
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey began with a curiosity about how websites and applications function behind the scenes, which soon transformed into a deep passion for building intuitive and impactful digital experiences. As a third-year computer science student, I constantly explore new technologies and development practices to enhance my skills. I believe in continuous learning, experimenting with real-world projects, and staying up-to-date with the latest trends in web development, AI, blockchain, and cloud computing. For me, every line of code is an opportunity to solve problems and make a meaningful impact.
              </p>
              <p className="text-gray-300 leading-relaxed flex items-start">
                <Heart className="text-red-400 mr-2 mt-1 flex-shrink-0" size={20} />
                When I'm not coding, you’ll find me diving into emerging technologies, contributing to open-source projects, or engaging with the developer community through events, forums, and peer learning. I enjoy collaborating, sharing ideas, and growing together with like-minded tech enthusiasts.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-blue-500/25 hover:scale-105 transition-transform duration-300">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;