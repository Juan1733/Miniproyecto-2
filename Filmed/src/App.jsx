import { useState, useEffect } from 'react'
import { fetchMovies } from './utils/movie-api';
import { Card } from './components/Card/Card';
import { Spinner } from './components/Spinner/Spinner';
import { HOME_URL } from './constants/urls.js'
import styles from './App.module.css'

function App() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false)

  const getMovies = async () => {
    setLoading(true)
    const { data } = await fetchMovies(page)
    setMovies(data.results)
    setLoading(false)
  }

  const addPage = () => {
    setPage(page + 1)
  }

  const setNumber1 = () => {
    if (page != 1) {
      setPage(1)
    }
  }

  const setNumber2 = () => {
    setPage(2)
  }

  const setNumber3 = () => {
    setPage(3)
  }

  const subtractPage = () => {
    if (page != 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    getMovies()
  }, [page])
  console.log(movies)

  return (
    <div className="App">
      <h1 className='my-4 text-center text-white'>Todas las películas</h1>

      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}

      <div className='d-flex flex-wrap justify-content-center justify-content-md-evenly justify-content-xl-between'>

        {!isLoading && movies.map((movie, index) => (
          <Card movie={movie} key={index}/>
        ))}

      </div>

      <div className="d-flex justify-content-center my-2">
      <nav aria-label="Page navigation example">
            <ul className={`pagination ${styles.looks}`}>
                <li className="page-item"><a className="page-link text-white" href="#" onClick={subtractPage}>Previous</a></li>
                <li className="page-item"><a className="page-link text-white" href="#" onClick={setNumber1}>1</a></li>
                <li className="page-item"><a className="page-link text-white" href="#" onClick={setNumber2}>2</a></li>
                <li className="page-item"><a className="page-link text-white" href="#" onClick={setNumber3}>3</a></li>
                <li className="page-item"><a className="page-link text-white" href="#" onClick={addPage}>Next</a></li>
            </ul>
        </nav>
      </div>

    </div>
  )
}

export default App
