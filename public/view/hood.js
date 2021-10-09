/* eslint-disable import/extensions */
import View from './view.js';
import hoodContext from '../context/hood.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import hoodEvents from '../controller/hoodEvents.js';
import hoodListeners from '../controller/hoodListeners.js';
import bus from '../controller/eventBus.js';

const HoodUrl = './templates/hood.handlebars';

export default class Hood extends View {
  #context = hoodContext;

  #url = HoodUrl;

  #element;

  #generateEvents = hoodEvents;

  constructor(element) {
    super(element);
    this.#element = this.get();
  }

  async #renderHTML() {
    const html = await generateContentHTML({
      url: this.#url,
      context: this.#context
    });
    this.#element.innerHTML = html;
  }

  setContext(context) {
    this.#context = context;
    this.renderHTML();
  }

  render() {
    this.#renderHTML()
      .then(() => {
        bus.add(hoodListeners);
        this.#generateEvents(this.#element);
      })
      .then(() => this.show())
      .catch((error) => alert(error));
  }
}
