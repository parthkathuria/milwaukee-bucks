const enpointURL = "http://localhost:3001";

let getVoters = function () {
  return fetch(enpointURL + "/voters").then((res) => res.json());
};

export { getVoters };
