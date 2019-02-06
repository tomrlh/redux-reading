import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByVotes, sortByTitle, sortByDate } from '../actions/posts'
import { Button, Header, Icon } from 'semantic-ui-react'
class PostsSorter extends Component {
	render() {
		return (
			<div>
				<Header as='h3'>
					<Icon name='sort amount up' />
					<Header.Content>Order Posts By</Header.Content>
				</Header>
				<Button.Group>
					<Button size='mini' onClick={() => this.props.sortByVotes()}>
						Votes
					</Button>
					<Button size='mini' onClick={() => this.props.sortByTitle()}>
						Title
					</Button>
					<Button size='mini' onClick={() => this.props.sortByDate()}>
						Date
					</Button>
				</Button.Group>
			</div>
		)
	}
}



function mapDispatchToProps(dispatch) {
	return {
		sortByVotes: () => dispatch(sortByVotes()),
		sortByTitle: () => dispatch(sortByTitle()),
		sortByDate: () => dispatch(sortByDate())
	}
}


export default connect(null, mapDispatchToProps)(PostsSorter)