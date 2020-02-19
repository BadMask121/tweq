import TwitterService from "../services";
declare class Controller {
    service: TwitterService;
    constructor(service: TwitterService);
    getAll: (req: any, res: any) => void;
}
declare const _default: Controller;
export default _default;
