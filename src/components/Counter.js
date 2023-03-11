import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/index';
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const incrementHandler = ()=>{

    dispatch(counterActions.increment())
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }
  const decrementBy5Handler = ()=>{
    dispatch(counterActions.decrease(5))
  }
  const incrementBy5Handler = ()=>{
    dispatch(counterActions.increase(5))
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
