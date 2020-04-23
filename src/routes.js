import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./services/history";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
import Details from "./pages/Details";
import Delivery from "./pages/Delivery";
import Local from "./pages/Local";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/menu" component={Menu} />
        <Route path="/details" component={Details} />
        <Route path="/delivey" component={Delivery} />
        <Route path="/local" component={Local} />
      </Switch>
    </Router>
  );
}
