import React, {Component} from 'react';
import axios from 'axios';
import ls from 'local-storage';

import MovieData from './data';
import './movie.styles.css';

class MovieShow extends Component {

	constructor(props){
		super(props);
		this.state = {
			movie: {}
		}
	}

	componentDidMount(){
		const {id} = this.props.match.params;
		axios.get(`https://swapi.co/api/films/${id}`)
		.then(res => {
			this.setState({
				movie: res.data
			})
		}).catch(err => {
			console.log(err)
		})

	}

	render(){
		const {movie} = this.state;
		return(
			<>
				{
					Object.keys(movie).length !== 0 ? 
						<MovieData movie={movie} characters={ls.get('characters')} planets={ls.get('planets')} starships={ls.get('starships')} vehicles={ls.get('vehicles')} species={ls.get('species')} />
					:
						<img src="https://www.lingzhivegetarian.com/wp-content/themes/lingzhi/images/loading.gif" className="loader" alt="loading..."/>
				}
			</>
		);
	};
};

export default MovieShow;