import { createStyles, makeStyles, Theme, Box, Container, } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dispatchGetMovieCasts, dispatchGetMovieDetail, togglePageLoading } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';
import Casts from './Casts';

interface IMovie {
  id: string
}
const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    detailArea: {
      display: 'flex',
    },
    imgContainer: {
      display: 'flex',
      marginTop: 24,
    },
    img: {
      width: '100%',
      height: 'auto',
    },
  });
})

const Movie: React.FC<{}> = () => {
  const { id } = useParams<IMovie>();
  const classes = useStyles();
  const dispatch = useDispatch();
  const movie = useSelector((state: IAppState) => { return state.movies.movieDetail; });
  const movieCasts = useSelector((state: IAppState) => { return state.movies.movieDetail.casts?.cast; });

  useEffect(() => {
    dispatch(togglePageLoading(true));
    dispatchGetMovieDetail(id);
    dispatchGetMovieCasts(id);
    dispatch(togglePageLoading(false));
  }, [id, dispatch]);

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <img src={`${url}/${movie.backdrop_path}`} alt="sample" className={classes.img} />
      </Box>
      <Box className={classes.detailArea}>
        <Casts casts={movieCasts} />
      </Box>
    </Box >
  )
}

export default Movie;
