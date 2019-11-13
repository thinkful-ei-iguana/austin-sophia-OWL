import React from 'react';


export default function Chatlog(props) {
    //let convertedTime = new Date(props.timestamp);
    return (
        <section className="chat-data">
            <h2>{props.participantId}</h2>
            <div className="chat-reaction">{props.type}</div>
            <p className="message-time">{props.time}</p>
            <span>{props.timestamp}</span>
        </section>
    )
}