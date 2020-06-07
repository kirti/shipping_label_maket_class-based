import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export class TaskWeight extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const {
			onUpdateShippingInfo
		} = this.props
		
		const value = e.currentTarget.value
		onUpdateShippingInfo({ weight: value })
	}

	render() {
		const { weight: weightWidgetContext } = this.props.wizardContext
		return (
			<>
				<ListSubheader color="primary">Enter Weight fdfgg</ListSubheader>
				<TextField
					id="weight"
					label="Weight"
					type="text"
					value={weightWidgetContext}
					onChange={this.onHandleChange}
				/>
				<Typography variant="h6" color="inherit">
					Pounds
				</Typography>
			</>
		)
	}
}
