// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobListings } from '../src/redux/actions/jobActions';
import JobList from './components/JobList';
import FilterBar from './components/Filters';


const App = () => {
  const dispatch = useDispatch();
  const { jobListings, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobListings(10, 0));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FilterBar />
      <JobList jobListings={jobListings} />
    </div>
  );
};

export default App;