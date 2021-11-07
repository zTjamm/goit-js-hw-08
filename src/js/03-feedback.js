var throttle = require('lodash.throttle');
const formContent = document.querySelector('.feedback-form');
const email = formContent.querySelector('input');
const message = formContent.querySelector('textarea');
const FORM_DATA = 'feedback-form-state';
const content = {
  form: formContent,
  email: email,
  message: message,
};
let formObj = {};
formInput();
content.form.addEventListener('submit', submitForm);
content.form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formObj[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(formObj));
}
function formInput() {
  const savedForm = localStorage.getItem(FORM_DATA);
  if (savedForm) {
    const parsedForm = JSON.parse(savedForm);
    if (parsedForm.email) {
      data.email.value = parsedForm.email;
      formObj.email =  data.email.value;
    }
    if (parsedForm.message) {
      data.message.value = parsedForm.message;
      formObj.message =  data.message.value;
    }
  }
}
function submitForm(e) {
  e.preventDefault();
  e.target.reset();
  if (formObj.email&&formObj.message) {
    localStorage.removeItem(FORM_DATA);
  console.log(`Form Submited. Form is ${JSON.stringify(formObj)}`);
  alert('форма отправлена');
  formObj = {};
  }
  else {
    alert('заполните поля');
    formInput();
  }
}