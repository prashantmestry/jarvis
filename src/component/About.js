import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { Connect } from 'react-redux';

const About = (props) =>{
    //const {name} = useContext(AppContext);
    
    const home = useSelector(state => state.home);
    const dispatch = useDispatch();

    const changeName = () =>{
        console.log('chang name fun call');
        dispatch({
            type : 'CHANGE_NAME',
            data : "Yadnesh"
        })
    }
    return(
        <div>
            About page {home?.name}

            <button onClick={changeName}>Click Me</button>
        </div>
    )
}

export default About;