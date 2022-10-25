import './App.css';
import React, { useState, useEffect } from 'react';

// const myData = [
//   "Imad Alisawi",
//   "Eugenia Valentina",
//   "Elias El Herrera",
//   "Yeran Kim",
//   "Marius Meyer",
//   "Madeline Streubel",
//   "Roberto Radina",
//   "Jörg Schmitz",
//   "Steven Günther",
//   "Burhan Uzun",
//   "Alexandra Popiel",
//   "Taha Yasin Uzun",
//   "David Cohnen",
//   "Afsaneh Heidari Fasakhodi",
//   "Claudia Maslowski",
//   "Nargiza Nizamedinkhodjayeva",
//   "Bastian Wilke",
//   "Giancarlo Scalisi",
//   "Joel Buchholz",
//   "Roberto Jimenez",
//   "Anila Qasemi",
//   "Parisa Mohammadi"
// ];

const myData = [
  "Imad Alisawi",
  "Eugenia Valentina",
  "Elias El Herrera",
];

function App() {
  const [data, setData] = useState(myData);
  const [participant, setParticipant] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const getParticipant = () => {
    if (!data.length > 0) {
      setIsEmpty(true);
    }
    const random = Math.floor(Math.random() * data.length);
    console.log(random);
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
