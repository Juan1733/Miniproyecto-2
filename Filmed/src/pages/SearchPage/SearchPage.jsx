import { useEffect, useState } from "react";
import { fetchSearchedMovie } from "../../utils/movie-api";
import { Card } from "../../components/Card/Card";
import error from "./../../assets/error.png"
import styles from "./SearchPage.module.css"

export function SearchPage() {
    
    const [movies, setMovies] = useState([{}]);
    const [searched, setSearched] = useState(false);

    const getSearchedMovie = async () => {
        setSearched(false)
        let text = getInputInfo()

        if (text === "" || movies.length === 0) {
            setSearched(false)
            return;
        }
        else {
           const { data } = await fetchSearchedMovie(text)
            setMovies(data.results)
            setSearched(true)
            console.log(data.results) 
        }
        
    }

    const getInputInfo = () => {
        let text = document.getElementById("movieInput").value;
        return text;
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-4">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="d-flex">
                            <input className={`form-control me-3 py-2 px-4 ${styles.inputLook}`} id="movieInput" type="search" placeholder="Ingresa una pelicula" aria-label="Search" />
                            <button className={`btn px-3 ${styles.searchBtn}`} type="submit" onClick={getSearchedMovie}>Buscar</button>
                        </div>
                    </div>
                </nav>
            </div>

            {!searched && (
                <div className="d-flex justify-content-center mt-3">
                    <div className={`mt-5 justify-content-center ${styles.notFoundCont}`}>
                        <img src={error} className={styles.resultImg}/>
                        <h3 className="text-light">Busca peliculas para ver los resultados</h3>
                    </div>            
                </div>
            )}

            {searched && (
                <div className='d-flex flex-wrap justify-content-center justify-content-md-evenly justify-content-xl-between mt-4'>
                    {movies.map((movie, index) => (
                        <Card movie={movie} key={index}/>
                    ))}
                </div>      
            )}
            


        </div>
    );
}