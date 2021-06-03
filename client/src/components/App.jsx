import React from 'react'

import styles from './app.css'

import Overview from './Overview.jsx'

class App extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<h1 className={styles.testClass}>CATWALK</h1>
				<Overview/>
			</div>

		);
	}
}

export default App