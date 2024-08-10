import { GenreItem } from "../types/app";

export const image_base_url: string = "https://image.tmdb.org/t/p/original/";
const BASE_URL: string = "https://api.themoviedb.org/3/";

export const getGeners = async () => {
  const headers: { Authorization: string; accept: string } = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  try {
    const apiResponse = await fetch(BASE_URL + "genre/movie/list", {
      headers,
    });
    let allGenres: any = {};
    let response = await apiResponse.json();
    console.log(headers);
    
    console.log(response);
    
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
  const headers: { Authorization: string; accept: string } = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };
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
