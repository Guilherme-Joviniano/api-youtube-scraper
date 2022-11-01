import { Router } from 'express';
import SearchController from './controllers/SearchController';
// Controllers
// import SearchController from '../controllers/SearchController';

// Middlewares
import checkQueries from './middlewares/validations/chackQueries.j/checkQueries';

const routes = new Router();

routes.get('/search/', checkQueries, SearchController.index);

export default routes;
