import React from 'react'
import StepHub from './steps/StepHub'
import shippingInfoData from '../../data/shipping-label-marker.json'
import Wizard from '../../core/components/wizard/Wizard'

const Steps = Wizard(StepHub)

class ShippingLabelMaker extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			shippingInfo: shippingInfoData,
			steps: [
				'Enter the sender address',
				`Enter the receiver's address`,
				'Enter the weight',
				'Select the Shipping Option',
				'Confirm',
			],
		}
	}

	updateShippingInfo = shippingInfoUpdates => {
		console.log(shippingInfoUpdates)
		this.setState({
			shippingInfo: {
				...this.state.shippingInfo,
				...shippingInfoUpdates,
			},
		})
	}

	render() {
		return (
			<>
				<Steps
					wizardContext={this.state.shippingInfo}
					steps={this.state.steps}
					onUpdateShippingInfo={this.updateShippingInfo}
				/>
			</>
		)
	}
}

export default ShippingLabelMaker
