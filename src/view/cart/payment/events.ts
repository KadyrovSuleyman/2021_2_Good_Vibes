import bus from '../../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // ---------------
  const continueBtn = <HTMLButtonElement>self.getElementsByClassName('btn')[0];
  continueBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('payment page continue button click', undefined);
  });
};

export default initEvents;
