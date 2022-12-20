import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, '../');
const convertedDirectory = join(root, './src/converted');

export default {
  port: process.env.PORT || 3001,
  dir: {
    root,
    convertedDirectory
  },
  location:{
    home: './src/index.html'
  },
  constants:{
    mediaStream: join(convertedDirectory, 'index.m3u8')
  }
}