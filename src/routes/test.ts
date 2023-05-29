import express from "express";

import { getMethod, postMethod } from "../controllers/test";

const router = express.Router();

router.get("/test", getMethod);

router.post("/test", postMethod);

export default router;
