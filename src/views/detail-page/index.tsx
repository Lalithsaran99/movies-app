import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../loader/normal-loader";
import { FetchCastApi } from "../../utils/cast-api";
import { formatDate } from "../../utils/format-date";
import { fetchMovieDetail } from "../../utils/movie-api";
import { CastDetails, Movies } from "../../utils/type";
import { Cast } from "./cast";
import "./styles.css";

export const MovieDetails = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movies>();
  const [cast, setCast] = useState<CastDetails[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!params?.id) return;
    const fetchDetail = async () => {
      await fetchMovieDetail(params?.id ? params?.id : "").then((res) => {
        setMovie(res?.data);
        setLoading(false);
      });
    };
    fetchDetail();

    const fetchCastDetail = async () => {
      await FetchCastApi(params?.id ? params?.id : "").then((data) => {
        setCast(data);
      });
    };
    fetchCastDetail();
  }, [params?.id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <img
        className="container-fluid p-0"
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <button
        type="button"
        className="position-absolute top-20 start-0 m-3 md:m-5 btn btn-primary p-10 rounded-circle"
        onClick={handleGoBack}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </button>
      <div className="title-text">
        <h1>{movie?.title}</h1>

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
            {formatDate(movie?.release_date as unknown as string)}
          </button>
        </div>
      </div>

      <p className="text-center p-5">{movie?.overview}</p>

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
