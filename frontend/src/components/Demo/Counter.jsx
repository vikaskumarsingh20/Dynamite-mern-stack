// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../../redux/slices/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <p className="text-6xl text-center">{count}</p>
      <div className="flex justify-center align-center gap-4  ">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(counterSlice.actions.reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
