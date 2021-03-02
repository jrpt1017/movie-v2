import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Cast } from '../../types/movieTypes'

interface ICasts {
  casts: Cast[],
}
const url = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  });
})

const Casts: React.FC<ICasts> = ({ casts }: ICasts) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    </div>
  )
}

export default Casts;
