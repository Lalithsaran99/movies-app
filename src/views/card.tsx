import { useNavigate } from "react-router-dom";
import { addToFavorite } from "../utils/add-to-favorite";
import { AddToFavorite, Movies } from "../utils/type";
import { Image } from "./image";
import "./styles.css";
interface CardProps {
  movie: Movies;
  isFavorite?: boolean;
}

export const Card: React.FC<CardProps> = ({ movie, isFavorite }) => {
  const navigate = useNavigate();
  const onAddRemoveFavorites = async (favorite: boolean) => {
    try {
      const data: AddToFavorite = {
        media_type: "movie",
        media_id: movie?.id as unknown as number,
        favorite,
      };
      await addToFavorite(data).then((res) => alert(res?.data?.status_message));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div
      className="card-style inner-shadow cursor-pointer card bg-light text-light w-100 h-100 position-relative"
      onClick={() => {
        navigate(`/movie-detail/${movie?.id}`);
      }}
    >
      <Image imgUrl={movie?.poster_path} />
      <div className="card-img-overlay w-100 h-100">
        <div className="d-flex flex-column justify-content-between h-100">
          {isFavorite ? (
            <div className="text-end">
              <button
                type="button"
                className="btn btn-dark rounded-circle"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddRemoveFavorites(false);
                }}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          ) : (
            <div className="text-end">
              <button
                type="button"
                className="btn btn-dark rounded-circle"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddRemoveFavorites(true);
                }}
              >
                {<i className="bi bi-star star-icon"></i>}
              </button>
            </div>
          )}
          <div className="position-absolute bottom-0 w-100 d-flex justify-content-between align-items-end p-3 z-index-20">
            <h5 className="card-title">{movie?.title}</h5>
            <div className="d-flex justify-content-between rounded-circle bg-dark p-2 w-auto h-auto">
              {movie?.vote_average}
              <i className="bi bi-star-fill star-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
