import "./App.css";
import { postNewJoke } from "./services/jokeService.js";
import { useState } from "react";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <article>
        <div className="app-heading">
          <div className="app-heading-circle">
            <img className="app-logo" src={stevePic} alt="Good job Steve" />
          </div>
          <h1 className="app-heading-text">Chuckle Checklist</h1>
        </div>
        <section className="joke-add-form">
          <input
            className="joke-input"
            type="text"
            name="Add-Joke"
            value={userInput}
            placeholder="New One Liner"
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
          <input
            className="joke-input-submit"
            type="submit"
            value="Add"
            onClick={() => {
              let transientState = {
                id: 0,
                text: userInput,
                told: false,
              };
              postNewJoke(transientState);
              setUserInput("");
            }}
          />
        </section>
      </article>
    </>
  );
};
