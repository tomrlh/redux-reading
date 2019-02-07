import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { fetchPostComments, addComment } from '../actions/comments'

class PostComments extends Component {
	initialState = () => {
		return {
			id: '1231232',
			timestamp: 123456789,
			body: '',
			author: '',
			parentId: this.props.parentId
		}
	}

	state = this.initialState()

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
									<Comment.Action>Reply</Comment.Action>
								</Comment.Actions>
							</Comment.Content>
						</Comment>
					)) : (
						<p>No comments in this post.</p>
					)}
				</Comment.Group>

				<Form reply>
					<Form.TextArea onChange={(e, { value }) => this.setState({body: value})}/>
					<Button
						content='Add Comment' icon='edit'
						labelPosition='left' primary
						onClick={() => {this.props.addComment(this.state)}}
					/>
				</Form>
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



function mapStateToProps(state) {
	return {
		postComments: state.comments.postComments
	}
}



function mapDispatchToProps(dispatch) {
	return {
		fetchPostComments: (id) => dispatch(fetchPostComments(id)),
		addComment: (comment) => dispatch(addComment(comment))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostComments)