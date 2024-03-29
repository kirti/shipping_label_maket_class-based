import { Selector } from 'testcafe'

fixture`Render Shipping Marker label`.page`http://localhost:3000/`

test('Render Shipping Marker flow ', async t => {
	await t
		.typeText(Selector('#username'), 'sapient', { replace: true })
		.typeText(Selector('#password'), 'sapient@123', { replace: true })
		.click(Selector('#login'))
		.expect(Selector('#root > div > main > div > main > form > h6').innerText)
		.contains("Enter Sender's Address")
		.click('#next')
		.expect(Selector('#root > div > main > div > main > form > h6').innerText)
		.contains("Enter Receiver's Address")
		.click('#next')
		.expect(Selector('#root > div > main > div > main > form > h6').innerText)
		.contains('Enter Weight')
		.click('#next')
		.expect(Selector('#root > div > main > div > main > form > h6').innerText)
		.contains('Enter Shipping Options')
		.click('#next')
		.expect(Selector('#root > div > main > div > main > form > h6').innerText)
		.contains('Confirm')
})
