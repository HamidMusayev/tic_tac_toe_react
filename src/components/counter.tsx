import { useState } from "react";

export default function Counter() {
  const [counter, setCount] = useState<number>(0);

  function increaseClick(): void {
    setCount(counter + 1);
  }

  function decreaseClick(): void {
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
