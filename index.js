function day() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const Weekday = daysOfWeek[date.getUTCDay()];
    const UTCTime = date.getTime();

    document.getElementById("Weekday").textContent = Weekday;
    document.getElementById("UTCTime").textContent = UTCTime;
}

day();

setInterval(day, 1000);