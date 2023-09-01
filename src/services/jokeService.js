export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((res) => res.json());
  // returns array of all the jokes in API database
};

export const postNewJoke = (inputValue) => {
  if (inputValue.length > 0) {
    let transientState = {
      id: 0,
      text: inputValue,
      told: false,
    };
    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
    return fetch("http://localhost:8088/jokes", postOptions).then((res) =>
      res.json()
    );
  } else {
    window.alert("Please try again !");
  }
};

export const handleJokeUpdate = (jokeObj, jokeStatus) => {
  let jokeStatusState = {
    id: jokeObj.id,
    text: jokeObj.text,
    told: jokeStatus,
  };
  // Prepare the PUT request
  return fetch(`http://localhost:8088/jokes/${jokeObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeStatusState),
  }).then((response) => response.json());
  // returns a copy of the object that was changed at that URL
};

export const deleteJoke = (jokeIndex) => {
  return fetch(`http://localhost:8088/jokes/${jokeIndex}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
