const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

if (activeSlide === 0) {
  document.getElementsByClassName("arrow left-arrow")[0].style.display = "none";
}

rightBtn.addEventListener("click", () => {
  console.log(activeSlide);
  if(activeSlide < slides.length - 1) {
    activeSlide++;
  }
  if (activeSlide >= slides.length - 1) {
    document.getElementsByClassName("arrow right-arrow")[0].style.display =
      "none";
    }
    else {
      document.getElementsByClassName("arrow left-arrow")[0].style.display = "";
      setBgToBody();
      setActiveSlide();
    }
});

leftBtn.addEventListener("click", () => {
   console.log("T : ",activeSlide);
   activeSlide--;
  

  if (activeSlide > 0) {
    // activeSlide = slides.length - 1;
     document.getElementsByClassName("arrow right-arrow")[0].style.display = "";
   }else {
    document.getElementsByClassName("arrow left-arrow")[0].style.display = "none";
    setBgToBody();
    setActiveSlide();
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}
document.getElementsByClassName("arrow right-arrow")[0].style.display = "";