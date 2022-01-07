

setInterval(() => {
    setClock()
}, 1000)

const hourHand = document.querySelector('#hour')
const minuteHand = document.querySelector('#minute')
const secondHand = document.querySelector('#second')

const setClock = () => {
    const theDate = new Date()
    const seconds = theDate.getSeconds() / 60;
    const minutes = (seconds + theDate.getMinutes()) / 60;
    const hours = (minutes + theDate.getHours()) / 12;

    setRotation(secondHand, seconds)
    setRotation(minuteHand, minutes)
    setRotation(hourHand, hours)
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}

setClock()

// timing the clock
setInterval(() => {
    showHrMnSc()
}, 1000);
const time = document.querySelector('#time');
const showHrMnSc = () => {
    const today = new Date();
    const currentTime = `${today.getHours()} : ${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() <= 9 ? '0' + today.getSeconds() : today.getSeconds()}`
    
    time.innerHTML = currentTime
    
}

// checking the user taped on ok
const checkOk = () => {
    let confirmation = confirm('Press Ok If You Want To see The Developers Behind This Cool Project.')
    if (confirmation == true) {
        window.location = 'our-team.html';
    } else {
        alert('Good Luck.')
    }
}
