// silence is golden
function updateDateTime() {
    const dateDiv = document.querySelector('#date');
    const clockDiv = document.querySelector('#clock');

    if (!dateDiv || !clockDiv) {
        console.error('Date or clock element not found');
        return;
    }

    const weekDay = {weekday: 'long'}
    const month = {month: 'long'}
    const day = {year: 'numeric'}
    const year = {year: 'numeric'}

    const hour = {hour: 'numeric'}
    const minute = {minute: 'numeric'}
    const second = {second: 'numeric'}

    dateDiv.innerHTML = generateDateDiv(weekDay, month, day, year);
    clockDiv.innerHTML = generateClockDiv(hour, minute, second);

}

setInterval(updateDateTime, 1000);

function generateDateDiv(weekDay, month, day, year) {
    const now = new Date()
    const formattedWeekDay = now.toLocaleDateString('en-US', weekDay);
    const formattedMonth = now.toLocaleTimeString('en-US', month);
    const formattedDay = now.toLocaleDateString('en-US', day);
    const formattedYear = now.toLocaleDateString('en-US', year);
 
    return `
    <div class="date weekDay">${formattedWeekDay}</div>
    <div class="date month">${formattedMonth}</div>
    <div class="date day">${formattedDay}</div>
    <div class="date year">${formattedYear}</div>
    `
}

function generateClockDiv(hour, minute, second) {
    const now = new Date()
    const formattedHour = now.toLocaleTimeString('en-US', hour);
    const formattedMinute = now.toLocaleDateString('en-US', minute);
    const formattedSecond = now.toLocaleTimeString('en-US', second);

    return `
    <div class="clock hour">${formattedHour}</div>
    <div class="clock minute">${formattedMinute}</div>
    <div class="clock second">${formattedSecond}</div>
    `
}