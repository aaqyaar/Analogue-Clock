const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');

const myDate = () => {
    const theDate = new Date();
    const seconds = (theDate.getSeconds) / 60;
    const minutes = (seconds + theDate.getSeconds) / 60;
    const hours = (minutes + theDate.getSeconds) / 12;
}

setInterval(myDate, 1000)

