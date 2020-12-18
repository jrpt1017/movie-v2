import React, { useEffect } from 'react'
import { createStyles, ListItemIcon, ListItemText, makeStyles, Theme, Button } from '@material-ui/core';
import { Drawer, Divider, List, ListItem } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TvIcon from '@material-ui/icons/Tv';
import FilterListIcon from '@material-ui/icons/FilterList';
import { getGenres } from '../../service/movies/movieService';
import { IGenre } from '../../types/movie';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

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
    },
    collapse: {
      paddingBottom: 0,
      paddingTop: 0,
      marginLeft: 71,
      display: 'flex',
    }
  });
});

const SideNav: React.FC<{}> = () => {
  const classes = useStyles();
  const [showList, setShowList] = React.useState(false);
  const [genreList, setGenreList] = React.useState<IGenre[] | undefined>([{
    id: 1,
    name: 'Action'
  }]);

  useEffect(() => {
    const list = async () => {
      const genres = await getGenres();
      setGenreList(genres || []);
    };
    list();
  }, []);
  console.log(genreList);

  const handleOnClick = () => {
    setShowList(!showList);
  };

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
          <ListItem button key="Filter Genre" onClick={handleOnClick}>
            <ListItemIcon><FilterListIcon classes={{ root: classes.icon }} /></ListItemIcon>
            <ListItemText primary="Filter Genre" />
          </ListItem>
          <Collapse in={showList} timeout="auto" className={classes.collapse}>
            {genreList?.length !== 0 && genreList!.map((genre: IGenre) => {
              return (
                <React.Fragment key={genre.id}>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label={genre.name}
                    />
                  </FormGroup>
                </React.Fragment>
              )
            })}
          </Collapse>
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
