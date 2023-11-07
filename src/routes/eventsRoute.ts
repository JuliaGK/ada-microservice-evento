import { Router } from "express";
import { eventsController } from "../controllers/eventsController";

const eventsRouter = Router();

eventsRouter.get("/getEvents");

eventsRouter.get("/:id", eventsController.getEvent);

eventsRouter.post("/addEvent", eventsController.addEvent);

eventsRouter.put("/updateEvent");

eventsRouter.delete("/deleteEvent");

export default eventsRouter;
