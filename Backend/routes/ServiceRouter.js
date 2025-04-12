import express from 'express'
import { addService, delService, getService, updateService } from '../controllers/ServiceController.js';

const serviceRouter = express.Router();

serviceRouter.post("/addservice", addService)
serviceRouter.get("/getservice", getService)
serviceRouter.post("/delservice", delService)
serviceRouter.post("/updateservice", updateService)

export default serviceRouter