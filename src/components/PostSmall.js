import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Item } from 'semantic-ui-react'

export default class PostSmall extends React.Component {

	render() {
		let post = this.props.post
		return (
			<Item>
				<Item.Content>
					<Item.Header as='a'>{post.title}</Item.Header>
					<Item.Description>{post.body.slice(0, 500)}</Item.Description>
					<Item.Extra>
						<Icon
							color='green' 
							name='check' 
							style={{ marginRight: '15' }}/> 
							{post.voteScore} votes
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	}
}

PostSmall.propTypes = {
	post: PropTypes.object.isRequired
}

PostSmall.defaultProps = {
	post: { body: '' }
}
