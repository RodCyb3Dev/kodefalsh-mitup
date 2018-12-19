/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.800161424893!2d28.18946101617294!3d61.05725147059346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63a8bd371055b629!2sLappeenranta+City+Library!5e0!3m2!1sen!2sfi!4v1543948963182" 
                width="100%"  
                height="500px" 
                frameBorder="0"  
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Sijainti</div>
            </div>
        </div>
    );
};

export default Location;