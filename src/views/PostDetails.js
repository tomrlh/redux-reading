import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import PostComments from '../components/PostComments'

import { fetchPost } from '../actions/posts'

class PostDetail extends Component {
	render() {
		let formatedDate = new Date(this.props.postDetails.timestamp).toLocaleDateString('pt-BR')
		let post = this.props.postDetails

		return (
			<Container className='containerStyle'>
				<Grid columns='equal'>
					<Grid.Column width={4}>
					<Link to={'/'}>
						<Button fluid color='blue'>
							Return to Main Page
						</Button>
					</Link>
					</Grid.Column>

					<Grid.Column width={8}>
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
						<br/><br/>
						<PostComments parentId={this.props.match.params.id}/>
					</Grid.Column>
					<Grid.Column width={4}></Grid.Column>
				</Grid>
			</Container>
		);
	}


	componentDidUpdate(prevProps){
		if(this.props.match.params.id !== prevProps.match.params.id){
			this.props.fetchPost(this.props.match.params.id)
			this.props.fetchPostsComments(this.props.match.params.id)
		}
	}



	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id)
	}
}



PostDetail.propTypes = {
	postDetails: PropTypes.object
}

PostDetail.defaultProps = {
	postDetails: { title: '', body: '', voteScore: null, parentId: '' }
}



function mapStateToProps(state, ownProps) {
	return {
		postDetails: state.posts.postDetails,
		postComments: state.comments.postComments
	}
}



function mapDispatchToProps(dispatch) {
	return {
		fetchPost: (id) => dispatch(fetchPost(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
