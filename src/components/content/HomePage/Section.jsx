import React from 'react';

function Section({ title, location, description, imageUrl, imageAlt }) {
    return (
        <div className="section">
            <img src={imageUrl} alt={imageAlt} className="section-image" />
            <div className="section-content">
                <h5>{title}</h5>
                <h7 className='subheader'>{location}</h7>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Section;