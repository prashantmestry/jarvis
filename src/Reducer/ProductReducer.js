
const reducer = (state,action) =>{

    switch(action.type){
        case 'ADD_PRODUCT':
           return { ...state , productList : action.data } 
        case 'ADD_IN_CARTS':
            return { ...state , carts : [ ...state.carts , action.data] }
        case 'DELETE_FROM_CART':
                return { ...state , carts : state.carts.filter(item => item.id !== action.data.id) }            
        default :
            return state;
    }
}

export default reducer;