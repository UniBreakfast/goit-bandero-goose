const goToFormBtn = document.querySelector('.call-to-action');
const [form] = document.forms;
const launchBtn = form.querySelector('button');
const animation = form.querySelector('#animation');

goToFormBtn.onclick = showForm;
form.onsubmit = handleSubmit;
animation.ontoggle = handleAnimation;

function showForm() {
  form.scrollIntoView();
}

function handleSubmit(e) {
  e.preventDefault();

  const { name, email } = Object.fromEntries(new FormData(form));

  console.log('Імʼя користувача: ', name);
  console.log('Email користувача: ', email);

  form.reset();

  launch();
}

function launch() {
  animation.showPopover();

  setTimeout(() => animation.hidePopover(), 4000);
}

function handleAnimation(e) {
  animation.src = 'img/animation.gif';
  launchBtn.disabled = e.newState === 'open';
}
