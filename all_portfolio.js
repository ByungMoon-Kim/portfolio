const inFo = document.querySelector('.introMySelf');

function inFoTextChange(){
    inFo.innerText="테스트";
}

inFo.addEventListener('click', inFoTextChange);