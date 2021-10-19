import React, { useEffect, useState } from "react";

const Counter = ({ count, increment }) => {
  useEffect(() => {
    console.log("Counter - se hace el fetch");
  }, [increment]);

  return (
    <>
      {count}
      <br />
      <button onClick={increment}>+</button>
    </>
  );
};

export const HookCallback = ({ message = "HookCallback - incrementa" }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(message);
  };

  return <Counter count={count} increment={increment} />;
};


