import childProcess from 'child_process';
import { logger } from './utils.js';

const _ffmpegConverterRun = (config: any) => {
  return childProcess.spawn("ffmpeg", config);
}

export const ffmpegConverter = async () => {
  //busca dados de acordo com id da camera
  //mock
  const url = 'rtsp://admin:J3PQYV29@10.1.41.195:554/cam/realmonitor?channel=1&subtype=0'
  const args = [
    '-rtsp_transport',
    'tcp',
    '-i',
    url,
    '-fflags',
    'nobuffer',
    '-y',
    '-s',
    '480x360',
    '-codec:v',
    'libx264',
    '-b:v',
    '500000',
    '-max_delay',
    '6',
    // '-start_number', 
    // '0',
    '-hls_time',
    '2',
    '-hls_list_size',
    '6',
    '-hls_wrap',
    '6',
    '-vcodec',
    'copy',
    '-y',
    './src/converted/index.m3u8'
  ]

  const { stderr, stdin, stdout } = _ffmpegConverterRun(args);

  stderr.on("data", data => {
    logger.info(`${data}`);
  });
}

export const startStream = async (file) => {
  logger.info('Iniciando stream de video');

  await ffmpegConverter();
  
}
