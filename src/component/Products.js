import React, { useContext, useEffect, useReducer, useState } from 'react';
import productReducer from '../Reducer/ProductReducer';
import axios from 'axios';
import { Button } from '@mui/material';

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

    },[]);

    const addToCart = (item) =>{
        console.log('item',item);
        dispatch({
            type : 'ADD_IN_CARTS',
            data: item
        })
    }


    return(
        <div  className="text-3xl font-bold">
            <h1>Products</h1>
            {
                (state.carts.length > 0) &&
                <div className='flex border-2 my-4 p-4'>
                    {
                        state.carts.map(val =>{
                            return (
                            <div className='flex flex-col mr-8'>
                                <div className='flex'><img width={50} height={50} src={ val.image } /></div>
                                <div className='text-sm '>{val.price}</div>
                            </div>
                            )
                        })
                    }
                </div>
            }
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {
                state.productList.map(val =>{
                    return (
                        <div className="p-4 border-2" key={val.id}>
                            <div className='m-4'>{val.title}</div>
                            <div className='m-2 text-sm'>{val?.description.length > 200 ? val.description.substr( 0, 200)+"..." : val.description}</div>
                            <div className='m-2 flex flex-col text-center'>
                                <div><img src={val.image} width={100} height={100} /></div>
                                <div className='text-center'>{val.price}</div>
                            </div>        
                            {
                                //state.carts.find(item => item.id === val.id) &&
                                <Button className="bg-slate-400" onClick={() => addToCart({
                                    id : val.id,
                                    image : val.image,
                                    price :val.price,
                                    title:val.title
                                })}>Add To Cart</Button>      
                            }              
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Products;