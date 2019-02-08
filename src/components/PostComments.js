import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Comment, Form, Header, Icon, Input, Modal } from 'semantic-ui-react'
import { fetchPostComments, addComment, deleteComment } from '../actions/comments'
import CommentForm from './CommentForm'

class PostComments extends Component {
	state = {
		isEditing: false,
		body: '',
		author: '',
		commentToEdit: {},
		parentId: '',
		timestamp: 0,

	}

	show = (comment) => this.setState({ isEditing: true, commentToEdit: comment })

	close = () => this.setState({ isEditing: false })

	formatAndEditComment = (id) => {
		let comment = this.state

		if(comment.author.length === 0) {
			this.setState({hideAuthorAlert: false})
			return
		} else this.setState({hideAuthorAlert: true})
		if(comment.body.length === 0) {
			this.setState({hideBodyAlert: false})
			return
		} else this.setState({hideBodyAlert: true})

		comment.timestamp = new Date().getTime()
		comment.parentId = this.props.parentId
		comment.id = id
		comment.author = this.state.author
		comment.body = this.state.body

		this.props.addComment(comment)
	}


	render() {
		return (
			<div>
				<Comment.Group>
					<Header as='h3' dividing>
						Comments
					</Header>
					{this.props.postComments.length > 0 ? (
						this.props.postComments.map(c =>
						<Comment key={c.id}>
							<Comment.Content>
								<Comment.Author as='a'>{c.author}</Comment.Author>

								<Comment.Metadata>
									<div>{new Date(c.timestamp).toLocaleDateString('pt-BR')}</div>
								</Comment.Metadata>

								<Comment.Text>{c.body}</Comment.Text>

								<Comment.Actions>
									<Comment.Action  onClick={() => {this.show(c)}}>
										<Icon name='edit'/>
										Edit
									</Comment.Action>
									<Comment.Action onClick={() => {this.props.deleteComment(c.id)}}>
										<Icon name='trash alternate outline' />
										Delete
									</Comment.Action>
								</Comment.Actions>
							</Comment.Content>
						</Comment>
					)) : (
						<p>No comments in this post.</p>
					)}
				</Comment.Group>



				<CommentForm
					parentId={this.props.parentId}
					addComment={this.props.addComment}
					deleteComment={this.props.deleteComment}
				/>


				<Modal size='small' open={this.state.isEditing} onClose={() => {this.close()}}>
					<Modal.Header>Editing comment</Modal.Header>
					<Modal.Content>
						<Form>
							<Input
								icon='user' iconPosition='left'
								placeholder='Your name...' style={{marginBottom: '5px'}}
								onChange={(e, { value }) => this.setState({author: value})}
							/>
							<br/>
							<Form.TextArea placeholder='Type something...'
								value={this.state.body}
								onChange={(e, { value }) => this.setState({body: value})}
							/>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button negative icon='close' content='Close'/>
						<Button
							positive icon='checkmark'
							labelPosition='right'
							content='Save'
							onClick={() => {this.formatAndEditComment(this.state.commentToEditId)}}
						/>
					</Modal.Actions>
				</Modal>
			</div>
		)
	}



	componentDidMount() {
		if(this.props.parentId)
			this.props.fetchPostComments(this.props.parentId)
	}
}



PostComments.propTypes = {
	parentId: PropTypes.string
}

PostComments.defaultProps = {
	parentId: ''
}



function mapStateToProps(state, ownProps) {
	return {
		postComments: state.comments.postComments.filter((c) => c.deleted === false)
	}
}



function mapDispatchToProps(dispatch) {
	return {
		fetchPostComments: (id) => dispatch(fetchPostComments(id)),
		addComment: (comment) => dispatch(addComment(comment)),
		deleteComment: (id) => dispatch(deleteComment(id))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostComments)