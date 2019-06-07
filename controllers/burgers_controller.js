var express = require("express");
var router = express.Router();

//Import model burger.js
var burger = require("../models/burger.js")

//Routes
//Create routes
router.get("/", function (req, res) {
	cat.all(function (data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//Add new burger
router.post("/api/burger", function (req, res) {
	burger.insertOne([
		"name", "devoured"
	], [
			req.body.burger_name, req.body.devoured
		], function (result) {
			// Send back the ID of the new quote
			res.json({ id: result.insertId });
		});
});




// Export routes for server.js to use.
module.exports = router;