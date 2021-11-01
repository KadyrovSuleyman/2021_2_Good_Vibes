import eventBus from '../scripts/eventBus.js';

export const showPayment = () => {
  eventBus.emit('showView', {
    name: 'Payment'
  });
};