const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const skillsSection = document.querySelector('.skills');
const skillsList = skillsSection.querySelector("ul");
const messageForm = document.querySelector('[name="leave_message"]')
const submission = messageForm.addEventListener('submit', handleSubmit);
const messageSection = document.querySelector('#messages');

let copyright = document.createElement("p");
copyright.innerHTML = "Maksim Khrapavitski ©" + thisYear;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "XML"];
for (let i = 0; i < skills.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = skills[i];
    skillsList.appendChild(item);
}


function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const msg = e.target[2].value;

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${msg}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', (e) => e.target.parentElement.remove());
    newMessage.appendChild(removeButton);
    messageSection.appendChild(newMessage);


    messageForm.reset();
}

function removeElement(e){
}