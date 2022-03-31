document.getElementById("work").style.color = "blue";

let r = document.getElementById("rfc");

r.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("rfc").innerHTML = 'Middle Tennessee Christian Foundation<br><div style="color: black";>Executive Director, 2009-Present</div>';
}