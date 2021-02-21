const body = document.querySelector("body");
// const BG_KEY = "7FUxTm71yaxRwERWoT3y9SBh-EC1P2d2UyNZ6seVTrM";

const IMG_NUMBER = 4;

/*function handleImgLoad(){
    console.log("finish loading");
}*/

// 그림 api로 가져오기
function getImage(){
    const image = new Image();
    image.src = `https://source.unsplash.com/1600x900/?sky`;
    image.classList.add("bgImage");
    body.prepend(image);
}

// 그림 배경에 넣기
/* function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); 
    body.prepend(image);
    // image.addEventListener("loadend", handleImgLoad);
} */

// 랜덤 숫자를 지정해 주기 위함
/* function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
} */

function init(){
    // const randomNumber = genRandom();
    // paintImage(randomNumber);
    getImage();
}

init();