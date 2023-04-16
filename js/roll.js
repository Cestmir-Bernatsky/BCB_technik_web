const elem = document.getElementsByClassName('rolovaci');
const button = document.getElementsByClassName('popis-rolovaci');

console.log(button);

function addEvent()
{
    for(var i=0; i<button.length; i++)
    {
        button[i].addEventListener('click', function(event){
            this.nextElementSibling.classList.toggle('hide');
        });
    }
}

addEvent();







