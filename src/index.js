import express from 'express';
import router from './routes/index.js';
import dotenv from 'dotenv';
import helmet from 'helmet';
import http from 'http';

const initialize = async () => {
  dotenv.config();
};

const loadExpressApp = async () => {
  await initialize;
  const app = express();

  app.use(helmet());
  app.use(express.json());
  app.enable('trust proxy');

  app.use('/', router);
  return app;
};

const createServer = async () => {
  const app = await loadExpressApp();
  const server = http.createServer(app);
  const port = process.env.PORT || 8080;

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

createServer();
