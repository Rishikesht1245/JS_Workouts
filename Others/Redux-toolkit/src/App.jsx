import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slice";

const containerStyle = {
  display: "flex",
  gap: "20px",
};

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)

  const handleAdd = () => {
    dispatch(increment(5));
  };

  const handleSubtract = () => {
    dispatch(decrement(5));
  };

  console.log(count, "===count")

  return <div style={containerStyle}>
    <button onClick={()=> handleSubtract()}>Decrement by 5</button>
    <span>{count}</span>
    <button onClick={() => handleAdd()}>Increment by 5</button>
  </div>;
}

export default App;
