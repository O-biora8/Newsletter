const dismissEl = document.getElementById('dismiss')
const individualEmail = document.getElementById('individualEmail')

const parameter = new URLSearchParams(window.location.search);
const email = parameter.get('email');
console.log(email)
individualEmail.textContent = email


dismissEl.addEventListener('click', (e) => {
    location.assign('./index.html')
})