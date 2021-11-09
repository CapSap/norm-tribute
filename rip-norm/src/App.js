import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <div className="title-cont">
        <h1 className="title">RIP Norm Macdonald </h1>
        <p className="subtitle">17 October 1959 - 14 September 2021 </p>
      </div>
      <div>
        <h2>I didn't even know he was sick</h2>
        <p>here are some recent messages that people are leaving on twitter</p>
      </div>

      <div className="tweet-container">
        {!data
          ? "loading from api.."
          : data.data.map((x) => (
              <div key={x.id} className="tweet">
                <p>{x.text}</p>
                {console.log(x)}
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
