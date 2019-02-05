import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostsByCategory } from '../actions/posts'
import { Header, Icon, Menu } from 'semantic-ui-react'

class Categories extends Component {
	state = {activeItem: 'all'}

	handleItemClick = (name) => this.setState({ activeItem: name })

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
					/>
					{this.props.categories.map((c, idx) => 
						<Menu.Item
							key={idx} name={c.name}
							active={this.state.activeItem === c.name}
							onClick={() => {
								this.handleItemClick(c.name)
								this.props.getPostsByCategory(c.name)
							}}
						/>
					)}
				</Menu>
			</div>
		);
	}
}



function mapDispatchToProps(dispatch) {
	return {
		getPosts: () => dispatch(fetchPosts()),
		getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
	}
}

export default connect(null, mapDispatchToProps)(Categories)