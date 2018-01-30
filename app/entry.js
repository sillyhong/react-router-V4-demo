
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import Nav from './nav';
import Error from './Error'

ReactDOM.render(

    <Router basename='demo' forceRefresh={true}>
        <div>
            <Nav/>
                <Switch>
                    <Route exact path="/" component={A} />
                    <Route  path="/B" component={B} />
                    <Route  path="/C/:param" component={C} />
                    <Redirect from="/redirect" to="/B" />
                    <Route component={Error}></Route>
                </Switch>
            </div>
    </Router>,
    document.getElementById("app")
);