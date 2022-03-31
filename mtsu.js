document.getElementById("education").style.color = "blue";

let m = document.getElementById("mtsu");

m.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("mtsu").innerHTML = 'Middle Tennessee State University, B.S. Liberal Studies, 2003<br><div style="color: black";>Studied Anthropology and Psychology with minor in Religious Studies</div>';
}