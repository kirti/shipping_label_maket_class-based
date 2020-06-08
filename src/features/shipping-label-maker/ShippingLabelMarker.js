import React from 'react'
import Paper from '@material-ui/core/Paper'
import StepHub from './steps/StepHub'
import shippingInfoData from '../../data/shipping-label-marker.json'
import Wizard from '../../core/components/wizard/Wizard'
import Header from '../Header'

const Steps = Wizard(StepHub)

class ShippingLabelMaker extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			shippingInfo: shippingInfoData,
			steps: [
				'Enter the sender address',
				"Enter the receiver's address",
				'Enter the weight',
				'Select the Shipping Option',
				'Confirm',
			],
		}
	}

	updateShippingLblMarket = shippingLabelUpdates => {
		this.setState({
			shippingInfo: {
				...this.state.shippingInfo,
				...shippingLabelUpdates,
			},
		})
	}

	completeShippingLblMarket = () => {
		const { shippingInfo } = this.state
		console.log(shippingInfo, 'shippingInfo')
	}

	render() {
		const { shippingInfo: wizardContext, steps } = this.state
		const { classes } = this.props

		return (
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Steps
						wizardContext={wizardContext}
						steps={steps}
						header={Header}
						classes={classes}
						onComplete={this.completeShippingLblMarket}
						onUpdateShippingLblMarket={this.updateShippingLblMarket}
					/>
				</Paper>
			</main>
		)
	}
}

export default ShippingLabelMaker
