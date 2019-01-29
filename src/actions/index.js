export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'

export function upVote({ type: UP_VOTE, id}) {
	return {
		type: UP_VOTE,
		id
	}
}