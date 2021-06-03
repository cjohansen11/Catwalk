import React from 'react'

import styles from './app.css'

/* ** IMPORT COMPONENT FILES ** */
import RelatedProduct from './RelatedProduct.jsx';

class App extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<h1 className={styles.testClass}>CATWALK</h1>
				<RelatedProduct /*props={this.state}*/ />
			</div>
		);
	}
}

export default App