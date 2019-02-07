import React from 'react'
import { Button } from 'semantic-ui-react'


const VoteScore = props => {
	return <Button.Group style={{ marginLeft: 10 }}>
				<Button
					size='mini' 
					color='green' 
					icon='thumbs up' 
					onClick={() => {props.upVote(props.id)}}
				/>
				<Button.Or/>
				<Button
					size='mini' 
					color='orange' 
					icon='thumbs down' 
					onClick={() => {props.downVote(props.id)}}
				/>
			</Button.Group>
}

export default VoteScore