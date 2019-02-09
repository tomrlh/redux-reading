import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Item } from 'semantic-ui-react'
import Categories from '../components/Categories'
import PostSmall from '../components/PostSmall'
import PostsSorter from '../components/PostsSorter'
import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class Main extends React.Component {

	render() {
		return (
			<Container>
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
							<Button.Group vertical labeled icon>
								<Button icon='add' content='Add new post'/>
							</Button.Group>
						</Link>
					</Grid.Column>
				</Grid>
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