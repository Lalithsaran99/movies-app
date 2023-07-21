import axios from "axios";

export const fetchFavoriteMovies = async () => {
  try {
    const access_token = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
    const account_id = process.env.REACT_APP_ACCOUNT_ID;
    const headers = {
      "Content-Type": "application/json", // Add any headers you need here
      Authorization: `Bearer ${access_token}`,
    };
    return await axios.get(
      `https://api.themoviedb.org/3/account/${account_id}/favorite/movies`,
      { headers }
    );
  } catch (error) {
    alert(error);
  }
};
