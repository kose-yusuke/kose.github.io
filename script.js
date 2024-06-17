document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    setInterval(() => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
      index = (index + 1) % totalSlides;
    }, 5000);
  });
  