fetch('https://jsonplaceholder.typicode.com/users')
.then( res => res.json() )
.then( data => console.log(data) )
.catch(error => console.log(error))

axios.get('https://jsonplaceholder.typicode.com/users')
.then( data => console.log(data.data) )