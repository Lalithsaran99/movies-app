import axios from "axios";

export const fetchGenreList = async () => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    return await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
    );
  } catch (error) {
    alert(error);
  }
};
