const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(secondHand);

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegress =((second/60) * 360) + 90;
    // suppose 30s/60 = 0.5 (0.5 * 360)= 180
    // means in 30s second angle will be 180 degree

    secondHand.style.transform = `rotate(${second}deg)`;
    const minutes = now.getMinutes();
    const minsDegree = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsDegree}deg)`

    const hour = now.getMinutes();
    const hoursDegree = ((minutes / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);