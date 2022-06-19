import React from "react";

export default function Stats() {
    return (
        <section className="stats">
            <div className="stats__productive stat">
                <img className="stats__img" alt="productive" src={require('../../../assets/img/main/info/stats/02.png')}/>
                <span className="stats__data">89%</span>
                <p className="stats__desc">Customers who have increased their productivity</p>
            </div>
            <div className="stats__users stat">
                <img className="stats__img" alt="productive" src={require('../../../assets/img/main/info/stats/01.png')}/>
                <span className="stats__data">3123</span>
                <p className="stats__desc">Users who have used our application</p>
            </div>
        </section>
    )
}