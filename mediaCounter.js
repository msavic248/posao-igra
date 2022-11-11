export function mediaCounter(counter, app, spans, letters) {

  //media query for above 576px
  const mediaQuery = window.matchMedia("(min-width: 576px)")

  let timerId = null;
  let win;

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomSpans(pc) {
    const winWidth = app.clientWidth;
    const winHeight = app.clientHeight;

    for ( let i = 0; i < spans.length; i++ ) {
    
      // shortcut! the current div in the list
      let thisSpan = spans[i];
      let randomTop;
      let randomLeft;

      // get random numbers for each element
      if(pc){
        randomTop = getRandomNumber(0, 80);
        randomLeft = getRandomNumber(0, 80);
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
        app.innerHTML = `<h1>Bravo!</h1>
        <button class="btn">Igraj ponovo</button>`
      }

      //when count reaches 0, reset timer, randomize spans
      if(count < 0) {
        count = originalCount;
        letters.length = 0;
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
