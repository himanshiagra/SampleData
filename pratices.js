let currentIndex = 0;
let autoplayInterval;


const slider = document.querySelector('.slider');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');


function nextSlide() {
  currentIndex = (currentIndex + 1) % 4; 
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}


function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000); 
}


function stopAutoplay() {
  clearInterval(autoplayInterval);
}


pauseButton.addEventListener('click', stopAutoplay);
resumeButton.addEventListener('click', startAutoplay);


startAutoplay();
