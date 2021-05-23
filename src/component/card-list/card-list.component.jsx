import React from 'react';
import'./card-list.style.css';
import {Card} from '../card/card.component.jsx'

export const CardList =(props)=>{
    
    return <div className='card-list'>
        {props.children} 
        {props.monsters.map(monster=>
            <Card key={monster.id} prpName={monster} ></Card>    
        )}
        </div>
}
