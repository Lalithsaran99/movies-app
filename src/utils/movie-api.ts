import axios from "axios";

export const fetchMovieDetail = async (id: string) => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    const access_token = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

    const headers = {
      "Content-Type": "application/json", // Add any headers you need here
      Authorization: `Bearer ${access_token}`,
    };
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
      { headers }
    );
  } catch (error) {
    alert(error);
  }
};
