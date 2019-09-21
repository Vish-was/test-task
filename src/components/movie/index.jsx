import React from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './movie.styles.css';

const MovieIndex = ({movie, favourite, click, roleChange}) => {

  const favouriteClass = favourite.includes(movie.episode_id) ? "red-heart" : null
  return(
    <div className="col-sm-4 mt-5">
      <div className="card" data-toggle="tooltip" title={ls.get("characters")} >
        <div className="card-body">
          <h5 className="card-title">{movie.title} <button type="button" className={`btn btn-default ${favouriteClass}`} onClick={click}><FontAwesomeIcon icon={faHeart} /></button></h5>
          <p className="card-text">
            <span>Release Date : {movie.release_date}</span>
          </p>
          <div className="home-button">
            <Link to={`movies/${movie.url.replace( /^\D+/g, '')}`} className="btn btn-primary" onClick={() => roleChange(movie.url.replace( /^\D+/g, ''))}>View More</Link>
          </div>
        </div>
      </div>
    </div>
)};

export default MovieIndex;