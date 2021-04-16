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
//FAQ
let accordionArrow = document.querySelectorAll('.question_accordionArrow');
let accordionDescription = document.querySelectorAll('.question_description');
let open = [0, 0, 0, 0, 0];

accordionArrow.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (open[index] == 0) {
      accordionDescription[index].style.display = 'block';
      Object.assign(accordionArrow[index].style, {
        transform: 'rotate(180deg)'
      });
      open[index] = 1;
    } else {
      accordionDescription[index].style.display = 'none';
      Object.assign(accordionArrow[index].style, {
        transform: 'rotate(0deg)'
      });
      open[index] = 0;
    }
  });
});

const panels = document.querySelectorAll('.panel');
console.log('caca')
panels.forEach((panel)=> {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        console.log('kliked')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}