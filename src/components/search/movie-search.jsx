import React from 'react';

const MovieSearch = (props) => {
	return(
		<div className="search-input">
			<input id={props.componentId} onChange={props.changesearch} className="form-control" type="text" placeholder={props.placeholder} />
		</div>
)};

export default MovieSearch;