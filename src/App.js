import "./App.css";
import React, { useRef } from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { Blank } from "./components/Blank";

function App() {
  const ref = useRef(null);

  function handleScroll() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="app">
      <Home handleScroll={handleScroll} />
      <Blank />
      <Form refVal={ref} />
    </div>
  );
}

export default App;
