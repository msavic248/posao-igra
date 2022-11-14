import './style.css'
import { mediaCounter } from './mediaCounter.js'

export default function lettersGame() {
  const letters = [];
  const app = document.querySelector('#app');

  app.innerHTML = `
      <span id="s"><button id="sButton">S</button></span>
      <span id="w"><button id="wButton">W</button></span>
      <span id="i"><button id="iButton">I</button></span>
      <span id="t"><button id="tButton">T</button></span>
      <span id="c"><button id="cButton">C</button></span>
      <span id="h"><button id="hButton">H</button></span>
      <button class="btn">Start</button>
      <p class="counter"></p>
  `

  const spans = document.querySelectorAll("span");
  const s = document.querySelector("#s");
  const sButton = document.querySelector("#sButton");
  const w = document.querySelector("#w");
  const wButton = document.querySelector("#wButton");
  const i = document.querySelector("#i");
  const iButton = document.querySelector("#iButton");
  const t = document.querySelector("#t");
  const tButton = document.querySelector("#tButton");
  const c = document.querySelector("#c");
  const cButton = document.querySelector("#cButton");
  const h = document.querySelector("#h");
  const hButton = document.querySelector("#hButton");

  const start = document.querySelector(".btn");
  const counter = document.querySelector(".counter");

  //Game start
  start.addEventListener("click", () => {

    //remove flex and hides start button
    app.classList.remove("flex");
    start.classList.add("hide");

    //S button
    s.addEventListener("click", () => {
      letters.push("S")

      //hides and disables button
      s.classList.add("transparent");
      sButton.classList.add("cursor");
      sButton.setAttribute("disabled", "disabled");
    })

    //W button
    w.addEventListener("click", () => {
      letters.push("W")

      w.classList.add("transparent");
      wButton.classList.add("cursor");
      wButton.setAttribute("disabled", "disabled");
    })

    //I button
    i.addEventListener("click", () => {
      letters.push("I")

      i.classList.add("transparent");
      iButton.classList.add("cursor");
      iButton.setAttribute("disabled", "disabled");
    })

    //T button
    t.addEventListener("click", () => {
      letters.push("T")

      t.classList.add("transparent");
      tButton.classList.add("cursor");
      tButton.setAttribute("disabled", "disabled");
    })

    //C button
    c.addEventListener("click", () => {
      letters.push("C")

      c.classList.add("transparent");
      cButton.classList.add("cursor");
      cButton.setAttribute("disabled", "disabled");
    })

    //H button
    h.addEventListener("click", () => {
      letters.push("H")

      h.classList.add("transparent");
      hButton.classList.add("cursor");
      hButton.setAttribute("disabled", "disabled");
    })

    //timer and randomizer
    mediaCounter(counter, app, spans, letters);
    
  })
}

lettersGame();

