import React, { useState } from "react";
import "./styles.css";

const hsResult = {
  ARTS: [
    {
      Name: "Shikha Nath",
      Letters: "three",
      Percentage: "79%"
    },
    {
      Name: "Topan Nath",
      Letters: "Two",
      Percentage: "67%"
    },
    {
      Name: "Rahul Nath",
      Letters: "No letters",
      Percentage: "62%"
    },
    {
      Name: "Pinki Nath",
      Letters: "One",
      Percentage: "60%"
    }
  ],

  COMMERCE: [
    {
      Name: "Biki Nath",
      Letters: "four",
      Percentage: "85%"
    }
  ],
  SCIENCE: [
    {
      Name: "Karan Nath",
      Letters: "No letters",
      Percentage: "63%"
    }
  ]
};

const hsResultArray = Object.keys(hsResult);

export default function App() {
  const [btnChange, setbtnChange] = useState("COMMERCE");

  const onClickHandler = (item) => {
    setbtnChange(item);
  };
  return (
    <div className="App">
      <div>
        {hsResultArray.map((item, i) => {
          return (
            <button onClick={() => onClickHandler(item)} key={i}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {hsResult[btnChange].map((movie, a) => (
            <section className="song-card" key={a}>
              <div className="song-description">
                <h2>{movie.Name}</h2>
                <h3>{movie.Percentage}</h3>
                <h3>{movie.Letters}</h3>
              </div>
            </section>
          ))}
        </ul>
      </div>
      {/* <div>
        {hsResult[btnChange].map((itemOne) => (
          <h1>{itemOne}</h1>
        ))}
      </div> */}
    </div>
  );
}
