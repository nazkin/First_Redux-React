import * as actionTypes from '../actions';
const initialState = {
    result: []
}

const reducer = (state=initialState, action)=> {

    switch(action.type){
        case actionTypes.STORE_VAL:
            return {
                ...state,
                result: state.result.concat({val: action.result, id: new Date()})    
            } 
        case actionTypes.DELETE_VAL:
            const filteredArr = state.result.filter(val => val.id != action.selectValId);
            return {
                ...state,
                result: filteredArr
            }           
    }

    return state;
}

export default reducer;