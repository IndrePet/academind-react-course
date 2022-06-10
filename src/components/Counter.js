import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: 'INCREASE',
      amount: 5,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  const toggleCounterHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const card = (
    <>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      {showCounter && card}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
