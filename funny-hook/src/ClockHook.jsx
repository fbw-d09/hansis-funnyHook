import React, { useState, useEffect } from 'react';

const ClockHook = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div>
      <h1>Uhrzeit</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default ClockHook;