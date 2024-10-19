import { Router } from 'express'
import { listTrendsController } from '../modules/useCases/listTrends/index.js';

const trendsRoutes = Router();

trendsRoutes.get('/', async (req, res) => {
    return await listTrendsController.handle(req, res);
});
export { trendsRoutes };