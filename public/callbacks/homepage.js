/* eslint-disable import/extensions */
import state from '../constants/state.js';
import ProductCard from '../views/productCard.js';

// ----------------------------------
let prodList = {};

const add = (obj) => {
  prodList = Object.assign(prodList, obj);
};

const remove = (name) => {
  prodList[name].delete();
  delete prodList[name];
};

// ----------------------------------
export const renderProdCard = (prodData) => {
  if (prodList[prodData.id]) {
    return;
  }

  const root = document.getElementsByClassName('product-container')[0];
  const prodCard = document.createElement('div');
  prodCard.className = 'product-card';
  const prodObj = new ProductCard(prodCard);

  add({
    [prodData.id]: {
      element: prodCard,
      object: prodObj,
      state: state.hidden
    }
  });

  prodObj.setContext(prodData);
  prodList[prodData.id].state = state.visible;
  root.appendChild(prodCard);

  prodObj.render()
    .catch((error) => console.error(error));
};

// ----------------------------------
export const renderProdArray = (prodArray) => {
  if (!Array.isArray(prodArray)) {
    console.error('wrong prodArray');
    return;
  }

  prodArray.forEach((item) => {
    renderProdCard(item);
  });
};

// ----------------------------------
export const homepageLoaded = () => {
  console.log('homepageLoaded');

};
