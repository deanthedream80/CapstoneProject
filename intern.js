document.getElementById("work").style.color = "blue";

let i = document.getElementById("intern");

i.addEventListener("click", myFunction);

let addon = document.createElement("div");
addon.innerText = "Intern, 2003-2005";
addon.style.color = "black";
addon.style.visibility = "visible";

function toggle(e) {
    if (e.style.visibility === "hidden") {
        e.style.visibility = "visible";
    }
    if (e.style.visibility === "visible") {
        e.style.visibility = "hidden";
    }
}

let created = false;
function myFunction() {
    if (!created) {
    i.append(addon);
    created = true;
    return;
    }
    toggle(addon)
};