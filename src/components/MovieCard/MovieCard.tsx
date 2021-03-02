import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createStyles, makeStyles, Theme, Typography, Grid, Button, Chip
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { IMovie } from '../../redux/reducers/movieReducer';
import FavEmpty from '@material-ui/icons/FavoriteBorder';
import FavFilled from '@material-ui/icons/Favorite';
import { IAppState } from '../../redux/store';
import { addToFavorites, dispatchGetMovieDetail, removeFromFavorites } from '../../redux/actions/movieActions';

const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      backgroundColor: '#2e2e2e',
      width: 450,
      height: 'auto',
      margin: 8,
      position: 'relative',
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
      backgroundColor: '#262626',
      borderRadius: 0,
      width: 130,
    },
    chip: {
      backgroundColor: '#e5b31d',
      color: 'white',
    },
    title: {
      fontSize: '1rem',
    },
    btnGroup: {
      position: 'absolute',
      display: 'flex',
      bottom: 10,
    },
    favIcon: {
      color: 'white',
      backgroundColor: '#262626',

    },
  });
});

const MovieCard: React.FC<IMovie> = (props: IMovie) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const favorites = useSelector((state: IAppState) => { return state.movies.favorites });

  const handleFavoriteOnClick = (movieId: number) => {
    favorites.includes(movieId) ? dispatch(removeFromFavorites(movieId)) : dispatch(addToFavorites(movieId));
  };

  const getIcon = (id: number) => {
    return favorites.includes(id) ? (
      <FavFilled fontSize="inherit" />
    ) :
      <FavEmpty fontSize="inherit" />
  };

  const handleMovieOnClick = async (movieId: number) => {
    await dispatchGetMovieDetail(String(movieId));
    history.push(`/movie/${movieId}`);
  };

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.card}
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
              <Typography component="span">
                <Rating name="read-only" value={props.vote_average / 2} readOnly precision={0.5} size="small" />
                {props.vote_average}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Chip size="small" className={classes.chip} label={props.adult ? 'PG-18' : 'PG-13'} />
            </Grid>
          </Grid>
          <div className={classes.overview}>
            <Typography variant="body2">{props.overview}</Typography>
          </div>
          <div className={classes.btnGroup}>
            <Button aria-label="delete" size="small" className={classes.favIcon} onClick={() => { return handleFavoriteOnClick(props.id); }}>
              {getIcon(props.id)}
            </Button>
            <Button className={classes.button} onClick={() => { return handleMovieOnClick(props.id); }}>
              <Typography variant="caption">View Details</Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default MovieCard;