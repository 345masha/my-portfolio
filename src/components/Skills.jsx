import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Quality Assurance & Testing",
      skills: ["Manual Testing", "Automation (Playwright)", "API Testing (Postman)", "Test Case Design", "Bug Tracking & Reporting", "STLC & SDLC"]
    },
    {
      title: "Programming & Database",
      skills: ["JavaScript / ES6+", "Python", "C#", "SQL / MySQL"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Node.js", "Express.js", "HTML5 & Tailwind CSS", "RESTful APIs"]
    },
    {
      title: "Tools & Infrastructure",
      skills: ["Git & GitHub", "Visual Studio Code", "Visual Studio", "AWS Academy", "Cisco Packet Tracer", "XAMPP"]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Technical Arsenal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
