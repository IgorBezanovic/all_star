let header = document.querySelector('#nav_track');
let navOpen = 0;
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (navOpen == 0) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = '0px';
    } else {
      header.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  }
};

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
