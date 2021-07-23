const enpointURL = "http://localhost:3001";
unction checkHttpStatus(response) {
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
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch(e => console.error(e));
};

let createVoter = function (firstName, lastName, address, city, birthDate, email, phone) {
  let voter = {
    "firstName": firstName,
    "lastName": lastName,
    "address" : address,
    "city" :  city,
    "birthDate" : birthDate,
    "email" : email,
    "phone" :phone
  }
  return fetch(enpointURL + "/voters", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(voter)
  })
  .then(checkHttpStatus)
  .then((res => res.json())
  );
};

let editVoter = function (id, firstName, lastName, address, city, birthDate, email, phone) {
  let voter = {
    "firstName": firstName,
    "lastName": lastName,
    "address" : address,
    "city" :  city,
    "birthDate" : birthDate,
    "email" : email,
    "phone" :phone
  }
  return fetch(enpointURL + "/voters/" + id , {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(voter)
  })
  .then(checkHttpStatus)
  .then((res => res.json())
  );
};


let getElections = function () {
  return fetch(enpointURL + "/elections")
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
    "voterList" :[],
    "createdAt": getCreateDate(),
    "title": title,
    "questions": questiobn_list
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

export { getVoters, getElections, createElections, createVoter, editVoter };

