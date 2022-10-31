const today = new Date();
const thisyear = today.getFullYear();
const footer = document.getElementById('footer')
footer.innerHTML= `Copyright Ⓒ Veronica Johnson@CoDance.com:   ${thisyear}`;
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

const messageFor = document.querySelector('[name = leave_message]');
messageForm.addEventListener('submit',function(event){
    
    messageForm.reset();
    });

    function onRemoveButtonClick(event){
        const entry = event.target.parentNode;
        entry.remove();

    }

    function handleResponse(){
        const repositories = JSON.parse(this.response);
        console.log(repositories);
    }
    // const githubRequest = new XMLHttpRequest();
    // githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    // githubRequest.send();

    req.addEventListener("progress", updateProgress);
    req.addEventListener("load", transferComplete);
    req.addEventListener("error", transferFailed);
    req.addEventListener("abort", transferCancelled);
    const githubRequest = new XMLHttpRequest();
    githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    githubRequest.send();


    // window.addEventListener('load', (event)=> {
    //     console.log('page is fully loaded');
    //     const githubRequest = new XMLHttpRequest();
    //     githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    //     githubRequest.send();
    //     githubRequest.addEventListener('load',(event)=>{

            // const repositories = JSON.parse(this.response);
            // console.log(repositories);
    //     })
    // });