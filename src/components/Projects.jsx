import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Urban Harvest Hub",
      technologies: "React.js, Node.js, Express.js, MySQL",
      description: "Developed a full-stack web application connecting farmers and consumers. Implemented secure user authentication and role-based access. Designed and managed a MySQL database, implemented backend APIs and notification features, and created manual test cases.",
      link: "https://github.com/345masha",
      hostedLink: "https://urbanhub-woad.vercel.app/"
    },
    {
      title: "Inventory Management System",
      technologies: "C#, Windows Forms",
      description: "Developed a desktop application using the MVC architecture. Implemented login authentication, Role-based access control (RBAC), and essential inventory management features."
    },
    {
      title: "Nestle Business Innovation Project",
      technologies: "Visual Studio, HTML, MySQL, Playwright",
      description: "Collaborated with a team to solve a real-world business challenge presented by Nestle. Conducted research, proposed an IT-based solution, and presented to industry professionals. Created and checked manual test cases automatically using Playwright."
    },
    {
      title: "Shipping Network Simulation",
      technologies: "C#",
      description: "Implemented Dijkstra's Algorithm to determine the shortest delivery paths. Developed weighted graph data structures, simulated traffic congestion using dynamic edge weights, and applied greedy algorithms for route optimization."
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recent Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 flex flex-col">
              <div className="px-4 py-5 sm:p-6 flex-grow">
                <h3 className="text-xl leading-6 font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-4">
                  {project.technologies}
                </p>
                <p className="mt-2 text-base text-gray-500">
                  {project.description}
                </p>
              </div>
              {(project.link || project.hostedLink) && (
                <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-6">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900 font-medium text-sm flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.hostedLink && (
                    <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium text-sm flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
