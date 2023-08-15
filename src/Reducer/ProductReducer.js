
const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
           return { ...state , productList : action.data } 
        default :
            return state;
    }
}

export default reducer;