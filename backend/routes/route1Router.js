const express = require("express"); 
const route1 = express.Router(); 


route1.get("/", function (req, res) {
  res.json({"success" : true}); 
});

module.exports = route1;


// Access all interviews
// interviews.get("/", function (req, res, next) {
// 	res.json({});
// });
// interviews.get("/:interview_id", function (req, res, next) {
// 	res.json({});
// });
// interviews.get("/:interview_id/questions", function (req, res, next) {
// 	res.json({});
// });
// interviews.get(
// 	"/:interview_id/questions/:question_id",
// 	function (req, res, next) {
// 		res.json({});
// 	}
// );