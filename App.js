import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import MainContainer from "./src/components/Body";




const App = () => (
  <div className="app">
    <Header></Header>
    <MainContainer></MainContainer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
