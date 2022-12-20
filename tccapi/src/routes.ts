import { server, router } from './server.js';

const routes = router;

// **CONTROLLERS
import StreamController from './controllers/streamController.js';
import SonoffController from './controllers/sonoffController.js'; 

// **routes
routes.get('/stream/:file', StreamController.start);
routes.get('/sonoff/info', SonoffController.getInfo);
routes.post('/sonoff', SonoffController.activeDevice);

export default routes;