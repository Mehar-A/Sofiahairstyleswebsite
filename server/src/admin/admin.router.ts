import { Request, Router } from "express";
import { Response } from "express";


const adminRouter = Router();

adminRouter.get('/', (request: Request, response: Response): Response => {
    return response.json("asdas");
  });

export default adminRouter;