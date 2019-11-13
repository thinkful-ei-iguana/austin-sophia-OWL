import React from 'react';


export default function Stage(props) {
    let onStageValue = props.onStage;
    let onStage = '';
    if(onStageValue){
        onStage = `In Session`;
    }
    else {
        onStage = 'Offline';
    }
    
    return (
        <section className="participant-list">
            <header>{props.name}</header>
            <img className="avatar-img" src={props.avatar} alt="avatar" />
            <p className="online-status">{isSession}</p>
        </section>
    )
}