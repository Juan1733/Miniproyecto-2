import React from 'react';
import styles from './Card.module.css'
import { useUser } from "../../contexts/userContext";

export function Card({ movie }) {
    const user = useUser();
    console.log(user);

    return (
        <div className={`card ${styles.cardLook} mb-3`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg" />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <ul className='m-0'>
                    <li><p>Popularidad: {movie.popularity}</p></li>
                    <li><p>Idioma original: {movie.original_language === "en" ? "Ingles" : "otro"}</p></li>
                </ul>
            </div>
        </div>
    );
}
