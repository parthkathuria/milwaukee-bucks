import {
  createIsFetichingElection,
  createRecieveElections,
} from "../actions.js";

const enpointURL = "http://localhost:3001";

function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
}

function getCreateDate() {
  return new Date()
    .toLocaleString()
    .split(/\D/)
    .slice(0, 3)
    .map((num) => num.padStart(2, "0"))
    .join("/");
}

let getVoters = function () {
  return fetch(enpointURL + "/voters")
    .then(checkHttpStatus)
    .then((res) => res.json());
};

let getVotersByEmail = function (email) {
  return fetch(enpointURL + "/voters?email=" + email)
    .then(checkHttpStatus)
    .then((res) => res.json());
};

let getElections = () => (dispatch) => {
  dispatch(createIsFetichingElection(true));
  return fetch(enpointURL + "/elections")
    .then(checkHttpStatus)
    .then((res) => res.json())
    .then((data) => {
      let recieveElectionAction = createRecieveElections(data);
      dispatch(recieveElectionAction);
    })
    .then(() => dispatch(createIsFetichingElection(false)));
};

let getElectionById = function (id) {
  return fetch(enpointURL + "/elections/" + id)
    .then(checkHttpStatus)
    .then((res) => res.json());
};

let createElections = function (title, questions) {
  let question_list = questions.map((q, index) => ({
    id: index + 1,
    title: q,
    yes: 0,
    no: 0,
  }));
  let election = {
    createdAt: getCreateDate(),
    title: title,
    questions: question_list,
  };
  return fetch(enpointURL + "/elections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(election),
  })
    .then(checkHttpStatus)
    .then((res) => res.json());
};

let deleteVoter = function (id) {
  return fetch(enpointURL + "/voters/" + id, {
    method: "DELETE",
  })
    .then(checkHttpStatus)
    .then((res) => res.json());
};

let deleteMultipleVoters = function (ids) {
  return Promise.all(
    ids.map((id) =>
      fetch(enpointURL + "/voters/" + id, {
        method: "DELETE",
      })
        .then(checkHttpStatus)
        .then((res) => res.json())
    )
  );
};

export {
  getVoters,
  getElections,
  createElections,
  getElectionById,
  deleteMultipleVoters,
  getVotersByEmail,
};
