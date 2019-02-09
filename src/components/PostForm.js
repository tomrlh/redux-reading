import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

class PostForm extends React.Component {
	state = {
		title: '',
		author: '',
		body: '',
		category: ''
	}

	render() {
		let categoryOptions = []

		if(this.props.categories) {
			console.log(this.props.categories);
			categoryOptions = this.props.categories.map((c) => {
				c.text = c.name.charAt(0).toUpperCase() + c.name.slice(1)
				c.value = c.name
				return c
			})
		} else categoryOptions = [{text: 'not loaded', value: ''}]

		return (
			<Form>
				<Form.Field
					id='form-input-control-first-name'
					control={Input}
					label='Post Title'
					placeholder='Name your post...'
				/>
				<Form.Group widths='equal'>
					<Form.Field
						id='form-input-control-last-name'
						control={Input}
						label='Author'
						placeholder='Fill with your name...'
					/>
					<Form.Field
						control={Select}
						options={categoryOptions}
						label='Category'
						placeholder='Select a category...'
						search
						searchInput={{ id: 'form-select-control-gender' }}
					/>
				</Form.Group>


				<Form.Field
					id='form-textarea-control-opinion'
					control={TextArea}
					label='Content of your post'
					placeholder='Write your awesome post here...'
				/>
				<Form.Field
					id='form-button-control-public'
					control={Button}
					content='Confirm'
					label='Label with htmlFor'
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

export default connect(mapStateToProps)(PostForm)