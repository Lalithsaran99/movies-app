import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/movie-api";
import { Movies } from "../utils/type";
import { Card } from "./card";
import { Search } from "./search";

export const Grid: React.FC = () => {
  const params = useParams<{ movieType: string }>();
  const [data, setData] = useState<Movies[] | undefined>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchData(
        search ? "search" : params?.movieType || "genres",
        search
      );
      setData(data);
    };
    fetchMovies();
  }, [params, search]);

  return (
    <>
      <div className="search-bg d-flex align-items-center justify-content-center">
        <Search setSearch={setSearch} />
      </div>
      <h1 className="text-center">
        {params?.movieType ? params?.movieType : "Home"}
      </h1>

      <div className="row gx-5 gy-5">
        {data?.map((movie) => (
          <div className="col-sm-2 col-md-4 col-lg-4" key={movie?.id}>
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
