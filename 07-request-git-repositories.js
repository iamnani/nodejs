/**
 * New node file
 */

var https = require("https");

function getRepos(user, callback) {
  var options = {
		host : "api.github.com",
		path : "/users/" + user + "/repos",
		method: "GET"
	};
	
	var request = https.request(options, function(response) {
		var body = "";
		
		response.on("data", function(chunk) {
			body += chunk.toString("utf8");
		});
		
		response.on("end", function(){
			var json = JSON.parse(body);
			console.log(json.length);
			callback(body);
		});
		
	});
	request.end();
}

getRepos("iamnani", function(data) {
	console.log('call back function called..!!');
	console.log(data);
});
