import { createStyles, makeStyles, Theme } from '@material-ui/core';
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
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 24,
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
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img src={`${url}/${movie.backdrop_path}`} alt="sample" />
      </div>
      <div className={classes.detailArea}>
        <Casts casts={movieCasts} />
      </div>
    </div >
  )
}

export default Movie;
