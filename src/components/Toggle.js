import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const color = toggle ? 'red' : 'white';
  function whenClicked() {
    setToggle((toggle) => !toggle)
  }
  return <button onClick={whenClicked} style={{background: color}}>{toggle ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
