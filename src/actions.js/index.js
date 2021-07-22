export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const ADD_NEW_ELECTION = "ADD_NEW_ELECTION";

export const requestVoters = () => {
  return {
    type: REQUEST_VOTERS,
  };
};

export const createAddNewElection = (title, questions) => {
  return {
    type: ADD_NEW_ELECTION,
    title,
    questions,
  };
};
