import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Dashboard from './components/Dashboard/Dashboard';
import MainHeader from './components/MainHeader/MainHeader';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      backgroundColor: '#343434',
      minHeight: '100vh',
      color: 'white',
    }
  });
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MainHeader />
      <Switch>
        <Route exact path="/"
          render={() => {
            return <Redirect to="/movies" />
          }}
        />
        <Route path="/movies" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
