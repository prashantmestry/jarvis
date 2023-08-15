import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Home = (props) =>{
    const {name} = useContext(AppContext);
    return(
        <div  className="text-3xl font-bold underline">
            Home page {name}
        </div>
    )
}

export default Home;