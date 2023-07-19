import { useNavigate } from "react-router-dom";
import { MovieType } from "../utils/type";

export const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="h-100 navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column">
          <li
            className="nav-item cursor-pointer"
            onClick={() => navigate(`/${MovieType.GENRES.toLocaleLowerCase()}`)}
          >
            <a
              className="nav-link"
              onClick={() =>
                navigate(`/${MovieType.GENRES.toLocaleLowerCase()}`)
              }
            >
              {MovieType.GENRES}
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() =>
              navigate(`/${MovieType.TRENDING.toLocaleLowerCase()}`)
            }
          >
            <a
              className="nav-link"
              onClick={() =>
                navigate(`/${MovieType.TRENDING.toLocaleLowerCase()}`)
              }
            >
              {MovieType.TRENDING}
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() =>
              navigate(`/${MovieType.UPCOMING.toLocaleLowerCase()}`)
            }
          >
            <a
              className="nav-link"
              onClick={() =>
                navigate(`/${MovieType.UPCOMING.toLocaleLowerCase()}`)
              }
            >
              {MovieType.UPCOMING}
            </a>
          </li>
          <li
            className="nav-item cursor-pointer"
            onClick={() =>
              navigate(`/${MovieType.FAVORITES.toLocaleLowerCase()}`)
            }
          >
            <a
              className="nav-link"
              onClick={() =>
                navigate(`/${MovieType.FAVORITES.toLocaleLowerCase()}`)
              }
            >
              {MovieType.FAVORITES}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
