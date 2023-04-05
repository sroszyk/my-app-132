import { useState } from 'react';
import './App.css';
import Test from './Test';
import StoperValue from './StoperValue';
import RoundsList from './RoundsList';

function App() {
  const [stoperValue, setStoperValue] = useState({
    seconds: 0,
    deciSeconds: 0
  });
  const [intervalId, setIntervalId] = useState(undefined);
  const [rounds, setRounds] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  function tick() {
    setStoperValue(currStoperValue => {
      if (currStoperValue.deciSeconds === 9) {
        return {
          seconds: currStoperValue.seconds + 1,
          deciSeconds: 0
        }
      }
      else {
        return {
          seconds: currStoperValue.seconds,
          deciSeconds: currStoperValue.deciSeconds + 1
        }
      }
    })
  };

  function handleStart() {
    const id = setInterval(tick, 100);
    setIntervalId(id);
    setIsActive(true);
  }

  function handleStop() {
    clearInterval(intervalId);
    setIsActive(false);
  }

  function handleReset() {
    setStoperValue({
      seconds: 0,
      deciSeconds: 0
    });
  }

  function handleAddRound() {
    setRounds([...rounds, stoperValue]);
  }

  let startBtn;
  if (!isActive) {
    startBtn = (<button onClick={handleStart}>START</button>);
  }

  function handleInputChange(e){
    setText(e.target.value);
  }

  // useEffect(() => {
  //   let ignore = false;
  
  //   async function startFetching() {
  //     const json = await fetchTodos(userId);
  //     if (!ignore) {
  //       setTodos(json);
  //     }
  //   }
  
  //   startFetching();
  
  //   return () => {
  //     ignore = true;
  //   };
  // }, [userId]);

  return (
    <div className="App">
      <StoperValue stoper={stoperValue}></StoperValue>
      {startBtn}
      {isActive && <button onClick={handleStop}>STOP</button>}
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleAddRound}>ADD ROUND</button>
      <input onChange={handleInputChange} value={text}></input>
      {text}
      <RoundsList rounds={rounds}></RoundsList>
      <Test mojFajnyAtrybut={handleReset} ></Test>
    </div>
  );
}

export default App;
