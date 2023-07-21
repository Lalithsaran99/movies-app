import { useEffect, useState } from "react";
import { GridView } from "./grid-view";
import { Movies } from "../utils/type";
import { fetchFavoriteMovies } from "../utils/favorite-movies";
import { Loader } from "../loader/normal-loader";
import { Empty } from "./no-data";

export const Favorites = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Movies[] | undefined>();

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        await fetchFavoriteMovies().then((res) => {
          setData(res?.data?.results);
          setIsLoading(false);
        });
      } catch (error) {
        alert(error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <>
      <h1 className="text-center m-1">Favorites</h1>
      {data?.length ? (
        <GridView data={data} isFavorite={true} loading={isLoading} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <Empty />
      )}
    </>
  );
};
