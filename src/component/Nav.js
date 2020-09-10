import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-br/and" href="#myPage" style={{
                            float: "left",
                            height: "50px",
                            padding: "15px 15px",
                            fontSize: "18px",
                            lineHeight: "20px",
                            color: "#fff",
                            textDecoration: "none"
                        }}>Logo</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#services">SERVICES</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#pricing">PRICING</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
