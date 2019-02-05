import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Main from './views/Main'
import Post from './views/Post'

class App extends Component {

	render() {
		return (
			<HashRouter>
				<div className="App">
				<Switch>
					<Route path='/' exact={true} component={Main} />
					<Route path='/post/:id' component={Post} />
				</Switch>
				</div>
			</HashRouter>
		);
	}
}
export default connect(null, null)(App)