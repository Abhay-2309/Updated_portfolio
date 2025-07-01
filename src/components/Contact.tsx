import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you! 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold text-lg">abhayrsharma1000@gmail.com</p>
                    <p className="text-gray-300 text-sm">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold text-lg">+91-882461483</p>
                    <p className="text-gray-300 text-sm">Available Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-semibold text-lg">Silchar, Assam</p>
                    <p className="text-gray-300 text-sm">Open to remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Abhay-2309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay-sharma-063322314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500/20 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/Abhayrsha2309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500/20 hover:bg-sky-500 border border-sky-500/30 hover:border-sky-500 text-sky-400 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-white mb-6">Why Work With Me?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Versatile Skill Set</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Passionate & Proactive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Strong Problem Solver</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Strong Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center">
                <MessageCircle className="text-orange-400" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-200 backdrop-blur-sm"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              I'll get back to you within 24 hours. Looking forward to hearing from you! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;