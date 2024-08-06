export type MovieItem = {
  id?: number;
  title?: string;
  name?: string;
  genre_ids: number[];
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date?: string;
  vote_average: number;
};

export type GenreItem = {
  id: number;
  name: string;
};

export type moviesData = MovieItem[];

export type MovieDetails = {
  backdrop_path?: string;
  id?: number;
  title?: string;
  name?: string;
  genres: GenreItem[];
  overview?: string;
  poster_path?: string;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  status?: string;
  runtime?: number;
  tagline?: string;
};

export type crew = {
  job: string;
  name: string;
  id: number;
};

export type Cast = {
  name: string;
  character: string;
  profile_path: string;
  id: number;
};

export type Credits = {
  cast: Cast[];
  crew: crew[];
};
