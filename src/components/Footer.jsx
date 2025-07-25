import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Portfolio</div>
          <div className="flex gap-6">
            <a href="https://github.com/DediMurphy">
              <Github className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/dedi-murphy-8119bb238/">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            </a>
            <Mail className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />dedimurphy05@gmail.com          
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Portfolio</p>
        </div>
      </div>
    </footer>
  );
};
