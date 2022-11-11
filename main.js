import './style.css'
import { mediaCounter } from './mediaCounter.js'

const letters = [];
const app = document.querySelector('#app');

app.innerHTML = `
    <span id="p"><button id="pButton">P</button></span>
    <span id="o1"><button id="o1Button">O</button></span>
    <span id="s"><button id="sButton">S</button></span>
    <span id="a"><button id="aButton">A</button></span>
    <span id="o2"><button id="o2Button">O</button></span>
    <button class="btn">Start</button>
    <p class="counter"></p>
`

const spans = document.querySelectorAll("span");
const p = document.querySelector("#p");
const pButton = document.querySelector("#pButton");
const o1 = document.querySelector("#o1");
const o1Button = document.querySelector("#o1Button");
const s = document.querySelector("#s");
const sButton = document.querySelector("#sButton");
const a = document.querySelector("#a");
const aButton = document.querySelector("#aButton");
const o2 = document.querySelector("#o2");
const o2Button = document.querySelector("#o2Button");

const start = document.querySelector(".btn");
const counter = document.querySelector(".counter");

//Game start
start.addEventListener("click", () => {

  //remove flex and hides start button
  app.classList.remove("flex");
  start.classList.add("hide");

  //P button
  p.addEventListener("click", () => {
    letters.push("P")

    //hides and disables button
    p.classList.add("transparent");
    pButton.classList.add("cursor");
    pButton.setAttribute("disabled", "disabled");
  })

  //First O button
  o1.addEventListener("click", () => {
    letters.push("O")

    o1.classList.add("transparent");
    o1Button.classList.add("cursor");
    o1Button.setAttribute("disabled", "disabled");
  })

  //S button
  s.addEventListener("click", () => {
    letters.push("S")

    s.classList.add("transparent");
    sButton.classList.add("cursor");
    sButton.setAttribute("disabled", "disabled");
  })

  //A button
  a.addEventListener("click", () => {
    letters.push("A")

    a.classList.add("transparent");
    aButton.classList.add("cursor");
    aButton.setAttribute("disabled", "disabled");
  })

  //Second O button
  o2.addEventListener("click", () => {
    letters.push("O")

    o2.classList.add("transparent");
    o2Button.classList.add("cursor");
    o2Button.setAttribute("disabled", "disabled");
  })

  //timer and randomizer
  mediaCounter(counter, app, spans, letters);
  
})


