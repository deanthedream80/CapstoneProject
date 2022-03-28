const data = {
    Education: ["CodeX Academy"],
    Experience: ["Github Projects"],
    Skills: ["Javascript", "HTML", "CSS", "Heroku"]
};
let card;
for(i=0;i<data.Education.length;i++) {
    card = document.createElement("p");
    card.innerText = data.Education[i];
    document.getElementById("education").append(card);
}
for(i=0;i<data.Experience.length;i++) {
    card = document.createElement("p");
    card.innerText = data.Experience[i];
    document.getElementById("experience").append(card);
}
for(i=0;i<data.Skills.length;i++) {
    card = document.createElement("p");
    card.innerText = data.Skills[i];
    document.getElementById("skills").append(card);
}
