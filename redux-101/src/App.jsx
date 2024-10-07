import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";

function App() {
  const state = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  //   setCount(count + 1);
  // };

  return (
    <>
      <div>
        <p>{state.count}</p>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
