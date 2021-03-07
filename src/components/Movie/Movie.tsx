import { createStyles, makeStyles, Theme, Box, Container, Typography, Grid } from '@material-ui/core';
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
      position: 'relative',
    },
    img: {
      width: '100%',
      height: 'auto',
    },
    overlayDiv: {
      // '&::after': {
      //   content: "",
      //   background: 'black',
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   width: '100%',
      //   height: '100%',
      //   opacity: 0.5
      // },
      position: 'absolute',
      bottom: 0,
      height: '35%',
      width: '75%',
      textAlign: 'center',
      background: 'rgba(255,255,255,0.5)',
      padding: 10,
      backdropFilter: 'blur(5px)'
      // color: 'black',
      // display: 'inherit',
      // background:
      //   'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      // background: 'rgba(0, 0, 0, 0.4)', /* Black see-through */
      // backgroundColor: 'white',
      // opacity: 0.5,
      // opacity: 0,
      // color: 'white',
      // transition: '.5s ease',
    },
    movieTitle: {
      fontWeight: 'bold',
    },
    containerSubDetail: {
      gap: '2em',
      paddingLeft: '0.75em',
    },
    textSubDetail: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.pxToRem(18),
    },
    containerMainDetail: {
      paddingLeft: '0.75em',
      top: '9rem',
      position: 'absolute',
    },
    textMainDetail: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(20),
      textAlign: 'justify'
    },
    innerContainer: {
      position: 'relative',
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

  const getRunTime = () => {
    const hrs = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;

    return `${hrs}hr ${minutes}min`;
  };

  const getGenres = () => {
    return movie.genres.map((genre) => {
      return genre.name;
    }).join(', ');
  };

  const getDate = () => {
    const date = new Date(movie.release_date);
    return date.toDateString();
  };

  return (
    <Box display="flex" className={classes.root}>
      <Box className={classes.imgContainer}>
        <img src={`${url}/${movie.backdrop_path}`} alt="sample" className={classes.img} />
        <Box display="flex" className={classes.overlayDiv}>
          <Grid container direction="column" id="detail-container">
            <Grid item xs={6}>
              <div className={classes.innerContainer}>
                <Typography variant="h2" className={classes.movieTitle}>
                  {movie.title} ({movie.release_date.split('-')[0]})
                </Typography>
                <Box display="flex" className={classes.containerSubDetail}>
                  <Typography className={classes.textSubDetail}>
                    {getRunTime()}
                  </Typography>|
                <Typography className={classes.textSubDetail}>
                    {getGenres()}
                  </Typography>|
                <Typography className={classes.textSubDetail}>
                    {getDate()}
                  </Typography>
                </Box>
                <Box className={classes.containerMainDetail}>
                  <Typography className={classes.textMainDetail}>
                    {movie.overview}
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.detailArea}>
        <Casts casts={movieCasts} />
      </Box>
    </Box >
  )
}

export default Movie;
