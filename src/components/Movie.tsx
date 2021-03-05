import React from 'react';
import { MovieType } from '../App';
import DEFAULT_POSTER from '../assets/default_img.png';
import '../styles/Movie.css';

interface Props {
  movieInfo: MovieType;
}

const Movie: React.FC<Props> = ({ movieInfo: { Title, Poster, Type, Year } }) => {
  return (
    <section>
      <div className="title-wrapper">
        <h3>{Title}</h3>
      </div>

      <div className="poster-wrapper">
        <img src={Poster === 'N/A' ? DEFAULT_POSTER : Poster} alt={Title} />
      </div>

      <ul className="poster-detail">
        <li>{Type}</li>
        <li>|</li>
        <li>{Year}</li>
      </ul>
    </section>
  );
};

export default Movie;
