import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core';
import { dispatchGetDiscoverMovies } from '../../redux/actions/movieActions';
import { IAppState } from '../../redux/store';
import { IMovie } from '../../redux/reducers/movieReducer';
import MovieCard from '../MovieCard/MovieCard';
import SideNav from '../SideNav/SideNav';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    paginationRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 40,
      paddingBottom: 20,
    },
    rounded: {
      color: 'white',
      backgroundColor: '#e5b31d',
      '&:hover': {
        backgroundColor: '#e5b31d',
      },
    },
    ellipsis: {
      color: 'white',
    },
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
      <div className={classes.root}>
        <SideNav />
        <div className={classes.wrapper}>
          {movies.map((movie: IMovie) => {
            return (
              <React.Fragment key={movie.id}>
                <MovieCard {...movie} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <div className={classes.paginationRoot}>
        <Pagination
          count={500}
          boundaryCount={3}
          variant="outlined"
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              color="primary"
              classes={{ rounded: classes.rounded, ellipsis: classes.ellipsis }}
              // component={Link}
              // to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </>
  )
};

export default Dashboard;