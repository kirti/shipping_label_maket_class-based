import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider } from '@material-ui/core/styles'

export class TaskSenderAddress extends React.Component {

	constructor(props) {
		super(props);
	  }

	onHandleChange = e => {
		e.preventDefault()
		const {
			onUpdateShippingInfo,
			wizardContext: { from },
		} = this.props

		const value = e.currentTarget.value
		const id = e.currentTarget.id
		onUpdateShippingInfo({ from: { ...from, [id]: value } })
	}

	render() {
		const senderWidgetContext = this.props.wizardContext.from
		return (
			<>
				<ListSubheader color="primary">Enter Receiver's Address</ListSubheader>
				<TextField
					id="name"
					label="Full Name"
					type="text"
					margin="normal"
					value={senderWidgetContext.name}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="street"
					label="Street"
					type="text"
					margin="normal"
					value={senderWidgetContext.street}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="city"
					label="City"
					type="text"
					margin="normal"
					value={senderWidgetContext.city}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="state"
					label="State"
					type="text"
					margin="normal"
					value={senderWidgetContext.state}
					onChange={this.onHandleChange}
				/>
				<TextField
					id="zip"
					label="Zip Code"
					type="text"
					margin="normal"
					value={senderWidgetContext.zip}
					onChange={this.onHandleChange}
				/>
			</>
		)
	}
}
