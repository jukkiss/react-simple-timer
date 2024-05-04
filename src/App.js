import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <div>{time}</div>
      <div>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimeOn(false)}>Stop</button>}
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
      
    </div>
  );
}

export default App;
