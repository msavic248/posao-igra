import lettersGame from "./main";

export function mediaCounter(counter, app, spans, letters) {

  //media query for above 576px
  const mediaQuery = window.matchMedia("(min-width: 576px)")

  let timerId = null;
  let win;

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomSpans(pc) {
    //for each span, random location
    spans.forEach(span => {
      let randomTop;
      let randomLeft;

      // get random numbers for each element corresponding to vw
      if(pc){
        randomTop = getRandomNumber(0, 80);
        randomLeft = getRandomNumber(0, 85);
      } else {
        randomTop = getRandomNumber(0, 200);
        randomLeft = getRandomNumber(0, 85);
      }
      
      //adds .active class
      span.classList.add("active");

      // update top and left position
      span.style.top = randomTop +"vw";
      span.style.left = randomLeft +"vw";
    })
  }

  //checks if in PC or mobile mode
  function handleMediaChange(event) {
    let pc;
    let count;
    let originalCount;

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

    if (event.matches) {
      console.log("PC Mode")

      //PC mode uses PC counter
      pc = true;
      count = 4;
      originalCount = 4;
      
    } else {
      console.log("Mobile Mode")

      //MO mode uses MO counter
      pc = false;
      count = 5;
      originalCount = 5;
    }

    const ticker = () => {
      counter.innerHTML=`${count}`
      count--;

      //win condition
      if(letters.length == 6 && letters.toString() == "S,W,I,T,C,H") {
        win = true;
      }

      if(win){
        clearInterval(timerId)
        app.innerHTML = `<div class="bravo">
          <h1>Well done!</h1>
          <button class="btn">Play again</button>
        </div>`

        //play again button resets the game
        const again = document.querySelector(".btn");

        again.addEventListener("click", ()=> {
          lettersGame();
          app.classList.add("flex");
        })
      }

      //when count reaches 0, reset timer, randomize spans
      if(count < 0) {
        count = originalCount;
        letters.length = 0;

        s.classList.remove("transparent");
        sButton.classList.remove("cursor");
        sButton.removeAttribute("disabled");

        w.classList.remove("transparent");
        wButton.classList.remove("cursor");
        wButton.removeAttribute("disabled");

        i.classList.remove("transparent");
        iButton.classList.remove("cursor");
        iButton.removeAttribute("disabled");

        t.classList.remove("transparent");
        tButton.classList.remove("cursor");
        tButton.removeAttribute("disabled");

        c.classList.remove("transparent");
        cButton.classList.remove("cursor");
        cButton.removeAttribute("disabled");

        h.classList.remove("transparent");
        hButton.classList.remove("cursor");
        hButton.removeAttribute("disabled");

        randomSpans(pc);
      }
    }

    //clears old timer if one exists
    if(timerId !== null) {
      clearInterval(timerId);
    }

    timerId = setInterval(ticker, 1000);
    randomSpans(pc);

  }
  
  //detects if above or below 576px
  mediaQuery.addEventListener("change", handleMediaChange);

  handleMediaChange(mediaQuery);

}
