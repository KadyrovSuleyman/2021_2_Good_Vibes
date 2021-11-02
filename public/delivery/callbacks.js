/* eslint-disable import/extensions */
import orderData from '../objects/orderData.js';
import cart from '../objects/cart.js';
import eventBus from '../scripts/eventBus.js';

export const deliveryBtnClick = () => {
  // console.log('deliveryBtnClick', orderData.getAddress());
  // console.log('cart', cart.get());

  const a = orderData.getAddress();
  const b = cart.get();

  const c = b.slice();

  c.forEach((element) => {
    delete element.price;
  });

  console.log(c);

  const obj = {
    address: a,
    products: c,
  };

  eventBus.emit('cart confirm request', obj);
};

export const a = 0;
