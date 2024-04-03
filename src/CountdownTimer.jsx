import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        if (distance > 0) {
          setRemainingTime(distance);
        } else {
          setRemainingTime(0);
          setIsRunning(false); // Stop the timer when the target date is reached
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, targetDate]);

  const handleInputChange = (e) => {
    setTargetDate(e.target.value);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="countdown-container">
      <input
        type="datetime-local"
        value={targetDate}
        onChange={handleInputChange}
      />
      <div className="buttons-container">
        {!isRunning ? (
          <button onClick={startTimer} className="start-button">
            Start
          </button>
        ) : (
          <button onClick={stopTimer} className="stop-button">
            Stop
          </button>
        )}
      </div>
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value">
            {formatTime(remainingTime).days}
          </div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">
            {formatTime(remainingTime).hours}
          </div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">
            {formatTime(remainingTime).minutes}
          </div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">
            {formatTime(remainingTime).seconds}
          </div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default CountdownTimer;
