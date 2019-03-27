import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Comment, Header } from 'semantic-ui-react'
import { fetchPostComments, saveComment, deleteComment, fetchUpVoteComment, fetchDownVoteComment } from '../../actions/comments'
import CommentForm from './CommentForm'
import EditCommentModal from './EditCommentModal'
import CommentControls from './CommentControls'

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
									<CommentControls
										comment={c}
										editAction={this.show}
										deleteAction={this.props.deleteComment}
										fetchUpVoteComment={this.props.fetchUpVoteComment}
										fetchDownVoteComment={this.props.fetchDownVoteComment}
									/>
								</Comment.Actions>
							</Comment.Content>
						</Comment>
					)) : (
						<p>No comments in this post.</p>
					)}
				</Comment.Group>



				<CommentForm
					parentId={this.props.parentId}
					saveComment={this.props.saveComment}
					deleteComment={this.props.deleteComment}
					updateParent={this.props.updateParent}
				/>


				<EditCommentModal
					openFlag={this.state.isEditing}
					closeFunction={this.close}
					saveComment={this.props.saveComment}
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
		saveComment: (comment) => dispatch(saveComment(comment)),
		deleteComment: (id) => dispatch(deleteComment(id)),
		fetchUpVoteComment: (id) => dispatch(fetchUpVoteComment(id)),
		fetchDownVoteComment: (id) => dispatch(fetchDownVoteComment(id))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostComments)