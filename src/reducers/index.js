import {
  ADD_NEW_ELECTION,
  IS_FETCHING_ELECTION,
  RECIEVE_ELECTIONS,
  RECEIVE_VOTERS,
  IS_FETCHING_VOTERS,
  ADD_VOTER,
} from "../actions.js";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

let intialState = {
  voters: [],
  elections: [],
  isFetchingElection: false,
  addingNewElection: false,
  addingNewVoter: false,
};

const appState = (state = intialState, action) => {
  switch (action.type) {
    case ADD_VOTER:
      return {
        ...state,
        addingNewVoter: action.status,
      };
    case RECEIVE_VOTERS:
      return {
        ...state,
        voters: [...action.voters],
      };
    case IS_FETCHING_VOTERS:
      return {
        ...state,
        isFetchingElection: action.status,
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
