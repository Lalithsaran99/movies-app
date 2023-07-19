import axios from "axios";
import { CastDetails } from "./type";

export const FetchCastApi = async (id: string) => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`
    );
    return response?.data?.cast as CastDetails[];
  } catch (error) {
    alert(error);
  }
};
