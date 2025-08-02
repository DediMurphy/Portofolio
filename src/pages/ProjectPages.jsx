import { ExternalLink } from "lucide-react";
import React, { useState } from "react";

import blogApi from '../assets/images/blogapi.png'
import soulsupport from '../assets/images/soulsupport.png'
import projectManagement from '../assets/images/projectMana.png'

export const ProjectsPages = () => {
  const DESCRIPTION_MAX_LENGTH = 120;
  const projects = [
    {
      title: "SoulSupport",
      description: "SoulSupport is an innovative digital solution addressing the global mental health crisis and the accessibility gap in support services.",
      tech: ["Kotlin", "Android Studio"],
      image: soulsupport,
      link: "https://github.com/DediMurphy/SoulSupport",
    },
    {
      title: "Blog-api",
      description: "A foundational backend API for a simple blog application, developed with Golang and MySQL, enabling core CRUD operations for posts and users.",
      tech: ["Golang", "MySql", "JWT"],
      image: blogApi,
      link: "https://github.com/DediMurphy/blog-api",
    },
    {
      title: "Project Management",
      description:
        "A comprehensive project management system built with React for a dynamic frontend and Express.js with PostgreSQL on the backend. It features efficient project management, employee attendance tracking, and progress monitoring.",
      tech: ["React", "Javascript", "PostgreSql", "ExpressJs"],
      image: projectManagement,
      link: "https://github.com/DediMurphy/management-work",
    },
     {
      title: "Simple-messaging-app",
      description: "A real-time messaging application built with Golang and WebSockets for instant communication. It uses MySQL for relational data, MongoDB for flexible storage, and JWT for secure authentication.",
      tech: ["Golang", "MySQL","JWT", "Web Socket","MongoDB"],
      image: blogApi,
      link: "https://github.com/DediMurphy/simple-messaging-app",
    },
  ];

  return (
    <section id="projectPage" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-mono">Project Latest</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center text-6xl">
                <img
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>                
                <ProjectDescription
                  description={project.description}
                  maxLength={DESCRIPTION_MAX_LENGTH} 
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && ( 
                  <a
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group-hover:gap-3"
                  >
                    Lihat
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectDescription = ({ description, maxLength }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const isTooLong = description.length > maxLength;
  const displayedDescription = showFullDescription ? description : description.substring(0, maxLength);

  return (
    <div className="mb-4">
      <p className="text-gray-600 leading-relaxed text-justify min-h-[72px]">
        {displayedDescription}
        {!showFullDescription && isTooLong && "..."}
      </p>
      {isTooLong && (
        <button onClick={toggleDescription} className="text-blue-600 hover:text-blue-800 text-sm mt-2 focus:outline-none">
          {showFullDescription ? "Baca Sedikit" : "Baca Lebih Lanjut"}
        </button>
      )}
    </div>
  );
};
