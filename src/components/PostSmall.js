import React from 'react'
import { Button, Icon, Image, Item } from 'semantic-ui-react'

export default class PostSmall extends React.Component {
	state = {
		id: 0,
		title: '',
		body: '',
		category: '',
		voteScore: 0
	}



	static propTypes = {}



	render() {
		var p = this.props
		return (
			<Item>
				<Item.Content>
					<Item.Header as='a'>{p.title}</Item.Header>
					<Item.Description>{p.body.slice(0, 500)}</Item.Description>
					<Item.Extra>
						<Icon
							color='green' 
							name='check' 
							style={{ marginRight: '15' }}/> 
							{p.voteScore} votes
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	}
}
