import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Layout from "./layout/Layout";
import MeteoChoosen from "./pages/MeteoChoosen";
import Formulaires from "./pages/Formulaires";
// import ChooseYourPositions from "./pages/ChooseYourPosition";
// import DadJokes from "./pages/DadJokes";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/city/:city" component={MeteoChoosen} />
          <Route path="/formulaires" component={Formulaires} />
          <Route path="*" component={Error} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
