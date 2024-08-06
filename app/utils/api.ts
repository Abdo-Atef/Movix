import { GenreItem } from "../types/app";

export const image_base_url: string = "https://image.tmdb.org/t/p/original/";
const BASE_URL: string = "https://api.themoviedb.org/3/";

const headers: { Authorization: string } = {
  Authorization: process.env.themoviedb_api_token || "",
};

export const getGeners = async () => {
  try {
    const apiResponse = await fetch(BASE_URL + "genre/movie/list", {
      headers,
    });
    let allGenres: any = {};
    let response = await apiResponse.json();
    response.genres.map((item: GenreItem) => (allGenres[item.id] = item));

    return allGenres;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchDataFromApi = async (
  url: string,
  params?: any | undefined
) => {
  try {
    const apiResponse = await fetch(BASE_URL + url, {
      headers,
      ...params,
    });
    const response = await apiResponse.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
