import { Twit } from "twit";
import TwitterService from "../services";

const Twitter = new TwitterService();

class Controller {
	service: TwitterService;
	constructor(service: TwitterService) {
		this.service = service;
	}
	getAll = (req, res) => console.log("Hello");
}

export default new Controller(Twitter);
