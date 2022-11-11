import './style.css'
import { mediaCounter } from './mediaCounter.js'

const array = [];
const app = document.querySelector('#app');

app.innerHTML = `
    <span id="p"><button>P</button></span>
    <span id="o1"><button>O</button></span>
    <span id="s"><button>S</button></span>
    <span id="a"><button>A</button></span>
    <span id="o2"><button>O</button></span>
    <button class="btn">Start</button>
    <p class="counter"></p>
`

const spans = document.querySelectorAll("span");
const p = document.querySelector("#p");
const o1 = document.querySelector("#o1");
const s = document.querySelector("#s");
const a = document.querySelector("#a");
const o2 = document.querySelector("#o2");
const start = document.querySelector(".btn");
const counter = document.querySelector(".counter");


start.addEventListener("click", () => {
  app.classList.remove("flex");

  mediaCounter(counter, app, spans);
  
  start.classList.add("hide");

})
