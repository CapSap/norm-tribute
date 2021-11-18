import { useState, useEffect } from "react";
import "../App.css";

function TweetComp() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="tweetHeading">
        <h2>@normmacdonald I didn't even know he was sick</h2>
        <p>here are some recent messages that people are leaving on twitter</p>
      </div>
      <div className="tweet-container">
        <div></div>
        {!data.data
          ? "loading from api.."
          : data.data.map((x) => (
              <div key={x.id} className="tweet">
                <div>{x.text}</div>

                <a href={`https://twitter.com/${x.author_id}/status/${x.id}`}>
                  Click to view the tweet on twitter
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}

export default TweetComp;
