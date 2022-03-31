document.getElementById("education").style.color = "blue";

let l = document.getElementById("lipscomb");

l.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("lipscomb").innerHTML = 'Lipscomb University, M.A. Christian Studies, 2007<br><div style="color: black";>Graduated with a 3.5 GPA</div>';
}