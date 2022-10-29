// Set this year to thisYear variable. 
var today = new Date();
var thisYear = today.getFullYear();
// Set P element to copyright statement.
var copyright = document.createElement("p");
copyright.innerHTML = "Marwa Ahmad " + thisYear;
// Get footer element, and assign it copyright statement.
var footer = document.querySelector("footer");
footer.appendChild(copyright);

// My skills.
const skills = ["JavaScript (Beginner)", 
    "Python (Beginner)", 
    "Learning Authoring Software (incl. Articulate Rise/Storyline, Camtasia, Adobe Captivate, Illustrator & XD)", 
    "Figma", "Miro", "Animaker", "PowToon", "Vyond", "SPSS", "Office Applications (incl. Google Workspace & Microsoft)", "& multiple Collaboration tools (incl. Jira, Confluence, Slack, Discord & TeamWork.com)"];
// Get Skills element using DOM selection.
var skillsSection = document.getElementById("skills");
//Get the unlisted elements from above.
var skillsList = skillsSection.querySelector("ul");
// Populate the list with my skills.
for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}



var messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var message = event.target.message.value;
    console.log(name + " " + email + ": " + message);

    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");
    var newMessage = document.createElement("li");
    newMessage.innerHTML = "<a href='mailto:" + email + "'>" + name + "</a>: <span> " + message + "</span>   ";
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function (event) {
        var entry = event.target.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

