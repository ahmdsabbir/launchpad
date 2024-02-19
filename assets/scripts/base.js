// silence is golden
function updateDateTime() {
    const dateDiv = document.querySelector('#date');
    const clockDiv = document.querySelector('#clock');

    if (!dateDiv || !clockDiv) {
        console.error('Date or clock element not found');
        return;
    }

    const now = new Date();

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    const formattedClock = now.toLocaleTimeString('en-US', timeOptions);

    dateDiv.textContent = formattedDate;
    clockDiv.textContent = formattedClock;

}

setInterval(updateDateTime, 1000);