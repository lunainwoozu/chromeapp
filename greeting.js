const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    document.title = `Hello ${text}`;
}

// local storage: 나의 컴퓨터(객체)에 작은 JS 정보를 저장함
// LS접근해서 이름 들고 오기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName(); // 정보가 존재하지 않을 때
        document.title = `Nice to meet you!`
    } else {
        paintGreeting(currentUser); // 정보가 존재할 때
    }
}

function init(){
    loadName();
}

init();