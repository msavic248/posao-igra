export function mediaCounter(counter, app, spans) {

  //media query for above 576px
  const mediaQuery = window.matchMedia("(min-width: 576px)")
  let timerId = null;

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

      if(count == 0) {
        count = originalCount;
      }
    }

    //clears old timer if one exists
    if(timerId !== null) {
      clearInterval(timerId);
    }

    timerId = setInterval(ticker, 1000);

  }
  
  mediaQuery.addEventListener("change", handleMediaChange);

  handleMediaChange(mediaQuery);

  const winWidth = app.clientWidth;
  console.log(winWidth);
  const winHeight = app.clientHeight;
  console.log(winHeight);

  // i stands for "index". you could also call this banana or haircut. it's a variable
  for ( let i=0; i < spans.length; i++ ) {
 	
    // shortcut! the current div in the list
    let thisSpan = spans[i];
    
    // get random numbers for each element
    let randomTop = getRandomNumber(0, 80);
    let randomLeft = getRandomNumber(0, 80);
    
    thisSpan.classList.add("active");

    // update top and left position
    thisSpan.style.top = randomTop +"vw";
    thisSpan.style.left = randomLeft +"vw";
    
  } 

  function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }

}
