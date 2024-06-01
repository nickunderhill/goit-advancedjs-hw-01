import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const LOCAL_STORAGE_FEEDBACK_FORM_STATE = 'feedback-form-state';

const handleSaveFormState = throttle(() => {
  localStorage.setItem(
    LOCAL_STORAGE_FEEDBACK_FORM_STATE,
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
}, 500);

const handleLoadFormState = () => {
  const savedState = localStorage.getItem(LOCAL_STORAGE_FEEDBACK_FORM_STATE);
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
    localStorage.removeItem(LOCAL_STORAGE_FEEDBACK_FORM_STATE);
    form.reset();
};

document.addEventListener('DOMContentLoaded', handleLoadFormState);
form.addEventListener('input', handleSaveFormState);
form.addEventListener('submit', handleFormSubmit);
