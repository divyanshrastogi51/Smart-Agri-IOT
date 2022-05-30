import express from "express";

import {
  getData,
  createData,
  getDatabyId,
  deleteDatabyId,
  updateData,
} from "../controllers/Sensordata.js";

const router = express.Router();

router.get("/", getData);

router.post("/", createData);

router.get("/:id", getDatabyId);

router.delete("/:id", deleteDatabyId);

router.patch("/:id", updateData);

export default router;
