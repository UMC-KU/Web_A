const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// 1. 이벤트 핸들러 이용
//$div.이벤트이름 = 콜백 함수

// $div.onclick = handleClick;

// function handleClick () {
//     console.log('clicked');
// }

// $div.onclick = () => console.log("clicked");
// $div.onclick = () => alert("clicked");

//2. addEventListener


// $div.addEventListener('click', () => console.log('clicked'))
// $div.addEventListener('click', () => alert('clicked'))

// //3. removeEventListener

// $div.removeEventListener('click',handleClick);


// 

// $div.addEventListener('click', handleClick);

// function handleClick (event) {
//     console.log(event);
// }


$input.addEventListener('change',handleChange)
function handleChange(event) {
    console.dir(event.target);
}

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = $input.value;
    console.log(inputValue);
    $input.value = ''
}

