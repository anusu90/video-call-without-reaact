import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';

const Room = ({ roomName, token, handleLogout }) => {

    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);
    const [tokenIS, setTokenIS] = useState('');
    const [roomNameIS, setRoomNameIS] = useState('');

    const remoteParticipants = participants.map(participant => (
        <p key={participant.sid}>{participant.identity}</p>
    ));

    // useEffect(() => {
    //     const participantConnected = participant => {
    //         setParticipants(prevParticipants => [...prevParticipants, participant]);
    //     };

    //     const participantDisconnected = participant => {
    //         setParticipants(prevParticipants =>
    //             prevParticipants.filter(p => p !== participant)
    //         );
    //     };

    //     Video.connect(token, {
    //         name: roomName
    //     }).then(room => {
    //         setRoom(room);
    //         room.on('participantConnected', participantConnected);
    //         room.on('participantDisconnected', participantDisconnected);
    //         room.participants.forEach(participantConnected);
    //     });

    //     return () => {
    //         setRoom(currentRoom => {
    //             if (currentRoom && currentRoom.localParticipant.state === 'connected') {
    //                 currentRoom.localParticipant.tracks.forEach(function (trackPublication) {
    //                     trackPublication.track.stop();
    //                 });
    //                 currentRoom.disconnect();
    //                 return null;
    //             } else {
    //                 return currentRoom;
    //             }
    //         });

    //     }
    // }, [roomName, token])

    useEffect(() => {
        const { connect } = require('twilio-video');
        console.log("hi", token)
        connect((token), { name: roomName }).then(room => {
            console.log(`Successfully joined a Room: ${room}`);
            room.on('participantConnected', participant => {
                console.log(`A remote Participant connected: ${participant}`);
            });
        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });
    }, [token])


    const handleJoinRoom = () => {

        const { connect } = require('twilio-video');

        connect(tokenIS, { name: roomNameIS }).then(room => {
            console.log(`Successfully joined a Room: ${room}`);
            room.on('participantConnected', participant => {
                console.log(`A remote Participant connected: ${participant}`);
            });
        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });

    }


    return (

        <div className="container-fluid" style={{ height: "70vh" }}>

            <br />
            <br />

            <div>
                <form action="/">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="form-group">
                                <input type="text" id="" className="form-control" placeholder="TOKEN" value={tokenIS} onChange={(e) => setTokenIS(e.target.value)} />
                                <br />
                                <input type="text" id="" className="form-control" placeholder="ROOM" value={roomNameIS} onChange={(e) => setRoomNameIS(e.target.value)} />
                                <br />
                                <buttn className="btn btn-primary" onClick={handleJoinRoom}>JOIN ROOM</buttn>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="row text-center" >
                <h2 className="w-75 text-center">Room: {roomName}</h2>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <div className="row text-center">
                <div className="local-participant">
                    {room ? (
                        <p key={room.localParticipant.sid}>{room.localParticipant.identity}</p>
                    ) : (
                            ''
                        )}
                </div>
                <h3 className="w-75 text-center">Remote Participants</h3>
                <div className="remote-participants">{remoteParticipants}</div>
            </div>
        </div>
    );

};

export default Room;