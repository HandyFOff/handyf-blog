import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-info">
                    <span className="hero-info__pretitle pretitle">PLAN YOUR LIFE</span>
                    <h1 className="hero-info__title title">Increase your <span>productivity</span></h1>
                    <p className="hero-info__text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
                </div>
                <button className="btn-hero__play">
                    <div className="tringle"></div>
                </button>
                <div className="hero-line">
                    <img alt="line" src={require('../../../assets/img/main/info/line.png')}/>
                </div>
            </div>
        </section>
    )
}