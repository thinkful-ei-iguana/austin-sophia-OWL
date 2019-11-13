import React from 'react';
import './App.css'
import participantsList from './participantsList';
import Participant from './participant';
import Chatlog from './chatlog';
import Stage from './stage';

function App() {
  let participants = participantsList.map(function (participant) {
    return (
      <Participant
        key={participant.id} 
        name={participant.name} 
        avatar={participant.avatar}
        inSession={participant.inSession}>
      </Participant>
    )
  });

  let stageParticipants = participantsList.map(function (participant){
    return (
      <Stage
        name={participant.name} 
        avatar={participant.avatar}
        onStage={participant.onStage}>
      </Stage>
    )
  });
  
  let chatLogs = participantsList.map(function (chatEvents){
    return (
      <Chatlog 
        id={chatEvents.participantId}
        type={chatEvents.type}
        message={chatEvents.message}
        time={chatEvents.time}
        timestamp={chatEvents.timestamp}>
      </Chatlog>
    )
  });


  return (
    <div className="App">
      {participants},
      {stageParticipants},
      {chatLogs}
    </div>
  );
}

export default App;
