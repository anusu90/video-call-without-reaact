import React, { useState, useContext, useCallback } from 'react';
import { AppContext } from "../context/context";
import Room from "../room/room"


const VideoChat = () => {

    const [user, setuser] = useContext(AppContext).whichUser;

    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [token, setToken] = useState(' ');

    async function handleSubmit() {
        let req = await fetch(String(process.env.REACT_APP_BACKEND_URL) + "/user", {
            mode: "cors",
            credentials: 'include',
            method: "GET"
        })
        let body = await req.json()
        console.log(body)
        setToken(body.jwtTwilioToken)
        setUsername(body.identity)
        setRoomName(body.room)
    }

    const handleLogout = useCallback(event => {
        setToken(null);
    }, []);

    return (
        <div>
            <button className="btn btn-primary" onClick={handleSubmit}> Show Me </button>
            <div>
                <Room roomName={roomName} token={token} handleLogout={handleLogout} />
            </div>

        </div>
    ) // we'll build up our response later
};

export default VideoChat;