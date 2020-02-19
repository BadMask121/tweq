import { Express } from "@types/express";
import Controller from '../controllers';

export default (server: Express) => {
	server.get('/', Controller.getAll)
};
