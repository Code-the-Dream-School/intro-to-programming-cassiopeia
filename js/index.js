const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const skillsSection = document.querySelector('.skills');
const skillsList = skillsSection.querySelector("ul");

let copyright = document.createElement("p");
copyright.innerHTML = "Maksim Khrapavitski ©" + thisYear;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "XML"];
for (let i = 0; i < skills.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = skills[i];
    skillsList.appendChild(item);
}