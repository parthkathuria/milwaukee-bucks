import * as service from "../services/FetchService.js";
import { useDispatch, useSelector } from "react-redux";

export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const ADD_NEW_ELECTION = "ADD_NEW_ELECTION";
<<<<<<< HEAD
export const RECIEVE_ELECTIONS = "RECIEVE_ELECTIONS";
export const IS_FETCHING_ELECTION = "IS_FETCHING_ELECTION";
=======
export const ADD_VOTER = "ADD_VOTER";

const dispatch = useDispatch;
>>>>>>> origin/rj-branch

export const requestVoters = (voters) => {
  return {
    type: REQUEST_VOTERS,
    voters,
  };
};

export const addVoter = () => {
  return {
    type: ADD_VOTER,
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

export const fetchVoters = () => () => {
  dispatch(requestVoters());
  service.getVoters();
  console.log("here");
};
