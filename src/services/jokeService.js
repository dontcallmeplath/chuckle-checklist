export const postNewJoke = (state) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(state),
  };
  return fetch("http://localhost:8088/jokes", postOptions).then((res) =>
    res.json()
  );
};
