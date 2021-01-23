
//caroseul
var slideIndex;

function initSlider() {
	slideIndex = 1;
	showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



//Burgder menu for mobile

let loricaBtn = document.querySelector('#button');
let loticraTxt = document.getElementById('links')
let width = window.matchMedia("(max-width: 700px)")

console.log(width);

window.addEventListener('resize', function () { 
    window.location.reload(); 
});

if (width.matches) {
    loricaBtn.addEventListener("click", function(){ 
        if(loticraTxt.style.display == 'flex'){
            loticraTxt.style.display = "none";
        } else {
            loticraTxt.style.display = "flex";
        }
    });
} else { 
    loticraTxt.style.display = "flex";
}
