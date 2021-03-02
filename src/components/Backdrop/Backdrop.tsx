import React from 'react';
import { Backdrop as MuiBackdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IAppState } from '../../redux/store/index';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const Backdrop = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const isLoading = useSelector((state: IAppState) => { return state.backdrop.isPageLoading; });

  return (
    <>
      <MuiBackdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </MuiBackdrop>
    </>
  );
}

export default Backdrop;
