import React from 'react'
import { createStyles, ListItemIcon, ListItemText, makeStyles, Theme, Button } from '@material-ui/core';
import { Drawer, Divider, List, ListItem } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TvIcon from '@material-ui/icons/Tv';
import FilterListIcon from '@material-ui/icons/FilterList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      position: 'relative',
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#2e2e2e',
      color: 'white',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    btnLogout: {
      backgroundColor: '#e5b31d',
      color: 'white',
      position: 'absolute',
      bottom: 50,
      right: 20,
      width: 200,
      borderRadius: 0,
      '&:hover': {
        backgroundColor: '#e5b31d',
      }
    },
    icon: {
      color: 'white',
    }
  });
});

const SideNav: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="Movies">
            <ListItemIcon><MovieIcon classes={{ root: classes.icon }} /></ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItem>
          <ListItem button key="Filter Genre">
            <ListItemIcon><FilterListIcon classes={{ root: classes.icon }} /></ListItemIcon>
            <ListItemText primary="Filter Genre" />
          </ListItem>
          <ListItem button key="Tv Shows">
            <ListItemIcon><TvIcon classes={{ root: classes.icon }} /></ListItemIcon>
            <ListItemText primary="Tv Shows" />
          </ListItem>
          <ListItem button key="Favorites">
            <ListItemIcon><FavoriteBorderIcon classes={{ root: classes.icon }} /></ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
        <Divider />
        <Button startIcon={<ExitToAppIcon />} variant="contained" className={classes.btnLogout}>Logout</Button>
      </Drawer>
    </>
  )
}

export default SideNav;
