import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Item, Grid, Segment, Container } from 'semantic-ui-react'
import PostSmall from '../components/PostSmall'

import { fetchPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class Main extends React.Component {

	render() {
		return (
			<Container>
				<Grid columns='equal'>
					<Grid.Column>
						{this.props.categories.map((c, idx) => <Segment key={idx}>{c.name}</Segment>)}
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
		this.props.dispatch(fetchPosts())
		this.props.dispatch(fetchCategories())
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
		posts: state.posts.posts,
		categories: state.categories.categories
	}
}



// function mapDispatchToProps(dispatch) {
// 	return {
// 		getPosts: () => dispatch({type: 'GET_POSTS'})
// 	}
// }

export default connect(mapStateToProps)(Main)