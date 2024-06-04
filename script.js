let menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function skillsEffect() {
  var skills = document.getElementById("skills");
  var distance_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distance_skills >= 300) {
    let habilidades = document.getElementsByClassName("progress");
    habilidades[0].classList.add("python");
    habilidades[1].classList.add("ccpp");
    habilidades[2].classList.add("swift");
    habilidades[3].classList.add("javascript");
    habilidades[4].classList.add("htmlcss");
    habilidades[5].classList.add("comunication");
    habilidades[6].classList.add("travail");
    habilidades[7].classList.add("creativite");
    habilidades[8].classList.add("perseverance");
    habilidades[9].classList.add("last");
  }
}

window.onscroll = function () {
  skillsEffect();
}; 