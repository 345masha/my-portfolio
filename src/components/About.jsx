import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bridging Software Development & Quality Assurance
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I am a second-year IT undergraduate at APIIT University with a strong foundation across the full Software Development Life Cycle (SDLC). 
            With experience spanning full-stack web development, database architecture, and Quality Assurance (QA), I bridge the gap between building resilient applications and rigorously testing them for excellence.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hands-on with manual testing, automated UI test suites using Playwright, and REST API validation via Postman—alongside full-stack development with React, Node.js, and SQL. 
            Whether stepping into QA Engineering, Software Development, or IT Support roles, I bring analytical problem-solving, attention to detail, and a commitment to high software reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
