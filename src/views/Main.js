import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Divider, Grid, Item } from 'semantic-ui-react'
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
					<Grid.Column>
						<PostsSorter/>
						<Divider/>
						<Categories categories={this.props.categories}/>
					</Grid.Column>
					<Grid.Column width={10}>
						<Item.Group divided>
							{this.props.posts.map((p, idx) =>
								<PostSmall
									key={idx}
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
		);
	}

	componentDidMount() {
		this.props.getPosts()
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



function mapStateToProps(state, ownProps) {
	return {
		posts: state.posts.posts,
		categories: state.categories.categories
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(fetchPosts()),
		getCategories: () => dispatch(fetchCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)