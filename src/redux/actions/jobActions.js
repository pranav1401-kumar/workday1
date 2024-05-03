// actions.js
import * as actionTypes from '../actionTypes';

export const fetchJobListingsRequest = () => ({
  type: actionTypes.FETCH_JOB_LISTINGS_REQUEST,
});

export const fetchJobListingsSuccess = (jobListings) => ({
  type: actionTypes.FETCH_JOB_LISTINGS_SUCCESS,
  payload: jobListings,
});

export const fetchJobListingsFailure = (error) => ({
  type: actionTypes.FETCH_JOB_LISTINGS_FAILURE,
  payload: error,
});

export const updateFilters = (filters) => ({
  type: actionTypes.UPDATE_FILTERS,
  payload: filters,
});

export const fetchJobListings = (limit, offset) => {
  return async (dispatch) => {
    dispatch(fetchJobListingsRequest());
    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit, offset }),
      });
      const data = await response.json();
      dispatch(fetchJobListingsSuccess(data.jdList));
    } catch (error) {
      dispatch(fetchJobListingsFailure(error.message));
    }
  };
};