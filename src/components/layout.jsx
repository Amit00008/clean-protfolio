import React, { useEffect } from "react";

const ShootingStars = () => {
  useEffect(() => {
    const starField = document.querySelector('.shooting-stars');
    
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`; // Random horizontal position
      star.style.top = `${Math.random() * 100}%`; // Random vertical position
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random speed between 1 and 3 seconds
      star.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      starField.appendChild(star);

      // Remove the star after the animation completes
      setTimeout(() => {
        star.remove();
      }, 3000); // Match with animation duration
    };

    const interval = setInterval(createStar, 100); // Create a star every 100ms
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return <div className="shooting-stars"></div>;
};

export default ShootingStars;
