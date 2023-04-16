var all = document.querySelectorAll('section, footer');
var popUp = document.getElementById('pop-up');
var goUpBtn = document.getElementById('goUp');

function PopUp() {
    if (window.location.href.indexOf('?mailsend') > -1) {
        all.forEach(element => {
            element.style.filter = 'blur(20px)';
        });
        goUpBtn.style.display = 'none';
        popUp.classList.toggle('active');
    }
}


function toggle() {
    popUp.classList.toggle('active');
    all.forEach(element => {
        element.style.filter = 'none';
    });
    goUpBtn.style.display = 'block';
}

PopUp();



