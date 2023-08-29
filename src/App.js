import "./App.css";
import { useState, useRef } from "react";

export const App = () => {
  const [inputText, setInputText] = useState("New One Liner");

  return (
    <>
      <article>
        <div className="app-heading">
          <h1 className="app-heading-text">Chuckle Checklist</h1>
        </div>
        <section className="joke-add-form">
          <input
            className="joke-input"
            type="text"
            value={inputText}
            // placeholder="New One Liner"
            required
            onChange={(event) => {
              // What's the value of event?
            }}
          />
          <input className="joke-input-submit" type="submit" value="Add" />
        </section>
      </article>
    </>
  );
};
