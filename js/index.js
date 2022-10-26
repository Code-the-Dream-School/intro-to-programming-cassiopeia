/* -------------------------------- copyright section -----------------------------------*/
const today = new Date (); 
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = (`Kenya Pascascio © ${thisYear} `);
footer.appendChild(copyright);
/* ---------------------------------------------------------------------------------------*/



/* -------------------------------- skills section ---------------------------------------*/
const skills = ['HTML', 'JAVASCRIPT', 'CSS', 'MATLAB'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('skill')
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
/* -----------------------------------------------------------------------------------------*/



/* ----------------------------------- leave a message form ----------------------------------*/

//hide messages section until a submission happens 
document.getElementById("messages").style.display = "none";

const messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event) =>
{
    // store data from the form 
    const name = event.target.name.value; 
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(event);
    //prevent page from automatic refresh when there is submission
    event.preventDefault();

    //print name, email, message to console 
    console.log(name);
    console.log(email);
    console.log(message);
   
    //create section for messages
    const messageSection = document.getElementById("messages");
    messageSection.style.display = "block";

   //create unordered message list
    const messageList = messageSection.querySelector("ul");

   // create list elements to store messages
   const newMessage = document.createElement("li");
   newMessage.classList.add ("message");

   // each list item  is a message specifying user name and email 
   newMessage.innerHTML = `<div> <a href= "mailto:${email}"> ${name}  </a> <span class = "msg"> wrote: ${message}</span> </div>` ;
    
   //create edit button 
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.classList.add("edit-button");
   

    editButton.addEventListener("click", (event) => {
        // redefines the innerHTML of newMessage if edit button is clicked which allows user to type new message
        var updatedMessage = window.prompt("Edit Your Message!"); 
        newMessage.innerHTML = `<div><a href= "mailto:${email}"> ${name} </a> <span class = "msg"> wrote: ${updatedMessage}</span></div> ` ;
        
        //gives you the edit/remove option everytime message is updated
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);
        messageList.append(newMessage);
    });

   //create remove button
   let removeButton = document.createElement("button");
   removeButton.innerText = "Remove";
   removeButton.type = "button";
   removeButton.classList.add("remove-button");
  


    //tells button to remove parent of button (which is the message) when clicked 
    removeButton.addEventListener("click", (event) =>{
       let entry = event.target.parentElement
        entry.remove();
    });

    // add to DOM
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);
  
    //reset form after user data has been "stored"
    messageForm.reset();
});
/*---------------------------------------------------------------------------------------*/



/*-------------------------------------AJAX ----------------------------------*/


var githubRequest = new XMLHttpRequest();

    githubRequest.open("GET","https://api.github.com/users/granddoody/repos" );
    githubRequest.send();

    githubRequest.addEventListener("load", function(){
        var repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories);

        var projectSection = document.getElementById("projects");
        var projectList = projectSection.querySelector("ul");

        for ( i = 0; i < repositories.length; i++){
            var project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
}
})

/*---------------------------------------------------------------------------------------*/

