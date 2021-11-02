import ajaxConnections from '../ajax/connections';
import Hood from '../hood/view';
import bus from '../scripts/bus';
import initConnections from './connections';

const init = () => {
  bus.add(ajaxConnections);

  bus.add(initConnections);

  bus.emit('cookie check request', undefined);
  bus.emit('cart get request', undefined);
  bus.emit('category get request', undefined);

  const root = <HTMLElement>document.getElementsByClassName('grid-container')[0];
  const hood = new Hood(root);

  hood.render();
};

export default init;
