import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) =>{

    const [name , setName] = useState('prashant mestry');
    const navLink = [
        { id : '' , title : 'Home' },
        { id : 'about' , title : 'About' },
        { id : 'contact' , title : 'Contact' }
    ]

    return(<AppContext.Provider
        value={{
            name : name,
            navLink : navLink
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
