import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Item } from 'semantic-ui-react'
import Categories from '../components/Categories'
import PostSmall from '../components/PostSmall'
import EditPostModal from '../components/EditPostModal'
import PostsSorter from '../components/PostsSorter'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class Main extends React.Component {
	state ={
		isEditing: false
	}

	render() {
		return (
			<Container className='containerStyle'>
				<Grid columns='equal'>
					<Grid.Column width={4}>
						<Categories categories={this.props.categories}/>
					</Grid.Column>

					<Grid.Column width={8}>
						<Item.Group divided>
							{this.props.posts.map((p, idx) =>
								<PostSmall key={idx}
									id={p.id}
									title={p.title}
									body={p.body}
									category={p.category}
									voteScore={p.voteScore}
									timestamp={p.timestamp}
									editModalFlag={this.state.isEditing}
								/>
							)}
						</Item.Group>
					</Grid.Column>

					<Grid.Column width={4}>
						<PostsSorter/>
						<Divider/>

						<h4>Search field post here</h4>

						<Divider/>

						<Link to={'/add-post'}>
							<Button fluid icon='add' content='Add new post' color='green'/>
						</Link>
					</Grid.Column>
				</Grid>

				<EditPostModal/>
			</Container>
		);
	}



	componentDidMount() {
		this.props.fetchPosts()
		this.props.getCategories()
	}
}



Main.propTypes = {
	posts: PropTypes.array,
	categories: PropTypes.array
}

Main.defaultProps = {
	posts: [],
	categories: []
}



function mapStateToProps(state) {
	return {
		posts: state.posts.allPosts,
		categories: state.categories.allCategories
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
		getCategories: () => dispatch(fetchCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)