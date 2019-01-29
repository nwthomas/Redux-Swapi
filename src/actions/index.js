import axios from "axios";
const FETCH_PEOPLE_STARTED = "FETCH_PEOPLE_STARTED";
const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
const FETCH_PEOPLE_ERROR = "FETCH_PEOPLE_ERROR";

export const getPeople = people => dispatch => {
  dispatch({ type: FETCH_PEOPLE_STARTED });
  return axios
    .get(`https://swapi.co/api/people/`)
    .then(({ data }) => {
      dispatch({ type: FETCH_PEOPLE_SUCCESS, data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PEOPLE_ERROR, err });
    });
};

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
