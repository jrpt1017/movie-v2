import axios from 'axios';
import { IGenre } from '../../types/movieTypes';

const key = '26090a5ba19fada0de9ee04a213b3d59';
const baseUrl = 'https://api.themoviedb.org/3';

export const getDiscoverMovies = async (page?: string) => {
  try {
    const params = new URLSearchParams();
    params.append('api_key', key);
    params.append('include_adult', 'true');
    params.append('page', page || '1');
    const movies = await axios.get('https://api.themoviedb.org/3/discover/movie', { params });
    return movies.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export const getGenres = async (): Promise<IGenre[] | undefined> => {
  try {
    const genres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=26090a5ba19fada0de9ee04a213b3d59&language=en-US');
    return genres.data.genres || [];
  } catch (error) {
    console.log(error.message)
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${key}&append_to_response=videos,casts,reviews,similar`);
    // console.log(JSON.stringify(movie.data.similar))
    return movie.data;
  } catch (error) {
    console.log(error.message);
  }
};
