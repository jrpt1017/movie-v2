import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { dispatchGetDiscoverMovies } from '../../redux/actions/movieActions';


const Dashboard: React.FC<{}> = () => {

  useEffect(() => {
    dispatchGetDiscoverMovies();
  }, []);

  return (
    <>
      <Typography>Sample</Typography>
    </>
  )
};

export default Dashboard;