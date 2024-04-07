import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		// dispatch({ type: "increment" });
		dispatch(counterActions.increase());
	};

	const decrementHandler = () => {
		// dispatch({ type: "decrement" });
		dispatch(counterActions.decrement());
	};
	const toggleCounterHandler = () => {
		// dispatch({ type: "toggle" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
