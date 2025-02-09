const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");

const Newyear = '26 October 2025';

function countdown() {
    const newYearsDate = new Date(Newyear);
    const currentDate = new Date();
    const second = (newYearsDate - currentDate) / 1000;
    const seconds = Math.floor(second) % 60;
    const minutes = Math.floor(second / 60) % 60;
    const hours = Math.floor(second / 3600) % 24;
    const days = Math.floor(second / 3600 / 24);

    console.log(days, hours, minutes, seconds);

    secondsEl.innerHTML = formatTime(seconds);
    minutesEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = formatTime(days);


}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);

