export enum MovieType {
  GENRES = "Genres",
  TRENDING = "Trending",
  UPCOMING = "Upcoming",
}

export const movieTypeApi = {
  genres: "/discover/movie?with_genres=28&",
  trending: "/trending/all/day?",
  upcoming: "/movie/upcoming?",
};

export interface Movies {
  id: string;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
