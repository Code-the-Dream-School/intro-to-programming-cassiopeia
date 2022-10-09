const today = new Date();
const thisyear = today.getFullYear();
const footer = document.getElementById('footer')
footer.innerHTML= `Veronica M Johnson :${thisyear}`;
const copyright = document.createElement('p');
copyright.innerHTML = `Veronica M Johnson :${thisyear}`;
footer.appenChild(copyright);

let messageForm = document.getElementsByName("leaveMessage")
let SubmitButton = document.getElementsByTagName("button")
SubmitButton.addEventListener('click', myFunction);

function myFunction(event){
    event.preventDefault();

    let fname = document.getElementById('name')
    let emailBox = document.getElementById('email')
    let messageBox = document.getElementById('message')

    event.target.fname
    event.target.emailBox
    event.target.messageBox

    console.log(fname, emailBox,messageBox)
}

const skills = ['web design', 'HTML', 'CSS','css graphics and animation', 'teaching'];
const skillSection = document.querySelector('#skills');
const ul = skillSection.querySelector("ul");
for(let i=o; i<skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    ul.appendChild(skill);
}
