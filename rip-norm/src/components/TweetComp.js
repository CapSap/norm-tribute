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
      <div className="quote-background">
        <div className="quote-cont">
          <q className="quote">
            Comedy is <strong>surprises</strong>. So if you're intending to make
            somebody laugh and they don't laugh, that's funny.
          </q>
          <p className="author">-Norm Macdonald</p>
        </div>
      </div>
      <div className="tweetHeading">
        <h2>@normmacdonald </h2>
        <p>What people are tweeting</p>
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
