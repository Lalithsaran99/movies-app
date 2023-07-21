import { Outlet, Route, Routes } from "react-router-dom";
import { Grid } from "../views/grid";
import { MovieDetails } from "../views/detail-page";
import { Favorites } from "../views/favorites";

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index path="/:movieType" element={<Grid />} />
        <Route path="/movie-detail/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Grid />} />
      </Route>
    </Routes>
  );
};
