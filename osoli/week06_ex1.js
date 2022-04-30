localStorage.setItem('name','yoona');
localStorage.setItem('age',23); //문자열 형태로 저장

//local storage에서 정보를 가져올때 사용하는 메소드
const result=localStorage.getItem('age');
console.log(result)
console.log(typeof(result))

const travel={
    destination:['paris','sydeny'],
    days:100,
    date:undefined,
    inAvailable:true
}
localStorage.setItem('travel1',travel)
//localStorage엔 문자열만 저장됨
//JSON.stringify, JSON.parse
localStorage.setItem('travel',JSON.stringify(travel))
const data=localStorage.getItem('travel');
console.log(data);
data2=JSON.parse(localStorage.getItem('travel'));
console.log(data2);
console.log(typeof(data2));

localStorage.removeItem('travel1');
localStorage.clear();