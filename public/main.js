/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init } from './viewDispatcher/callbacks.js';
import viewDispatcherListeners from './viewDispatcher/listeners.js';
import ajaxListeners from './ajax/listeners.js';
import Router from './scripts/router.js';

// import route from './scripts/_router.js';

const router = new Router(document.getElementsByClassName('grid-container')[0]);
router
  .register('/', 'Homepage');
router.start();


eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);

