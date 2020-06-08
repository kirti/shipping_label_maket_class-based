import React from 'react'
import { useStyles } from '../../../theme'
import { getShippingCost, getShippingOption } from '../../../utils/shippingLabelMarker'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ListSubheader from '@material-ui/core/ListSubheader'

const ShippingOrderDetail = ({ wizardContext }) => {
	const classes = useStyles()
	const { from, to, weight, shippingOption } = wizardContext
	return (
		<>
			<Paper className={classes.paper}>
				<ListSubheader color="primary">Sender Information</ListSubheader>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						Name: {from.name}{' '}
					</Grid>
					<Grid item xs={12}>
						Street: {from.street}{' '}
					</Grid>
					<Grid item xs={12}>
						State: {from.state}{' '}
					</Grid>
					<Grid item xs={12}>
						Zip Code: {from.zip}{' '}
					</Grid>
				</Grid>
			</Paper>

			<Paper className={classes.paper}>
				<ListSubheader color="primary">Receiver Information</ListSubheader>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						Name: {to.name}{' '}
					</Grid>
					<Grid item xs={12}>
						Street: {to.street}{' '}
					</Grid>
					<Grid item xs={12}>
						State: {to.state}{' '}
					</Grid>
					<Grid item xs={12}>
						Zip Code: {to.zip}{' '}
					</Grid>
				</Grid>
			</Paper>

			<Paper className={classes.paper}>
				<ListSubheader color="primary">Weight</ListSubheader>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						Weight: {weight} lbs
					</Grid>
				</Grid>
			</Paper>

			<Paper className={classes.paper}>
				<ListSubheader color="primary">Shipping</ListSubheader>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						Shipping Option: {getShippingOption(shippingOption)}{' '}
					</Grid>
					<Grid item xs={12}>
						Shipping Option: Shipping Cost: ${getShippingCost(weight, shippingOption)}{' '}
					</Grid>
				</Grid>
			</Paper>
		</>
	)
}

export default ShippingOrderDetail
