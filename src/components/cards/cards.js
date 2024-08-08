import React, { useState } from 'react';
import cats from "../../Images/cat1.png";

const Card = ({ title, thumbnail, onClick }) => {
    const [loading, setLoading] = useState(true);
    return (
         <div className="card" onClick={onClick}>
            {loading && <div className="spinner">Loading...</div>}
            <img src={thumbnail} alt={title} onLoad={() => setLoading(false)} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
