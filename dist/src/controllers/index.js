"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const services_1 = tslib_1.__importDefault(require("../services"));
const Twitter = new services_1.default();
class Controller {
    constructor(service) {
        this.getAll = (req, res) => console.log("Hello");
        this.service = service;
    }
}
exports.default = new Controller(Twitter);
//# sourceMappingURL=index.js.map