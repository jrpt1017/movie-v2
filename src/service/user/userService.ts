import axios from 'axios';

const key = '26090a5ba19fada0de9ee04a213b3d59'

export const getRequestToken = async () => {
  try {
    const token = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`);
    return token.data;
  } catch (error) {
    console.log(error.message);
  }
};