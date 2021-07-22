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
  return new Date().toLocaleString().split(/\D/).slice(0,3).map(num=>num.padStart(2,"0")).join("/")
}

let getVoters = function () {
  return fetch(enpointURL + "/voters")
  .then(checkHttpStatus)
  .then((res) => res.json());
};

let getElections = function () {
  return fetch(enpointURL + "/elections")
  .then(checkHttpStatus)
  .then((res) => res.json());
};

let getElectionById = function (id) {
  return fetch(enpointURL + "/elections/" + id)
  .then(checkHttpStatus)
  .then((res) => res.json());
};

let createElections = function (voterId, title, questions) {
  let question_list = questions.map((q, index) => ({
    "id": index+1,
    "title": q,
    "yes": 0,
    "no": 0
  }))
  let election = {
    "voterId": voterId,
    "createdAt": getCreateDate(),
    "title": title,
    "questions": question_list
  }
  return fetch(enpointURL + "/elections", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(election)
  })
  .then(checkHttpStatus)
  .then((res) => res.json())
};

export { getVoters, getElections, createElections };
