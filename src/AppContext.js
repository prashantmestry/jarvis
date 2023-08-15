import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) =>{

    const [name , setName] = useState('prashant mestry');

    return(<AppContext.Provider
        value={{
            name : name
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
