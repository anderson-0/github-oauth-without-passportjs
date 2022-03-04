import { Router } from "express";
import { Request, Response } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.get('/github', (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

router.get('/signin/callback', (req: Request, res: Response) => {
  const { code } = req.query;
  return res.json(code);
});

export { router };