import axios from "axios";
import { Movies } from "./type";

export const fetchMovieDetail = async (id: string) => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    );
    return response?.data as Movies;
  } catch (error) {
    alert(error);
  }
};
