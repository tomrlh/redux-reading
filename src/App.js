import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Grid, Image, Segment, Container } from 'semantic-ui-react'
import logo from './logo.svg'
import paragraph from './paragraph.png'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Container>
					<Grid columns='equal'>
						<Grid.Column>
							<Segment>Categories</Segment>
						</Grid.Column>
						<Grid.Column width={10}>
							<Segment>Posts</Segment>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
