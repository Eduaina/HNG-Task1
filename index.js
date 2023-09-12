document.addEventListener("DOMContentLoaded", function() {

    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
        
    function updateUTC() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        currentDayOfTheWeek.textContent = dayOfWeek;        
        const currentTime = new Time();
        const utcTime = currentTime.getTime();
        currentUTCTime.textContent = `Current UTC Time: ${utcTime} ms`;
    

        setTimeout(updateUTC, 1000);
    }
    updateUTC();
        
});