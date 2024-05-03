import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  jobTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  companyInfo: {
    marginBottom: 4,
    color: '#666',
  },
  jobDescription: {
    marginBottom: 16,
    color: '#555',
  },
  applyButton: {
    backgroundColor: '#673ab7',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#512da8',
    },
  },
});
const JobCard = ({ job }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.jobTitle}>
            {job.jobRole}
          </Typography>
          <Typography variant="body2" className={classes.companyInfo}>
            {job.location && `Location: ${job.location}`}
          </Typography>
          <Typography variant="body2" className={classes.companyInfo}>
            {job.minExp !== null && job.maxExp !== null && `Experience: ${job.minExp} - ${job.maxExp} years`}
          </Typography>
          <Typography variant="body2" className={classes.jobDescription}>
            {job.jobDetailsFromCompany}
          </Typography>
          <Typography variant="body2" className={classes.companyInfo}>
            {job.minJdSalary !== null && job.maxJdSalary !== null && `Salary: ${job.minJdSalary} - ${job.maxJdSalary} ${job.salaryCurrencyCode}`}
          </Typography>
          <Button variant="contained" color="primary" href={job.jdLink}>
            Apply
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobCard;
