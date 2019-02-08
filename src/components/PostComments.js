import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Comment, Header, Icon } from 'semantic-ui-react'
import { fetchPostComments, addComment, deleteComment } from '../actions/comments'
import CommentForm from './CommentForm'
import EditCommentModal from './EditCommentModal'

class PostComments extends Component {
	state = {
		isEditing: false,
		isSavingComment: false,
		commentToEdit: {},
		author: '',
		body: ''
	}

	show = (comment) => this.setState({
		isEditing: true,
		commentToEdit: comment,
		author: comment.author,
		body: comment.body
	})

	close = () => this.setState({ isEditing: false })

	render() {
		return (
			<div>
				<Comment.Group>
					<Header as='h3' dividing>
						Comments
					</Header>
					{this.props.postComments.length > 0 ? (
						this.props.postComments.map((c, idx) =>
						<Comment key={idx}>
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


				<EditCommentModal
					openFlag={this.state.isEditing}
					closeFunction={this.close}
					addComment={this.props.addComment}
					comment={this.state.commentToEdit}
				/>
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