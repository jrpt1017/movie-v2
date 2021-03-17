import React from 'react';
import { Box, createStyles, Grid, GridList, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: '#00000075',
      height: '5rem',
      alignItems: 'center',
      position: 'relative',
      clear: 'both',
      bottom: 0,
    },
    footerText: {
      margin: 'auto',
    }
  })
});

const Footer: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.root}>
        <Typography className={classes.footerText}>Developed by Jonnel Tolosa.</Typography>
      </Box>
    </>
  );
};

export default Footer;