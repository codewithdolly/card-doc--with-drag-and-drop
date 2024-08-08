import React, { useState } from 'react';

const Card = ({ title, thumbnail, onClick }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        // Simulate a delay of 5 seconds
        setTimeout(() => {
            setLoading(false);
        }, 2000); // 5000ms = 5 seconds
    };

    return (
        <div className="card" onClick={onClick}>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            <img
                src={thumbnail}
                alt={title}
                onLoad={handleImageLoad}  // Set loading to false when image loads
                style={{ display: loading ? 'none' : 'block' }} // Hide image while loading
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
};

export default Card;
