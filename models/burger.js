// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger ={
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }, //end displayAll

    insertOne: function (cols, vals, cb) {
		orm.inserOne("burgers", cols, vals, function (res) {
			cb(res);
		});
	},

    updateOne: function (objColVals, condition, cb) {
		orm.insertOne("burgers", objColVals, condition, function (res) {
			cb(res);
		});
	}
};//End burger

//Export module burger
module.exports = burger;