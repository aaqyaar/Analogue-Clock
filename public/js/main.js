const form = document.querySelector('#form');
const email = document.querySelector('#email-address');
const pass = document.querySelector('#password');
const spanRandom = document.querySelector('#spanRandom');
const captcha = document.querySelector('#captcha');

let randomNumber = Math.floor(Math.random() * (9999 - 1000) + (1000))
spanRandom.innerHTML = randomNumber;

const emailAddress = 'admin@gmail.com';
const password = 'admin';

const showPass = () => {
    const password = document.querySelector('#password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password'
    }
}


form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    if(email.value == emailAddress && pass.value == password && captcha.value == randomNumber) {
        window.location = 'analogue.html'
    } else if(email.value == emailAddress && pass.value != password && captcha.value == randomNumber) {
      alert("Incorrect Email or Password.")
    } else if(email.value == emailAddress && pass.value == password && captcha.value != randomNumber) {
      alert("Incorrect Captcha Code.")
    } 
    else {
        alert('Inccorect, Email Password or Captcha.')
    }
})
