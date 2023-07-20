import { capitalize } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/normal-loader";
import { fetchGenreList } from "../utils/genre-list";
import { fetchData } from "../utils/movies-api";
import { Genres, Movies } from "../utils/type";
import { GridView } from "./grid-view";
import { Empty } from "./no-data";
import { Search } from "./search";
import { YearDropdown } from "./year-select";
import { GenresUI } from "./genres";

export const Grid: React.FC = () => {
  const params = useParams<{ movieType: string }>();
  const [data, setData] = useState<Movies[] | undefined>();
  const [search, setSearch] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [year, setYear] = useState<number>();
  const [genres, setGenres] = useState<Genres[]>();
  const [genreId, setGenreId] = useState<string | undefined>();
  const movieType = params?.movieType;

  const handleYearSelection = (year: number) => {
    setYear(year);
  };

  const handleScroll = () => {
    const buffer = 100;
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop + buffer >=
      document.documentElement.offsetHeight;

    if (isBottom) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    setData([]);
    setCurrentPage(1);
  }, [search, year, params, genreId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        await fetchGenreList().then((res) => setGenres(res?.data?.genres));
      } catch (error: any) {
        alert(error);
      }
    };
    fetchGenres();
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        await fetchData(
          search || year ? "search" : params?.movieType || "genres",
          search,
          year,
          currentPage,
          genreId
        ).then((data) =>
          setData((prevData) =>
            prevData ? [...prevData, ...(data as Movies[])] : data
          )
        );
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [params, search, currentPage, year, genreId]);

  return (
    <>
      <div className="search-bg d-flex align-items-center justify-content-center">
        <Search setSearch={setSearch} />
        <div className="m-2">
          <YearDropdown onSelectYear={handleYearSelection} />
        </div>
      </div>
      <h1 className="text-center">
        {movieType ? capitalize(movieType) : "Home"}
      </h1>
      {movieType === "genres" || movieType === undefined ? (
        <GenresUI genres={genres} setGenreId={setGenreId} />
      ) : null}
      {data?.length ? (
        <GridView data={data} loading={isLoading} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <Empty />
      )}
    </>
  );
};
