import React from 'react';
import { default as IntrumentCollectionPage } from '../Instruments/instruments.container';
import { Route, Switch } from 'react-router-dom';
import Lessons from '../lessons/lessons.component';
import Specials from '../specials/specials.component';
import HomePage from '../homepage/homepage.component';

const Routes = () => (
    <Switch>
        <Route 
            exact
            path='/'
            render={() => <HomePage /> }
        />
        <Route 
            exact
            path='/instruments' 
            render={() => <IntrumentCollectionPage /> }
        />
        <Route 
            exact
            path='/lessons' 
            render={() => <Lessons /> }
        />
         <Route 
            exact
            path='/specials' 
            render={() => <Specials /> }
        />
    </Switch>


)

export default Routes;