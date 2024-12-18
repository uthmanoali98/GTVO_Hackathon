import React from 'react';
import ScoreCounter from './ScoreCounter';
import './CommunityNote.css';

const CommunityNote = ({ note }) => {
    const { url, description, author, initialScore } = note;

    return (
        <div className="community-note padding-all">
            {/* URL */}
            <a href={url} className="note-url body-small" target="_blank" rel="noopener noreferrer">
                {url}
            </a>

            {/* Description */}
            <p className="note-description">{description}</p>
            <div className='note-details'>
                {/* Author */}
                <p className="note-author body-small">{author}</p>

                {/* Score Counter */}
                <ScoreCounter initialScore={initialScore} />
            </div>
        </div>
    );
};

export default CommunityNote;