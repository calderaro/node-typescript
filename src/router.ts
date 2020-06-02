import express from "express";
import HelloController from "./controllers/hello";

const router = express.Router();

router.get("/", HelloController);

export default router;
