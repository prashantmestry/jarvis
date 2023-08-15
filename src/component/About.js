import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const About = (props) =>{
    const {name} = useContext(AppContext);
    return(
        <div>
            About page {name}
        </div>
    )
}

export default About;