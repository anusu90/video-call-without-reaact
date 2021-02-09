import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';

//IMPORTING CONTEXT

import { AppContext } from "../context/context"

import "./login.css"
import loginWall from "./login-wall.jpg"

export default function Login() {

    let history = useHistory();

    const [userState, setUserState] = useContext(AppContext).userStatus;
    const [user, setuser] = useContext(AppContext).whichUser;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState("")

    const btn = useRef(null);


    async function handleLogin(e) {
        e.preventDefault();
        SetError("");
        setLoading(true)
        console.log(btn.current)
        btn.current.disabled = true;

        let url = String(process.env.REACT_APP_BACKEND_URL) + "/login";
        console.log(url)
        let data = {
            email: email,
            password: password,
        }

        let loginRequest = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
            body: JSON.stringify(data)
        });

        let loginReqBody = await loginRequest.json();

        if (loginRequest.status !== 200) {
            SetError(loginReqBody.message)

            setLoading(false);
            btn.current.disabled = false;

        } else {
            setUserState(true)
            console.log(loginReqBody)
            setuser({ name: loginReqBody.firstname, email: loginReqBody.email })
            history.push("/")
        }

    }

    return (
        <div className="container-fluid h-100">
            <div className="row text-center">
            </div>
            <div className="row h-100 align-items-center">
                <div className="col-md-6" >
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center" style={{ padding: "80px 10px", backgroundColor: "whitesmoke", border: "2px whitesmoke solid", borderRadius: "15px" }}>

                            <h3>LOGIN</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email"> Email Address</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"> Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">

                                    <Link to="forgotpass"><p> Forgot Password?  </p></Link>

                                </div>
                                <div className="form-group">
                                    {error}
                                </div>
                                <div>
                                    <button className="login-btn-login" onClick={(e) => handleLogin(e)} ref={btn}> {(loading ? <FontAwesomeIcon icon={faSync} spin /> : "Submit")} </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 h-100" style={{ backgroundImage: `url(${loginWall})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    {/* <img src={loginWall} alt="" /> */}
                    .
                </div>
            </div>
        </div>
    )
}