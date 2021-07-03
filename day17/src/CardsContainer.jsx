import React from 'react'
import "./CardsContainer.css"
import Card from "./Card"

function Cards_Container() {
    return (
        <div className="container">
            <div className="header">
                <img src="/img/calories.png" alt="" />
                <h1>Calorie Read</h1>
            </div>
            <div className="home">
                <Card  Name="Pizza" Description="56"/>
                <Card  Name="Burger" Description="69"/>
                <Card  Name="Coke" Description="500"/>
                <Card  Name="Browne" Description="180"/>
                <Card  Name="Pani Puri" Description="10"/>
            </div>

        </div>
    )
}

export default Cards_Container;
