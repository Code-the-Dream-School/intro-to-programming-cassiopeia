const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const skillsSection = document.querySelector('.skills');
const skillsList = document.querySelector('#skillsList');
const messageForm = document.querySelector('[name="leave_message"]')
const submission = messageForm.addEventListener('submit', handleSubmit);
const messageSection = document.querySelector('.messages');

let copyright = document.createElement("p");
copyright.innerHTML = "Maksim Khrapavitski ©" + thisYear;
copyright.classList.add("footer")
footer.appendChild(copyright);

const skills = [
    { name: "Javascript", tooltip: "Web developer, front end"}, 
    { name: "HTML", tooltip: "Web developer, front end"},
    {name: "CSS", tooltip: "Web developer, front end"},
    {name: "XML", tooltip: "Web developer, front end"},
];
for (let i = 0; i < skills.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = skills[i].name;
    item.title = skills[i].tooltip;
    item.classList.add("item");
    skillsList.appendChild(item);
}


function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const msg = e.target[2].value;

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span class="msg">${msg}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("remove_button")
    removeButton.addEventListener('click', removeElement);
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.classList.add("edit_button");
    editButton.addEventListener('click', editElement);
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageSection.appendChild(newMessage);
    if (messageSection.style.visibility ==="hiden") messageSection.style.visibility = "visible";

    messageForm.reset(); 
}

function removeElement(e){
    e.target.parentElement.remove();
   
}

function editElement(e){
    const item = e.target.parentElement;
    let textElement = item.childNodes[2];
    let newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "edited_text";
    newInput.value = textElement.innerHTML;
    let submitted  = document.createElement('button');
    submitted.innerHTML = "Submit edit";
    submitted.type = "button";
    submitted.addEventListener('click', editMessage);
    textElement.innerHTML = "";
    textElement.appendChild(newInput);
    textElement.appendChild(submitted);
    e.target.remove();
}

function editMessage(e){
    let li = e.path[2];
    li.children[1].innerHTML = e.path[1].children[0].value;
    let editButton = documnet.createElement('button');
    editButton.innerHTML = "Edit"
    editButton.type = "button";
    editButton.addEventListener('click', editElement);
    let children = [].slice.call(li.childNodes);
    children.splice(3, 0, editButton);
    li.innerHTML = "";
    children.forEach((item, i) => {
        li.appendChild(item);
    })
}