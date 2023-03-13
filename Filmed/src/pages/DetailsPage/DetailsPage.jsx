import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../../components/Spinner/Spinner";
import { fetchDetails } from "../../utils/movie-api";
import defaultImg from "./../../imgs/defaultImg.jpg"
import styles from "./DetailsPage.module.css"


export function DetailsPage() {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const [isLoading, setLoading] = useState(false)

    const getSingleMovie = async (movieId) => {
        setLoading(true)
        const response = await fetchDetails(movieId);
        setMovie(response.data)
        setLoading(false)
    }

    useEffect(() => {
        if (!isLoading && movieId) {
            getSingleMovie(movieId)
        }
    }, [])

    if (isLoading) {
        return(
            <div>
                <Spinner />
            </div>
        );
    }

    if (!isLoading && movie) {
        return(
            <div className={`d-flex align-items-center justify-content-evenly flex-wrap ${styles.detailContainer}`}>
                <div className="my-5">
                    <img src={movie.poster_path != null ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} className={styles.image} alt=""/>
                </div>

                <div className={styles.infoContainer}>
                    <div className="mt-5">
                        <h1 className="text-light mb-5 px-3 text-center">{movie.original_title}</h1>
                        <p className={`px-3 ${styles.overview}`}>{movie.overview}</p>
                    </div>

                    <div className={`mx-3 my-4 d-flex justify-content-between flex-wrap ${styles.otherInfo}`}>
                        <div className="p-4">
                            <h5 className="text-light mb-3">Generos: {movie.genres.map(
                                    (genre) => {return (`${genre.name}, `)}
                                )}
                            </h5>
                            <h5 className="text-light my-3">Idioma original: {movie.original_language}</h5>
                            <h5 className="text-light mt-3">Presupuesto: {movie.budget}</h5>
                        </div>
                        <div className="p-4">
                            <h5 className="text-light mb-3">Rating: {movie.popularity}</h5>
                            <h5 className="text-light my-3">Fecha de lanzamiento: {movie.release_date}</h5>
                            <h5 className="text-light mt-3">Estado: {movie.status}</h5>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="mx-3 mb-5">
                            <h5 className="text-light">Compañías de producción</h5>
                            <ul className="text-light mt-3">
                                {movie.production_companies.map((company) => {
                                        return(
                                            <li className={`my-2 ${styles.listLook}`}>{company.name}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>  
                    </div>
                    
                   
                    
                </div>
            </div>
    );
    }
}