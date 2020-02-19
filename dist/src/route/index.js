"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const controllers_1 = tslib_1.__importDefault(require("../controllers"));
exports.default = (server) => {
    server.get('/', controllers_1.default.getAll);
};
//# sourceMappingURL=index.js.map