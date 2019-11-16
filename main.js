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

hide = [document.getElementById("project1")]

const makeAppear = (x) => {
  if ( x == null ) return;
  if (window.pageYOffset >= x.offsetTop-600) {
    x.style.opacity="100%";
    x.style.transform="translateY(0px)"
  }
}
const appearOnScrool = () => {
  hide.forEach( x => makeAppear(x))
}
