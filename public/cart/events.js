/* eslint-disable import/extensions
import eventBus from '../scripts/eventBus.js';

const cartEvents = (element) => {
  const orderBtn = element.getElementsByClassName('primary fw')[0];

  orderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('order click');
  });
};

export default cartEvents;
 */