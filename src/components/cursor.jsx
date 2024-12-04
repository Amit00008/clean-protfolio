import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

return (
    <div
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            border: '4px solid purple',
            boxShadow: '0 4px 8px rgba(128, 0, 128, 0.9)',
        }}
        className="fixed w-8 h-8 rounded-full pointer-events-none transition-transform duration-150 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
);
};

export default Cursor;
