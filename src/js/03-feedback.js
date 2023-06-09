var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const updateLocalStorage = throttle(evt => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);
emailInput.addEventListener('input', updateLocalStorage);
messageInput.addEventListener('input', updateLocalStorage);

const localData = localStorage.getItem(STORAGE_KEY);
const loadForm = () => {
  const savedData = JSON.parse(localData);
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
};
loadForm();

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  emailInput.value = null;
  messageInput.value = null;
  localStorage.removeItem(STORAGE_KEY);
});
qW