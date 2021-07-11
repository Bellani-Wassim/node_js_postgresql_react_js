import React, { useState } from "react";

const All = () => {
  const fetchData = async () => {
    const mssg = await window
      .fetch("http://localhost:9674/")
      .then((m) => m.json())
      .then((n) => console.log(n));
    return mssg;
  };
  return (
    <div>
      <button onClick={fetchData}></button>
    </div>
  );
};

export default All;
