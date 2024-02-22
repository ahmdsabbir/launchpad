const dateDiv = document.querySelector('#date');
const clockDiv = document.querySelector('#time');

function updateDateTime() {
    const now = new Date();

    const weekday = now.toLocaleString('en-US', {weekday: 'long'});
    const day = now.toLocaleString('en-US', {day: 'numeric'});
    const month = now.toLocaleString('en-US', {month: 'long'});
    const year = now.toLocaleString('en-US', {year: 'numeric'});

    const hour = now.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false })
    const minute = now.toLocaleString('en-US', {minute: 'numeric'})
    const second = now.toLocaleString('en-US', {second: 'numeric'})

    dateDiv.innerHTML = genDateDiv(weekday, day, month, year);
    clockDiv.innerHTML = genClockDiv(hour, minute, second);
}

function genDateDiv(weekday, day, month, year) {
    return `
    <span id="weekday">${weekday}</span>
    <br>
    <span id="month">${month}</span> <span id="day">${day}</span>, <span id="year">${year}</span>
    `
}

function genClockDiv(hour, minute, second) {
    return `<span id="hour">${hour}</span>:<span id="minute">${minute}</span>:<span id="second">${second}</span>`
}

updateDateTime();
setInterval(updateDateTime, 1000);
