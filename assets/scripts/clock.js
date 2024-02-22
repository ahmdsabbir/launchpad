const dateDiv = document.querySelector('#date');

function updateDateTime() {
    const now = new Date();

    const weekday = now.toLocaleString('en-US', {weekday: 'long'});
    const day = now.toLocaleString('en-US', {day: 'numeric'});
    const month = now.toLocaleString('en-US', {month: 'short'});
    const year = now.toLocaleString('en-US', {year: 'numeric'});

    const hour = now.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false })
    const minute = now.toLocaleString('en-US', {minute: 'numeric'})
    const second = now.toLocaleString('en-US', {second: 'numeric'})

    dateDiv.innerHTML = genDateDiv(weekday, day, month, year, hour, minute, second);
}

function genDateDiv(weekday, day, month, year, hour, minute, second) {
    return `
    <span id="weekday">${weekday}</span>
    <br>
    <span id="hour">${hour}</span>:<span id="minute">${minute}</span>:<span id="second">${second}</span>
    <br>
    <span id="month">${month}</span> <span id="day">${day}</span>,
    <span id="year">${year}</span>
    `
}


updateDateTime();
setInterval(updateDateTime, 1000);
