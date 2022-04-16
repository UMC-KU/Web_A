const $div=document.querySelector('.container');
const $form=document.querySelector('form');
const $input=document.querySelector('input');
const $button=document.querySelector('button');

//1.이벤트 핸들러
//콜백함수
// $div.onclick=handleClick;
function handleClick(e) {
    alert('click');
    console.log(e);
}

//$div.onclick=()=>alert("clicked");

//2.이벤트리스너
// $div.addEventListener('click',handleClick);
// $input.addEventListener('change',handleChange)
// function handleChange(e){
//     console.log(e.target);
//     console.dir(e.target);
//     console.log(e.target.value);
// }
$form.addEventListener('submit',handleSubmit);
function handleSubmit(e){
    e.preventDefault();
    const inputValue=$input.value;
    console.log(inputValue);
}

//3.이벤트 삭제
//$div.removeEventListener('click',handleClick);