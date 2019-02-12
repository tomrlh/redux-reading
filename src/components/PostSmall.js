import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Divider, Icon, Item, Label, Segment } from 'semantic-ui-react'
import { fetchUpVote, fetchDownVote, savePost, deletePost } from '../actions/posts'
import PostControls from './PostControls'

class PostSmall extends React.Component {
	render() {
		let formatedDate = new Date(this.props.timestamp).toLocaleDateString('pt-BR')
		return (
			<Segment raised>
				<Label as='span' color='teal' ribbon>
					{formatedDate}
				</Label>
				<span>{this.props.title}</span>
				<Link to={`/post/${this.props.id}`}>
					<Button
						floated='right' size='mini' color='blue'
						icon labelPosition='right'>
						See Details
						<Icon name='arrow alternate circle right outline'/>
					</Button>
				</Link>
				<Divider/>

				<Item>
					<Item.Content>
						<Item.Meta></Item.Meta>
						{this.props.body &&
							<Item.Description>{this.props.body.slice(0, 500)}</Item.Description>
						}

						<Divider/>

						<PostControls
							id={this.props.id}
							title={this.props.title}
							author={this.props.author}
							body={this.props.body}
							category={this.props.category}
							voteScore={this.props.voteScore}
							timestamp={this.props.timestamp}

							deleteAction={this.props.deletePost}
							upVote={this.props.upVote}
							downVote={this.props.downVote}
						/>
					</Item.Content>
				</Item>
			</Segment>
		);
	}
}

PostSmall.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	category: PropTypes.string,
	voteScore: PropTypes.number,
	timestamp: PropTypes.number
}

PostSmall.defaultProps = {
	id: '',
	title: '',
	body: '',
	category: '',
	voteScore: 0,
	timestamp: 0
}



function mapDispatchToProps(dispatch) {
	return {
		upVote: (id) => dispatch(fetchUpVote(id)),
		downVote: (id) => dispatch(fetchDownVote(id)),
		savePost: (post) => dispatch(savePost(post)),
		deletePost: (id) => dispatch(deletePost(id))
	}
}

export default connect(null, mapDispatchToProps)(PostSmall)