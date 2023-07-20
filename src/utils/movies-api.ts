import axios from "axios";
import { Movies, movieTypeApi } from "./type";
type MovieType = keyof typeof movieTypeApi;
export const fetchData = async (
  type: string,
  search?: string,
  year?: number,
  page?: number,
  genreId?: string
) => {
  try {
    const movieType: MovieType = type as MovieType;
    const api_key = process.env.REACT_APP_API_KEY;
    console.log(type, genreId);
    let response;
    if (type === "search") {
      response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${
          search ? search : String(year)
        }&year=${String(year)}&api_key=${api_key}&page=${String(page)}`
      );
    } else if (type === "genres") {
      response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${String(
          genreId || 28
        )}&api_key=${api_key}&page=${String(page)}`
      );
    } else {
      response = await axios.get(
        `https://api.themoviedb.org/3${
          movieTypeApi[movieType] ||
          `/discover/movie?with_genres=${String(genreId || 28)}&`
        }api_key=${api_key}&page=${String(page)}`
      );
    }
    return response?.data?.results as unknown as Movies[];
  } catch (error) {
    alert(error);
  }
};
