const hoursElement = document.getElementsByClassName("maindiv-hours")[0];
const minutesElement = document.getElementsByClassName("maindiv-minutes")[0];
const secondsElement = document.getElementsByClassName("maindiv-secondes")[0];
const dayElement = document.getElementsByClassName("maindiv-date-day")[0];
const monthElement = document.getElementsByClassName("maindiv-date-month")[0];
const yearElement = document.getElementsByClassName("maindiv-date-year")[0];

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    if (seconds >= 0 && seconds <= 9) {
        secondsElement.textContent = '0' + seconds;
    } else {
        secondsElement.textContent = seconds;
    }

}

function dateOfTheDay() {
    const now = new Date();
    const newDay = now.getDate();
    const newMonth = now.getMonth() +1;
    const newYear = now.getFullYear();

    if (newDay >= 1 && newDay <= 9) {
        dayElement.textContent = '0' + newDay;
    } else {
        dayElement.textContent = newDay;
    };
    if (newMonth >= 1 && newMonth <= 9) {
        monthElement.textContent = '0' + newMonth;
    } else {
        monthElement.textContent = newMonth;
    }
    yearElement.textContent = newYear;
}

setInterval(dateOfTheDay, 1000);
setInterval(updateClock, 1000);