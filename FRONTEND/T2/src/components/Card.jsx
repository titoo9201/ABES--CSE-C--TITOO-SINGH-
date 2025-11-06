import React from 'react'
import './card.css';
function Card(props) {

  return (
    <div id='cs'> 
      <img src={props.image} alt='' height={100} width={100}/>
      <h1>{props.name}</h1>
      <h3>{props.education}</h3>
    </div>
  )
}

export default Card
