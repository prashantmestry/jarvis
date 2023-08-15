import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Contact = (props) =>{
    const {name} = useContext(AppContext);
    return(
        <div>
            contact page {name}
        </div>
    )
}

export default Contact;