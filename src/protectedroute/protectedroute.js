import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../context/context"

export default function ProtectedRoute({ component1: Component1, component2: Component2, ...rest }) {
    const [userState, setUserState] = useContext(AppContext).userStatus;

    console.log("i am here")
    console.log(userState)

    return (
        <Route {...rest}>
            {
                (userState) ? <Component1 /> : <Component2 />

            }

        </Route>
    )



}
