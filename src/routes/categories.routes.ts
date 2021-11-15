import { Router } from 'express';

import { createCategoryController } from '../modules/cars/UseCases/createCategory/index';
import { listCategoryController } from '../modules/cars/UseCases/listCategories/index';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
