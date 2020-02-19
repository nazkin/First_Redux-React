
const initialState = {
    counter: 0,
    result: []
}

const reducer = (state=initialState, action)=> {

    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }        
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }        
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_VAL':
            return {
                ...state,
                result: state.result.concat({val: state.counter, id: new Date()})    
            } 
        // case 'DELETE_VAL':
        //     return {

        //     }           
    }

    return state;
}

export default reducer;