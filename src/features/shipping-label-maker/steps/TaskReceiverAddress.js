import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider } from '@material-ui/core/styles'

export class TaskReceiverAddress extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const {
			onUpdateShippingInfo,
			wizardContext: { to },
		} = this.props

		const value = e.currentTarget.value
		const id = e.currentTarget.id
		onUpdateShippingInfo({ to: { ...to, [id]: value } })
	}

	render() {
		const receiverWidgetContext = this.props.wizardContext.to
		return (
			<>
				<ListSubheader color="primary">Enter Receiver's Address gghghghg</ListSubheader>
				<TextField
					id="name"
					label="Full Name"
					type="text"
					margin="normal"
					value={receiverWidgetContext.name}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="street"
					label="Street"
					type="text"
					margin="normal"
					value={receiverWidgetContext.street}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="city"
					label="City"
					type="text"
					margin="normal"
					value={receiverWidgetContext.city}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="state"
					label="State"
					type="text"
					margin="normal"
					value={receiverWidgetContext.state}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="zip"
					label="Zip Code"
					type="text"
					margin="normal"
					value={receiverWidgetContext.zip}
					onChange={this.onHandleChange}
				/>
			</>
		)
	}
}
