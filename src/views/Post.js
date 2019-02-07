import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Comment, Divider, Header, Icon } from 'semantic-ui-react'
import PostComment from '../components/PostComment'

import { fetchPosts } from '../actions/posts'
import { fetchPostComments } from '../actions/comments'

class Post extends Component {
	render() {
		let formatedDate = new Date(this.props.post.timestamp).toLocaleDateString('pt-BR')

		return (
			<Container text>
				<Header as='h5' textAlign='right'></Header>
				<Header as='h2'>{this.props.post.title}</Header>
				<span>
					<Icon name='user' /> {this.props.post.author} |
				 	<Icon name='calendar alternate' />{formatedDate}
				 </span>
				<Divider />
				<p>{this.props.post.body}</p>
				<Divider />
				<Icon size='large' name='thumbs up' /> {this.props.post.voteScore}

				<br/>
				<br/>

				<Comment.Group>
					{this.props.postComments.map(c =>
						<PostComment
							key={c.id}
							author={c.author}
							body={c.body}
							timestamp={c.timestamp}
						/>
					)}
				</Comment.Group>
			</Container>
		);
	}



	componentDidMount() {
		this.props.dispatch(fetchPosts())
		this.props.dispatch(fetchPostComments(this.props.match.params.id))
	}
}




Post.propTypes = {
	post: PropTypes.object
}

Post.defaultProps = {
	post: { title: '', body: '', voteScore: null }
}



function mapStateToProps(state, ownProps) {
	console.log(state);
	console.log(state.posts);
	console.log(state.comments);
	return {
		post: state.posts.posts.find(p => p.id === ownProps.match.params.id),
		postComments: state.comments.postComments
	}
}



export default connect(mapStateToProps)(Post)