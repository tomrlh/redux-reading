import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import PostComments from '../components/comments/PostComments'
import PostControls from '../components/PostControls'
import EditPostModal from '../components/EditPostModal'
import { fetchPost, fetchUpVote, fetchDownVote, deletePost } from '../actions/posts'

class PostDetails extends Component {
	state ={
		isEditing: false
	}

	render() {
		let formatedDate = new Date(this.props.postDetails.timestamp).toLocaleDateString('pt-BR')
		let post = this.props.postDetails
		console.log(post)
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
						{post && !post.deleted &&
							<div>
								<Header as='h5' textAlign='right'></Header>
								<Header as='h2'>{post.title}</Header>
								<span>
									<Icon name='user' /> {post.author} |
								 	<Icon name='calendar alternate' />{formatedDate}
								 </span>
								<Divider />
								<p>{post.body}</p>
								<Divider />
								<PostControls
									id={post.id}
									title={post.title}
									author={post.author}
									body={post.body}
									category={post.category}
									voteScore={post.voteScore}
									commentCount={post.commentCount}
									timestamp={post.timestamp}

									deleteAction={this.props.deletePost}
									upVote={this.props.upVote}
									downVote={this.props.downVote}
								/>
								<br/><br/>
								<PostComments parentId={this.props.match.params.id} updateParent={this.updateParent}/>
							</div>
						}
						{post.deleted &&
							<Header as='h4' textAlign='right'>This post was deleted.</Header>
						}
					</Grid.Column>
					<Grid.Column width={4}></Grid.Column>
				</Grid>
				<EditPostModal/>
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

	updateParent = () => {
		this.props.fetchPost(this.props.match.params.id)
	}
}



PostDetails.propTypes = {
	postDetails: PropTypes.object
}

PostDetails.defaultProps = {
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
		fetchPost: (id) => dispatch(fetchPost(id)),
		deletePost: (id) => dispatch(deletePost(id)),
		upVote: (id) => dispatch(fetchUpVote(id)),
		downVote: (id) => dispatch(fetchDownVote(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
