import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import VideoChat from "../videochat/videochat"

export default function Dashboard() {

    let history = useHistory();
    let location = useLocation();

    console.log(history, location)

    async function checkStatus() {

        let reqC = await fetch(String(process.env.REACT_APP_BACKEND_URL) + "/check", {
            mode: "cors",
            credentials: 'include',
            method: "GET"
        })

    }



    async function getMedia(constraints) {
        let stream = null;

        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(stream)
        } catch (err) {
            /* handle the error */
        }
    }


    return (
        <div>
            <button className="btn btn-primary" onClick={checkStatus}> CHECK STATUS </button>
            <button className="btn btn-primary" onClick={() => { getMedia({ audio: true, video: true }) }}> Start Call </button>
            <VideoChat></VideoChat>
        </div>
    )
}