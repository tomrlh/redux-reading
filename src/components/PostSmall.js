import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Icon, Item } from 'semantic-ui-react'
import { fetchUpVote, fetchDownVote } from '../actions/posts'

class PostSmall extends React.Component {

	render() {
		let post = this.props.post
		return (
			<Item>
				<Item.Content>
					<Item.Header as='a'>{post.title}</Item.Header>
					<Item.Description>{post.body.slice(0, 500)}</Item.Description>
					<Item.Extra>
						<Icon color='green' name='check'/>
						{post.voteScore} votes
						<Button.Group style={{ marginLeft: 10 }}>
							<Button
								size='mini' 
								color='green' 
								icon='thumbs up' 
								onClick={() => {this.props.upVote(post.id)}}
							/>
							<Button.Or/>
							<Button 
								size='mini' 
								color='orange' 
								icon='thumbs down' 
								onClick={() => {this.props.downVote(post.id)}}
							/>
						</Button.Group>
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
	post: { title: '', body: '', voteScore: null }
}



function mapDispatchToProps(dispatch) {
	return {
		upVote: (id) => dispatch(fetchUpVote(id)),
		downVote: (id) => dispatch(fetchDownVote(id))
	}
}

export default connect(null, mapDispatchToProps)(PostSmall)