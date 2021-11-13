import * as compiledTemplate from './template.handlebars';
import View from '../../view';
import { Order, Product, ViewInterface } from '../../../types';
import bus from '../../../init/bus';
// import connections from './connections';
// import initEvents from './events';
// import './orders.scss';

export default class Element_Order {
  public self: HTMLElement;

  public context: Order;

  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
    // initEvents(this.self, this.context);
  }

  public async render(): Promise<void> {
    await this.renderHTML();
    return this.show();
  }

  constructor(context: Order) {
    this.setContext(context);
    this.self = <HTMLElement>document.createElement('div');
    this.self.className = 'orders__table_group';
    // bus.add(connections);
    this.render();
  }

  public setContext(context: Order): void {
    this.context = context;
  }

  public hide(): void {
    this.self.style.visibility = 'hidden';
    this.self.hidden = true;
  }

  public show(): void {
    this.self.style.visibility = 'visible';
    this.self.hidden = false;
  }
}
