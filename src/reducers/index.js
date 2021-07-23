import {
  ADD_NEW_ELECTION,
  IS_FETCHING_ELECTION,
  RECIEVE_ELECTIONS,
  ADD_VOTER,
  REQUEST_VOTERS,
} from "../actions.js";

function getCreateDate() {
  return new Date()
    .toLocaleString()
    .split(/\D/)
    .slice(0, 3)
    .map((num) => num.padStart(2, "0"))
    .join("/");
}

let intialState = {
  voters: [],
  elections: [],
  isFetchingElection: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_VOTER:
      return {
        ...state,
      };
    case REQUEST_VOTERS:
      return {
        ...state,
      };
    case IS_FETCHING_ELECTION:
      return {
        ...state,
        isFetchingElection: action.status,
      };
    case RECIEVE_ELECTIONS:
      return {
        ...state,
        elections: [...action.elections],
      };
    case ADD_NEW_ELECTION:
      let question_list = action.questions.map((q, index) => ({
        id: index + 1,
        title: q,
        yes: 0,
        no: 0,
      }));

      let election = {
        id:
          state.elections.length === 0
            ? 1
            : Math.max(...state.elections.map((c) => c.id)) + 1,
        createdAt: getCreateDate(),
        title: action.title,
        questions: question_list,
      };
      return {
        ...state,
        elections: [...state.elections, election],
      };
    default:
      return state;
  }
};

export default reducer;
