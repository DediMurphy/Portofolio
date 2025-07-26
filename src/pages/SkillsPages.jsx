import { Code, Palette, Smartphone } from 'lucide-react';
import React from 'react';

export const SkillsPages = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, level: 75 },
    { name: 'UI/UX Design', icon: <Palette size={24} />, level: 85 },
    { name: 'Mobile Development', icon: <Smartphone size={24} />, level: 80 },
    { name: 'Backend Developer', icon: <Code size={24} />, level: 75 },
  ];

  const technologies = [
    'React', 'MySql', 'C#', 'Tailwind CSS', 'Node.js', 'MongoDB', 
    'PostgreSQL', '.NET', 'Figma', 'Golang', 
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-mono">
          Tools & Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gray-900 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 font-mono">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-white px-6 py-3 rounded-full text-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
