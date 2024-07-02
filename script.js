let currentTime = document.getElementById("time");
let currentDay = document.getElementById("day");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let dayOfWeek = weekday[date.getUTCDay()];

currentTime.innerHTML = `Time: ${hour}:${minute}`
currentDay.innerHTML = `Day: ${dayOfWeek}`;
