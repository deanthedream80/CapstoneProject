document.getElementById("education").style.color = "blue";

let c = document.getElementById("codex");

c.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("codex").innerHTML = 'CodeX Academy, Full-Stack Developer, 2023<br><div style="color: black">Learned HTML, CSS, JavaScript, GitHub, Heroku, and more.</div>';
}