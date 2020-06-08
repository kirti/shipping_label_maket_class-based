import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShippingLabelMarker from '../features/shipping-label-maker/ShippingLabelMarker'
import Authentication from '../core/components/auth/Authentication'
import { useStyles } from '../theme'

const AuthorizedShippingLabelMarker = Authentication(ShippingLabelMarker)

const Home = () => {
	const classes = useStyles()
	return (
		<>
			<Header />
			<AuthorizedShippingLabelMarker classes={classes} />
			<Footer />
		</>
	)
}

export default Home
