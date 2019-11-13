import React from 'react';


export default function Participant(props) {
    let inSessionValue = props.inSession;
    let isSession = '';
    if(inSessionValue){
        isSession = `In Session`;
    }
    else {
        isSession = 'Offline';
    }
    
    return (
        <section className="participant-list">
            <header>{props.name}</header>
            <img className="avatar-img" src={props.avatar} alt="avatar" />
            <p className="online-status">{isSession}</p>
        </section>
    )
}