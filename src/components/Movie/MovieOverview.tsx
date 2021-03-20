import { createStyles, makeStyles, Theme, Grid, Box, Typography, Chip } from '@material-ui/core';
import React from 'react';
import { IMovieDetail } from '../../types/movieTypes';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    mainGrid: {
      marginTop: 24,
    },
    leftMainGrid: {
    },
    rightMainGrid: {
      backgroundColor: 'yellow',
    },
    overviewTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    overviewText: {
      fontSize: '1.25em',
      color: '#d0d0d0',
      marginTop: 16,
      lineHeight: '32px',
    },
    chipText: {
      color: '#303030',
      fontSize: '0.80em',
      fontWeight: 'bold',
      backgroundColor: '#e4b31e'
    },
    chipContainer: {
      gap: '0.75em',
      marginTop: 16,
    },
    label: {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontWeight: 'bold',
    },
    labelText: {
      color: '#d0d0d0',
      marginLeft: 24,
    },
    containerBlock: {
      marginTop: 24,
      padding: 10,
      backgroundColor: '#2a2a2a',
    },
    budgetText: {
      textAlign: 'center',
      fontSize: '2em',
      fontWeight: 'bold',
    },
    rightGridText: {
      lineHeight: '32px',
    }
  });
});

interface IMovieOverview {
  movie: IMovieDetail,
}

const MovieOverview: React.FC<IMovieOverview> = ({ movie }: IMovieOverview) => {
  const classes = useStyles();

  const getRunTime = () => {
    const hrs = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;

    return `${hrs}hr ${minutes}min`;
  };

  const getDate = () => {
    const date = new Date(movie.release_date);
    return date.toDateString();
  };

  return (
    <React.Fragment>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={8} className={classes.leftMainGrid}>
          <Typography className={classes.overviewTitle}>Overview</Typography>
          <Typography className={classes.overviewText}>{movie.overview}</Typography>
          <Grid container className={classes.chipContainer}>
            <Typography className={classes.label}>Genres: </Typography>
            {movie.genres.map((genre) => {
              return (
                <Grid item>
                  <Chip label={genre.name} variant="outlined" className={classes.chipText} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography className={`${classes.label} ${classes.rightGridText}`}>
            Release Date:
            <Typography component="span" className={classes.labelText}>
              {getDate()}
            </Typography>
          </Typography>
          <Typography className={`${classes.label} ${classes.rightGridText}`}>
            Runtime:
            <Typography component="span" className={classes.labelText}>
              {getRunTime()}
            </Typography>
          </Typography>
          <Typography className={`${classes.label} ${classes.rightGridText}`}>
            Budget:
            <Typography component="span" className={classes.labelText}>
              ${movie.budget}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment >
  );
};

export default MovieOverview;