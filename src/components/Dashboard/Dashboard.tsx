import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  createStyles, makeStyles, Theme, Typography, Grid, Button
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { dispatchGetDiscoverMovies } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';
import { IMovie } from '../../redux/reducers/movieReducer';

const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    grid: {
      backgroundColor: '#2e2e2e',
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
      position: 'relative',
    },
    overview: {
      height: '10em',
      overflow: 'hidden',
    },
    button: {
      color: 'white',
      width: '90%',
      position: 'absolute',
      bottom: 10,
      right: 0,
      left: 0,
      margin: 'auto',
      backgroundColor: '#262626',
      borderRadius: 0,
    }
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
                  <Rating name="read-only" value={movie.vote_average / 2} readOnly precision={0.5} />
                  <div className={classes.overview}>
                    <Typography variant="subtitle2">{movie.overview}</Typography>
                  </div>
                  <Button className={classes.button}>View Details</Button>
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