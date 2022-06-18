import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="container-header">
                <nav className="nav">
                    <div className="menu">
                        <img className="logo" alt="logo" src={require('../assets/img/header/logo.png')}/>
                        <div className="navbar">
                            <a className="navbar-link" href="#">Home</a>
                            <a className="navbar-link" href="#">Blog</a>
                            <a className="navbar-link" href="#">Features</a>
                            <a className="navbar-link" href="#">Pricing</a>
                            <a className="navbar-link" href="#">Documentation</a>
                        </div>
                    </div>
                    <div className="links">
                        <div className="social-links">
                            <a href="#"><img className="social-link__img" src={require('../assets/img/header/facebook.png')} alt="social media"/></a>
                            <a href="#"><img className="social-link__img" src={require('../assets/img/header/telegram.png')} alt="social media"/></a>
                            <a href="#"><img className="social-link__img" src={require('../assets/img/header/twitter.png')} alt="social media"/></a>
                            <a href="#"><img className="social-link__img" src={require('../assets/img/header/m.png')} alt="social media"/></a>
                        </div>
                        <button className="btn-get_started">Get started</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}