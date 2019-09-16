import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

// FREE
import HomePage from "./pages/HomePage";
import UserPage from "./pages/user";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={UserPage} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
