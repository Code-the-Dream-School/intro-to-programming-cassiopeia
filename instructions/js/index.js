const today = new Date(); 

let thisYear = today.getFullYear();
let footer = document.querySelector('footer'); 
let copyright = document.createElement('p');
copyright.innerHTML = `© Tracy Cano ${thisYear}`;  
footer.appendChild(copyright);

let skills = ["JavaScript", "Java", "HTML5", "CSS"];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');
let messageCount = 0;
messageForm.addEventListener("submit", (e) => { 
     let name = e.target.name.value;
     let email = e.target.email.value;
     let message = e.target.message.value;
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);
e.preventDefault();
let messageSection = document.querySelector("#messages");
let messageHeader = document.querySelector("#messages_header");
messageHeader.innerHTML = "Messages";
messageHeader.style.visibility="visible";
messageSection.style.visibility="hidden";

let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>  `;
let removeButton = document.createElement("button");
removeButton.classList.add("remove-button");
removeButton.innerText = "Remove";
removeButton.type = "button";
let editButton = document.createElement("button");
editButton.classList.add("edit-button");
editButton.innerText = "Edit";
editButton.type = "button";
removeButton.addEventListener("click", (e) => {
  messageCount --;
    let entry = removeButton.parentNode;
    entry.remove();
    if(messageCount == 0) {
      messageHeader.style.visibility="hidden";
      messageSection.style.visibility="hidden";
    }
    
});

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
messageForm.reset();
messageSection.style.visibility="visible";
messageCount++;
editButton.addEventListener("click", (e) => {
  e.preventDefault();
  newMessage.remove();
  messageCount--;
  if(messageCount == 0) {
    messageHeader.style.visibility="hidden";
    messageSection.style.visibility="hidden";
  }
  // let nameElement = document.querySelector("[name = name]");
  // nameElement.value=name;
  // let emailElement = document.querySelector("[name = email]");
  // emailElement.value=email;
  // let messageElement = document.querySelector("[name = message]");
  // messageElement.value=message;
  messageForm.name.value = name;
  messageForm.email.value = email;
  messageForm.message.value = message;
  console.log(name);
});
});

