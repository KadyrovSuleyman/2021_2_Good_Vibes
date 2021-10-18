/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init } from './viewDispatcher/callbacks.js';
import viewDispatcherListeners from './viewDispatcher/listeners.js';
import ajaxListeners from './ajax/listeners.js';
import Router from './scripts/router.js';

// import route from './scripts/_router.js';




eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);

const router = new Router(document.getElementsByClassName('grid-container')[0]);
router
  .register('/', 'Homepage')
  .register('/homepage', 'Homepage')
  .register('/login', 'Signin')
  .register('/signup', 'Signup')
  .register('/profile', 'Profile')
  .register('/logout', 'Signout')
  .register('/product', 'Product');
router.start();