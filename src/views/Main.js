import React from 'react'
import { connect } from 'react-redux'
import { Item, Grid, Segment, Container } from 'semantic-ui-react'
import PostSmall from '../components/PostSmall'

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
									key={p.id}
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
}



function mapStateToProps(state) {
	return {
		posts: state.posts.posts,
		categories: state.posts.categories
	}
}



function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch({type: 'GET_POSTS'})
	}
}

export default connect(mapStateToProps)(Main)