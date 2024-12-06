import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkBg text-textPrimary py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Let's Connect!</p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a
            href="https://github.com/Amit00008" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/autisticamit" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram />
          </a>
          <a
 href='https://www.linkedin.com/in/amit-dey-9b5627322/'
 target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Amit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
