// Imports 
import ReactDOM from 'react-dom'
import React from 'react'

// Styles
import AppStyle from '../styles/app.css'


class App extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<h1 className={AppStyle.test}>CATWALK</h1>
			</div>
		);
	}
}

export default App