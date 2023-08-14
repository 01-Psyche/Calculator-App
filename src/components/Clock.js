import React from "react";

export const Clock = () => {
  const curTime = new Date();
  const hours = curTime.getHours();
  const minutes = curTime.getMinutes();
  function formatTime(time) {
    return time.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  }
  return (
    <div className="clock">
      <div className="time-n-date">
        <div className="time">
          <h1 className="hour">{formatTime(hours)}</h1>
          <h1 className="minute">{formatTime(minutes)}</h1>
        </div>
        <h4 className="date">Monday, 29th July, 2023</h4>
      </div>
      <div className="mode">{/* <h4>Switch to Light Mode</h4> */}</div>
    </div>
  );
};
