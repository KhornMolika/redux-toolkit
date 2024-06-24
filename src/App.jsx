import { Button } from "flowbite-react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectValue,
} from "./redux/feature/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(5);
  const countValue = useSelector(selectValue);
  // console.log("Count", countValue)

  return (
    <>
      <h1 className="text-3xl text-teal-800 font-bold text-center my-4">
        Redux Toolkit
      </h1>
      <h1 className="text-3xl text-teal-800 font-bold text-center mb-4">
        {countValue}
      </h1>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Button gradientMonochrome="info" onClick={() => dispatch(increment())}>
          Increase By 1
        </Button>
        <Button
          gradientMonochrome="success"
          onClick={() => dispatch(decrement())}
        >
          Decrease By 1
        </Button>
        <Button
          gradientMonochrome="cyan"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increase By Amount
        </Button>
      </div>
    </>
  );
}

export default App;
