import { Router } from 'express';
import { trendsRoutes } from "./trends.routes.js";

const router = Router();

router.use("/trends", trendsRoutes);

export { router };