import { Connection } from '../../types';
import * as denied from './callbacks';
import redirect from '../redirect';

const connections: Connection[] = [
  {
    event: 'signIn state denied',
    callback: denied.signIn,
  },
  {
    event: 'signUp state denied',
    callback: denied.signUp,
  },
  {
    event: 'profile state denied',
    callback: denied.profile,
  },
  {
    event: 'product request denied',
    callback: denied.product,
  },
  {
    event: 'address state denied',
    callback: [
      // redirect.saveState,
      denied.saveState,
      denied.address,
    ],
  },
  {
    event: 'payment state denied',
    callback: [
      // redirect.saveState,
      denied.saveState,
      denied.payment,
    ],
  },
  {
    event: 'confirmation state denied',
    callback: [
      // redirect.saveState,
      denied.saveState,
      denied.confirmation,
    ],
  },
];

export default connections;
