import axios from "axios";
export const FETCH_PEOPLE_STARTED = "FETCH_PEOPLE_STARTED";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_ERROR = "FETCH_PEOPLE_ERROR";

export const getPeople = people => dispatch => {
  dispatch({ type: FETCH_PEOPLE_STARTED });
  return axios
    .get(`https://swapi.co/api/people/`)
    .then(({ data }) => {
      dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PEOPLE_ERROR, payload: err });
    });
};
