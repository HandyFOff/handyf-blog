import React from "react";
import Hero from "./info/Hero";
import Sponser from "./info/Sponser";
import Manage from "./info/Manage";
import Features from "./info/Features";

// <data files>
import sponsersData from "./info/sponser/sponsersData";
// </data files>

export default function Info() {
    const sponsers = sponsersData.map(
        (sponser) => <Sponser
                        img={sponser.img}
                        key={sponser.id}
                     />
    );
    return (
        <section className="info">
            <Hero/>
                <div className="sponsers">
                    <div className="container-info">
                      {sponsers}
                    </div>
                </div>
                <Manage/>
                <Features/>
        </section>
    )
}