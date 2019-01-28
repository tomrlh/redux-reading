import React, { Component } from 'react'
import { Item, Grid, Segment, Container } from 'semantic-ui-react'
import './App.css'
import PostSmall from './components/PostSmall'

import axiosInstance from './utils/AxiosUtil'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			posts: []
		}
	}



	render() {
		let categories = this.state.categories
		let posts = this.state.posts

		return (
			<div className="App">
				<Container>
					<Grid columns='equal'>
						<Grid.Column>
							{categories.map((c, idx) => <Segment key={idx}>{c.name}</Segment>)}
						</Grid.Column>
						<Grid.Column width={10}>
							<Item.Group divided>
								{posts.map((p, idx) =>
									<PostSmall
										id={p.id}
										title={p.title}
										body={p.body}
										category={p.category}
										voteScore={p.voteScore}
									/>
								)}
							</Item.Group>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}



	componentDidMount() {
		axiosInstance.get('/categories')
		.then(response => {
			console.log(response.data.categories);
			 this.setState({ categories: response.data.categories })
		})
		.catch(error => {console.log(error)})


		axiosInstance.get('/posts')
		.then(response => {
			console.log(response.data);
			 this.setState({ posts: response.data })
		})
		.catch(error => {console.log(error)})
	}
}

export default App;

