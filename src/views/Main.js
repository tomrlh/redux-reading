import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Header, Item } from 'semantic-ui-react'
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
		let postsToShow = []
		let selectedCategory = this.props.selectedCategory
		if(selectedCategory && selectedCategory !== 'all')
			postsToShow = this.props.allPosts.filter(p => p.category === selectedCategory)
		else
			postsToShow = this.props.allPosts

		return (
			<Container className='containerStyle'>
				<Grid columns='equal'>
					<Grid.Column width={4}>
						<Categories categories={this.props.categories}/>
					</Grid.Column>

					<Grid.Column width={8}>
						<Item.Group divided>
							{postsToShow.map((p, idx) =>
								<PostSmall key={idx}
									id={p.id}
									title={p.title}
									body={p.body}
									author={p.author}
									category={p.category}
									voteScore={p.voteScore}
									commentCount={p.commentCount}

									timestamp={p.timestamp}
									editModalFlag={this.state.isEditing}
								/>
							)}

							{postsToShow.length <= 0 &&
								<Header as='h4'>No posts to show here.</Header>
							}
						</Item.Group>
					</Grid.Column>


					<Grid.Column width={4}>
						<PostsSorter/>
						<Divider/>
						<Link to={'/posts/add/new'}>
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
	allPosts: PropTypes.array,
	categories: PropTypes.array
}

Main.defaultProps = {
	allPosts: [],
	categories: []
}



function mapStateToProps(state) {
	return {
		allPosts: state.posts.allPosts,
		categories: state.categories.allCategories,
		selectedCategory: state.categories.selectedCategory
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(fetchPosts()),
		getCategories: () => dispatch(fetchCategories())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)