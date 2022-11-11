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
    // const winWidth = app.clientWidth;
    // const winHeight = app.clientHeight;

    for ( let i = 0; i < spans.length; i++ ) {
    
      // shortcut! the current div in the list
      let thisSpan = spans[i];
      let randomTop;
      let randomLeft;

      // get random numbers for each element
      if(pc){
        randomTop = getRandomNumber(0, 80);
        randomLeft = getRandomNumber(0, 85);
      } else {
        randomTop = getRandomNumber(0, 200);
        randomLeft = getRandomNumber(0, 85);
      }
      
      //adds .active class
      thisSpan.classList.add("active");
      // update top and left position
      thisSpan.style.top = randomTop +"vw";
      thisSpan.style.left = randomLeft +"vw";
      
    } 
  }

  function handleMediaChange(event) {
    let pc;
    let count;
    let originalCount;

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
      if(letters.length == 5 && letters.toString() == "P,O,S,A,O") {
        win = true;
      }

      if(win){
        clearInterval(timerId)
        app.innerHTML = `<div class="bravo">
          <h1>Bravo!</h1>
          <button class="btn">Igraj ponovo</button>
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

        p.classList.remove("transparent");
        pButton.classList.remove("cursor");
        pButton.removeAttribute("disabled");

        o1.classList.remove("transparent");
        o1Button.classList.remove("cursor");
        o1Button.removeAttribute("disabled");

        s.classList.remove("transparent");
        sButton.classList.remove("cursor");
        sButton.removeAttribute("disabled");

        a.classList.remove("transparent");
        aButton.classList.remove("cursor");
        aButton.removeAttribute("disabled");

        o2.classList.remove("transparent");
        o2Button.classList.remove("cursor");
        o2Button.removeAttribute("disabled");

        randomSpans(pc);
      }
    }

    //clears old timer if one exists
    if(timerId !== null) {
      clearInterval(timerId);
    }

    timerId = setInterval(ticker, 1000);
    randomSpans(pc);

    if(win){
      console.log("YOU WIN!")
      clearInterval(timerId);
    }
  }
  
  mediaQuery.addEventListener("change", handleMediaChange);

  handleMediaChange(mediaQuery);

  

}
