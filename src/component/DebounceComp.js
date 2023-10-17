import React, { useState } from "react";

function debounceFun(cb, tt) {
  let bgTime;

  return function (...args) {
    if (bgTime) {
      clearInterval(bgTime);
    }
    bgTime = setTimeout(() => {
      cb(args);
    }, tt);
  };
}

function throttleFun(cb, tt) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }
    cb(args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, tt);
  };
}

const DebounceComp = () => {

  const [inputTxt, setInputTxt] = useState("");

  const getTxt = (e) => {
    setInputTxt(e.target.value);
    console.log("Enter text", e);
  };

  const callApiFun = debounceFun(getTxt, 1000);

  const getName = e =>{
    //console.log('eeee' , e.target.value);
    setInputTxt(e.target.value);
    debounceFun(getTxt, 1000);
  }

  return (
    <div>
      Text {inputTxt}
      <input type="text" value={inputTxt} onChange={callApiFun} />
    </div>
  );
};

export default DebounceComp;
