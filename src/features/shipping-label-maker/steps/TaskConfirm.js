import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import ShippingOrderDetail from './ShippingOrderDetail'

function TaskConfirm({ wizardContext, classes }) {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Confirm
			</Typography>
			<ListSubheader color="primary">Please Review and confirm the details </ListSubheader>
			<Divider className={classes.divider} />
			<ShippingOrderDetail wizardContext={wizardContext} />
		</>
	)
}

TaskConfirm.propTypes = {
	wizardContext: PropTypes.object.isRequired,
}
export default TaskConfirm
