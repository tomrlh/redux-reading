import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container, Grid } from 'semantic-ui-react'
import PostForm from '../components/PostForm'
import { fetchCategories } from '../actions/categories'

class NewPost extends React.Component {
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
						<PostForm/>
					</Grid.Column>

					<Grid.Column width={4}></Grid.Column>
				</Grid>
			</Container>
		);
	}

	componentDidMount() {
		this.props.getCategories()
	}
}



function mapDispatchToProps(dispatch) {
	return {
		getCategories: () => dispatch(fetchCategories())
	}
}

export default connect(null, mapDispatchToProps)(NewPost)