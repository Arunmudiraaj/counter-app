import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const incrementHandler = ()=>{
    dispatch({type: 'increment'})
  }
  const decrementHandler = ()=>{
    dispatch({type: 'decrement'})
  }
  const decrementBy5Handler = ()=>{
    dispatch({type: 'decrementby5'})
  }
  const incrementBy5Handler = ()=>{
    dispatch({type: 'incrementby5'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementBy5Handler}>Increment by 5</button>
      <button onClick={decrementBy5Handler}>Decrement by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
