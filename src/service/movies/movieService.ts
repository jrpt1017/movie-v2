import axios from 'axios';
import { IGenre } from '../../types/movie';

export const getDiscoverMovies = async () => {
  try {
    const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=26090a5ba19fada0de9ee04a213b3d59&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=2');
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
