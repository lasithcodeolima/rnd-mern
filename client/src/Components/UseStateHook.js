import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function UseStateHook() {
  const [count, setCount] = useState(0);
  //let count=0

  const increment = () => {
    //count+=1;
    setCount(count + 1);
  };

  const decrement = () => {
    //count-+1;
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`New Count is: ${count}`);
  }, [count]);

  const Navigate = useNavigate();

  return (
    <div>
      <span>UseState Hook Page</span>
      <h3>The Count is: {count}</h3>
      <Button onClick={decrement} variant="primary">
        -
      </Button>
      <Button onClick={increment} variant="primary">
        +
      </Button>
      <br />
      <Button onClick={() => Navigate(-1)} variant="warning">
        Back
      </Button>
    </div>
  );
}

export default UseStateHook;
