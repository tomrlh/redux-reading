import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostsByCategory } from '../actions/posts'
import { setSelectedCategory } from '../actions/categories'
import { Label, Header, Icon, Menu } from 'semantic-ui-react'

class Categories extends Component {
	state = {activeCategory: 'all'}

	handleItemClick = (name) => this.setState({ activeCategory: name })

	render() {
		return (
			<div>
				<Header as='h3'>
					<Icon name='tags' />
					<Header.Content>Categories</Header.Content>
				</Header>
				<Menu fluid vertical tabular>
					<Menu.Item
						name='all'
						active={this.state.activeCategory === 'all'}
						onClick={() => {
							this.handleItemClick('all')
							this.props.setSelectedCategory('all')
						}}
					>
						<Label color='teal'>{this.props.allPosts.length}</Label>All
					</Menu.Item>
					{this.props.categories.map((c, idx) =>
						<Menu.Item
							key={idx} name={c.name}
							active={this.state.activeCategory === c.name}
							onClick={() => {
								this.handleItemClick(c.name)
								this.props.setSelectedCategory(c.name)
							}}
						>
							<Label color='teal'>
								{this.props.allPosts.filter(p => p.category === c.name).length}
							</Label>
							{c.name.charAt(0).toUpperCase() + c.name.slice(1)}
						</Menu.Item>
					)}
				</Menu>
			</div>
		);
	}

	componentDidMount() {this.props.fetchFilteredPosts('all')}
}



function mapStateToProps(state) {
	return {
		allPosts: state.posts.allPosts,
		filteredPosts: state.posts.filteredPosts
	}
}



function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(fetchPosts()),
		setSelectedCategory: (category) => dispatch(setSelectedCategory(category)),
		getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)