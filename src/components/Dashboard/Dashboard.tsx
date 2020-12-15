import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core';
import { dispatchGetDiscoverMovies } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';
import { IMovie } from '../../redux/reducers/movieReducer';
import MovieCard from '../MovieCard/MovieCard';
import SideNav from '../SideNav/SideNav';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
  });
});

const Dashboard: React.FC<{}> = () => {
  const classes = useStyles();
  const movies = useSelector((state: IAppState) => { return state.movies.movies; });

  useEffect(() => {
    dispatchGetDiscoverMovies();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <SideNav />
        <div className={classes.wrapper}>
          {movies.map((movie: IMovie) => {
            return (
              <MovieCard {...movie} />
            )
          })}
        </div>
      </div>
    </>
  )
};

export default Dashboard;