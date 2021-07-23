export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const ADD_NEW_ELECTION = "ADD_NEW_ELECTION";
export const RECIEVE_ELECTIONS = "RECIEVE_ELECTIONS";
export const IS_FETCHING_ELECTION = "IS_FETCHING_ELECTION";

export const requestVoters = () => {
  return {
    type: REQUEST_VOTERS,
  };
};

export const createAddNewElection = (status) => {
  return {
    type: ADD_NEW_ELECTION,
    status,
  };
};

export const createRecieveElections = (elections) => {
  return {
    type: RECIEVE_ELECTIONS,
    elections,
  };
};

export const createIsFetichingElection = (status) => {
  return {
    type: IS_FETCHING_ELECTION,
    status,
  };
};
