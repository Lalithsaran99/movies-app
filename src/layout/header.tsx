import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieType } from "../utils/type";
interface HeaderProps {
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  theme: () => void;
  mode: boolean;
}
export const Header: React.FC<HeaderProps> = ({
  setIsCollapsed,
  theme,
  mode,
}) => {
  const navigate = useNavigate();

  const [collapse, setCollapse] = useState<boolean>(true);

  const toggleCollapse = () => {
    setIsCollapsed(!collapse);
    setCollapse(!collapse);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(`/${path.toLowerCase()}`);
  };

  return (
    <header>
      <nav
        className="d-md-block navbar navbar-expand-lg w-100"
        style={{ position: "fixed", width: "100%", zIndex: 30 }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={toggleCollapse}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapse}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapse ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.GENRES)}
                >
                  {MovieType.GENRES}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.TRENDING)}
                >
                  {MovieType.TRENDING}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.UPCOMING)}
                >
                  {MovieType.UPCOMING}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cursor-pointer"
                  onClick={() => handleMenuItemClick("favorites")}
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>
          <button type="button" onClick={theme} className="btn btn-primary">
            {mode ? (
              <i className="bi bi-moon-stars-fill"></i>
            ) : (
              <i className="bi bi-cloud-sun-fill"></i>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
