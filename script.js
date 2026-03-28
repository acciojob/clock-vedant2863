//your JS code here. If required.
function updateTime() {
    const now = new Date();

    // format date & time
    const currentTime = now.toLocaleString();

    document.getElementById("timer").textContent = currentTime;
}

// update immediately
updateTime();

// update every second
setInterval(updateTime, 1000);