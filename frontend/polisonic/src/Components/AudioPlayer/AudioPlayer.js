import React, { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css"; // Updated CSS for styling
import RightIcon from "./Frame.svg";

const AudioPlayer = ({ audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [error, setError] = useState(false);

    const togglePlayPause = () => {
        if (!audioSrc) {
            console.error("Audio source is missing.");
            return;
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((err) => {
                console.error("Error playing audio:", err);
                setError(true);
            });
        }
        setIsPlaying(!isPlaying);
    };

    // Update current time
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    // Set audio duration
    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    // Format time in MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="audio-player">
            <div className="square-button play-pause-btn" onClick={togglePlayPause}>
                {isPlaying ? (
                    <span>&#10073;&#10073;</span> // Pause icon
                ) : (
                    <span>&#9658;</span> // Play icon
                )}
            </div>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
                <div className="time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>
            </div>
            <div className="svg-container">
                <img src={RightIcon} alt="Icon" />
            </div>
            <audio
                src={audioSrc}
                ref={audioRef}
                crossOrigin="anonymous"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            ></audio>
        </div>
    );
};

export default AudioPlayer;
