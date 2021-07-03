import React from 'react'
import "./Card.css"

function Card({Name, Description}) {
    //console.log(Name, Description);
    return (
        <div className="Card">
            <h1>{Name}</h1>
            <h2>Calorie's Consumed = {Description}</h2>
        </div>
    )
}

export default Card
