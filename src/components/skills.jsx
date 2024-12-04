import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiThreedotjs, SiSocketdotio } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, aos: 'fade-right' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, aos: 'fade-left' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, aos: 'fade-right' },
  { name: 'React', icon: <FaReact className="text-blue-400" />, aos: 'fade-left' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, aos: 'fade-right' },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500" />, aos: 'fade-left' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, aos: 'fade-right' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, aos: 'fade-left' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, aos: 'fade-left' },
  { name: 'Three.js', icon: <SiThreedotjs className="text-indigo-500" />, aos: 'fade-left' },
  { name: 'WebSocket', icon: <SiSocketdotio className="text-orange-500" />, aos: 'fade-left' },
];

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-darkBg text-textPrimary mt-16 z-0">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-primary"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <p
          className="text-lg text-textSecondary text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here are some of the technologies I use to build amazing experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-8"
              data-aos={skill.aos}
              data-aos-delay={`${index * 100}`}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
