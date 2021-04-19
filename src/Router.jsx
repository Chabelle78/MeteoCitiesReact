import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import MeteoBiarritz from "./pages/MeteoBiarritz";
import Paris from "./pages/Paris";
import Error from "./pages/Error";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/biarritz" component={MeteoBiarritz} />
          <Route path="/paris" component={Paris} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
