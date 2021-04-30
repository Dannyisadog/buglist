require('./bootstrap');

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/HomePage';
import BuglistPage from './components/BuglistPage';

const App = () => {
    return (
        <Router>
            <div>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/buglist">
                            <BuglistPage />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));