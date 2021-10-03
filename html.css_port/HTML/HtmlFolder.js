// input keyup 활성화 이벤트
const loginBtn = document.querySelector(".user-join")[1];
const input = document.querySelector("input")[1];
const loginId = document.querySelector("#user_id")[1];
const loginPw = document.querySelector("#user_password")[1];

function upColor() {
  if(loginId.value && loginPw.value){ // id와 pw의 지정된 값을 받고 &&: and
    loginBtn.removeAttribute('disabled'); // loginBtn를 disabled를 삭제한뒤
    loginBtn.style.backgroundColor="black"; // 조건이 모두 맞으면 loginBtn의 컬러를 변경
  }
}
input.addEventListener('keyup', upColor);


// const testBtn = document.querySelector('.id-input')

// function testB(){
//   alert('test');
// }

// testBtn.addEventListener('keyup', testB);