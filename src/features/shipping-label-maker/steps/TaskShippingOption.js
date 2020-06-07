import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export class TaskShippingOption extends React.Component {
	onHandleChange = e => {
		e.preventDefault()
		const { onUpdateShippingInfo } = this.props
		const value = e.currentTarget.value
		onUpdateShippingInfo({ shippingOption: value })
	}

	render() {
		const { shippingOption } = this.props.wizardContext

		return (
			<>
				<ListSubheader color="primary">Select Shipping Option</ListSubheader>
				<FormControl component="fieldset">
					<FormLabel component="legend">Options</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="shipping"
						value={shippingOption}
						onChange={this.onHandleChange}
					>
						<FormControlLabel id="shippingOption" value="1" control={<Radio />} label="Ground" />
						<FormControlLabel id="shippingOption" value="2" control={<Radio />} label="Priority" />
					</RadioGroup>
				</FormControl>
			</>
		)
	}
}
