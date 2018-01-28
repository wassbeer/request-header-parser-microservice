// dependencies
const express = require('express'),
	useragent = require('useragent'),

	// application
	app = express(),
	port = 3000;

// route
app.get('/', (req, res) => {
	let ipaddress, language, OS;

	ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress, // browser IP
		language = req.headers['accept-language'].split(",")[0], // browser language
		OS = useragent.parse(req.headers['user-agent']).os.family; // browser OS

	res.json({ // respond with json
		"ipaddress": ipAddress,
		"language": language,
		"software": OS
	})
})

// listen
app.listen(port, (err) => {
	`server listening on port ${port}`
});
