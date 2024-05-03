
import * as actionTypes from '../actionTypes';

const initialState = {
  jobListings: [],
  filters: {
    minExperience: null,
    companyName: null,
    location: null,
    remote: null,
    techStack: null,
    role: null,
    minBasePay: null,
  },
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOB_LISTINGS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_JOB_LISTINGS_SUCCESS:
      return { ...state, jobListings: action.payload, isLoading: false };
    case actionTypes.FETCH_JOB_LISTINGS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case actionTypes.UPDATE_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;