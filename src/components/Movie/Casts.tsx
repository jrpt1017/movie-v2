import { Box, createStyles, Grid, GridList, makeStyles, Theme, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Cast } from '../../types/movieTypes'

interface ICasts {
  casts: Cast[],
}
const url = 'https://image.tmdb.org/t/p/w185';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 24,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    container: {
      gap: '1rem',
      overflow: 'auto',
      maxWidth: '100rem',
      flexWrap: 'nowrap',
    },
    items: {
      position: 'relative',
      backgroundColor: 'black',
      '&:hover $imgTile': {
        opacity: 1,
      }
    },
    castImg: {
      height: '13rem',
    },
    hehe: {
      flexDirection: 'column'
    },
    imgTile: {
      position: 'absolute',
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)', /* Black see-through */
      color: '#f1f1f1',
      width: '-webkit-fill-available',
      transition: '.5s ease',
      opacity: 0,
      padding: 20,
      textAlign: 'center',
      display: 'inherit',
      cursor: 'pointer',
    },
  });
});



const Casts: React.FC<ICasts> = ({ casts }: ICasts) => {

  const [isHover, setHover] = React.useState(false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" className={classes.hehe}>
        <Typography variant="h5">Casts</Typography>
        <Grid container className={classes.container}>
          {casts && casts.map((cast) => {
            return cast.profile_path !== null ? (
              <Grid
                item
                className={classes.items}
                onMouseEnter={() => { return setHover(true) }}
                onMouseLeave={() => { return setHover(false) }}
              >
                <img src={`${url}/${cast.profile_path}`} alt="hrhr" className={classes.castImg} />
                <Box display="flex" className={classes.imgTile}>
                  {`${cast.name} as ${cast.character}`}
                </Box>
              </Grid>
            ) : null;
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default Casts;
