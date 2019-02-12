import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Form, Input, Message, Modal } from 'semantic-ui-react'
import { setIsEditingPost } from '../actions/posts'
import PostForm from './PostForm'

class EditPostModal extends React.Component {
	state = {
		open: false
	}

	render() {
		return (
			<Modal
				size='large' closeIcon
				open={this.props.isEditingPost}
				onClose={() => this.props.setIsEditingPost(false)}>
				<Modal.Header>Editing Post</Modal.Header>
				<Modal.Content>
					<PostForm editingPost={this.props.postDetails}/>
					<br/><br/>
				</Modal.Content>
			</Modal>
		);
	}
}



function mapStateToProps(state, ownProps) {
	return {
		isEditingPost: state.posts.isEditingPost,
		postDetails: state.posts.postDetails
	}
}



function mapDispatchToProps(dispatch) {
	return {
		setIsEditingPost: (flag) => dispatch(setIsEditingPost(flag))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostModal)