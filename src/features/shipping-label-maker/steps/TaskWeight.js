import React from 'react'
import PropTypes from 'prop-types'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { convertWeightToInt } from '../../../utils/shippingLabelMarker'

class TaskWeight extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const { onUpdateShippingLblMarket } = this.props
		const value = convertWeightToInt(e.currentTarget.value)
		onUpdateShippingLblMarket({ weight: value })
	}

	render() {
		const {
			wizardContext: { weight: weightWidgetContext },
		} = this.props

		return (
			<>
				<Typography variant="h6" gutterBottom>
					Enter Weight
				</Typography>
				<ListSubheader color="primary">Please Enter the weight in pounds </ListSubheader>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<TextField
							id="weight"
							label="Weight"
							type="number"
							value={weightWidgetContext}
							onChange={this.onHandleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" color="inherit">
							Pounds
						</Typography>
					</Grid>
				</Grid>
			</>
		)
	}
}

TaskWeight.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onUpdateShippingLblMarket: PropTypes.func.isRequired,
}
export default TaskWeight
