import { Request, Router } from 'express';
import { Response } from 'express';
import { User } from '../../models/user';

const adminRouter = Router();

adminRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response<string>> => {
    const user = new User({
      name: 'asda'
    });

    await user.save();
    return response.json('User made');
  }
);

export default adminRouter;
