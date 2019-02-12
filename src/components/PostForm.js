import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Message, TextArea, Button, Select } from 'semantic-ui-react'
import { savePost } from '../actions/posts'

class PostForm extends React.Component {
	state = {
		title: '',
		author: '',
		body: '',
		category: '',
		isSaving: false,
		isSaved: false
	}

	handleDismiss = () => {
    	this.setState({ isSaved: false })
	}

	formatAndSavePost = () => {
		this.setState({ isSaving: true, isSaved: false })
		let post = this.state

		post.timestamp = new Date().getTime()
		post.id = post.author + post.timestamp

		this.props.savePost(post)
		this.setState({
			title: '',
			author: '',
			body: '',
			category: '',
			isSaving: false,
			isSaved: true
		})
	}

	render() {
		let categoryOptions = []

		if(this.props.categories) {
			categoryOptions = this.props.categories.map((c) => {
				c.text = c.name.charAt(0).toUpperCase() + c.name.slice(1)
				c.value = c.name
				return c
			})
		} else categoryOptions = [{text: 'not loaded', value: ''}]

		return (
			<Form
				loading={this.state.isSaving}
				success={this.state.isSaved}
				onSubmit={() => {this.formatAndSavePost()}}
			>
				<Message
					success
					header='Success'
					content="Your blog post was created."
					onDismiss={this.handleDismiss}
				/>
				<Form.Field
					id='form-input-control-first-name'
					control={Input} required
					label='Post Title'
					placeholder='Name your post...'
					onChange={(e, { value }) => this.setState({title: value})}
				/>
				<Form.Group widths='equal'>
					<Form.Field
						id='form-input-control-last-name'
						control={Input} required
						label='Author'
						placeholder='Fill with your name...'
						onChange={(e, { value }) => this.setState({author: value})}
					/>
					<Form.Field
						control={Select} required
						options={categoryOptions}
						label='Category' search
						placeholder='Select a category...'
						searchInput={{ id: 'form-select-control-gender' }}
						onChange={(e, { value }) => this.setState({category: value})}
					/>
				</Form.Group>


				<Form.Field
					id='form-textarea-control-opinion'
					control={TextArea} required
					label='Content of your post'
					placeholder='Write your awesome post here...'
					onChange={(e, { value }) => this.setState({body: value})}
				/>
				<Form.Field
					id='form-button-control-public'
					control={Button}
					floated='right'
					positive
					icon='check'
					content='Create Post'
				/>
			</Form>
		);
	}
}



function mapStateToProps(state) {
	return {
		categories: state.categories.allCategories
	}
}



function mapDispatchToProps(dispatch) {
	return {
		savePost: (post) => dispatch(savePost(post))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)