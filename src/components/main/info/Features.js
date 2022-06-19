import React from "react";
import Card from "./fearures/Card";
import cardsData from "./fearures/cardsData";

export default function Features() {

    const cardsElements = cardsData.map(
        (card) => <Card
            key={card.id}
            img={card.img}
            name={card.name}
            text={card.text}
        />
    );

    return (
        <section className="features">
            <section className="container-header">
                <div className="features-content">
                    <div className="features-text">
                        <span className="features-text__pretitle pretitle">ABOUT US</span>
                        <h3 className="features-text__title title">Read about our app</h3>
                    </div>
                    <div className="features-cards">
                        {cardsElements}
                    </div>
                    <div className="btns-change">
                        <button className="btn-change btn-red">Read more</button>
                        <span id="or_for_buttons">OR</span>
                        <button className="btn-change btn-blue">Get started</button>
                    </div>
                </div>
            </section>
        </section>
    )
}