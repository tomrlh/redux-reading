import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid } from 'semantic-ui-react'

export default class NoMatch extends Component {
	render() {
		return (
			<Container className='containerStyle'>
				<Grid columns='equal'>
					<Grid.Column width={4}>
					<Link to={'/'}>
						<Button fluid color='blue'>
							Return to Main Page
						</Button>
					</Link>
					</Grid.Column>

					<Grid.Column width={8}>
						<h4>Route not found.</h4>
					</Grid.Column>
					<Grid.Column width={4}></Grid.Column>
				</Grid>
			</Container>
		);
	}


	componentDidUpdate(prevProps){
		if(this.props.match.params.id !== prevProps.match.params.id){
			this.props.fetchPost(this.props.match.params.id)
			this.props.fetchPostsComments(this.props.match.params.id)
		}
	}
}