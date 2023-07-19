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

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index path="/:movieType" element={<Grid />} />
            <Route path="/" element={<Grid />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
