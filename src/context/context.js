import React, { useState } from 'react'

export const AppContext = React.createContext();

export const AppProvider = (props) => {

    const [userState, setUserState] = useState(false);
    const [user, setuser] = useState({ name: "", email: "" });


    return (
        <AppContext.Provider value={{ userStatus: [userState, setUserState], whichUser: [user, setuser] }}>
            {props.children}
        </AppContext.Provider>
    )



}

