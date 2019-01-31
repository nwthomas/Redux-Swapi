import {
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_PEOPLE_STARTED:
      return { ...state, fetching: true, error: "" };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        fetching: false,
        error: ""
      };
    case FETCH_PEOPLE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
