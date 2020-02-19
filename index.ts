require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import route from "./src/route";

const app = express();
app.set("port", process.env.PORT || 5000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);
app.listen(app.get("port"), function() {
	console.log("Node app is running on port", app.get("port"));
});
