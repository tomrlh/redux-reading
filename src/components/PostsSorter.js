import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByVotes, sortByTitle, sortByDate } from '../actions/posts'
import { Button, Header, Icon, Popup } from 'semantic-ui-react'
class PostsSorter extends Component {
	render() {
		return (
			<div>
				<Header as='h3'>
					<Icon name='sort' />
					<Header.Content>Order Posts</Header.Content>
				</Header>
				<Button.Group fluid>
					<Popup content='By votes' position='bottom center' trigger={
						<Button icon size='mini' onClick={() => this.props.sortByVotes()}>
							<Icon size='large' name='sort numeric up'/>
						</Button>
					}/>

					<Popup content='By title' position='bottom center' trigger={
						<Button icon size='mini' onClick={() => this.props.sortByTitle()}>
							<Icon size='large' name='sort alphabet down'/>
						</Button>
					}/>

					<Popup content='By date' position='bottom center' trigger={
						<Button icon size='mini' onClick={() => this.props.sortByDate()}>
							<Icon size='large' name='calendar'/>
						</Button>
					}/>
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