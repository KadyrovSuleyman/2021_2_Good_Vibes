/* eslint-disable import/extensions */
import * as product from './callbacks.js';
import eventBus from '../scripts/eventBus.js';

const productListeners = [
  {
    event: 'backToResult click',
    // callback: () => {
    //   console.log('backToResult click');
    //   eventBus.emit('showView', {
    //     name: 'Homepage'
    //   });
    // }
    callback: [
      product.homepageStateRequest,
      product.addHomepageToHistory
    ]
  }
];

export default productListeners;
