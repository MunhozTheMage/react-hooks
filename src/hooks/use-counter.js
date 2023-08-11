import { useEffect, useState } from "react";

export const useCounter = (name) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  const decreaseCounter = () => {
    setCounter((oldValue) => oldValue - 1);
  };

  useEffect(() => {
    console.log(`${name} Counter: ${counter}`);
  }, [counter, name]);

  return {
    counter,
    increaseCounter,
    decreaseCounter,
  };
};
