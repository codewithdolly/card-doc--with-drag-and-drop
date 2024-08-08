import React, { useState } from 'react';

const Card = ({ title, thumbnail, onClick }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        // Simulate a delay of 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 2000); 
    };

    return (
        <div className="card" onClick={onClick}>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
             <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
            <img
                src={thumbnail}
                alt={title}
                onLoad={handleImageLoad}  // Set loading to false when image loads
                style={{ display: loading ? 'none' : 'block' }} // Hide image while loading
                className="card-img-top"
            />
           
        </div>
    );
};

export default Card;
