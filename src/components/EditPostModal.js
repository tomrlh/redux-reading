import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Form, Input, Message, Modal } from 'semantic-ui-react'
import { toggleIsEditingPost } from '../actions/posts'
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
				onClose={() => this.props.toggleIsEditingPost()}>
				<Modal.Header>Delete Your Account</Modal.Header>
				<Modal.Content>
					<PostForm/>
				</Modal.Content>
				<Modal.Actions>
					<Button negative>No</Button>
					<Button positive icon='checkmark' labelPosition='right' content='Yes' />
				</Modal.Actions>
			</Modal>
		);
	}
}



function mapStateToProps(state, ownProps) {
	return { isEditingPost: state.posts.isEditingPost }
}



function mapDispatchToProps(dispatch) {
	return {
		toggleIsEditingPost: () => dispatch(toggleIsEditingPost())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostModal)