import { useDispatch } from "react-redux";
import * as service from "../services/FetchService.js";

export const RECEIVE_VOTERS = "RECEIVE_VOTERS";
export const ADD_NEW_ELECTION = "ADD_NEW_ELECTION";
export const ADD_VOTER = "ADD_VOTER";
export const IS_FETCHING_VOTERS = "IS_FETCHING_VOTERS";
export const DELETE_VOTER = "DELETE_VOTER";
export const DELETE_VOTERS = "DELETE_VOTERS";

const dispatch = useDispatch;
export const RECIEVE_ELECTIONS = "RECIEVE_ELECTIONS";
export const IS_FETCHING_ELECTION = "IS_FETCHING_ELECTION";

export const createAddNewVoter = (status) => {
  return {
    type: ADD_VOTER,
    status,
  };
};

export const setDeleteVoters = (status) => {
  return {
    type: DELETE_VOTERS,
    status,
  };
};

export const setDeleteVoter = (status) => {
  return {
    type: DELETE_VOTER,
    status,
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

export const createReceiveVoters = (voters) => {
  return {
    type: RECEIVE_VOTERS,
    voters,
  };
};

export const createIsFetichingVoters = (status) => {
  return {
    type: IS_FETCHING_VOTERS,
    status,
  };
};
