import axios from 'axios'

export const ApiService = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/76341?api_key=7f753478c8faa75bdd0b9b33b3521125`,
});
