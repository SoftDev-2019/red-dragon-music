import React from 'react';
import { default as IntrumentCollectionPage } from '../Instruments/instruments.container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Lessons from '../lessons/lessons.component';
import Specials from '../specials/specials.component';
import HomePage from '../homepage/homepage.component';

const Routes = () => (
    <Switch>
        <Route 
            exact='true'
            path='/'
            render={() => <HomePage /> }
        />
        <Route 
            exact='true'
            path='/instruments' 
            render={() => <IntrumentCollectionPage /> }
        />
        <Route 
            exact='true' 
            path='/lessons' 
            render={() => <Lessons /> }
        />
         <Route 
            exact='true' 
            path='/specials' 
            render={() => <Specials /> }
        />
    </Switch>


)

export default Routes;