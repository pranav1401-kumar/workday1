import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../redux/actions/jobActions';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filterBar: {
    marginBottom: theme.spacing(2),
  },
  filterInput: {
    marginRight: theme.spacing(2),
    width: 200,
  },
  applyFiltersButton: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const FilterBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: '',
  });

  const handleFilterChange = useCallback((event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }, []);

  const handleApplyFilters = () => {
    dispatch(updateFilters(filters));
  };

  return (
    <div className={classes.filterBar}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            name="minExperience"
            label="Minimum Experience"
            type="number"
            value={filters.minExperience}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <TextField
            name="companyName"
            label="Company Name"
            value={filters.companyName}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <TextField
            name="location"
            label="Location"
            value={filters.location}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <TextField
            name="techStack"
            label="Tech Stack"
            value={filters.techStack}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <TextField
            name="role"
            label="Role"
            value={filters.role}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <TextField
            name="minBasePay"
            label="Minimum Base Pay"
            type="number"
            value={filters.minBasePay}
            onChange={handleFilterChange}
            className={classes.filterInput}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            className={classes.applyFiltersButton}
          >
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FilterBar;
