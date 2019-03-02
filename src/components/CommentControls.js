import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import CommentVoteScore  from './CommentVoteScore'

const CommentControls = (props) => {
	return (
		<div>
			<Comment.Action  onClick={() => {props.editAction(props.comment)}}>
				<Icon name='edit'/>
				Edit
			</Comment.Action>
			<Comment.Action onClick={() => {props.deleteAction(props.comment.id)}}>
				<Icon name='trash alternate outline' />
				Delete
			</Comment.Action>
			<Comment.Action>
				<Icon color='green' name='check'/> {props.comment.voteScore} votes
			</Comment.Action>
			<Comment.Action>
				<CommentVoteScore
					commentId={props.comment.id}
					fetchUpVoteComment={props.fetchUpVoteComment}
					fetchDownVoteComment={props.fetchDownVoteComment}
					voteScore={props.comment.voteScore}
				/>
			</Comment.Action>
		</div>
	)
}

export default CommentControls