import React from 'react'
import { connect } from 'react-redux'
import { Icon, Item, Label } from 'semantic-ui-react'
import VoteScore from './VoteScore'
import { toggleIsEditingPost } from '../actions/posts'

class PostControls extends React.Component {
	render() {
		return (
			<div>
				<Item.Extra>
					<Icon color='green' name='check'/> {this.props.voteScore} <span style={{marginRight: '5px'}}>votes</span>

					<Label as='a' onClick={() => {this.props.toggleIsEditingPost()}}>
						<Icon name='edit' /> Edit
					</Label>

					<Label as='a' onClick={() => {this.props.deleteAction(this.props.id)}}>
						<Icon name='trash alternate outline' /> Delete
					</Label>

					<VoteScore
						id={this.props.id}
						upVote={this.props.upVote}
						downVote={this.props.downVote}
					/>
				</Item.Extra>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	return { isEditingPost: state.posts.isEditing }
}



function mapDispatchToProps(dispatch) {
	return {
		toggleIsEditingPost: () => dispatch(toggleIsEditingPost())
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(PostControls)