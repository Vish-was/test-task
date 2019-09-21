import React from 'react';

import {Link} from 'react-router-dom';

const MovieData = ({movie, characters, planets, starships, vehicles, species}) => (
	<div>
		<div className="row">
			<Link to="/" className="btn btn-info"><span className="arrow">&larr;</span> Home</Link>
		</div>
		<div className="row">
			<h3>{movie.title}</h3>
			<p><strong>Summary : </strong> {movie.opening_crawl}</p>
			<div>
				<p><strong>Directed By : </strong> {movie.director}</p>
				<p><strong>Produced By : </strong> {movie.producer}</p>
				<p><strong>Release Date : </strong> {movie.release_date}</p>
			</div>
		</div>
		<div className="row">
			<div id="accordion">
			  <div className="card">
			    <div className="card-header" id="headingOne">
			      <h5 className="mb-0">
			        <button className="btn btn-default movie-button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			          Characters <span className="down-arrow">&#8681;</span>
			        </button>
			      </h5>
			    </div>

			    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
			      <div className="card-body">
			        <ul>
			        	{
			        		characters === null ?
			        			null
		        			:
				        		characters.map(character => (
				        			<li key={character}>{character}</li>
				        		))
			        	}
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="card">
			    <div className="card-header" id="headingTwo">
			      <h5 className="mb-0">
			        <button className="btn btn-default movie-button collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			          Planets <span className="down-arrow">&#8681;</span>
			        </button>
			      </h5>
			    </div>
			    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
			      <div className="card-body">
			        <ul>
			        	{
			        		planets !== null ?
				        		planets.map(planet => (
				        			<li key={planet}>{planet}</li>
				        		))
				        	:
				        		null

			        	}
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="card">
			    <div className="card-header" id="headingThree">
			      <h5 className="mb-0">
			        <button className="btn btn-default movie-button collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			          Starships <span className="down-arrow">&#8681;</span>
			        </button>
			      </h5>
			    </div>
			    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
			      <div className="card-body">
			        <ul>
			        	{
			        		starships !== null ?
				        		starships.map(starship => (
				        			<li key={starship}>{starship}</li>
				        		))
				        	: 
				        		null

			        	}
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="card">
			    <div className="card-header" id="headingThree">
			      <h5 className="mb-0">
			        <button className="btn btn-default movie-button collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
			          Vehicles <span className="down-arrow">&#8681;</span>
			        </button>
			      </h5>
			    </div>
			    <div id="collapse4" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
			      <div className="card-body">
			        <ul>
			        	{
			        		vehicles !== null ?
				        		vehicles.map(vehicle => (
				        			<li key={vehicle}>{vehicle}</li>
				        		))
				        	: null

			        	}
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="card">
			    <div className="card-header" id="headingThree">
			      <h5 className="mb-0">
			        <button className="btn btn-default movie-button collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
			          Species <span className="down-arrow">&#8681;</span>
			        </button>
			      </h5>
			    </div>
			    <div id="collapse5" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
			      <div className="card-body">
			        <ul>
			        	{
			        		species == null ?
				        		null
									:
				        		species.map(specie => (
				        			<li key={specie}>{specie}</li>
				        		))

			        	}
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	</div>
)

export default MovieData;