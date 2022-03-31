document.getElementById("work").style.color = "blue";

let i = document.getElementById("intern");

i.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("intern").innerHTML = 'Middle Tennessee Christian Foundation<br><div style="color: black";>Intern, 2003-2005</div>';
}