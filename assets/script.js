const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const slideImage = document.getElementById('image');
const tagLine = document.getElementById('tagLine');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateSlide() {
  slideImage.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  tagLine.innerHTML = slides[currentIndex].tagLine;

	dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
	}
	
 });
}

arrowLeft.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

arrowRight.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', function() {
    currentIndex = index;
    updateSlide();
  });
});

updateSlide();

