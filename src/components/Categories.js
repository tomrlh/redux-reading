import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostsByCategory } from '../actions/posts'
import { Label, Header, Icon, Menu } from 'semantic-ui-react'

class Categories extends Component {
	state = {activeItem: 'all'}

	handleItemClick = (name) => this.setState({ activeItem: name })

	filterPostsByCategory = (categoryName) => {
		return this.props.allPosts.filter((p) => p.category === categoryName)
	}

	render() {
		return (
			<div>
				<Header as='h3'>
					<Icon name='list' />
					<Header.Content>Categories</Header.Content>
				</Header>
				<Menu fluid vertical tabular>
					<Menu.Item
						name='all' 
						active={this.state.activeItem === 'all'} 
						onClick={() => {
							this.handleItemClick('all')
							this.props.getPosts()
						}} 
					>
						<Label color='teal'>{this.props.allPosts.length}</Label>All
					</Menu.Item>
					{this.props.categories.map((c, idx) => 
						<Menu.Item
							key={idx} name={c.name}
							active={this.state.activeItem === c.name}
							onClick={() => {
								this.handleItemClick(c.name)
								this.props.getPostsByCategory(c.name)
							}}
						>
							<Label color='teal'>
								{this.filterPostsByCategory(c.name).length}
							</Label>
							{c.name.charAt(0).toUpperCase() + c.name.slice(1)}
						</Menu.Item>
					)}
				</Menu>
			</div>
		);
	}
}



function mapStateToProps(state) {
	return {
		allPosts: state.posts.allPosts
	}
}



function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(fetchPosts()),
		getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)