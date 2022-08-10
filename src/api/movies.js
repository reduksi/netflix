import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '?api_key=7f753478c8faa75bdd0b9b33b3521125'

export function getGenres() {
    return axios.get(`${baseURL}/genre/movie/list${apiKey}`)
}

export function getMovies(genreId){
    return axios.get(`${baseURL}/discover/movie${apiKey}&with_genres=${genreId}`)

}