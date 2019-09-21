import React from 'react';
import MovieSearch from './movie-search'
import './search.styles.css';

const Search = (props) => (
	<>
		<div className="row">
			<div className="offset-lg-4 col-lg-4 offset-lg-4">
		    <MovieSearch
					componentId="searchbox"
					placeholder="Search for movies"
					changesearch={props.changesearch}
				/>
			</div>
		</div>
	</>
)

export default Search;