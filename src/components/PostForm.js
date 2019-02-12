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

	handleDismiss = () => {this.setState({ isSaved: false })}

	formatAndSavePost = () => {
		this.setState({ isSaving: true, isSaved: false })
		let post = this.state
		let editingPost = this.props.editingPost

		post.timestamp = new Date().getTime()
		if(editingPost)
			post.id = editingPost.id
		else
			post.id = post.author + post.timestamp

		post.title = this.state.title === '' ? editingPost.title : this.state.title
		post.author = this.state.author === '' ? editingPost.author : this.state.author
		post.body = this.state.body === '' ? editingPost.body : this.state.body
		post.category = this.state.category === '' ? editingPost.category : this.state.category

		this.props.savePost(post)
		this.setState({
			id: '',
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
		let editingPost = this.props.editingPost
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
					content="Your blog post was saved."
					onDismiss={this.handleDismiss}
				/>
				<Form.Field
					id='form-input-control-first-name'
					control={Input} required
					label='Post Title'
					defaultValue={editingPost ? editingPost.title : ''}
					placeholder='Name your post...'
					onChange={(e, { value }) => this.setState({title: value})}
				/>
				<Form.Group widths='equal'>
					<Form.Field
						id='form-input-control-last-name'
						control={Input} required
						label='Author'
						defaultValue={editingPost ? editingPost.author : ''}
						placeholder='Fill with your name...'
						onChange={(e, { value }) => this.setState({author: value})}
					/>
					<Form.Field
						control={Select} required
						options={categoryOptions}
						label='Category' search
						defaultValue={editingPost ? editingPost.category : ''}
						placeholder='Select a category...'
						searchInput={{ id: 'form-select-control-gender' }}
						onChange={(e, { value }) => this.setState({category: value})}
					/>
				</Form.Group>


				<Form.Field
					id='form-textarea-control-opinion'
					control={TextArea} required
					defaultValue={editingPost ? editingPost.body : ''}
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
					content='Save Post'
				/>
			</Form>
		);
	}
}



function mapStateToProps(state) {
	return {
		categories: state.categories.allCategories,
		isEditingPost: state.posts.isEditingPost
	}
}



function mapDispatchToProps(dispatch) {
	return {
		savePost: (post) => dispatch(savePost(post))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)