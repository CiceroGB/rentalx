import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/UseCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/UseCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/UseCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

const importCategoryController = new ImportCategoryController();

const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
