const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

// 투두 화면 상에서 지우기
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos; // toDos를 const로 정의하면 바꿀 수 없음
    // 그래서 let으로 수정!
    saveToDos();
}

// 투두 내용 LS에 저장하기
function saveToDos (){
    // JSON.stringify? object to string
    // why? cuz LS cannot save JS data
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 투두 HTML 상에 나타내기 및 모양 갖추기 및 항목마다 id 값 주기
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✘";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); // [].appendChild(): []안에 ()요소를 넣는다
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// 투두 내용 제출 시 내용 사라져 버리는 것 막기
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// 투두 내용 불러 오기
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // JSON.parse? string to object
        // why? 다시 자료로 활용하기 위해서?
        const parsedToDos = JSON.parse(loadedToDos); // 내용이 있을 때 실행됨
        // forEach? array가 가진 것으로 안에 담긴 요소에 한 번씩 함수를 실행시켜 준다
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();