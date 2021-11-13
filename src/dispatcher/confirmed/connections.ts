import { addToHistory } from '../../rout/callbacks';
import { Connection } from '../../types';
import * as confirm from './callbacks';
import * as request from '../request/callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showSignIn,
      addToHistory,
    ],
  },
  {
    event: 'signUp state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showSignUp,
      addToHistory,
    ],
  },
  {
    event: 'profile state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showProfile,
      addToHistory,
    ],
  },
  {
    event: 'homepage state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showHomepage,
      addToHistory,
    ],
  },
  {
    event: 'signout confirmed',
    callback: [
      confirm.signOut,
    ],
  },
  {
    event: 'signIn ajax confirmed',
    callback: [
      confirm.addUser,
      confirm.cartGetRequest,
    ],
  },
  {
    event: 'signUp ajax confirmed',
    callback: [
      confirm.addUser,
      confirm.cartGetRequest,
    ],
  },
  {
    event: 'add user finished',
    callback: request.savedState,
  },
  {
    event: 'homepage ajax confirmed',
    callback: [
      confirm.homepageArrayParse,
      confirm.homepage,
    ],
  },
  {
    event: 'product request confirmed',
    callback: [
      confirm.productStateConfirmed,
    ],
  },
  {
    event: 'product state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showProductPage,
      addToHistory,
    ],
  },
  {
    event: 'cart state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showCart,
      addToHistory,
    ],
  },
  {
    event: 'category ajax confirmed',
    callback: [
      confirm.categoryArrayParse,
      confirm.category,
    ],
  },
  {
    event: 'category state confirmed',
    callback: [
      // confirm.saveState,
      confirm.showCategoryPage,
    ],
  },
  {
    event: 'category ajax name',
    callback: confirm.categoryAddToHistory,
  },
  {
    event: 'address state confirmed',
    callback: [
      // confirm.saveState,
      confirm.address,
      addToHistory,
    ],
  },
  {
    event: 'payment state confirmed',
    callback: [
      // confirm.saveState,
      confirm.payment,
      addToHistory,
    ],
  },
  {
    event: 'confirmation state confirmed',
    callback: [
      // confirm.saveState,
      confirm.confirmation,
      addToHistory,
    ],
  },
  {
    event: 'order confirmed',
    callback: request.profile,
  },
  {
    event: 'orders state confirmed',
    callback: [
      confirm.orders,
      addToHistory,
    ],
  },
];

export default connections;
