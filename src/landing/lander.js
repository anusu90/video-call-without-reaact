import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../context/context";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';

export default function Lander() {

    const [userState, setUserState] = useContext(AppContext).userStatus;
    const [user, setuser] = useContext(AppContext).whichUser;
    const [loading, setLoading] = useState(false);

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
                console.log("hello");

            }

            // else {
            //     <Redirect to="/publicpage"></Redirect>
            // }
        }

        checkStatus();

    }, []);

    return (

        <div className="container" style={{ height: "80vh" }}>
            <div className="row h-100 align-items-center">
                <div className="col-md-12 text-center">
                    <FontAwesomeIcon icon={faSync} spin color="#298f24" size="10x" />
                </div>
            </div>
        </div>

    )


}

