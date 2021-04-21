import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./layout/Layout";
import MeteoChoosen from "./pages/MeteoChoosen";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:city" component={MeteoChoosen} />
          <Route path="*" component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
