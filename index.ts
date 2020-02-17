var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set("port", process.env.PORT || 5000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /**
//  * Receives challenge response check (CRC)
//  **/
// app.get("/webhooks/twitter", function(request, response) {
// 	var crc_token = request.query.crc_token;

// 	if (crc_token) {
// 		var hash = security.get_challenge_response(
// 			crc_token,
// 			twitter.oauth.consumer_secret,
// 		);

// 		response.status(200);
// 		response.send({
// 			response_token: "sha256=" + hash,
// 		});
// 	} else {
// 		response.status(400);
// 		response.send("Error: crc_token missing from request.");
// 	}
// });

app.listen(app.get("port"), function() {
	console.log("Node app is running on port", app.get("port"));
});
