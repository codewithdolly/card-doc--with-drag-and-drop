import React, { useEffect } from 'react';

const Overlay = ({ image, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="overlay" onClick={onClose}>
            <img src={image} alt="Overlay" />
        </div>
    );
};

export default Overlay;
