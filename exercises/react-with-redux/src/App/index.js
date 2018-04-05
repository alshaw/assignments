import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, double, half } from '../redux';

function App(props) {
  return (
    <div className="app">
      <button onClick={props.half}>/2</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.counter}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.double}>x2</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, { increment, decrement, double, half })(App);

// Two reasons why you want to connect to the store
// 1. Does this component need any data from the Redux store.
// 2. Does this component need to dispatch any actions?