import React from 'react'
import { Button, Form, Header, Input, Message } from 'semantic-ui-react'

export default class CommentForm extends React.Component {
	state = {
		hideAuthorAlert: true,
		hideBodyAlert: true,
		author: '',
		body: '',
	}

	formatAndAddComment = () => {
		let comment = {}

		if(this.state.author.length === 0) {
			this.setState({hideAuthorAlert: false})
			return
		} else this.setState({hideAuthorAlert: true})
		if(this.state.body.length === 0) {
			this.setState({hideBodyAlert: false})
			return
		} else this.setState({hideBodyAlert: true})

		comment.timestamp = new Date().getTime()
		comment.parentId = this.props.parentId
		comment.id = comment.parentId + comment.timestamp
		comment.author = this.state.author
		comment.body = this.state.body

		this.props.addComment(comment)
	}

	render() {
		return (
			<Form reply>
				<Header as='h3' dividing>
					Comment here
				</Header>

				<Message color='yellow' hidden={this.state.hideAuthorAlert}>The author must have a name.</Message>
				<Message color='yellow' hidden={this.state.hideBodyAlert}>The comment must have some content.</Message>

				<Input
					icon='user' iconPosition='left'
					placeholder='Your name...' style={{marginBottom: '5px'}}
					onChange={(e, { value }) => this.setState({author: value})}
				/>
				<br/>
				<Form.TextArea placeholder='Type something...'
					onChange={(e, { value }) => this.setState({body: value})}/>
				<Button
					content='Add Comment' icon='edit'
					labelPosition='left' primary
					onClick={() => {this.formatAndAddComment()}}
				/>
			</Form>
		);
	}
}
