import express from 'express';
import cors from 'cors';
import { server } from './server.js';
import config from './config.js';
import { logger } from './utils.js';
import routes from './routes.js';

import { startStream } from './service.js';
import { join } from 'path';

server.use(cors());
server.use(express.json())
server.use(routes);

server.listen(config.port, () => {
  logger.info(`Servidor iniciado em ${config.port}`);
  startStream(join(config.dir.convertedDirectory, 'index.m3u8'))
})