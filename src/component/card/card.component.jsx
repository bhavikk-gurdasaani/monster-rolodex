import React from 'react';
import './card.style.css';
export const Card=(props)=>(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.prpName.id}?set=set2&size=180x180`}/>
        <h2 >{props.prpName.name}</h2>
        <h2>{props.prpName.email}</h2>
    </div>
    
)