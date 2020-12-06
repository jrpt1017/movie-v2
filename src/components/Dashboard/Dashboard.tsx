import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  Container, createStyles, makeStyles, Theme, Typography, Card, Grid, Paper
} from '@material-ui/core';

import { dispatchGetDiscoverMovies } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';
import { IMovie } from '../../redux/reducers/movieReducer';

const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    grid: {
      backgroundColor: '#1c1d20',
      width: '25%',
      height: 'auto',
      margin: 8,
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    movieDetails: {
      padding: 15,
    },
    overview: {
      height: '18em',
      backgroundColor: 'lightblue',
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
      <div className={classes.wrapper}>
        {movies.map((movie: IMovie, index: number) => {
          return (
            <React.Fragment key={index}>
              <Grid
                container
                className={classes.grid}
                direction="row"
              >
                <Grid item xs={6}>
                  <img src={`${url}/${movie.poster_path}`} className={classes.img} alt={movie.title} />
                </Grid>
                <Grid item xs={6} className={classes.movieDetails}>
                  <Typography variant="h5">{movie.title}</Typography>
                  <Typography variant="subtitle1">{movie.release_date}</Typography>
                  <div className={classes.overview}>
                    <Typography variant="subtitle2">{movie.overview}</Typography>
                  </div>
                </Grid>
              </Grid>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
};

export default Dashboard;