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
    const access_token = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
    let response;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    if (type === "search") {
      response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${
          search ? search : String(year)
        }&year=${String(year)}&api_key=${api_key}&page=${String(page)}`,
        { headers }
      );
    } else if (type === "genres") {
      response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${String(
          genreId || 28
        )}&api_key=${api_key}&page=${String(page)}`,
        { headers }
      );
    } else {
      response = await axios.get(
        `https://api.themoviedb.org/3${
          movieTypeApi[movieType] ||
          `/discover/movie?with_genres=${String(genreId || 28)}&`
        }api_key=${api_key}&page=${String(page)}`,
        { headers }
      );
    }
    return response?.data?.results as unknown as Movies[];
  } catch (error) {
    alert(error);
  }
};
