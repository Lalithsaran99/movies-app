import { useNavigate } from "react-router-dom";
import { MovieType } from "../utils/type";

export const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    navigate(`/${path.toLowerCase()}`);
  };

  return (
    <nav
      className="d-block d-md-none navbar navbar-expand-lg navbar-dark bg-dark mt-5"
      style={{ position: "fixed", width: "100%", height: "100%", zIndex: 30 }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
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
        </ul>
      </div>
    </nav>
  );
};
