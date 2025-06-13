import React from "react";  
import ReactDOM from "react-dom/client";

const Heading = () => <h1>This is react code</h1>

const Title = () => (
  <div id="parent" >
    <Heading />
    <h1>Hi codee</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>)