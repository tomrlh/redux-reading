import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Icon, Item } from 'semantic-ui-react'
import { fetchUpVote, fetchDownVote } from '../actions/posts'
import VoteScore from './VoteScore'

class PostSmall extends React.Component {

	render() {
		let formatedDate = new Date(this.props.timestamp).toLocaleDateString('pt-BR')
		return (
			<Item>
				<Item.Content>
					<Item.Header>
						<Link to={`/post/${this.props.id}`}>
							{this.props.title}
						</Link>
					</Item.Header>
					<Item.Description>{this.props.body.slice(0, 500)}</Item.Description>
						<Icon color='green' name='check'/>
						{this.props.voteScore} votes
						<VoteScore
							id={this.props.id}
							upVote={this.props.upVote}
							downVote={this.props.downVote}
						/>
					<Item.Extra>{formatedDate}</Item.Extra>
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