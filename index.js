function day() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const Weekday = daysOfWeek[date.getUTCDay()];
    const UTCTime = date.getTime();

    document.getElementById("Weekday").innerHTML = Weekday;
    document.getElementById("UTCTime").innerHTML = UTCTime;
}

day();

setInterval(day, 1000);