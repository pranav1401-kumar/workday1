// JobList.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobListings } from '../redux/actions/jobActions';
import JobCard from './JobCard';
import Button from '@material-ui/core/Button';
import '../../src/style.css';

const JobList = () => {
  const dispatch = useDispatch();
  const jobListings = useSelector((state) => state.jobListings);
  const filters = useSelector((state) => state.filters);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [offset, setOffset] = useState(0);
  const limit = 1000;

  const filteredJobListings = useMemo(() => {
    const {
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay,
    } = filters;

    return jobListings.filter((job) => {
      const isExperienceMatch =
        (minExperience === null || minExperience === '') ||
        (job.minExp !== null && job.minExp >= minExperience);
      const isCompanyNameMatch =
        (companyName === null || companyName === '') ||
        (job.location &&
          job.location.toLowerCase().includes(companyName.toLowerCase()));
      const isLocationMatch =
        (location === null || location === '') ||
        (job.location &&
          job.location.toLowerCase().includes(location.toLowerCase()));
      const isRemoteMatch =
        remote === null ||
        remote === '' ||
        (remote === 'remote' &&
          job.location &&
          job.location.toLowerCase() === 'remote') ||
        (remote === 'on-site' &&
          job.location &&
          job.location.toLowerCase() !== 'remote');
      const isTechStackMatch =
        (techStack === null || techStack === '') ||
        (job.jobRole &&
          job.jobRole.toLowerCase().includes(techStack.toLowerCase()));
      const isRoleMatch =
        (role === null || role === '') ||
        (job.jobRole && job.jobRole.toLowerCase().includes(role.toLowerCase()));
      const isBaseSalaryMatch =
        (minBasePay === null || minBasePay === '') ||
        (job.minJdSalary !== null && job.minJdSalary >= minBasePay);

      return (
        isExperienceMatch &&
        isCompanyNameMatch &&
        isLocationMatch &&
        isRemoteMatch &&
        isTechStackMatch &&
        isRoleMatch &&
        isBaseSalaryMatch
      );
    });
  }, [jobListings, filters]);

  useEffect(() => {
    if (jobListings.length === 0) {
      dispatch(fetchJobListings(limit, offset));
    }
  }, [dispatch, offset]);

  const loadMoreJobs = () => {
    setOffset(offset + limit);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cardContainer">
      {filteredJobListings.slice(0, offset + limit).map((job, index) => (
        <div key={job.jdUid} className="card">
          <JobCard job={job} />
        </div>
      ))}
      {offset + limit < filteredJobListings.length && (
        <Button variant="contained" color="primary" onClick={loadMoreJobs}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default JobList;