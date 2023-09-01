import "./App.css";
import {
  getAllJokes,
  postNewJoke,
  handleJokeUpdate,
} from "./services/jokeService.js";
import { useState, useEffect } from "react";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }, []);

  useEffect(() => {
    const untoldJokeArray = allJokes.filter((joke) => joke.told === false);
    setUntoldJokes(untoldJokeArray);
    const toldJokeArray = allJokes.filter((joke) => joke.told === true);
    setToldJokes(toldJokeArray);
  }, [allJokes]);

  const markJokeStatus = async (jokeObj) => {
    const newJokeStatus = !jokeObj.told;
    handleJokeUpdate(jokeObj, newJokeStatus);
    const updatedJokes = allJokes.map((joke) =>
      joke.id === jokeObj.id ? { ...joke, told: newJokeStatus } : joke
    );
    setAllJokes(updatedJokes);
  };

  return (
    <>
      <div className="app-container">
        <div className="app-heading">
          <div className="app-heading-circle">
            <img className="app-logo" src={stevePic} alt="Good job Steve" />
          </div>
          <h1 className="app-heading-text">Chuckle Checklist</h1>
        </div>
        <div className="joke-input-label">
          <h2>Add Joke</h2>
        </div>
        <div className="joke-add-form">
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
              postNewJoke(userInput).then((res) => {
                setAllJokes([...allJokes, res]);
              });
              setUserInput("");
            }}
          />
        </div>
        <div className="joke-lists-container">
          <div className="joke-list-container">
            <h2>
              Untold
              <span className="told-count">{untoldJokes.length}</span>
            </h2>

            <ul>
              {untoldJokes.map((joke) => {
                return (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <button
                      className="joke-list-action-toggle"
                      type="button"
                      onClick={() => markJokeStatus(joke)}
                    >
                      Told?
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="joke-list-container">
            <h2>
              Told
              <span className="untold-count">{toldJokes.length}</span>
            </h2>

            <ul>
              {toldJokes.map((joke) => {
                return (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <button
                      className="joke-list-action-toggle"
                      type="button"
                      onClick={() => markJokeStatus(joke)}
                    >
                      Told?
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
