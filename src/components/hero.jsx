import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-darkBg text-textPrimary flex flex-col items-center justify-center overflow-hidden mb-16"
        >
            {/* 3D Model */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                data-aos="fade-right"
                data-aos-delay="300"
            >
                <Canvas camera={{ position: [0, 1, 4], fov: 40 }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} />
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="z-10 text-center">
                <h1
                    className="text-5xl md:text-7xl font-extrabold text-primary"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    Hello, I am Amit
                </h1>
                <p
                    className="text-lg md:text-xl text-textSecondary mt-4"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    A passionate web developer && Cs enthusiast crafting beautiful and functional experiences.
                </p>
         
            

                {/* View My Resume Button */}
                <a
                    href="./amit.pdf"  // Replace with the actual path to your resume
                    download="amit-resume.pdf"  // This will prompt the download with the name of the file
                    className="mt-4 inline-block px-8 py-4 bg-secondary text-white text-lg rounded-md shadow-lg hover:bg-secondary-dark transition"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    View My Resume
                </a>
             </div>
            
            {/* Scroll Down Icon */}
            <div
                className="absolute bottom-10 w-full text-center flex justify-center"
                data-aos="fade-up"
                data-aos-delay="1100"
            >
                <FaChevronDown className="text-4xl animate-bounce text-primary" />
            </div>
        </section>
    );
};

export default Hero;
