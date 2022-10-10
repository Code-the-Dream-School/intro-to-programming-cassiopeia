// Set this year to thisYear variable. 
var today = new Date();
var thisYear = today.getFullYear();
// Set P element to copyright statement.
var copyright = document.createElement("p");
copyright.innerHTML = "Marwa Ahmad " + thisYear;
// Get footer element, and assign it copyright statement.
var footer = document.querySelector("footer");
footer.appendChild(copyright);


const skills = ["JavaScript (Beginner)", 
    "Python (Beginner)", 
    "Learning Authoring Software (incl. Articulate Rise/Storyline, Camtasia, Adobe Captivate, Illustrator & XD)", 
    "Figma"];
// Get Skills element using DOM selection.
var skillsSection = document.getElementById("skills");
//Get the unlisted elements from above.
var skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    console.log(skills[i]);
    skillsList.appendChild(skill);
}

