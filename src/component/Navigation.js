import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) =>{
    
    return(
        <div>
            Navigation
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            
        </div>
    )
}

export default Navigation;