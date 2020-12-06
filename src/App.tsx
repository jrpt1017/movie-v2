import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import Dashboard from './components/Dashboard/Dashboard';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      color: 'white',
    }
  });
});

const App = () => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.container}>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Container>
  );
}

export default App;
