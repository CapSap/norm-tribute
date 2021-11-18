import { useState, useEffect } from "react";
import "./App.css";
import TweetComp from "./components/TweetComp";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />

      <TweetComp />
    </div>
  );
}

export default App;
