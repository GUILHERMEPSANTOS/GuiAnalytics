import { ListTrendsUseCase } from "./ListTrendsUseCase.js";
import { ListTrendsController } from "./ListTrendsController.js";

const listTrendsUseCase = new ListTrendsUseCase();
const listTrendsController = new ListTrendsController(listTrendsUseCase);

export { listTrendsController };