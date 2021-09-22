import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';

import TopBar from '../components/TopBar';
import Home from './Home';
import Register from './Regiser';
import Grader from '../components/Grader/index';
import Login from './Login';
import PlannerLogin from '../components/Login/PlannerLogin';
import Planner from '../components/Planner';
import Test from './Test';

export default function Routes({children}){
    let loggedIn = useSelector(state => state.account.loggedIn);
    return (
        <BrowserRouter>
            <Grid container direction="column">
                <Grid item>
                    {loggedIn && <TopBar />}
                </Grid>
                <Grid container item style={{height: `calc(100vh - ${loggedIn ? '57px' : '0vh'})`, backgroundColor: 'white'}}>
                    <Switch>
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/register"><Register /></Route>
                        <Route exact path="/grader"><Grader /></Route>
                        <Route exact path="/test"><Test /></Route>
                        <Route exact path="/home"><Home /></Route>
                        <Route exact path="/"><Login /></Route>
                        <Route exact path="/plannerLogin"><PlannerLogin /></Route>
                        <Route exact path="/planner"><Planner /></Route>
                    </Switch>
                </Grid>
            </Grid>
        </BrowserRouter>
    )
}