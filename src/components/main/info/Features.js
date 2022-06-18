import React from "react";
import Card from "./fearures/Card";

export default function Features() {
    return (
        <section className="container-header">
            <div className="features">
                <div className="features-text">
                    <span className="features-text__pretitle">ABOUT US</span>
                    <h3 className="features-text__title">Read about our app</h3>
                </div>
                <div className="features-cards">
                    {/* =====CARDS===== */}
                </div>
                <div className="btns-change">
                    <button className="btn-change btn-red">Read more</button>
                    <span id="or_for_buttons">OR</span>
                    <button className="btn-change btn-blue">Get started</button>
                </div>
            </div>
        </section>
    )
}