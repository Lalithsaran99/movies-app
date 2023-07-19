import React from "react";
import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Grid } from "./views/grid";
import { Routing } from "./routing";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
};

export default App;
