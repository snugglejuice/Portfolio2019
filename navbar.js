// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

let highlight = document.getElementsByClassName('highlight');
// Get the navbar
var navbar = document.getElementById("navbar");



const makeAppear = (x) => {
  if ( x == null ) return;
  if (window.pageYOffset >= x.offsetTop-400) {
    x.style.backgroundPosition="-100% 0";
    return;
  }
  else {
    x.style.backgroundPosition="0 0";
  }
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (navbar != null) {
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  for (let item of highlight) {
    makeAppear(item)
  }
}
