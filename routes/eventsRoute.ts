import { Router } from "express";
import { addEvent } from "../controllers/eventsController";

const eventsRouter = Router();

eventsRouter.get("/getEvents");

eventsRouter.post("/addEvent", addEvent);

eventsRouter.put("/updateEvent");

eventsRouter.delete("/deleteEvent");

export default eventsRouter;
