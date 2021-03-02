import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dispatchGetMovieDetail } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';

interface IMovie {
  id: string
}
const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    detailArea: {
      display: 'flex',
    }
  });
})

const Movie: React.FC<{}> = () => {
  const { id } = useParams<IMovie>();
  const classes = useStyles();
  const movie = useSelector((state: IAppState) => { return state.movies.movieDetail; });
  useEffect(() => {
    const callMe = async () => {
      await dispatchGetMovieDetail(id);
    };
    callMe();
  }, [id]);

  return (
    <div className={classes.root}>
      <div>
        <img src={`${url}/${movie.backdrop_path}`} alt="sample" />
      </div>
      <div className={classes.detailArea}>
        sample
      </div>
    </div>
  )
}

export default Movie;
