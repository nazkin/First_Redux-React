import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

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
                <button onClick={this.props.onStoreValue}>Store Value</button>
                <ul>
                    {this.props.storedResults.map(res=> (
                        <li key={res.id} onClick={this.props.onDeleteValue}>{res.val}</li>
                    ))}
                    
                </ul>
            </div>
        )};
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: ()=> dispatch({type: 'INCREMENT'}),
        onDecrement: ()=> dispatch({type: 'DECREMENT'}),
        onAddition: ()=> dispatch({type: 'ADD', value: 5}),
        onSubtraction: ()=> dispatch({type: 'SUBTRACT', value: 5}),
        onStoreValue: ()=> dispatch({type: 'STORE_VAL'}),
        onDeleteValue: ()=> dispatch({type: 'DELETE_VAL'})
      
    };
}
const mapStateToProps =(state)=> {
    return{
        ctr: state.counter,
        storedResults: state.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);