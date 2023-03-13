import React from 'react';
import styles from './Card.module.css'
import defaultImg from './../../imgs/defaultImg.jpg'

export function Card({ movie }) {



    return (
        <div className={`card ${styles.cardLook} mb-3`}>
            <img src={movie.poster_path != null ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <ul className='m-0'>
                    <li><p>Popularidad: {movie.popularity}</p></li>
                    <li><p>Idioma original: {movie.original_language === "en" ? "Ingles" : "Extranjero"}</p></li>
                </ul>
            </div>
        </div>
    );
}
