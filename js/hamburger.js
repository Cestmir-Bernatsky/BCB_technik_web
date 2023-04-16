

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('nav-links li');
const links2 = document.querySelectorAll('.nav-links li a');

console.log(links2);

hamburger.addEventListener('click', (event) => {
    navLinks.classList.toggle('open');
});

links2.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});


/**********DISABLE SCROLLING******************/
 
function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
    function enable() {
    window.onscroll = function() {};
    }
    
    /**********DISABLE SCROLLING******************/

//////////SWIPE FNC NEW/////////////////

document.addEventListener('touchstart', touchStart);
document.addEventListener('touchmove', touchMove);
document.addEventListener('touchend', touchEnd);

var startingX, startingY, movingX, movingY;


function touchStart(evt){
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
    
}


function touchMove(evt){
    movingX = evt.touches[0].clientX;
    movingY = evt.touches[0].clientY;
}

function touchEnd(){
    if((startingX+100 < movingX) && (startingX < 30)){
        console.log('right'+ screen.width);
        navLinks.classList.toggle('open');
        if(navLinks.classList[1] == 'open'){
            disable();
        }else{
            enable();
        }

    }else if(startingX-100 > movingX && startingX > screen.width-20){
        navLinks.classList.toggle('open');
        console.log('left');
        if(navLinks.classList[1] == 'open'){
            disable();
        }else{
            enable();
        }
    }
}





//////////SWIPE FNC/////////////////

// document.addEventListener('touchstart', touchStart);
// document.addEventListener('touchmove', touchMove);


// var xDown = null;
// var yDown = null;

// function getTouches(event) {
//     return event.touches || event.originalEvent.touches;
// };

// function touchStart(event) {
//     const firstTouch = getTouches(event)[0];
//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
// };

// function touchMove(event) {
//     if (!xDown || !yDown){
//         return;
//     }
//     var xUp = event.touches[0].clientX;
//     var yUp = event.touches[0].clientY;
//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;

//     if(Math.abs(xDiff) > Math.abs(yDiff)){
//         if(xDiff > 0 && window.innerWidth < 1200){
//             navLinks.classList.toggle('open');
//         }
//         else if (window.innerWidth < 1200){
//             navLinks.classList.toggle('open');
//         }
// }

//     xDown = null;
//     yDown = null;
// };

