import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Divider, Grid, Header, Icon, Item, List } from 'semantic-ui-react'
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
						<PostsSorter />
						<Divider />
						<Header as='h3'>
							<Icon name='list' />
							<Header.Content>Categories</Header.Content>
						</Header>
						<List divided relaxed>
							{this.props.categories.map((c, idx) => 
								<List.Item key={idx}>
									<List.Icon name='caret right' size='large' verticalAlign='middle' />
									<List.Content>
										<List.Header as='a'>{c.name}</List.Header>
										<List.Description as='a'>{c.path}</List.Description>
									</List.Content>
								</List.Item>
							)}
						</List>
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