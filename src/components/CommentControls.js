import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

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
		</div>
	)
}

export default CommentControls