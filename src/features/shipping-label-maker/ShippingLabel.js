import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import ShippingOrderDetail from './steps/ShippingOrderDetail'

export function ShippingLabel({ wizardContext, classes }) {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Label Order Details
			</Typography>
			<ListSubheader color="primary">Last Recent order details </ListSubheader>
			<Divider className={classes.divider} />
			<ShippingOrderDetail wizardContext={wizardContext} />
		</>
	)
}
