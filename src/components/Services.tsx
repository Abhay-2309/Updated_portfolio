import React from 'react';
import { Code, Palette, Globe, Database, Zap, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and modern web applications using latest technologies like React, Next.js, and Node.js.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Integration', 'API Development']
    },
    {
      icon: Bot,
      title: 'Machine learning',
      description: 'I am a machine learning enthusiast with a strong interest in building intelligent systems and exploring real-world applications of AI.',
      features: ['Supervised leaning', 'Deep learning', 'Cross-platform', 'UnSupervised learning']
    },
    {
      icon: Globe,
      title: 'Blockchain enthusiast',
      description: 'I am a blockchain enthusiast, passionate about decentralized technologies, smart contracts, and exploring the future of Web3.',
      features: ['Smart contract', 'Solidity', 'Javascript', 'Web3']
    },
    {
      icon: Database,
      title: 'Data Structure and Algorithms',
      description: 'I have a strong foundation in data structures and algorithms, which helps me write efficient, optimized, and scalable code to solve complex problems.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Code Splitting', 'Caching Strategies']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I possess a diverse set of skills across various technical domains. Below are some of the key areas I specialize in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group hover:border-purple-500/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-purple-400" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;