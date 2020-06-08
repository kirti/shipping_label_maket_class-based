import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

class TaskSenderAddress extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const {
			onUpdateShippingLblMarket,
			wizardContext: { from },
		} = this.props
		const value = e.currentTarget.value
		const id = e.currentTarget.id
		onUpdateShippingLblMarket({ from: { ...from, [id]: value } })
	}

	render() {
		const {
			wizardContext: { from: senderWidgetContext },
		} = this.props

		return (
			<>
				<Typography variant="h6" gutterBottom>
					Enter Sender's Address
				</Typography>
				<ListSubheader color="primary">Please fill out the sender details below </ListSubheader>

				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							id="name"
							label="Full Name"
							type="text"
							margin="normal"
							fullWidth
							required
							autoComplete="off"
							value={senderWidgetContext.name}
							onChange={this.onHandleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="street"
							label="Street"
							type="text"
							margin="normal"
							fullWidth
							required
							autoComplete="off"
							value={senderWidgetContext.street}
							onChange={this.onHandleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							id="city"
							label="City"
							type="text"
							margin="normal"
							autoComplete="off"
							value={senderWidgetContext.city}
							onChange={this.onHandleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							id="state"
							label="State"
							type="text"
							margin="normal"
							autoComplete="off"
							value={senderWidgetContext.state}
							onChange={this.onHandleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							id="zip"
							label="Zip Code"
							type="text"
							margin="normal"
							autoComplete="off"
							value={senderWidgetContext.zip}
							onChange={this.onHandleChange}
						/>
					</Grid>
				</Grid>
			</>
		)
	}
}

TaskSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onUpdateShippingLblMarket: PropTypes.func.isRequired,
}
export default TaskSenderAddress
