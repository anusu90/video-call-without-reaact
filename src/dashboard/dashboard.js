import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export default function Dashboard() {

    let history = useHistory();
    let location = useLocation();

    console.log(history, location)

    async function checkStatus() {

        let reqC = await fetch(String(process.env.REACT_APP_BACKEND_URL) + "/users/check", {
            mode: "cors",
            credentials: 'include',
            method: "GET"
        })

    }

    return (
        <div>
            <button className="btn btn-primary" onClick={checkStatus}> CHECK STATUS </button>
        </div>
    )
}