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