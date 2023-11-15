let date = document.querySelector('.date');
let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

let dayName = ['Sunday', 'Monday', 'Tursday', 'Wednesday', 'Thursday','Friday', 'Saturday']

let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]

// window.onload = function(){
//     date.innerHTML = today.getDate();
// day.innerHTML = dayName[today.getDay()];
// month.innerHTML = monthName[today.getMonth()];
// year.innerHTML = today.getFullYear();
// }

date.innerHTML = new Date().getDate();
day.innerHTML = dayName[ new Date().getDay()];
month.innerHTML = monthName[new Date().getMonth()];
year.innerHTML = new Date().getFullYear();



