const dateContainer = document.querySelector(".date-container") 
const hoursContainer = document.querySelector(".hours")
const minutesContainer = document.querySelector(".minutes")
const secondsContainer = document.querySelector(".secounds")

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function formatTime(time){
    return time < 10 ? "0" + time : time;
}
function updateClock(){
    const today = new Date();
    const date = today.getDate();
    const day = weekDays[today.getDay()];
    const month = monthNames[today.getMonth()];
    const hours = formatTime(today.getHours());
    const minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
    hoursContainer.innerHTML = hours + ":";
    minutesContainer.innerHTML = minutes + ":";
    secondsContainer.innerHTML = seconds;
}
setInterval(updateClock,1000);