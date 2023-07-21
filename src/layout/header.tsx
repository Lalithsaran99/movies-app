import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieType } from "../utils/type";
interface HeaderProps {
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Header: React.FC<HeaderProps> = ({ setIsCollapsed }) => {
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
        className="d-md-block navbar navbar-expand-lg navbar-dark bg-dark w-100"
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
                  className="nav-link text-light cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.GENRES)}
                >
                  {MovieType.GENRES}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.TRENDING)}
                >
                  {MovieType.TRENDING}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light cursor-pointer"
                  onClick={() => handleMenuItemClick(MovieType.UPCOMING)}
                >
                  {MovieType.UPCOMING}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light cursor-pointer"
                  onClick={() => handleMenuItemClick("favorites")}
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
