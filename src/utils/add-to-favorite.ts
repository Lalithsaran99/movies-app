import axios from "axios";
import { AddToFavorite } from "./type";

export const addToFavorite = async (data: AddToFavorite) => {
  try {
    const access_token = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
    const requestBody = {
      ...data,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };
    const account_id = process.env.REACT_APP_ACCOUNT_ID;

    return await axios.post(
      `https://api.themoviedb.org/3/account/${account_id}/favorite`,
      requestBody,
      { headers }
    );
  } catch (error) {
    alert(error);
  }
};
