let currentIndex = 0;
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
  }