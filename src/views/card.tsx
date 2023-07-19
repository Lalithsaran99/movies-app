import { Link } from "react-router-dom";
import { Movies } from "../utils/type";
import { Image } from "./image";
import "./styles.css";
interface CardProps {
  movie: Movies;
}

export const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <Link to={`/movie-detail/${movie?.id}`}>
      <div className="card-style inner-shadow cursor-pointer card bg-light text-light w-100 h-100">
        <Image imgUrl={movie?.poster_path} />
        <div className="card-img-overlay w-100 h-100">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{movie?.title}</h5>

            <div className="d-flex justify-content-center rounded-circle bg-dark p-2 w-auto h-auto">
              {movie?.vote_average}
              <i className="bi bi-star-fill star-icon"></i>
            </div>
          </div>
          {/* <p className="card-text">{movie?.overview}</p> */}
          {/* <p className="card-text">Last updated 3 mins ago</p> */}
        </div>
      </div>
    </Link>
  );
};
