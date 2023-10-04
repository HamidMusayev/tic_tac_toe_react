import { useState } from "react";

export default function Counter() {
  const [counter, setCount] = useState<number>(0);

  function increaseClick() {
    setCount(counter + 1);
  }

  function decreaseClick() {
    setCount(counter - 1);
  }

  return (
    <>
      <button onClick={increaseClick}>increase</button>
      <button onClick={decreaseClick}>decrease</button>
      <p>{counter}</p>
    </>
  );
}
