const dateDiv = document.querySelector('#date');

function updateDateTime() {
  const now = new Date();

  const weekday = now.toLocaleString('en-US', { weekday: 'long' });
  const day = now.toLocaleString('en-US', { day: 'numeric' });
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year = now.toLocaleString('en-US', { year: 'numeric' });

  // Get the hour, minute, and AM/PM separately
  const hour = now.getHours() % 12 || 12;
  const minute = now.getMinutes().toString().padStart(2, "0");
  const meridiem = now.toLocaleString('en-US', { hour12: true }).slice(-2); // Extract AM/PM
  const second = now.toLocaleString('en-US', {second: 'numeric'})

  dateDiv.innerHTML = genDateDiv(weekday, day, month, year, hour, minute, second, meridiem);
}

function genDateDiv(weekday, day, month, year, hour, minute, second, meridiem) {
  return `
  <div>
    <span id="weekday">${weekday}</span>
  </div>
  <div>
    <sup id="meridiem">${meridiem}</sup> <span id="hour">${hour}</span> <sup>:</sup> <span id="minute">${minute}</span> <sup>:</sup> <span id="second">${second}</span>
  </div>

  <div>
    <span id="month">${month}</span> <span id="day">${day}</span> <span id="year">${year}</span>
  </div>
  `
}

updateDateTime();
setInterval(updateDateTime, 1000);
