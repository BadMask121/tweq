import Twit from "twit";
class TwitterService {
	constructor() {
		const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
		const APP_KEY = process.env.APP_KEY;
		const APP_SECRET_KEY = process.env.APP_SECRET_KEY;
		const ACCESS_SECRET_TOKEN = process.env.ACCESS_SECRET_TOKEN;
		const NODE_ENV = process.env.NODE_ENV;

		const driver = new Twit({
			consumer_key: APP_KEY,
			consumer_secret: APP_SECRET_KEY,
			access_token: ACCESS_TOKEN,
			access_token_secret: ACCESS_SECRET_TOKEN,
			timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
			strictSSL: NODE_ENV === "dev" ? false : true, // optional - requires SSL certificates to be valid.
		});
	}
}

export default TwitterService;
