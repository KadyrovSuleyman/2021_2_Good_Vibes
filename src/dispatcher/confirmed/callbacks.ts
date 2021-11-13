import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import user from '../../object/user/user';
import { addToHistory } from '../../rout/callbacks';
import {
  AjaxResponse, Callback, Product,
} from '../../types';
import state from '../state';

export const showSignIn: Callback = () => {
  bus.emit('show view', { name: 'signin' });
};

export const showSignUp: Callback = () => {
  bus.emit('show view', { name: 'signup' });
};

export const showProfile: Callback = () => {
  bus.emit('show view', { name: 'profile' });
};

export const showHomepage: Callback = () => {
  bus.emit('show view', { name: 'homepage' });
};

export const signOut: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const addUser: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => user.set(value))
    .then(() => bus.emit('add user finished', undefined))
    .catch((err) => console.error(err));
};

export const cartGetRequest: Callback = () => {
  bus.emit('cart get request', undefined);
};

export const homepageArrayParse: Callback = (response: AjaxResponse) => {
  const { responseText } = response;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((obj: Product[]) => bus.emit('add product array to homepage', obj))
    .catch((err) => console.error(err));
};

export const homepage: Callback = () => {
  bus.emit('homepage state confirmed', { pathname: '/' });
};

export const showCart: Callback = () => {
  // bus.emit('show view', { name: 'cart' });

  if (cart.isEmpty()) {
    bus.emit('show view', { name: 'emptyCart' });
    return;
  }

  bus.emit('show view', { name: 'cart' });
};

export const showProductPage: Callback = (obj: { 'context': Product }) => {
  const { context } = obj;

  // console.log('showProductPage', context);

  bus.emit('show view', { name: 'productPage', context });
};

export const productStateConfirmed: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parseObj: Product) => bus.emit('product state confirmed', { pathname: `/product?id=${parseObj.id}`, context: parseObj, state: 'product' }))
    .catch((err) => console.error('product page response parse error', err));
};

export const category: Callback = () => {
  bus.emit('category state confirmed', { pathname: '/category' });
};

export const categoryArrayParse: Callback = (response: AjaxResponse) => {
  const { responseText } = response;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((obj: Product[]) => bus.emit('add product array to category page', obj))
    .catch((err) => console.error(err));
};

export const showCategoryPage: Callback = () => {
  bus.emit('show view', { name: 'categoryPage' });
};

export const categoryAddToHistory: Callback = (obj: { name: string }) => {
  addToHistory({
    pathname: `/category?name=${obj.name}`,
  });
};

export const address: Callback = () => {
  bus.emit('show view', { name: 'addressPage' });
};

export const payment: Callback = () => {
  bus.emit('show view', { name: 'paymentPage' });
};

export const confirmation: Callback = () => {
  bus.emit('show view', { name: 'confirmationPage' });
};

export const saveState: Callback = (obj: { 'state': string }) => {
  console.log(obj);
  const currentState = obj.state;

  state.set(currentState);
};
