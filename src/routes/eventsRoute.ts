import { Router } from "express";
import { addEvent, getEvent } from "../controllers/eventsController";

const eventsRouter = Router();

eventsRouter.get("/getEvents");

eventsRouter.get("/:id", getEvent);

eventsRouter.post("/addEvent", addEvent);

eventsRouter.put("/updateEvent");

eventsRouter.delete("/deleteEvent");

export default eventsRouter;
