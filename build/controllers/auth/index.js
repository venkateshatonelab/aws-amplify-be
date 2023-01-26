"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = __importDefault(require("../../utils/code"));
const user_1 = __importDefault(require("../../models/user"));
class Authentication {
    /**
     * @param req express.Request
     * @param res express.Response
     * @description Register new user
     */
    static signup = async (req, res) => {
        const result = await user_1.default.create(req.body);
        return res.status(code_1.default.CREATED).json(result);
    };
    /**
     * @param req express.Request
     * @param res express.Response
     * @description login
     */
    static login = async (req, res) => {
        const result = await user_1.default.find({});
        return res.status(code_1.default.OK).json(result);
    };
    /**
     * @param req express.Request
     * @param res express.Response
     * @description update access token
     */
    static refresh = async (req, res) => {
        return res.status(code_1.default.OK).json('access token refreshed');
    };
    /**
     * @param req express.Request
     * @param res express.Response
     * @description logged out
     */
    static logout = async (req, res) => {
        return res.status(code_1.default.OK).json('logged out');
    };
}
exports.default = Authentication;
