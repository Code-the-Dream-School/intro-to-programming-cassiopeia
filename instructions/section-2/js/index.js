let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "Almira " + thisYear;
footer.appendChild(copyright);

let skills = [
"JavaScript",
"HTML",
"Git"
];
let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul'); 
for (let i =0; i< skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}