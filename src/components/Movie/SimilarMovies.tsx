import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, Grid, Box, Typography, Chip, Card, CardContent } from '@material-ui/core';
import { IAppState } from '../../redux/store';
import { ISimilarMovie, ISimilarMovieItem } from '../../types/movieTypes';

const url = 'https://image.tmdb.org/t/p/w185';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    movieItem: {
      // padding: 100,
      // backgroundColor: 'lightblue'
    },
    root: {
      flexDirection: 'column',
      marginLeft: 24,
    },
    movieContainer: {
      flexWrap: 'wrap',
      gap: '16px',
      marginTop: 10,
    },
    image: {
      borderRadius: 16,
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
  })
})

interface ISimilarMovieComponent {
  movies: ISimilarMovieItem[],
}

const SimilarMovies: React.FC<ISimilarMovieComponent> = ({ movies }: ISimilarMovieComponent) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box display="flex" className={classes.root}>
        <Box display="flex">
          <Typography gutterBottom className={classes.title}>{movies.length === 0 ? 'No similar movies found' : 'Similar movies'}</Typography>
        </Box>
        <Box display="flex" className={classes.movieContainer}>
          {movies.slice(0, 4).map((item: ISimilarMovieItem) => {
            return (
              <React.Fragment key={item.id}>
                <Link to={`/movie/${item.id}`}>
                  <Box display="flex" className={classes.movieItem}>
                    <img src={`${url}/${item.poster_path}`} alt={item.id.toString()} className={classes.image} />
                  </Box>
                </Link>
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default SimilarMovies;