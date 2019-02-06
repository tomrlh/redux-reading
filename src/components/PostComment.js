import React from 'react'

import { Button, Comment, Form, Header } from 'semantic-ui-react'

const PostComment = props => {
	let formatedDate = new Date(props.timestamp).toLocaleDateString('pt-BR')

	return <Comment>
			<Comment.Avatar src='/images/avatar/small/matt.jpg' />
			<Comment.Content>
				<Comment.Author as='a'>{props.author}</Comment.Author>

				<Comment.Metadata>
					<div>{formatedDate}</div>
				</Comment.Metadata>

				<Comment.Text>{props.body}</Comment.Text>

				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>
}

export default PostComment