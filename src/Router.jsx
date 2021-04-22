import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./layout/Layout";
import MeteoChoosen from "./pages/MeteoChoosen";
import ChooseYourPositions from "./pages/ChooseYourPosition";
import DadJokes from "./pages/DadJokes";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/city/:city" component={MeteoChoosen} />
          <Route path="/lat/:lat" component={ChooseYourPositions} />
          <Route path="/dadjokes" component={DadJokes} />
          <Route path="*" component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
