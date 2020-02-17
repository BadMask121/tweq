var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});
//# sourceMappingURL=index.js.map