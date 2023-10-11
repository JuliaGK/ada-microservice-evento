import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get("/getEvents");

eventsRouter.post("/addEvent");

eventsRouter.put("/updateEvent");

eventsRouter.delete("/deleteEvent");

export default eventsRouter;
