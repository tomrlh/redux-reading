import * as ApiUtil from '../utils/ApiUtil'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const upVote = (id) => ({ type: UP_VOTE, id })

export const downVote = (id) => ({ type: DOWN_VOTE, id })

export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
})

export const fetchPosts = () => dispatch => (
  ApiUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);
