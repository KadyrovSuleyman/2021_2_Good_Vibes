import bus from '../scripts/bus';

const initEvents = (parent: HTMLElement) => {
  const signUpBtn = document.getElementById('register-href');
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signUp button click', undefined);
  });
};

export default initEvents;
