document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.links-list a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');

      document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
      });

      document.querySelectorAll('.container').forEach(section => {
        section.style.display = 'none';
      });

      const target = document.getElementById(sectionId);
      if (target) {
        target.style.display = 'block';
      }
    });
  });

  document.querySelectorAll('.back').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
      });

    const mainContainer = document.querySelector('.container');
      if (mainContainer) {
      mainContainer.style.display = 'block';
      }
    });
  });

  document.querySelector('.flash').addEventListener('click', e => {
  e.preventDefault();

  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  const mainContainer = document.querySelector('.container');
  if (mainContainer) {
    mainContainer.style.display = 'block';
  }
});

});





/*let currentIndex = 0;
  const slides = document.querySelectorAll('.swipewrap');
  const totalSlides = slides.length;
  const slidesContainer = document.querySelector('.swipesection');

  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide(event) {
    event.preventDefault();
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlide();
    }
  }

  function prevSlide(event) {
    event.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  }*/


