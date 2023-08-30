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

export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((res) => res.json());
};
