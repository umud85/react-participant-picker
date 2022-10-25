import './App.css';
import React, { useState, useEffect } from 'react';
import { getData } from './dummyData';

const myData = getData();

function App() {
  const [data, setData] = useState(myData);
  const [participant, setParticipant] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const getParticipant = () => {
    if (!data.length > 0) {
      setIsEmpty(true);
    }
    const random = Math.floor(Math.random() * data.length);
    setParticipant(data[random]);
  }
  const resetData = () => {
    setData(myData);
    setIsEmpty(false);
  }
  useEffect(() => {
    const newParticipants = data.filter(person => person !== participant);
    setData(newParticipants);
  }, [participant]);
  return (
    <div className="App">
      <h1>Random Participant Picker</h1>
      <ul>
        {participant && <li key={participant} className="picked">{participant}</li>}
        {data.map((person) => {
          return <li key={person}>{person}</li>
        })}
      </ul>
      {
        !isEmpty ? <button onClick={getParticipant}>Pick Participant</button> :
          <button onClick={resetData}>Reset</button>
      }
    </div>
  );
}

export default App;
