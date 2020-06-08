import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ShippingOption } from '../../../utils/shippingLabelMarker'
import PropTypes from 'prop-types'

class TaskShippingOption extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const { onUpdateShippingLblMarket } = this.props
		const value = e.currentTarget.value
		onUpdateShippingLblMarket({ shippingOption: value })
	}

	render() {
		const {
			wizardContext: { shippingOption },
		} = this.props

		return (
			<>
				<Typography variant="h6" gutterBottom>
					Enter Shipping Options
				</Typography>
				<ListSubheader color="primary">Select Shipping Option</ListSubheader>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<FormControl component="fieldset">
							<FormLabel component="legend">Options</FormLabel>
							<RadioGroup
								aria-label="gender"
								name="shipping"
								value={shippingOption}
								onChange={this.onHandleChange}
							>
								<FormControlLabel
									id="shippingOption"
									value={ShippingOption.ground}
									control={<Radio />}
									label="Ground"
								/>
								<FormControlLabel
									id="shippingOption"
									value={ShippingOption.priority}
									control={<Radio />}
									label="Priority"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
			</>
		)
	}
}

TaskShippingOption.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onUpdateShippingLblMarket: PropTypes.func.isRequired,
}
export default TaskShippingOption
