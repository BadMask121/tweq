"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const twit_1 = tslib_1.__importDefault(require("twit"));
class TwitterService {
    constructor() {
        const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
        const APP_KEY = process.env.APP_KEY;
        const APP_SECRET_KEY = process.env.APP_SECRET_KEY;
        const ACCESS_SECRET_TOKEN = process.env.ACCESS_SECRET_TOKEN;
        const NODE_ENV = process.env.NODE_ENV;
        const driver = new twit_1.default({
            consumer_key: APP_KEY,
            consumer_secret: APP_SECRET_KEY,
            access_token: ACCESS_TOKEN,
            access_token_secret: ACCESS_SECRET_TOKEN,
            timeout_ms: 60 * 1000,
            strictSSL: NODE_ENV === "dev" ? false : true,
        });
    }
}
exports.default = TwitterService;
//# sourceMappingURL=index.js.map