// silence is golden
function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#clock').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);