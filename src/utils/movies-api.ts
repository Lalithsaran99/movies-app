import axios from "axios";
import { Movies, movieTypeApi } from "./type";
type MovieType = keyof typeof movieTypeApi;
export const fetchData = async (type: string, search?: string) => {
  try {
    const movieType: MovieType = type as MovieType;
    const api_key = process.env.REACT_APP_API_KEY;

    let response;
    if (type === "search") {
      response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}&page=1`
      );
    } else {
      response = await axios.get(
        `https://api.themoviedb.org/3${
          movieTypeApi[movieType] || "/discover/movie?with_genres=28&"
        }api_key=${api_key}&page=1`
      );
    }
    return response?.data?.results as Movies[];
  } catch (error) {
    alert(error);
  }
};
