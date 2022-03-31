document.getElementById("education").style.color = "blue";

let m = document.getElementById("mtsu");

m.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("mtsu").innerHTML = "Middle Tennessee State University, B.S. Liberal Studies, 2003<br>Studied Anthropology and Psychology with a minor in Religious Studies";
}

document.getElementById("education").style.color = "blue";

let l = document.getElementById("lipscomb");

l.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("lipscomb").innerHTML = "Lipscomb University, M.A. Christian Studies, 2007<br>Graduated with a 3.5 GPA";
}

document.getElementById("education").style.color = "blue";

let c = document.getElementById("codex");

c.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("codex").innerHTML = "CodeX Academy, Full-Stack Developer, 2023<br>Learned HTML, CSS, JavaScript, GitHub, Heroku, and more.";
}