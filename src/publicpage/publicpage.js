import React, { useState } from 'react';
import img1 from "./img.jpg"
import { useHistory, useLocation } from 'react-router-dom';


export default function PublicPage() {

    let history = useHistory();
    let location = useLocation();
    console.log("history is", history, "location is", location)

    return (
        <div className="container-fluid" style={{ height: "90vh" }}>
            <div className="row h-100 align-items-center">
                <div className="col-md-4" style={{ padding: "40px" }}>
                    <h1>
                        Premium video meetings. Now free for everyone.
                    </h1>
                    <h5>
                        We re-engineered the service we built for secure business meetings, Talkative, to make it free and available for all.
                    </h5>
                    <br />
                    <br />
                    <button className="btn btn-success" style={{ fontSize: "20px" }} onClick={() => history.push("/login")}> Click to Connect</button>
                </div>
                <div className="col-md-8 text-right">
                    <img src={img1} alt="" style={{ paddingRight: "40px", borderRadius: "50%" }} />
                </div>
            </div>

        </div>
    )
}