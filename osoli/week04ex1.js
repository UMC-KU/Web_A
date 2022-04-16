const $body=document.getElementsByTagName('body');
const $container=document.getElementsByClassName('container'); //결과값이 하나 이상인경우 유사 배열로 반환
const $title=document.getElementById('title');
const $cityList=document.getElementById('cityList');
const $cities=$cityList.getElementsByTagName('li');

// console.log($body);
// console.log($body[0]);
// console.log($body[0].innerText);
// console.log($body[0].innerHTML);
// console.log($container[0].innerText);
// console.log($title); //결과값이 하나인경우 element가 반환
// console.log($cityList);
// console.log($cities);

const cities=$cityList.querySelector('li'); //querySelector은 가장 처음껄 반환
//console.log(cities);
const cities2=$cityList.querySelectorAll('li'); //querySelector은 가장 처음껄 반환
//console.log(cities2);

//cities.map(city=>console.log(city)); 
//유사 배열이기 때문에 filter 또는 map 사용 불가
//cities2.forEach(city=>console.log(city)); //NodeList는 forEach사용 가능, HTMLcollection은 사용 불가능

/*유사배열을 배열로 만들어주려면 spread operator, Array.from*/
const newCities=[...cities2];
//newCities.map(city=>console.log(city));

const newCities2=Array.from(cities2);
//newCities2.map(city=>console.log(city));

$body[0].style.backgroundColor='black';
//그냥 body는 유사 배열 형태라서 안됨

const worstCities=document.createElement('ul');
const worstCitiesArr=['seoul','sydney','London'];
worstCitiesArr.map((city)=>{
    const worstCityItem=document.createElement('li');
    worstCityItem.innerText=city;
    worstCities.appendChild(worstCityItem);
})

const cityDiv=document.getElementsByClassName('city');
//cityDiv[0].appendChild(worstCities);

// const worstCities2=`
// <ul>
//     <li>오</li>
// </ul>
// `
// cityDiv[0].insertAdjacentHTML("beforeend",worstCities2) //삽입 포지션 결정 가능

const worstCityDiv=document.createElement('div');
const worstCityTitle=document.createElement('h2');
worstCityTitle.innerText='<worst>';
worstCityDiv.appendChild(worstCityTitle);
worstCityDiv.appendChild(worstCities);
$container[0].appendChild(worstCityDiv);

worstCityDiv.classList.add('city');