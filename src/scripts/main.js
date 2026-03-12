'use strict';

/** first promise */
const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.button === 0) {
      resolve('First promise was resolved');
    }
  });

  setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);
});

/** second promise */
const secondPromise = new Promise((resolve) => {
  document.addEventListener('mousedown', (e) => {
    if (e.button === 0 || e.button === 2) {
      resolve('Second promise was resolved');
    }
  });
});

/** third promise */
const thirdPromise = new Promise((resolve) => {
  let leftClick = false;
  let rightClick = false;

  document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      leftClick = true;
    }

    if (e.button === 2) {
      rightClick = true;
    }

    if (leftClick && rightClick) {
      resolve('Third promise was resolved');
    }
  });
});

/** success and error */
function showMessage(message, type) {
  const div = document.createElement('div');

  div.dataset.qa = 'notification';
  div.className = type;
  div.textContent = message;

  document.body.appendChild(div);
}

firstPromise
  .then((message) => showMessage(message, 'success'))
  .catch((message) => showMessage(message, 'error'));

secondPromise
  .then((message) => showMessage(message, 'success'))
  .catch((message) => showMessage(message, 'error'));

thirdPromise
  .then((message) => showMessage(message, 'success'))
  .catch((message) => showMessage(message, 'error'));
