document.getElementById("work").style.color = "blue";

let ck = document.getElementById("coke");

ck.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("coke").innerHTML = 'Cokesbury<br><div style="color: black";>Outside Sales, 2005-2009</div>';
}