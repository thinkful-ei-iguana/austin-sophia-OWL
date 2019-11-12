import React from 'react';
import './App.css'
import participantList from './participantsList';
import Participant from './participant';
import Chatlog from './chatlog';
import Stage from './stage';

function App() {
  let participant = participantList.participants.map(function (participant) {
  return (
    <Participant>
      key={participant.id} 
      name={participant.name} 
      avatar={participant.avatar}
      inSession={participant.inSession}
    </Participant>
  )})

  return (
    <div className="App">
      {participant}
    </div>
  );
}

export default App;
