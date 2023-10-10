let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card3");
  if (n > Math.ceil(slides.length/3)) {slideIndex = 1}
  if (n < 1) {slideIndex = Math.ceil(slides.length/3)}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  const startIndex = (slideIndex - 1) * 3;
  const endIndex = Math.min(startIndex + 2, slides.length - 1);

  for (i = startIndex; i <= endIndex; i++) {
    slides[i].style.display = "block";
  }
}
