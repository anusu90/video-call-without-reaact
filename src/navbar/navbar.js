import React from 'react';
import "./navbar.css"
import logo from "./logo.png"
import { Link } from "react-router-dom";


function Navbar(props) {

    console.log(props)

    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="" />
                {/* <h4> Talkative </h4> */}
            </div>
            <ul className="nav-ul">
                <li className="nav-links">Features</li>
                <li className="nav-links">Pricing</li>
                <li className="nav-links">Support</li>
                <Link to="/login">
                    <li className="nav-links"><button className="btn-login"> Login </button> </li>
                </Link>
                <Link to="register">
                    <li className="nav-links"><button className="btn btn-dark"> Register </button> </li>
                </Link>
            </ul>
            <div className="hamburger">
                {/* <i src="./images/bars-solid.svg" alt=""> */}
                <i className="fas fa-bars" />
            </div>
        </nav>

    )
}

export default Navbar;