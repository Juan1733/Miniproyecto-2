import { useState, useEffect } from 'react'
import { fetchMovies } from './utils/movie-api';
import { Card } from './components/Card/Card';
import { PageNavigation } from './components/PageNavigation/PageNavigation'
import './App.css'

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { data } = await fetchMovies()
    setMovies(data.results)
    //console.log(data)
  }

  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)

  return (
    <div className="App">
      <h1 className='my-4 text-center text-white'>Todas las películas</h1>
      <div className='d-flex flex-wrap justify-content-center justify-content-md-evenly justify-content-xl-between'>
        {movies.map((movie, index) => (
          <Card movie={movie} key={index}/>
        ))}
      </div>

      <div className="d-flex justify-content-center my-2">
        <PageNavigation />
      </div>

    </div>
  )
}

export default App
