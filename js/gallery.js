const modal = document.querySelector(".modal");
const thumbnails = document.querySelectorAll(".gallery img");
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');
    //Dynamic change
    const originalSrc = thumbnail.getAttribute('data-original');
    original.src = `./images/gallery/${originalSrc}`;
    const altText = thumbnail.alt;
    imgText.textContent = altText;
  });
});

modal.addEventListener('click', (event) => {
  if(event.target.classList.contains('modal'))
  {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});