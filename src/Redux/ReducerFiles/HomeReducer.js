const initialState ={
    name : 'prashant'
}


const reducer = (state = initialState , action ) =>{

    console.log('here is ' , action);

switch(action.type)
    {
        case  'CHANGE_NAME' :
            return { ...state , name : action.data };
        default :
        return state
    }
}

export default reducer;