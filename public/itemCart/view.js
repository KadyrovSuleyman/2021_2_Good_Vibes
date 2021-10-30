/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';
import itemCartEvents from './events.js';
import itemCartListeners from './listeners.js';
import View from '../scripts/view.js';
import compiledTemplate from './template.handlebars';

export default class ItemCart extends View {
  element;

  #context;

  #generateEvents = itemCartEvents;

  constructor(element) {
    super(element);
    this.element = element;
  }

  setContext(context) {
    this.#context = context;
  }

  async #renderHTML() {
    const html = compiledTemplate(this.#context);
    this.element.innerHTML = html;
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(itemCartListeners);
    this.#generateEvents({
      element: this.element,
      context: this.#context
    });
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}