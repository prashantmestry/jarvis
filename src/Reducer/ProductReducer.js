
const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
           return { ...state , productList : action.data } 
        case 'ADD_IN_CARTS':
            return { ...state , carts : [ ...state.carts , action.data] }
        default :
            return state;
    }
}

export default reducer;