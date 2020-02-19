"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv").config();
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const route_1 = tslib_1.__importDefault(require("./src/route"));
const app = express_1.default();
app.set("port", process.env.PORT || 5000);
app.use(express_1.default.static(__dirname + "/public"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
route_1.default(app);
app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});
//# sourceMappingURL=index.js.map