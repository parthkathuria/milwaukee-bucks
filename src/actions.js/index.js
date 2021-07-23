import * as service from "../services/FetchService.js";
import { useDispatch, useSelector } from "react-redux";

export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const ADD_NEW_ELECTION = "ADD_NEW_ELECTION";
export const ADD_VOTER = "ADD_VOTER";

const dispatch = useDispatch;

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

export const createAddNewElection = (title, questions) => {
  return {
    type: ADD_NEW_ELECTION,
    title,
    questions,
  };
};

export const fetchVoters = () => () => {
  dispatch(requestVoters());
  service.getVoters();
  console.log("here");
};
