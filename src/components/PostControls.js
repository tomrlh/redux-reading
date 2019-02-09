import React from 'react'
import { Icon, Item, Label } from 'semantic-ui-react'
import VoteScore from './VoteScore'

const PostControls = (props) => {
	let post = {
		id: props.id,
		title: props.title,
		body: props.body,
		category: props.category,
		voteScore: props.voteScore,
		timestamp: props.timestamp
	}
	return (
		<div>
			<Item.Extra>
				<Icon color='green' name='check'/> {props.voteScore} <span>votes</span>

				<Label as='a' onClick={() => {props.editAction(post)}}>
					<Icon name='edit' /> Edit
				</Label>

				<Label as='a' onClick={() => {props.deleteAction(props.id)}}>
					<Icon name='trash alternate outline' /> Delete
				</Label>

				<VoteScore
					id={props.id}
					upVote={props.upVote}
					downVote={props.downVote}
				/>
			</Item.Extra>
		</div>
	)
}

export default PostControls