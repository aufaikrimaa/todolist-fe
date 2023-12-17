import React, { useEffect, useState } from 'react';
import './BackgroundIcons.css';
import customIcon from '../assets/img/background-icon.svg';

const BackgroundIcons = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="animated-icons-container">
            <div
                className="animated-icon"
                style={{
                    '--cursor-x': `${cursorPosition.x}px`,
                    '--cursor-y': `${cursorPosition.y}px`,
                }}
            >
                <img src={customIcon} alt="Custom Icon" />
            </div>
        </div>
    );
};

export default BackgroundIcons;