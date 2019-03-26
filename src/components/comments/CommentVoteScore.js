import React from 'react'
import { Button } from 'semantic-ui-react'


const CommentVoteScore = props => {
	return <Button.Group basic>
		<Button
			size='mini'
			color='green'
			icon='plus circle'
			onClick={() => {props.fetchUpVoteComment(props.commentId)}}
		/>
		<Button
			size='mini'
			color='orange'
			icon='minus circle'
			onClick={() => {props.fetchDownVoteComment(props.commentId)}}
		/>
	</Button.Group>
}

export default CommentVoteScore