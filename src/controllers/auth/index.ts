import { Response, Request } from 'express';
import code from '../../utils/code';
import User from '../../models/user';

class Authentication {
	/**
	 * @param req express.Request
	 * @param res express.Response
	 * @description Register new user
	 */
	static signup = async (req: Request, res: Response) => {
		const result = await User.create(req.body);
		return res.status(code.CREATED).json(result);
	};

	/**
	 * @param req express.Request
	 * @param res express.Response
	 * @description login
	 */
	static login = async (req: Request, res: Response) => {
		const result = await User.find({});
		return res.status(code.OK).json(result);
	};

	/**
	 * @param req express.Request
	 * @param res express.Response
	 * @description update access token
	 */
	static refresh = async (req: Request, res: Response) => {
		return res.status(code.OK).json('access token refreshed');
	};

	/**
	 * @param req express.Request
	 * @param res express.Response
	 * @description logged out
	 */
	static logout = async (req: Request, res: Response) => {
		return res.status(code.OK).json('logged out');
	};
}

export default Authentication;
