import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input, Modal } from 'semantic-ui-react'

export default class EditCommentModal extends React.Component {
	state = {
		open: false,
		isSavingComment: false,
		hideAuthorAlert: true,
		hideBodyAlert: true,
		author: '',
		body: ''
	}

	formatAndEditComment = () => {
		this.setState({ isSavingComment: true })

		setTimeout(() => {
			let comment = this.props.comment
			comment.timestamp = new Date().getTime()
			comment.author = this.state.author.length === 0 ? this.props.comment.author : this.state.author
			comment.body = this.state.body.length === 0 ? this.props.comment.body : this.state.body

			this.props.addComment(comment)
			this.setState({open: false, isSavingComment: false})
			this.props.closeFunction()
		}, 500)
	}

	render() {
		return (
			<Modal
				size='tiny' closeIcon
				open={this.props.openFlag}
				onClose={() => {this.props.closeFunction()}}
			>
				<Modal.Header>Editing comment</Modal.Header>

				<Modal.Content>
					<Form>
						<Input
							icon='user' iconPosition='left' required
							defaultValue={this.props.comment.author}
							placeholder='Your name...' style={{marginBottom: '5px'}}
							onChange={(e, { value }) => this.setState({author: value})}
						/>
						<br/>
						<Form.TextArea placeholder='Type something...'
							defaultValue={this.props.comment.body} required
							onChange={(e, { value }) => this.setState({body: value})}
						/>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					{this.state.isSavingComment === true ? (
						<Button color='green' loading>
							Loading
						</Button>
					) : (
						<Button
							positive icon='checkmark'
							labelPosition='right'
							content='Save'
							onClick={() => {this.formatAndEditComment()}}
						/>
					)}
				</Modal.Actions>
			</Modal>
		);
	}
}



EditCommentModal.propTypes = {
	addComment: PropTypes.function,
	comment: PropTypes.object,
	openFlag: PropTypes.boolean,
	closeFunction: PropTypes.function
}