function accordion () {
  const openAccordionBtn = document.querySelectorAll('.js--acordion__btn');

  openAccordionBtn.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.querySelector('.js--acordion__content').classList.toggle('is--active');
    })
  });
}

document.addEventListener("DOMContentLoaded", () => { 
  accordion ();
});