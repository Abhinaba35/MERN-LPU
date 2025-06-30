import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0);
  const [laps , setLaps] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    console.log("Timer running state changed", isTimerRunning);

    let intervalId = null;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        // setTimeInSec((prev) => prev + 1);
        setTimeInSec((prev) => {
          return prev + 1;
        });
      }, 1000); //st1
    }

    return () => {
      console.log("Cleaning up interval...");
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const handlePause = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    }
  };

  const handlePlay = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  };

  const handleLap = () => {
    console.log("Lpas: ", timeInSec);
    setLaps((prev) => {
      const temp = [...prev];
      temp.push(timeInSec);
      return temp; 
    })
  };

  return (
    <div>
      <h2>00:00:{timeInSec.toString().padStart(2,"0")}</h2>
      {isTimerRunning ? (
        <button onClick={handlePause}>PAUSE</button>
      ) : (
        <button onClick={handlePlay}>PLAY</button>
      )}

      <button onClick={handleLap}>LAP</button>

      <div>
        {laps.map((elem ,idx) => {
          return <p key={idx}>{elem}</p>
        })}
      </div>
    </div>
  );
};

export default App;
