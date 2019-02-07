import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Divider, Header, Icon } from 'semantic-ui-react'
import PostComments from '../components/PostComments'

import { fetchPosts } from '../actions/posts'
import { fetchPostComments } from '../actions/comments'

class Post extends Component {
	render() {
		let formatedDate = new Date(this.props.post.timestamp).toLocaleDateString('pt-BR')
		let post = this.props.post

		return (
			<Container text>
				<Header as='h5' textAlign='right'></Header>
				<Header as='h2'>{post.title}</Header>
				<span>
					<Icon name='user' /> {post.author} |
				 	<Icon name='calendar alternate' />{formatedDate}
				 </span>
				<Divider />
				<p>{post.body}</p>
				<Divider />
				<Icon name='thumbs up' color={post.voteScore>=0 ? 'green' : 'orange'} /> {post.voteScore}

				<br/>
				<br/>

				<PostComments postComments={this.props.postComments}/>
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
	return {
		post: state.posts.posts.find(p => p.id === ownProps.match.params.id),
		postComments: state.comments.postComments
	}
}



export default connect(mapStateToProps)(Post)