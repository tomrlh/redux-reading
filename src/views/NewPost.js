import React from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import PostForm from '../components/PostForm'
import { fetchCategories } from '../actions/categories'

class NewPost extends React.Component {
	render() {
		return (
			<Container>
				<Grid columns='equal'>
					<Grid.Column width={4}></Grid.Column>

					<Grid.Column width={10}>
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