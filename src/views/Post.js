import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Comment, Divider, Header, Icon } from 'semantic-ui-react'
import PostComment from '../components/PostComment'

import { fetchPosts } from '../actions/posts'

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
			</Container>
		);
	}



	componentDidMount() {
		this.props.dispatch(fetchPosts())
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
		post: state.posts.posts.find(p => p.id === ownProps.match.params.id)
	}
}



export default connect(mapStateToProps)(Post)