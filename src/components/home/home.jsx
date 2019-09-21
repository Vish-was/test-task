import React, {Component} from 'react';
import axios from 'axios';
import ls from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import Search from '../search/search';
import MovieIndex from '../movie/index';
import './home.styles.css';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			movies: [],
			characters: [],
			planets: [],
			starships: [],
			vehicles: [],
			species: [],
			favourite: []
		}
	}

	componentDidMount(){
		axios.get(`https://swapi.co/api/films/`)
		.then(res=>{
			this.setState({
				movies: res.data.results,
				favourite: ls.get('favourites') || []
			})
		})
		.catch(error => {
			console.log(error)
		})

		console.log(ls.get('characters'));
	}

	componentDidUpdate(p,s){
		console.log(ls.get('species'));
	}

	changeFavourite = (id) => {
		/*jshint -W030 */
		confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
          	const {favourite} = this.state;
						// this.state.movies.find(o => o.episode_id === id);
						if(favourite.includes(id)){
							const fav = favourite.filter( fav_id => ( fav_id !== id ))
							this.setState(prevState => ({
								favourite: fav
							}))
							ls.set('favourites', fav);
						}else{
							this.setState(prevState => ({
								favourite: [...prevState.favourite, id]
							}))
							ls.set('favourites', [...favourite, id]);
						}
          }
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });

	}

	getSearch = (e) => {
		const search = e.target.value.toLowerCase();
		axios.get(`https://swapi.co/api/films/?search=${search}`)
		.then(res => {
			console.log(res.data)
			if(res.data.count > 0){
				this.setState({
					movies: res.data.results
				})
			}
		}).catch(err => console.log(err))
		
	}

	submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  otherRoleChange = (id) => {
  	const movie = this.state.movies.filter(movie => movie.url.replace( /^\D+/g, '') === id)[0]

  	movie.characters.map(ch => (
  			
		 		axios.get(`https://swapi.co/api/people/${ch.replace( /^\D+/g, '')}`)
				.then(res => {

					
					this.setState(prevState => ({
						characters: [...prevState.characters, res.data.name]
					}), () => {
						ls.set('characters', this.state.characters)
					})

				}).catch(err => {
					console.log(err)
				})
		))
  	movie.planets.map(c => (
				axios.get(`https://swapi.co/api/planets/${c.replace( /^\D+/g, '')}`)
				.then(res => {
					this.setState(prevState => ({
						planets: [...prevState.planets, res.data.name]
					}),() => {
						ls.set('planets', this.state.planets)
					})
				}).catch(err => {
					console.log(err)
				})
		))
		movie.starships.map(c => (
				axios.get(`https://swapi.co/api/starships/${c.replace( /^\D+/g, '')}`)
				.then(res => {
					this.setState(prevState => ({
						starships: [...prevState.starships, res.data.name]
					}),() => ls.set('starships', this.state.starships))
				}).catch(err => {
					console.log(err)
				})
		))
		movie.vehicles.map(c => (
				axios.get(`https://swapi.co/api/vehicles/${c.replace( /^\D+/g, '')}`)
				.then(res => {

					this.setState(prevState => ({
						vehicles: [...prevState.vehicles, res.data.name]
					}),() => ls.set('vehicles', this.state.vehicles))
				}).catch(err => {
					console.log(err)
				})
		))
		movie.species.map(c => (
				axios.get(`https://swapi.co/api/species/${c.replace( /^\D+/g, '')}`)
				.then(res => {

					this.setState(prevState => ({
						species: [...prevState.species, res.data.name]
					}),() => ls.set('species', this.state.species))
				}).catch(err => {
					console.log(err)
				})

  	))

  }

	render(){
		return(
			<>
				<Search changesearch={this.getSearch} />
				{
					this.state.movies.length !== 0 ?
						<div className="row">
							{
								this.state.movies.sort((m1,m2) => (this.state.favourite.includes(m1.episode_id) - this.state.favourite.includes(m2.episode_id))).reverse().map(movie => (
									<MovieIndex key={movie.episode_id} movie={movie} favourite={this.state.favourite} click={() => this.changeFavourite(movie.episode_id)} roleChange={this.otherRoleChange}/>
								))
								
							}
						</div>
					:
						<img src="https://www.lingzhivegetarian.com/wp-content/themes/lingzhi/images/loading.gif" className="loader" alt="loading..."/>
				}
			</>
		);
	}
}

export default Home;