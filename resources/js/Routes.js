import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import ItemList from './components/ItemList';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/itemList' component={ItemList} />
        </Switch>
    );
}

export default Routes;