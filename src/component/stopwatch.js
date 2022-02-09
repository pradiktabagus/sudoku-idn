import { useState, useEffect } from "react";

function Stopwatch(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getSecond = () => {
    return `0${time % 60}`.slice(-2);
  };

  const getMinutes = () => {
    return `0${Math.floor(time / 60)}`.slice(-2);
  };

  const getHour = () => {
    return `0${Math.floor(time / 3600)}`.slice(-2);
  };
  return {
    Time: `${getHour()}:${getMinutes()}:${getSecond()}`,
  };
}

export default Stopwatch;
