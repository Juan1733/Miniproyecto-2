import axios from 'axios'

export async function fetchMovies() {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e75f27d22e10f3770113e902a6474342&language=es')
}