import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AudioTranscript.css';

const AudioTranscript = ({ transcript }) => {
    const [showFull, setShowFull] = useState(false);

    const toggleShowMore = () => {
        setShowFull(!showFull);
    };

    // Splitting transcript into lines
    const sentences = transcript.match(/[^.!?]+[.!?]+/g) || [transcript];
    const preview = sentences.slice(0, 5).join(' '); // First 5 sentences


    return (
        <div className="audio-transcript-container padding-all">
            <h4>Audio Transcript</h4>
            <div>
                {showFull ? (
                    <p className="body-large">{transcript}</p> // Show full transcript
                ) : (
                    <p className="body-large">
                        {preview}...
                    </p>
                )}
            </div>
            <button className="toggle-button body-reg" onClick={toggleShowMore}>
                {showFull ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
};

AudioTranscript.propTypes = {
    transcript: PropTypes.string.isRequired,
};

export default AudioTranscript;
