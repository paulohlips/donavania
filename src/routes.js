import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './services/history';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/menu" component={Menu} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
}
