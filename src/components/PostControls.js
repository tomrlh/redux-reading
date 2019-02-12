import React from 'react'
import { connect } from 'react-redux'
import { Icon, Item, Label } from 'semantic-ui-react'
import VoteScore from './VoteScore'
import { setIsEditingPost, setPostDetails } from '../actions/posts'

class PostControls extends React.Component {
	render() {
		return (
			<div>
				<Item.Extra>
					<Icon color='green' name='check'/> {this.props.voteScore} <span style={{marginRight: '5px'}}>votes</span>

					<Icon color='blue' name='comment'/> {this.props.commentCount} <span style={{marginRight: '5px'}}>comments</span>

					<Label as='a' onClick={() => {
						this.props.setIsEditingPost(true)
						this.props.setPostDetails({
							id: this.props.id,
							title: this.props.title,
							author: this.props.author,
							body: this.props.body,
							category: this.props.category,
							voteScore: this.props.voteScore
						})
					}}>
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
		setIsEditingPost: flag => dispatch(setIsEditingPost(flag)),
		setPostDetails: post => dispatch(setPostDetails(post))
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(PostControls)