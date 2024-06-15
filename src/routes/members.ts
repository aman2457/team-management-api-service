import { Router, Request, Response } from "express";

const membersRouter = Router();

membersRouter.get("", async (req: Request, res: Response) => {
  res.send("Hello from membersRouter route");
});

export default membersRouter;