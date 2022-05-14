//데이터 통신 -> fetch, axios

//1.fetch : fetch(url, options) //기본은 get
//기본적으로 promise 형태 반환
let result=[]
result = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error))
console.log(result)

result=[]
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => data.map(item => result.push(item)))
console.log(result)

const dataFetch= async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data)
}
dataFetch();

//2.axios -> 자동적으로 json 형식으로 변함
let a=axios.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data.data))
