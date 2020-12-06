import React from 'react';
import {
  createStyles, makeStyles, Theme, Typography, Grid, Button, Chip
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
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
    },
    chip: {
      backgroundColor: '#e5b31d',
      color: 'white',
    },
    title: {
      fontSize: '1rem',
    },
  });
});

const MovieCard: React.FC<IMovie> = (props: IMovie) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.grid}
        direction="row"
      >
        <Grid item xs={6}>
          <img src={`${url}/${props.poster_path}`} className={classes.img} alt={props.title} />
        </Grid>
        <Grid item xs={6} className={classes.movieDetails}>
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="subtitle1">{props.release_date.split('-')[0]}</Typography>
              <Typography variant="h6" className={classes.title}>{props.title}</Typography>
              <Rating name="read-only" value={props.vote_average / 2} readOnly precision={0.5} size="small" />
            </Grid>
            <Grid item xs={3}>
              <Chip className={classes.chip} label={props.adult ? 'PG-18' : 'PG-13'} />
            </Grid>
          </Grid>
          <div className={classes.overview}>
            <Typography variant="body2">{props.overview}</Typography>
          </div>
          <Button className={classes.button}>
            <Typography variant="caption">View Details</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default MovieCard;