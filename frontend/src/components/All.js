import React from "react";

const All = () => 
    <div>
      <button onClick={
        async () => await window
        .fetch("http://localhost:5000/")
        .then((m) => m.json())
        .then((n) => console.log(n))
      }>Test</button>
    </div>;

export default All;
