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

// ----------------------------------------------------------------------------------------

//THIS IS AJAX
//First assign the ajax method


    // const githubRequest = new XMLHttpRequest();
    // githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    // githubRequest.send();

// const makeRequest = new XMLHttpRequest();
// makeRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
// makeRequest.onload = function(){

//This reflects what will happen when our data loads

// let ourData = JSON.parse( makeRequest .response.Text) 
// Console.log(ourData.Results)
// }


___________________________________________________________
// Then this – Yes you do know how to do this
// Give the place where you want this to appear an ID space is all 

 

// function renderHTML(data){
// Console.log(data)
// }

// function fetchData(){
// Fetch('https://api.github.com/users/Vjohnson222/repos')
// // Then This 
// .then(response => response.json())
// .then (dataFromApi => {
// renderHTML(dataFromApi)
// })
// }

// --------------------------------------------
// Followed video tutorial after being frustrated 
console.log('Hello')

var area = document.getElementById("dataHere");
function renderHTML(data){

    Console.log(data)
    }

    function fetchData(){

fetch('https://api.github.com/users/Vjohnson222/repos')
.then(res => res.json())
.then (data => {
    renderHTML(data)
    })
    }

var area1 = document.getElementById("dataHere1");    

// var url ='https://api.github.com/users/Vjohnson222/repos';

 
//   function exchange1() {
//     fetch(url)
    
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         area1.innerHTML = `<a href="med1.html">This is the data</a><br/><br/><br/><br/>"${data[0].id} "`;

     
//       });
//   }

    // const githubRequest = new XMLHttpRequest();
    // githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    // githubRequest.send();

    // req.addEventListener("progress", updateProgress);
    // req.addEventListener("load", transferComplete);
    // req.addEventListener("error", transferFailed);
    // req.addEventListener("abort", transferCancelled);
    // const githubRequest = new XMLHttpRequest();
    // githubRequest.open('GET', 'https://api.github.com/users/Vjohnson222/repos');
    // githubRequest.send();


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

