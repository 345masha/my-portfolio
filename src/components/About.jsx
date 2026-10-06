import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A passionate IT Undergraduate
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I am a motivated second-year IT undergraduate at APIIT University with a strong foundation in web development, database structure, networking and cloud infrastructure. 
            I have experience in developing academic projects using modern technologies and collaborating on real-world industry challenges.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Passionate about learning new technologies, solving practical problems, and contributing to innovative IT solutions. 
            I possess excellent teamwork, communication, and analytical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
