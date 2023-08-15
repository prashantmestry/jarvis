import React, { useContext, useEffect, useReducer, useState } from 'react';
import productReducer from '../Reducer/ProductReducer';
import axios from 'axios';

const initialState ={
    productList :[],
    carts:[]
}

const Products = (props) =>{
    
    const [state,dispatch] = useReducer(productReducer,initialState);

    useEffect(() =>{
        let productsUrl = 'https://fakestoreapi.com/products';
        axios.get(productsUrl).then(res =>{
            console.log('res',res.data);
            dispatch({
                type : 'ADD_PRODUCT',
                data : res.data
            })
        }).catch(err =>{
            console.log('error',err);
        })

    },[])


    return(
        <div  className="text-3xl font-bold underline">
            <h1>Products</h1>

            <div class="flex flex-wrap gap-2 text-lg">
            {
                state.productList.map(val =>{
                    return (
                        <div class="w-1/5 p-4 border-2 ">
                            <div className='m-4'>{val.title}</div>
                            <div className='m-2'>{val.description}</div>
                            <div className='m-2 flex flex-col text-center'>
                                <div><img src={val.image} width={100} height={100} /></div>
                                <div className='text-center'>{val.price}</div>
                            </div>                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Products;