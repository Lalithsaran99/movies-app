import { Outlet, Route, Routes } from "react-router-dom";
import { Grid } from "../views/grid";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index path="/:movieType" element={<Grid />} />
        <Route path="/" element={<Grid />} />
      </Route>
    </Routes>
  );
};
