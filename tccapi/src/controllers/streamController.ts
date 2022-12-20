import { pipeline } from 'stream';
import { promisify } from 'util';
import { join } from 'path';
import Throttle from 'throttle';
import fs from 'fs';

import { startStream } from '../service.js';
import config from '../config.js';
import { Request, Response } from 'express';

const pipelineAsync = promisify(pipeline);

export default {
  async start(req: Request, res: Response) {
    //startStream(join(config.dir.convertedDirectory, req.params.file))

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/vnd.apple.mpegurl');
    res.header('Content-Type', 'video/MP2T');
    res.header('Accept-Rages', 'bytes');
    res.status(200);

    const filename = req.params.file;
    const fullpath = join(config.dir.convertedDirectory, filename);
    const readable = fs.createReadStream(fullpath);
    const throttleTransform = new Throttle(1100 * 1000);

    (async function run() {
      try {
        await pipelineAsync(
          readable,
          throttleTransform,
          res
        );
        //console.log("pipeline accomplished.");
      }
      catch (err) {
        console.error('pipeline failed with error:', err);
      }
    })();
  }
}

