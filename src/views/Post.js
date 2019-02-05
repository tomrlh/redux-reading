import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'

import { fetchPosts } from '../actions/posts'

class Post extends Component {
	render() {
		let post = this.props.post
		return (
			<Container text>
				<Header as='h2'>{post.title}</Header>
				
				<p>{post.body}</p>

				autor, data

				editar e remover postagem

				listar comentários

				adicionar editar e remover comentário
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



export default connect(null)(Post)