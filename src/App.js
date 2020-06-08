import React from 'react'
import Home from './common/Home'
import { useStyles } from './theme'

function App() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Home />
		</div>
	)
}

export default App
