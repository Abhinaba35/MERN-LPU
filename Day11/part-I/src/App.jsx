import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimeInSec((prev) => prev + 1);
      }, 1000); 
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  const handlePause = () => setIsTimerRunning(false);
  const handlePlay = () => setIsTimerRunning(true);
  const handleReset = () => {
    setTimeInSec(0);
    setIsTimerRunning(false);
    setLaps([]);
  };
  const handleLap = () => {
    setLaps((prev) => [...prev, timeInSec]);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>STOPWATCH</h1>
      <h2>{formatTime(timeInSec)}</h2>
      {isTimerRunning ? (
        <button onClick={handlePause}>PAUSE</button>
      ) : (
        <button onClick={handlePlay}>PLAY</button>
      )}
      <button onClick={handleLap}>LAP</button>
      <button onClick={handleReset}>RESET</button>

      <h3>LAPS</h3>
      <ul>
        {laps.map((lapTime, idx) => (
          <li key={idx}>{formatTime(lapTime)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
