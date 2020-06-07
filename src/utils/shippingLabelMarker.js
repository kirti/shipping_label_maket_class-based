export function getShippingOption(shippingOption) {
	return shippingOption === '1' ? 'Ground' : 'Priority'
}

export function getShippingCost(weight, shippingOption) {
	const shippingRate = 0.4
	return (Number(weight) * shippingRate * (shippingOption === '1' ? 1 : 1.5)).toFixed(2)
}
