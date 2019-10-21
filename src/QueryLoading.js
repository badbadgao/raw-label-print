import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  placeholder: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
});

const QueryLoading = ({queryStatus}) => {
  const classes = useStyles();

  const getFadeComponent = (status) => {
    if(status === 'progress') {
      return (
        <Fade
          key='1'
          in={queryStatus === 'progress'}
          timeout={{enter: 800}}
        >
        <CircularProgress />
      </Fade>
      )
    }
    else if(status ==='success') {
      return (
          <Fade
            key="2"
            in={queryStatus === 'success'}
            timeout={{exit: 2500}}
          >
            <Typography>Success!</Typography>
          </Fade>
      )
    }
    else {
      return (<></>)
    }
  }
 
  return (
    <div className={classes.placeholder}>
      {getFadeComponent(queryStatus)}
    </div>
  )
};

export default QueryLoading;