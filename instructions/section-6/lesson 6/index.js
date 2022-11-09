// fetch('https://api.github.com/users/Vjohnson222/repos')
// 		.then(response => response.json()) //Converting the response to a JSON object
// 		.then( data => document.body.append())
// 		.catch( error => console.error(error));

// fetch('https://api.github.com/users/Vjohnson222/repos')
// .then(response => response.json()) //Converting the response to a JSON object
// .then( data => document.body.append())
// .catch( error => console.error(error));

// fetch('https://api.github.com/users/{Vjohnson222}')
// 		.then(response => response.json()) //Converting the response to a JSON object
// 		.then( data => document.body.append())
// 		.catch( error => console.error(error));

fetch('https://api.github.com/users/Vjohnson222/repos', { 
                 headers: {
                      'Accept' : 'application/vnd.github.v3+json'
                  }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
                    const root = document.querySelector('#root');
     root.innerHTML = `<a href= ${data.html_url}>Name: ${data.name}</a>`
                   `  <p>Followers : ${data/followers}</p>`
                  
                })
