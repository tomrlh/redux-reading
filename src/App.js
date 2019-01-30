import React, { Component } from 'react'
import { Item, Grid, Segment, Container } from 'semantic-ui-react'
import './App.css'
import PostSmall from './components/PostSmall'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Main from './views/Main'

class App extends Component {

	render() {
		return (
			<HashRouter>
				<div className="App">
				<Switch>
					<Route path='/' component={Main} />
				</Switch>
				</div>
			</HashRouter>
		);
	}
}
export default connect(null, null)(App)