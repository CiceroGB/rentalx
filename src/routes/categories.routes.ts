import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/UseCases/createCategory/index';
import { importCategoryController } from '../modules/cars/UseCases/importCategory/index';
import { listCategoryController } from '../modules/cars/UseCases/listCategories/index';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
