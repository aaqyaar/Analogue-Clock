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
