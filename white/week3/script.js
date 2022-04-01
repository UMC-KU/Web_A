
//데이터타입, 자료형
const str = 'hi';
const number = 2;
const bool = true;

const a = undefined;
const b = null;

let variable;
console.log(variable);

//연산자
const aa = 10%3;
console.log(aa);
const bb = 10**2;
console.log(bb);
let cc = 5;
console.log(cc);
cc +=10;
console.log(cc);
cc-=8;
console.log(cc);

let data = 'happy'+' 2022';
console.log(data);
data += '!!';

//배열
const arr = ['a','b','c'];
const arr2 = new Array('a','b','c');
const arr3 = new Array();
arr3[0] = 'a';
console.log(arr, arr2, arr3)

//뒤에 원소 추가
arr.push('d','e');
console.log(arr);
//앞에 원소 추가
arr.unshift('f');
console.log(arr);

//원하는 지점에 추가 및 삭제
//splice(시작index, 삭제할 원소 개수, 추가할 원소들)
console.log(arr.splice(3,1,'g','h'));
console.log(arr);

//맨뒤 원소 삭제
console.log(arr.pop());
console.log(arr);
//맨앞 원소 삭제
console.log(arr.shift());
console.log(arr);

//객체
const pooh ={
    name : 'pooh',
    species : 'bear',
    job : 'disney character',
    gender : 'boy',
    'say-Hi' : function() {
        console.log("~~~~");
    }
}
pooh['say-Bye'] = function() {
    console.log("~~~~~");
}
pooh.favorites = ['honey', 'friends'];
console.log(pooh);

delete pooh.favorites;
console.log(pooh);

//생성자 함수
function Character(name, species, job, gender) {
    this.name = name;
    this.species=species;
    this.job=job;
    this.gender = gender;
    this['say-Hi']= function() {
        console.log(`~~~${this.name}~~`);
    }
}
const aaa= new Character('aaa', 'bear','c', 'boy');
console.log(aaa);
aaa['say-Hi']();

//조건문
let age=15;
if(age>=10 && age<20) {
    console.log('10대');
} else if(age>=20 && age<30) {
    console.log('20대');
}

const result = age>19 ? '술o':'미성년자';
console.log(result);

age=20;
switch(age){
    case 10:
        console.log('10대');
        break;
    case 20:
        console.log('20대');
        break;
}

//반복문
const numArr = [77, 81, 12, 34, 51, 20];
for (let i=0; i<numArr.length; i++){
	numArr[i]+=10;
}
console.log(numArr);

let i=0;
while (i<numArr.length) {
    numArr[i]+=10;
    i++;
}
console.log(numArr);