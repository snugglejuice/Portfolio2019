// Menu burger
let isDisplay = false;
let menu = document.getElementById('menu--mobile');
let panel = document.getElementById('menu-panel');


var menu_button = document.getElementById("menuBurgerButton");

menu_button.onclick = function () {
    var menu = document.getElementById('menu-panel');
    var overflow = document.getElementById('overflow');
    if (getComputedStyle(menu).display == 'none') {
        menu.setAttribute("style", "display: flex");
        overflow.setAttribute("style", "overflow:hidden");
        menu_button.classList.add("is-active");
        isDisplay = true;
    }
    else {
        menu.setAttribute("style", "display: none");
        overflow.setAttribute("style", "overflow:unset");
        menu_button.classList.remove("is-active");
        isDisplay = false;
    }
}

// Button project

let projectBtn1 = document.getElementById('project-button-1');
let projectBtn2 = document.getElementById('project-button-2');


let applyMargin = (boolean,id) => {
  let projectTxt = document.getElementById('project-button-margin-' + id);
  if (boolean) {
      projectTxt.style.marginRight = '5%';
      return;
  }
  projectTxt.style.marginRight = '0';
}

projectBtn1.addEventListener("mouseenter", () => applyMargin(true,1));
projectBtn1.addEventListener("mouseleave", () => applyMargin(false,1));
projectBtn2.addEventListener("mouseenter", () => applyMargin(true,2));
projectBtn2.addEventListener("mouseleave", () => applyMargin(false,2));

// Scroll apparition animation

window.onscroll = () => appearOnScrool()
window.ontouch = () => appearOnScrool()

hide = [document.getElementById("project1"),document.getElementById("project2"),document.getElementById("project3")]

const makeAppear = (x) => {
  if ( x == null ) return;
  if (window.pageYOffset >= x.offsetTop-600) {
    x.style.opacity="100%";
    x.style.transform="translateY(0px)"
  }
}
const appearOnScrool = () => {
  if (isDisplay == false) {
    hide.forEach( x => makeAppear(x))
  }
}
