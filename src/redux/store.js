// store.js
import { createStore, applyMiddleware } from 'redux';
import{ thunk } from 'redux-thunk';
import rootReducer from '../redux/reducers/jobReducer';

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

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;