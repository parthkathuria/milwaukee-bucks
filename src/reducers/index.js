<<<<<<< HEAD
import {
  ADD_NEW_ELECTION,
  IS_FETCHING_ELECTION,
  RECIEVE_ELECTIONS,
} from "../actions.js";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
=======
import { ADD_NEW_ELECTION, ADD_VOTER, REQUEST_VOTERS } from "../actions.js";

function getCreateDate() {
  return new Date()
    .toLocaleString()
    .split(/\D/)
    .slice(0, 3)
    .map((num) => num.padStart(2, "0"))
    .join("/");
}
>>>>>>> origin/rj-branch

let intialState = {
  voters: [],
  elections: [],
  isFetchingElection: false,
  addingNewElection: false,
};

const appState = (state = intialState, action) => {
  switch (action.type) {
    case ADD_VOTER:
      return {
        ...state,
      };
    case REQUEST_VOTERS:
      return {
        ...state,
      };
    case ADD_NEW_ELECTION:
      return {
        ...state,
        addingNewElection: action.status,
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
    default:
      return state;
  }
};

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    appState,
  });

export default createRootReducer;
