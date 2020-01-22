import express from 'express';
import cors from 'cors';
import AppRoutes from './server/routes/Routes';

class App {
  public express: express.Application;
  constructor () {
    this.express = express();
    this.middleWare();
    this.routes();
  }

  private middleWare (): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes (): void {
    this.express.use(AppRoutes)
  }
}

export default new App().express;
