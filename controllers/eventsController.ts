import { Request, Response } from "express";

const addEvent = (req: Request, res: Response) => {
    res.send("event added");
};

export { addEvent };
