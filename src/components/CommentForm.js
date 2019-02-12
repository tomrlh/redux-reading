import React from 'react'
import { Button, Form, Header, Input } from 'semantic-ui-react'

export default class CommentForm extends React.Component {
	state = {
		author: '',
		body: ''
	}

	formatAndAddComment = () => {
		let comment = {}

		comment.timestamp = new Date().getTime()
		comment.parentId = this.props.parentId
		comment.id = comment.parentId + comment.timestamp
		comment.author = this.state.author
		comment.body = this.state.body

		this.props.addComment(comment)
	}

	render() {
		return (
			<Form reply onSubmit={() => {this.formatAndAddComment()}}>
				<Header as='h3' dividing>
					Comment here
				</Header>

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
				/>
			</Form>
		);
	}
}
