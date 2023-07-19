import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchCastApi } from "../../utils/cast-api";
import { fetchMovieDetail } from "../../utils/movie-api";
import { CastDetails, Movies } from "../../utils/type";
import { Cast } from "./cast";
import "./styles.css";

export const MovieDetails = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movies>();
  const [cast, setCast] = useState<CastDetails[]>();
  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchMovieDetail(params?.id ? params?.id : "");
      setMovie(data);
    };
    fetchDetail();

    const fetchCastDetail = async () => {
      const data = await FetchCastApi(params?.id ? params?.id : "");
      setCast(data);
    };
    fetchCastDetail();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <img
        className="container-fluid p-0"
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <button
        type="button"
        className="back-button btn btn-primary rounded-circle"
        onClick={handleGoBack}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </button>
      <div className="title-text">
        <h1 className="position-absolute p-2">{movie?.title}</h1>
      </div>
      <p className="text-center">{movie?.overview}</p>
      <div className="text-center">
        {movie?.genres?.map((data) => (
          <button
            type="button"
            key={data?.id}
            className="btn btn-primary rounded-pill m-1"
          >
            {data?.name}
          </button>
        ))}
      </div>
      <div className="text-center m-2">
        <button type="button" className="btn btn-primary rounded-pill">
          {movie?.release_date}
        </button>
      </div>
      <div className="container py-5">
        <div className="row gutter-3  flex-nowrap overflow-auto">
          {cast?.map((castDetail) => (
            <div className="col-sm-4 col-md-4 col-lg-4" key={castDetail?.id}>
              <Cast cast={castDetail} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
