import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const ContactPages = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-mono">
          Mari Berkolaborasi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Hubungi Saya</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tertarik untuk berkolaborasi atau punya proyek menarik? 
              Saya selalu terbuka untuk diskusi dan kesempatan baru.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">dedimurphy05@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Murp</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">linkedin.com/in/dedi-murphy</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Pesan Anda"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};