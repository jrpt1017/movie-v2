import axios from 'axios';

export const getImage = async (path: string) => {
  try {
    const img = await axios.get(`https://image.tmdb.org/t/p/original/${path}`);
    return img.data;
  } catch (error) {
    console.log(error.message);
  }
};