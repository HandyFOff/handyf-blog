import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card__img" alt="card icon" src={props.img}/>
            <h1 className="card__title">{props.name}</h1>
            <p className="card__text">{props.text}</p>
        </div>
    )
}