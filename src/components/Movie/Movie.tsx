import { createStyles, makeStyles, Theme, Box, Container, Typography, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import MovieLengthIcon from '@material-ui/icons/AccessTime';
import BudgetIcon from '@material-ui/icons/AttachMoney';
import GradeIcon from '@material-ui/icons/Grade';
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
      paddingBottom: 100,
    },
    detailArea: {
      display: 'flex',
    },
    imgContainer: {
      display: 'flex',
      marginTop: 24,
      position: 'relative',
    },
    img: {
      width: '100%',
      height: 'auto',
    },
    overlayDiv: {
      position: 'absolute',
      bottom: 0,
      height: '26%',
      width: '75%',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.5)',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
      backdropFilter: 'blur(20px)',
    },
    movieTitle: {
      fontWeight: 'bold',
      fontSize: '2.5vw',
      color: '#2a2626',
    },
    containerSubDetail: {
      gap: '2em',
      paddingLeft: '0.75em',
    },
    textSubDetail: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.pxToRem(18),
      color: '#2a2626',
    },
    containerMainDetail: {
      paddingLeft: '0.75em',
      paddingTop: '1rem',
    },
    textMainDetail: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '1 vw',
      textAlign: 'justify',
      color: '#2a2626',
    },
    innerContainer: {
      position: 'relative',
      flexDirection: 'column',
    },
    vl: {
      height: '1.75rem',
      borderLeft: '1px solid',
    },
    parentContainer: {
      flexDirection: 'row',
    },
    icon: {
      fontSize: '7rem',
      color: '#2a2626'
    }
  });
})

const Movie: React.FC<{}> = () => {
  const { id } = useParams<IMovie>();
  const classes = useStyles();
  const dispatch = useDispatch();
  const movie = useSelector((state: IAppState) => { return state.movies.movieDetail; });
  const movieCasts = useSelector((state: IAppState) => { return state.movies.movieDetail.casts?.cast; });

  useEffect(() => {

    const populate = async () => {
      dispatch(togglePageLoading(true));
      await dispatchGetMovieDetail(id);
      await dispatchGetMovieCasts(id);
      dispatch(togglePageLoading(false));
    }
    populate();
  }, [id, dispatch]);

  const getRunTime = () => {
    const hrs = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;

    return `${hrs}hr ${minutes}min`;
  };

  const getGenres = () => {
    return movie.genres.map((genre) => {
      return genre.name;
    }).slice(0, 3).join(', ');
  };

  const getDate = () => {
    const date = new Date(movie.release_date);
    return date.toDateString();
  };

  return (
    <Box display="flex" className={classes.root}>
      <Box className={classes.imgContainer}>
        <img src={`${url}/${movie.backdrop_path}`} alt="sample" className={classes.img} />
      </Box>
      <Box className={classes.detailArea}>
        <Casts casts={movieCasts} />
      </Box>
    </Box >
  )
}

export default Movie;
