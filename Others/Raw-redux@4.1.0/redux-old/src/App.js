import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  console.log(count, "===count")

  const handleAdd = () => {
    dispatch(increase(5));
  };

  const handleSubtract = () => {
    dispatch(decrease(5))
  };
  return (
    <div className="container">
      <button onClick={() => handleSubtract()}>Decrement by 5</button>
      <span>{count}</span>
      <button onClick={() => handleAdd()}>Increment by 5</button>
    </div>
  );
}

export default App;
