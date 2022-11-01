import express from 'express';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/.netlify/functions/api/v1', routes);
  }
}

export default new App().server;
