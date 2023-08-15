import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Navigation = (props) =>{
    const { navLink} = useContext(AppContext);
    console.log("=",navLink);
    return(
        <div  className="bg-slate-50 p-1 px-2">
            {
                navLink.map(val =>{
                    return <Link className='p-3 hover:bg-slate-200' to={`/${val.id}`}>{val.title}</Link>
                })
            }       
        </div>
    )
}

export default Navigation;