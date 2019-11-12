import React from 'react';


export default function Participant(props) {
    return (
        <>
        <h3>{props.name}</h3>
        <img src={props.avatar} alt="avatar"/>
        <p>{props.inSession}</p>
        </>
    )
}