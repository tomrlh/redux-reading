import React from 'react'

import { Comment, Header } from 'semantic-ui-react'

const PostComment = props => {
	return <Comment.Group>
				<Header as='h3' dividing>
					Comments
				</Header>
				{props.postComments.size > 0 ? (
					props.postComments.map(c =>
					<Comment>
						<Comment.Content>
							<Comment.Author as='a'>{c.author}</Comment.Author>

							<Comment.Metadata>
								<div>{new Date(c.timestamp).toLocaleDateString('pt-BR')}</div>
							</Comment.Metadata>

							<Comment.Text>{c.body}</Comment.Text>

							<Comment.Actions>
								<Comment.Action>Reply</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>
				)) : (
					<p>No comments in this post.</p>
				)}
			</Comment.Group>
}

export default PostComment



