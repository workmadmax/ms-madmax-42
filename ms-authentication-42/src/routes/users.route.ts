import { NextFunction } from "express";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

// get /users
// get /user/:uuid
// post /users
// put /user/:uuid
// delete /users/:uuid

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "MadMAX42" }];
  res.status(StatusCodes.OK).send({ users });
});

usersRoute.get(
  "/user/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.sendStatus(StatusCodes.OK).send({ uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send({ modifiedUser });
  }
);

usersRoute.delete(
  "/user/:uuid",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

export default usersRoute;
