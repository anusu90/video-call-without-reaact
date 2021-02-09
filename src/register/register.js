import React, { useState } from 'react';
import "./register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom'
// import bgRegister from "./background.png";

export default function Register() {

    let history = useHistory();
    let location = useLocation();

    const [firstname, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmpassword, SetConfirmPassword] = useState("");
    const [error, SetError] = useState("")


    async function handleRegistration(e) {
        e.preventDefault();
        if (password !== confirmpassword) {
            SetError("Passwords Dont Match")

        } else {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/register";
            console.log(url)
            let data = {
                firstname: firstname,
                secondName: secondName,
                email: email,
                password: password,
            }

            console.log(data)

            // let registerRequest1 = await fetch("http://localhost:1234/")

            let registerRequest = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(data)
            });

            let registerReqBody = await registerRequest.json()
            // console.log(registerReqBody, registerRequest.status)

            if (registerRequest.status !== 200) {
                SetError(registerReqBody.message)

            } else {
                history.push("/")
            }

        }

    }

    return (
        <div className="container-fluid h-100">
            <div className="row h-100 align-items-center">
                <div className="col-md-10 offset-md-1">
                    <div className="row no-gutters">
                        <div className="col-md-3 offset-md-1 ">
                            <ul className="register-ul">
                                <li className="register-link">WITH TALKATIVE YOU CAN BUILD:</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> SMS marketing</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Omnichannel contact center</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Call tracking</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Web chat</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Push notifications</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Alerts and notifications</li>
                                <li className="register-link"><FontAwesomeIcon icon={faCheck} color="#298f24" /> Phone verification</li>
                            </ul>
                        </div>
                        <div className="col-md-6 register-form-div ">
                            <form className="register-form">
                                <div className="form-group">
                                    <label htmlFor="firstName"> First Name</label>
                                    <input type="text" className="form-control" value={firstname} onChange={(e) => { setFirstName(e.target.value) }} id="firstName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="secondName"> Second Name</label>
                                    <input type="text" className="form-control" value={secondName} onChange={(e) => { setSecondName(e.target.value) }} id="secondName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"> Email Address</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => { SetEmail(e.target.value) }} id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"> Password</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => { SetPassword(e.target.value) }} id="password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmpassword"> Confirm Password</label>
                                    <input type="password" className="form-control" value={confirmpassword} onChange={(e) => { SetConfirmPassword(e.target.value) }} id="confirmpassword" />
                                </div>
                                <div className="form-group">
                                    {error}
                                </div>
                                <div>
                                    <button className="register-btn-register" onClick={(e) => { handleRegistration(e) }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}