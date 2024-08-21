const slides = document.querySelectorAll(".slider img");
const prvBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imgId = document.querySelector(".img-id");
const gallaryContainer = document.querySelector(".gallary-container");
gallaryContainer.style.gridTemplateColumns = `repeat(${slides.length} , 1fr)`;
let currentSlide = 0;

updateSliderControles();

function goToSlide(n) {
  //Remove active class From Tyhe current slide
  slides[currentSlide].classList.remove("active");
  //update the current slide
  currentSlide = (n + slides.length) % slides.length;
  //Add active class to the new slide
  slides[currentSlide].classList.add("active");
  //update slider controles
  updateSliderControles();
  //update thumbnail
  updateThumbnailActiveClass(currentSlide);
}

prvBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

function updateSliderControles() {
  prvBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
  imgId.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
  const thumbnail = img.cloneNode();
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
  gallaryContainer.appendChild(thumbnail);
});

function updateThumbnailActiveClass(index) {
  gallaryContainer.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}
