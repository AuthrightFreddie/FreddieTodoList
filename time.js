// Timer Infos
let myDate = new Date();
let days = ("0" + myDate.getDate()).slice(-2)
let hrs = myDate.getHours();
let mins = ("0" + myDate.getMinutes()).slice(-2)
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
let wds = weekdays[myDate.getDay()];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let months = monthNames[myDate.getMonth()];
let energypct = ((17.5 - hrs - mins/60)/0.08).toFixed(0) + '%'
switch (days % 10) {
  case 1:
    sufix = "st";
  case 2:
    sufix = "nd";
  case 3:
    sufix = "rd";
  default:
    sufix = "th";
}
document.getElementById('wds').innerHTML =wds;
document.getElementById('Date').innerHTML =months + ' ' + days+sufix;
document.getElementById('Time').innerHTML =hrs + ':' + mins;
document.getElementById('energypct').innerHTML =energypct;
// Greeting Infos
let greet;
if (hrs < 12)
  greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening!';
document.getElementById('lblGreetings').innerHTML = greet;