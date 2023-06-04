import throttle from 'lodash.throttle';

let formEl = document.querySelector('.feedback-form');
let inputEl = formEl.querySelector('input');
let textAreaEl = formEl.querySelector('textarea');
let btnEl = formEl.querySelector('button');

formEl.addEventListener('input', throttle(inputData, 500));
function inputData() {
  let data = { email: inputEl.value, message: textAreaEl.value };
  let feedbackFormState = JSON.stringify(data);
  localStorage.setItem('feedbackFormState', feedbackFormState);
}

window.addEventListener('load', loadData);
function loadData() {
  if (localStorage.getItem('feedbackFormState')) {
    let savedData = JSON.parse(localStorage.getItem('feedbackFormState'));
    inputEl.value = savedData.email;
    textAreaEl.value = savedData.message;
  } else {
    inputEl.value = '';
    textAreaEl.value = '';
  }
}

formEl.addEventListener('submit', submitData);

function submitData(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedbackFormState')));
  inputEl.value = '';
  textAreaEl.value = '';
}
