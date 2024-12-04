import React from 'react';
import { FaLaptopCode, FaBuilding } from 'react-icons/fa'; // Freelancer and Codeferno icons


const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-darkBg text-textPrimary">
      <div className="container mx-auto px-6 md:px-12 ">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary"
          data-aos="fade-up"
        >
          My Experience
        </h2>
        <p
          className="text-lg text-textSecondary text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here's a snapshot of my professional journey, from freelancing to working at Codeferno.
        </p>

        <div className="mt-12 flex justify-center items-center space-x-12">
          {/* Freelancer Node */}
          <div
            className="flex flex-col items-center space-y-4"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="text-5xl text-primary">
              <FaLaptopCode />
            </div>
            <h3 className="text-2xl font-semibold text-white">Freelance Web Developer</h3>
            <p className="text-lg text-textSecondary">March 2023 - August 2024</p>
            <p className="text-md text-textSecondary">
              I worked on various web development projects, focusing on front-end and back-end
              technologies, including React.js, Node.js, and MongoDB. I helped clients build
              responsive and scalable websites, optimizing user experience and performance.
            </p>
          </div>

          {/* Connection Line (Tree Structure) */}
          <div className="relative flex items-center">
            <div className="w-[2px] h-24 bg-primary absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-primary w-4 h-4 rounded-full"></div>
          </div>

          {/* Codeferno Node */}
          <div
            className="flex flex-col items-center space-y-4"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="w-20 h-20">
              <img
                src='https://codeferno.com/assets/logo2.png'
                alt="Codeferno Logo"
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white">Full Stack Engineer at Codeferno</h3>
            <p className="text-lg text-textSecondary">August 2024 - Present</p>
            <p className="text-md text-textSecondary">
              At Codeferno, I work as a Full Stack Engineer, developing and maintaining complex web applications.
              I collaborate with cross-functional teams to implement scalable and robust solutions using technologies like React.js, Node.js, and Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
