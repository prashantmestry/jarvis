import React, { useContext, useEffect, useReducer, useState } from "react";
import productReducer from "../Reducer/ProductReducer";
import axios from "axios";

const initialState = {
  productList: [],
  carts: [],
};

const Products = (props) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    let productsUrl = "https://fakestoreapi.com/products";
    axios
      .get(productsUrl)
      .then((res) => {
        console.log("res", res.data);
        dispatch({
          type: "ADD_PRODUCT",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const addToCart = (item) => {
    dispatch({
      type: "ADD_IN_CARTS",
      data: item,
    });
  };

  const totalCost = (list) =>{
    return list.reduce((acc , item ) =>{
        return acc + (item.price)
    },0)
  }

  return (
    <div className="text-3xl font-bold">
        <div className="flex justify-between">
            <h1>Products</h1>
            <div className="text-sm">{ state.carts.length > 0 ? '$'+totalCost(state.carts) : 'Cart is empty'}</div>
        </div>
      {state.carts.length > 0 && (
        <div className="flex gap-4 p-4 my-4 bg-slate-100 overflow-x-auto">
          {state.carts.map((val) => {
            return (
              <div className="flex flex-col text-center justify-between p-2 bg-white">
                <div className="flex justify-center">
                  <img width={50} height={50} src={val.image} />
                </div>
                <div className="text-sm mt-3">${val.price}</div>
                <button
                    className="bg-red-300 px-4 py-2 text-sm"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_FROM_CART",
                      data: { id: val.id },
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
        {state.productList.map((val) => {
          return (
            <div className="p-4 border-2 flex flex-col justify-between" key={val.id}>
              <div className="">{val.title}</div>
                <div className="grid grid-cols-2 mt-4">
                    <div className="p-2 text-center">
                        <div className="flex justify-center text-center col-span-2"><img src={val.image} width={100} height={100} /></div>
                        <div className="mt-2">${val.price}</div>
                    </div>
                    <div className="m-2 text-sm whitespace-pre-wrap">
                        {val?.description.length > 200
                        ? val.description.substr(0, 200) + "..."
                        : val.description}
                    </div>
                </div> 
                            
                <div className="text-center ">
                    {
                        state.carts.some((item) => item.id == val.id) ? (
                        <button
                        className="bg-red-300 mt-4 px-6 py-2 text-sm"
                        onClick={() => dispatch({
                            type: "DELETE_FROM_CART",
                            data: { id: val.id },
                        })}
                        >
                        Remove from cart
                        </button>
                    ) : (
                        <button
                        className="bg-green-400 mt-4 px-6 py-2 text-sm"
                        onClick={() =>
                            addToCart({
                            id: val.id,
                            image: val.image,
                            price: val.price,
                            title: val.title,
                            })
                        }
                        >
                        Add To Cart
                        </button>
                    )}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
