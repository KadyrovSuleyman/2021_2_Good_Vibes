/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const request = () => {
    eventBus.emit('profile ajax request');
  };