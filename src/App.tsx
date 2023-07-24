import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
import { toggleDarkMode } from "./reducer/actions";
import { RootState } from "./reducer/store";
import { Routing } from "./routing";

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.app.darkMode);
  const dispatch = useDispatch();
  const handleToggleMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Router>
        <Layout theme={handleToggleMode} mode={darkMode}>
          <Routing />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
