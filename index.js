import "./style.css";

console.log('Hello World!');

document.body.insertAdjacentHTML("afterbegin",
   "<div class='container'><p>Hi Webpack!</p></div>")
const container = document.querySelector('.container');
container.style.background = 'yellow';
container.style.padding = "10px";
const txt = container.firstChild;
txt.style.padding = '20px';
txt.style.border = "1px solid red";

let moment = require("moment");


console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

container.insertAdjacentHTML('beforeend', "<div class='time'></div>");
const time = document.querySelector('.time');
time.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
time.style.color = 'red';