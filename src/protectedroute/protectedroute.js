import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../context/context"

export default function ProtectedRoute({ component: Component, ...rest }) {

    const [userState, setUserState] = useContext(AppContext).userStatus;

    return (
        <Route {...rest}>
            {
                (userState) ? <Component /> : <Redirect to="/publicpage"></Redirect>

            }

        </Route>
    )



}
