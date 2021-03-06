import React, { useContext, useState, useEffect } from 'react';
import "./navbar.css"
import logo from "./logo.png"
import { Link, Redirect } from "react-router-dom";
import { AppContext } from "../context/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Lander from "../landing/lander"


function Navbar() {

    const [userState, setUserState] = useContext(AppContext).userStatus;
    const [user, setuser] = useContext(AppContext).whichUser;

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {

        async function checkStatus() {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/check";
            let checkRequest = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                mode: "cors",
            });

            let checkRequestBody = await checkRequest.json();

            if (checkRequest.status === 200) {
                setUserState(true);

            }

            setLoading2(false);
        }

        checkStatus();

    }, []);

    async function handleLogOut() {

        setLoading(true)
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/logout";
        let logoutRequest = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
        });

        if (logoutRequest.status === 200) {
            setUserState(false);
            setuser({ name: "", email: "" });
            <Redirect to="/"></Redirect>

        } else {
            let error = await logoutRequest.json()
            console.log(error.message)
        }

    }

    if (userState) {

        return (
            <>
                <nav className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="nav-ul">
                        <li className="nav-links">Features</li>
                        <li className="nav-links">Pricing</li>
                        <li className="nav-links">Support</li>
                        <li className="nav-links"><button className="btn-login"> Profile </button> </li>
                        <li className="nav-links"><button className="btn btn-dark" onClick={handleLogOut}> {(loading ? <FontAwesomeIcon icon={faSync} spin /> : "Logout")} </button> </li>

                    </ul>
                    <div className="hamburger">
                        <i className="fas fa-bars" />
                    </div>
                </nav>
            </>

        )

    } else {

        return (
            <>
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
                <div className="myLoader" style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", height: "200px", width: "200px", margin: "auto" }}>
                    {
                        (loading2) ? <FontAwesomeIcon icon={faSync} spin color="#298f24" size="10x" /> : " "
                    }
                </div>
            </>

        )

    }

}

export default Navbar;