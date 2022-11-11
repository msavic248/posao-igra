import './style.css'
import { mediaCounter } from './mediaCounter.js'

const array = [];
const app = document.querySelector('#app');

app.innerHTML = `
    <span><button id="p">P</button></span>
    <span><button id="o1">O</button></span>
    <span><button id="s">S</button></span>
    <span><button id="a">A</button></span>
    <span><button id="o2">O</button></span>
    <button class="btn">Start</button>
    <p class="counter"></p>
`
const container = document.querySelector(".container");
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
