import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  createStyles, makeStyles, Theme, Typography, AppBar, IconButton, InputBase, Toolbar, fade, List, ListItem, Divider
} from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { RouteTypes } from '../../types/routeTypes';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'absolute',
      right: '7rem',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    appbar: {
      backgroundColor: '#2a2a2a',
      position: 'relative',
    },
    menuList: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  });
})

const MainHeader: React.FC<{}> = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnclick = (routeType: RouteTypes) => {
    history.push(routeType)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <List component="nav" className={classes.menuList}>
            <ListItem button onClick={() => { return handleOnclick(RouteTypes.MOVIES) }}>Movies</ListItem>
            <Divider />
            <ListItem button onClick={() => { return handleOnclick(RouteTypes.FAVORITES) }} > Favorites</ListItem>
          </List>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search movie…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
};

export default MainHeader;