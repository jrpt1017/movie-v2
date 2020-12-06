import axios from 'axios';

export const getDiscoverMovies = async () => {
  try {
    const movies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=26090a5ba19fada0de9ee04a213b3d59&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    return movies.data;
  } catch (error) {
    console.log(error.message);
  }
}
