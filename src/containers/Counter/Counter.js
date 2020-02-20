import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtraction}  />
                <hr />
                <button onClick={()=> this.props.onStoreValue(this.props.ctr)}>Store Value</button>
                <ul>
                    {this.props.storedResults.map(res=> (
                        <li key={res.id} onClick={()=> this.props.onDeleteValue(res.id)}>{res.val}</li>
                    ))}
                    
                </ul>
            </div>
        )};
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrement: ()=> dispatch({type: actionTypes.DECREMENT}),
        onAddition: ()=> dispatch({type: actionTypes.ADD, value: 5}),
        onSubtraction: ()=> dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreValue: (result)=> dispatch({type: actionTypes.STORE_VAL, result: result}),
        onDeleteValue: (id)=> dispatch({type: actionTypes.DELETE_VAL, selectValId: id})
      
    };
}
const mapStateToProps =(state)=> {
    return{
        ctr: state.counter.counter,
        storedResults: state.result.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);