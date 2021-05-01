import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import BuglistPage from './components/BuglistPage';
import LoginPage from './components/LoginPage';
import useToken from './components/useToken';

const App = () => {

    const {token, setToken} = useToken();

    console.log(`token is ${token}`);

    if (!token) {
        return (
            <Router>
                <div>
                    <Layout>
                        <LoginPage setToken={setToken} />
                    </Layout>
                </div>
            </Router>
        );
    }

    return (
        <Router>
            <div>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <BuglistPage />
                        </Route>
                        <Route exact path="/buglist">
                            <BuglistPage />
                        </Route>
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));