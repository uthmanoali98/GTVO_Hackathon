import React from 'react';
import PropTypes from 'prop-types';
import './BiasImage.css'; // Component-specific styles

const BiasImage = ({ bias }) => {

    bias = bias.substring(3);
    // Helper function to apply bias-specific classes
    const biasClass = () => {
        switch (bias) {
            case 'Very Liberal':
                return 'bias-very-liberal';
            case 'Very Conservative':
                return 'bias-very-conservative';
            case 'Neutral':
                return 'bias-neutral';
            case 'Conservative':
                return 'bias-conservative';
            case 'Liberal':
                return 'bias-liberal';
            default:
                return 'bias-neutral';
        }
    };

    return (
        <div className={`bias-container padding-all-medium ${biasClass()}`}>
            <div className="bias-header">
                <span className="body-reg">Article Bias</span>
                <span className="h4 bias-label">{bias}</span>
            </div>
            <div className="bias-line">
                <div className="bias-indicator"></div>
            </div>
            <div className="bias-info">
                <span className="info-icon">i</span>
            </div>
        </div>
    );
};

BiasImage.propTypes = {
    bias: PropTypes.string.isRequired, // Ensure bias is a string and required
};

export default BiasImage;
