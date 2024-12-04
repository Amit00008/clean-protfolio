import React, { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Noize - MusicPlayer',
    description: 'Noize Is a music player that uses the spotifApi to stream music ',
    link: 'https://github.com/Amit00008/noize', // Source code link
    liveLink: 'https://noize.amitfr.tech', // Live project link
    image: 'https://i.ibb.co/0mckwkC/Screenshot-from-2024-12-04-16-06-40.png', // Replace with your project image URL
    technologies: ['React', 'Node.js', 'SpotifyApi', "Socket.io", "Three.js"],
  },
  {
    title: 'Felix.it',
    description: 'Felix is a cloud based ide that allows you to code in ur browser',
    link: 'https://github.com/Amit0008/felix.it', // Source code link
    liveLink: 'chrome:blank', // Live project link
    image: 'https://raw.githubusercontent.com/Amit00008/felix.it/main/demo-img/Screenshot%202024-11-10%20153923.png', // Replace with your project image URL
    technologies: ['React', 'Express', 'MongoDB', "node-pty", "Socket.io", "xterm.js"],
  },

  {
    title: "FrankyAi - ChatBot",
    description: "FrankyAi is a chatbot that uses the GeminiApi to intrect with user",
    link: "https://github.com/Amit0008/franky-ai-chatbot",
    liveLink: "https://franky.amitfr.tech",
    image: "https://i.postimg.cc/MZgFR7xr/Screenshot-from-2024-12-04-16-23-04.png",
    technologies: ["Reach", "Nodejs", "GeminiApi"],
  },
];

const ProjectNode = ({ project, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={`ml-${level * 6} mt-8 relative flex flex-col items-center cursor-pointer`}
      data-aos="fade-up"
      data-aos-delay={`${level * 100}`}
    >
      {/* Line connecting branches */}
      {level > 0 && (
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${
            level % 2 === 0 ? 'border-l-2 border-primary h-4' : 'border-t-2 border-primary w-4'
          }`}
        ></div>
      )}

      {/* Toggle Icon */}
      <div
        className="flex items-center"
        onClick={toggleOpen}
      >
        {isOpen ? (
          <FaCaretDown className="text-primary text-2xl" />
        ) : (
          <FaCaretRight className="text-primary text-2xl" />
        )}
        <h3 className="text-2xl font-bold text-white mt-4 text-center">{project.title}</h3>
      </div>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-96 h-56 object-cover rounded-md shadow-md cursor-pointer mt-4"
        onClick={toggleOpen} // Image also triggers toggle
      />

      {/* Project Details */}
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 mt-4' : 'opacity-0 mt-0'}`}
        style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden' }}
      >
        <p className="text-md text-textSecondary ml-8 mt-2 text-center">{project.description}</p>
        <p className="text-md text-textSecondary ml-8 text-center">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </p>

        <div className="ml-8 mt-4 text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700 transition-all mr-4"
          >
            Source Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700 transition-all"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsTree = () => {
  return (
    <section id="projects" className="py-16 bg-darkBg text-textPrimary">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <p
          className="text-lg text-textSecondary text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore my projects in detail and view the source code or live demo.
        </p>

        <div className="mt-12">
          {projects.map((project, index) => (
            <ProjectNode key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTree;
