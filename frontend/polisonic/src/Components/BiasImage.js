import React from 'react';
import PropTypes from 'prop-types';

// Import placeholder images
import extremelyLiberal from '../assets/images/extremely-liberal.png';
import liberal from '../assets/images/liberal.png';
import neutral from '../assets/images/neutral.png';
import conservative from '../assets/images/conservative.png';
import extremelyConservative from '../assets/images/extremely-conservative.png';

// Map bias strings to corresponding images
const biasImageMap = {
    "Extremely Liberal": extremelyLiberal,
    "Liberal": liberal,
    "Neutral": neutral,
    "Conservative": conservative,
    "Extremely Conservative": extremelyConservative,
};

const BiasImage = ({ bias }) => {
    const imageSrc = biasImageMap[bias] || neutral; // Default to "neutral" if bias is not recognized

    return (
        <div className="bias-image-container">
            <img
                src={imageSrc}
                alt={bias}
                className="bias-image"
                style={{ width: '100px', height: '100px' }} // Adjust size as needed
            />
            <p className="bias-label" style={{ textAlign: 'center', marginTop: '8px' }}>
                {bias}
            </p>
        </div>
    );
};

BiasImage.propTypes = {
    bias: PropTypes.string.isRequired, // Ensure bias is a string and required
};

export default BiasImage;