import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timerComp.css";

const renderTime = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      {/* <div className="text">Remaining</div> */}
      <div className="value">
        {hours}:{minutes}:{seconds}
      </div>
      {/* <div className="text">seconds</div> */}
    </div>
  );
};

const TimerComp = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const increaseSec = () => {
    setSeconds(seconds + 1);
  };
  const decreaseSec = () => {
    if (seconds == 0) {
      setSeconds(0);
    } else {
      setSeconds(seconds - 1);
    }
  };

  const increaseMin = () => {
    setMinutes(minutes + 1);
  };
  const decreaseMin = () => {
    if (minutes == 0) {
      setMinutes(0);
    } else {
      setMinutes(minutes - 1);
    }
  };

  const increaseHrs = () => {
    setHours(hours + 1);
  };
  const decreaseHrs = () => {
    if (hours == 0) {
      setHours(0);
    } else {
      setHours(hours - 1);
    }
  };

  const minInSec = minutes * 60;
  const hrsInSec = hours * 60 * 60;

  const totalTime = seconds + minInSec + hrsInSec;
  console.log(totalTime);

  const [timerIsPlaying, setTimerIsPlaying] = useState(false);

  const handleTimer = () => {
    setTimerIsPlaying(true)
  }

  return (
    <div className="timer-wrap">
      <div>
        <CountdownCircleTimer
          isPlaying={timerIsPlaying}
          duration={totalTime}
          colors={"#F7B801"}
          onComplete={() => ({ shouldStop: true })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="set-timer">
        <div>
          <span>Hours</span>
          <div className="box">
            <button onClick={increaseHrs}>+</button>
            <span>{hours}</span>
            <button onClick={decreaseHrs}>-</button>
          </div>
        </div>
        <span>:</span>
        <div>
          <span>Minutes</span>
          <div className="box">
            <button onClick={increaseMin}>+</button>
            <span>{minutes}</span>
            <button onClick={decreaseMin}>-</button>
          </div>
        </div>
        <span>:</span>
        <div>
          <span>Seconds</span>
          <div className="box">
            <button onClick={increaseSec}>+</button>
            <span>{seconds}</span>
            <button onClick={decreaseSec}>-</button>
          </div>
        </div>
        <button onClick={handleTimer}>Start</button>
      </div>
    </div>
  );
};

export default TimerComp;
